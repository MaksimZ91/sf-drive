import { IsEmail, Length } from 'class-validator';
export class UpdateArendaDto {
 readonly arendaID:string
 readonly status: string
 readonly user: string
 readonly toUser: string
}
