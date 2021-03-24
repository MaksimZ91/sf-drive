import { IsEmail, Length} from 'class-validator'
export class AuthorizationUserDto {  
  
    @IsEmail()
     readonly email:string

    @Length(1)
     readonly password:string

    }

    

