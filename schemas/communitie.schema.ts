/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type CommunitieDocument = HydratedDocument<Communitie>

@Schema()
export class Communitie{
    @Prop({required:true})
    name:string

    @Prop({ default: 0 })
    checkIn:Number

    @Prop({ default: 0 })
    checkOut:Number
}

export const CommunitieSchema = SchemaFactory.createForClass(Communitie);