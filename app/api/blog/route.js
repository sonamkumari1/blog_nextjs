import { ConnectDB } from "@/lib/config/db";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import BlogModel from "@/lib/models/BlogModel";
import fs from "fs";

await ConnectDB(); // Ensure DB connection

export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json({ blog });
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData(); // This is expecting multipart/form-data
    const img = formData.get("img"); // Assuming 'img' is the name of the file input in your form
    if (!img) {
      return NextResponse.json(
        { success: false, message: "Image is required" },
        { status: 400 }
      );
    }
    const timestamp = Date.now();
    const fileName = `${timestamp}_${img.name}`;
    const path = `./public/${fileName}`;
    const imageUrl = `/${fileName}`;

    const buffer = Buffer.from(await img.arrayBuffer());
    await writeFile(path, buffer);

    const blogData = {
      title: formData.get("title"),
      desc: formData.get("desc"),
      category: formData.get("category"),
      author: formData.get("author"),
      img: imageUrl,
      author_img: formData.get("author_img"),
    };

    await BlogModel.create(blogData);

    return NextResponse.json({
      success: true,
      message: "Blog created successfully",
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing blog ID" },
        { status: 400 }
      );
    }

    const blog = await BlogModel.findByIdAndDelete(id);

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    if (blog.img) {
      const filePath = `./public${blog.img}`;
      fs.unlink(filePath, (err) => {
        if (err) console.error("Failed to delete image:", err);
      });
    }

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}


