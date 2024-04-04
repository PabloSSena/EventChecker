import mongoose from "mongoose"

export class Person {
    name:string
    companyName:string
    title: string | null
    communitie_id : mongoose.Schema.Types.ObjectId
}
