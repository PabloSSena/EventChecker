import mongoose from "mongoose"

export class CreatePersonDto {
    name:string
    companyName:string
    title: string | null
    CommunityId : mongoose.Schema.Types.ObjectId
}
