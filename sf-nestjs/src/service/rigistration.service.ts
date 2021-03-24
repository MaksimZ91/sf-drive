import {  HttpException, HttpStatus, Injectable, Post } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from '../../Shemas/UserShema';
import { Model } from 'mongoose';
import { RegistrUserDto } from "src/dto/registration-user.dto";
import { ConfigService } from "@nestjs/config";
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

@Injectable()
export class RegistrationService {  
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
                                        private configService:ConfigService) {}

    
       async Registration(registrationDTO:RegistrUserDto){
       
            const {email, password}=registrationDTO
            const person = await this.userModel.findOne({email})
            if(person){
                throw new HttpException('Такой пользователь уже сушествует', HttpStatus.BAD_REQUEST)}

            const hashPassword = await bcrypt.hash(password, 10)      
            const user = new this.userModel({...registrationDTO, password:hashPassword})
                        
            const accessToken =  jwt.sign(
                 {name: user.fio, userId:user.id},
                 this.configService.get("JWT_ACCESS_SECRET"),
                 { expiresIn: this.configService.get("ACCESS_TOKEN_LIFE")})

            const refreshToken =  jwt.sign(
                {},
                this.configService.get("JWT_REFRESH_SECRET"),
                { expiresIn: this.configService.get("REFRESH_TOKEN_LIFE") })                        
                user.refToken=refreshToken
                
                user.save()         
         
           
           return {accessToken, refreshToken, userId:user.id, message:"Ok"}      
        }
}