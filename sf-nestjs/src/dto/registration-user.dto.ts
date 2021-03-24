import { IsEmail, Length} from 'class-validator'
export class RegistrUserDto {  
    readonly fio:string

    @IsEmail()
     readonly email:string

    @Length(6)
     readonly password:string

    readonly phone:string
    readonly date:string
    readonly number:string
    readonly passDate:string
    readonly about:string
    readonly cod:string
    readonly numberLicense:string
    readonly dateLicense:string 
}

