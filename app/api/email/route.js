
import { ConnectDB } from "@/lib/config/db";
import EmailModel from "../../../lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB=async()=>{
   await ConnectDB();
}

LoadDB(); // Ensure DB connection
export async function POST(request) {
    const formData = await request.formData();
    const emailData={
        email:`${formData.get("email")}`,
    }
await EmailModel.create(emailData);
return NextResponse.json({success:true,message:"Email added successfully"});
}

export async function GET(request) {
    const emails=await EmailModel.find({});
    return NextResponse.json({success:true,emails});
}
export async function DELETE(request) {
    const { id } = await request.json();
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({success:true,message:"Email deleted successfully"});
}