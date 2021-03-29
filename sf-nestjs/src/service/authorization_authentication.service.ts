import {  HttpException, HttpStatus, Injectable, } from "@nestjs/common";
import { AuthorizationUserDto }from '../dto/authorization-user.dto'
import { RecoveryPasswordDto } from '../dto/recoveryPassword.dto'
import { RefreshTokenUserDto  } from '../dto/refreshTokenUser.dto'
import { ConfigService } from "@nestjs/config";
import { getMongoManager } from "typeorm";
import { Users } from '../entites/user.entity'
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

@Injectable()
export class AuthorizationAuthenService {
    constructor(private configService:ConfigService) {}

    async Authorization(authorizationUser:AuthorizationUserDto){
        const manager= getMongoManager()        
        const {email, password} = authorizationUser
        const person = await manager.findOne(Users, {email:email})

         if (!person){
          throw new HttpException('Пользователь c таким email не найден!', HttpStatus.NOT_FOUND)
        }       
        
        const isMatch = await bcrypt.compare(password, person.password)

        if (!isMatch) {
            throw new HttpException('Не верная почта или пароль!', HttpStatus.FORBIDDEN)
        }        

          const accessToken =jwt.sign(
              {name: person.fio, userId:person.id},
              this.configService.get("JWT_ACCESS_SECRET"),
              { expiresIn: this.configService.get("ACCESS_TOKEN_LIFE")})
          
          const refreshToken =jwt.sign(
              {},
              this.configService.get("JWT_REFRESH_SECRET"),
              { expiresIn: this.configService.get("REFRESH_TOKEN_LIFE") })
              
              person.refToken=refreshToken
              manager.save(person)

              return{ accessToken,refreshToken, userId:person.id, message:"Ok" }
            }



    async Recovery(recoveryPasswordUser:RecoveryPasswordDto ){
        const {email, password, newPassword}=recoveryPasswordUser
        const manager= getMongoManager()  
        const person = await manager.findOne(Users, {email})

        if (!person){
            throw new HttpException('Пользователь c таким email не найден!', HttpStatus.NOT_FOUND)
        }
            
            if(password==newPassword){
                person.password =  await bcrypt.hash(password, 10)    
                manager.save(person) 
                return({  message:"Ok"})
            }else{
                throw new HttpException('Введенные пароли не совпадают!', HttpStatus.BAD_REQUEST)
            }
        }
        
        async Refresh(refreshTokenUser:RefreshTokenUserDto){
            const {refToken}=refreshTokenUser
            const manager = getMongoManager()  
            const data = jwt.verify(refToken, "RefreshSecret")
            
            if(!data){
                throw new HttpException("Токин не валиден!", HttpStatus.BAD_REQUEST)
            }
            
            const person= await manager.findOne(Users, {refToken})

            const accessToken =jwt.sign(
            {name: person.fio, userId:person.id},
            "AccessSecret",
            { expiresIn: 1200 })
  
            const refreshToken =jwt.sign(
            {},
            "RefreshSecret",
            { expiresIn: 86400})
            
            person.refToken=refreshToken
            manager.save(person)
            
            return {accessToken, refreshToken, userId:person.id }
        }

        
    }