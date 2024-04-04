import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Communitie } from "./communitie.schema";


export type PeopleDocument = HydratedDocument<People>

@Schema()
export class People{
    @Prop({required:true})
    name:string

    @Prop({required:true})
    companyName:string

    @Prop({required:false})
    title: string | null

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Communities' })
    communitie_id : mongoose.Schema.Types.ObjectId;

}

export const PeopleSchema = SchemaFactory.createForClass(People);