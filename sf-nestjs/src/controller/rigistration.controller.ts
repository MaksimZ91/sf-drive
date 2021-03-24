import { Controller, Post, Body, HttpCode } from "@nestjs/common";
import { RegistrUserDto } from "src/dto/registration-user.dto";
import { RegistrationService } from "src/service/rigistration.service";

@Controller('registr')
export class RegistrController {
    constructor (private registrationService:RegistrationService){}

    @HttpCode(201)    
    @Post()
        Registration(@Body() registrationUser:RegistrUserDto) {            
        return this.registrationService.Registration(registrationUser)
     }
    }