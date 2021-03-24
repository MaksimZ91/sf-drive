import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type UserDocument = User & Document

@Schema()
export class User {

    @Prop()
    fio:string;

    @Prop({required: true, unique: true})      
    email:string;

    @Prop({required: true})    
    password:string;

    @Prop()
    phone:string;

    @Prop()
    date:string;

    @Prop({required: true})
    number:string;

    @Prop()
    passDate:string;

    @Prop()
    about:string;

    @Prop()
    cod:string;

    @Prop({required: true})
    numberLicense:string;

    @Prop()
    dateLicense:string;

    @Prop()
    refToken:string;
}

export const UserSchema = SchemaFactory.createForClass(User);