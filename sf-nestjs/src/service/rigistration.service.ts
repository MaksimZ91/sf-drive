import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { RegistrUserDto } from "src/dto/registration-user.dto";
import { ConfigService } from "@nestjs/config";
import { Users } from '../entites/user.entity'
import { UserRepository } from "../repo/user.repository";
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

@Injectable()
export class RegistrationService {  
    constructor(private configService:ConfigService,
                private userRepository:UserRepository) {}
    
       async Registration(registrationDTO:RegistrUserDto){
           const {email, password}=registrationDTO
           const newUser = new Users()
           newUser.email=email
           newUser.fio=registrationDTO.fio
           newUser.phone=registrationDTO.phone
           newUser.date=registrationDTO.date
           newUser.number=registrationDTO.number
           newUser.passDate=registrationDTO.passDate
           newUser.about=registrationDTO.about
           newUser.cod=registrationDTO.cod
           newUser.numberLicense=registrationDTO.numberLicense
           newUser.dateLicense=registrationDTO.dateLicense
                         
            const person = await this.userRepository.FindOneByEmail(email);
            if(person){
                throw new HttpException('Такой пользователь уже сушествует', HttpStatus.BAD_REQUEST)}

            const hashPassword = await bcrypt.hash(password, 10)
            newUser.password=hashPassword
                    
                        
            const accessToken =  jwt.sign(
                 {name: newUser.fio, userId:newUser._id},
                 this.configService.get("JWT_ACCESS_SECRET"),
                 { expiresIn: this.configService.get("ACCESS_TOKEN_LIFE")})

            const refreshToken =  jwt.sign(
                {},
                this.configService.get("JWT_REFRESH_SECRET"),
                { expiresIn: this.configService.get("REFRESH_TOKEN_LIFE") })                        
                newUser.refToken=refreshToken
                
                await this.userRepository.SaveUser(newUser)      
         
           
           return {accessToken, refreshToken, userId:newUser._id, message:"Ok"}      
        }
}