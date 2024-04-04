/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type CommunitieDocument = HydratedDocument<Communitie>

@Schema()
export class Communitie{
    @Prop({required:true})
    name:string
}

export const CommunitieSchema = SchemaFactory.createForClass(Communitie);