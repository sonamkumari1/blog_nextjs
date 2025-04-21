import { ConnectDB } from "@/lib/config/db";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import BlogModel from "@/lib/models/BlogModel";

await ConnectDB(); // Ensure DB connection

export async function GET() {
  return NextResponse.json({ message: "Hello from blog api" });
}

export async function POST(request) {
  try {
    const formData = await request.formData(); // This is expecting multipart/form-data
    const img = formData.get('img'); // Assuming 'img' is the name of the file input in your form
    if (!img) {
      return NextResponse.json({ success: false, message: "Image is required" }, { status: 400 });
    }
    const timestamp = Date.now();
    const fileName = `${timestamp}_${img.name}`;
    const path = `./public/${fileName}`;
    const imageUrl = `/${fileName}`;

    const buffer = Buffer.from(await img.arrayBuffer());
    await writeFile(path, buffer);

    const blogData = {
      title: formData.get('title'),
      desc: formData.get('desc'),
      category: formData.get('category'),
      author: formData.get('author'),
      img: imageUrl,
      author_img: formData.get('author_img'),
    };

    await BlogModel.create(blogData);

    return NextResponse.json({ success: true, message: "Blog created successfully" });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
