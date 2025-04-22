"use client";

import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

function Page() {
  const [imgFile, setImgFile] = useState(false);
  const [data, setData] = useState({
    title: "",
    desc: "",
    category: "Startup",
    author: "Admin",
    author_img: "/images/author.jpg",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imgFile) return alert("Please upload an image");

    const formData = new FormData();
    formData.append("img", imgFile);
    formData.append("title", data.title);
    formData.append("desc", data.desc);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("author_img", data.author_img);

    const res = await fetch("/api/blog", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    if (result.success) {
      alert("Blog created successfully!");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl mb-2">Upload Thumbnail</p>
      <label htmlFor="img" className="cursor-pointer inline-block">
        <FaCloudUploadAlt className="w-[50px] h-[50px] mt-4" />
        <input
          type="file"
          id="img"
          name="img"
          hidden
          required
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setImgFile(file);
          }}
        />
      </label>

      <p className="text-xl mt-4">Blog Title</p>
      <input
        name="title"
        value={data.title}
        onChange={onChangeHandler}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        type="text"
        placeholder="Type here"
        required
      />

      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        name="desc"
        value={data.desc}
        onChange={onChangeHandler}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        placeholder="Write content here"
        required
      />

      <p className="text-xl mt-4">Blog Category</p>
      <select
        name="category"
        value={data.category}
        onChange={onChangeHandler}
        className="w-40 mt-4 px-4 py-3 border text-gray-500"
        required
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">LifeStyle</option>
      </select>

      <p className="text-xl mt-4">Author</p>
      <input
        name="author"
        value={data.author}
        onChange={onChangeHandler}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        type="text"
        placeholder="Author name"
      />

      <p className="text-xl mt-4">Author Image URL</p>
      <input
        name="author_img"
        value={data.author_img}
        onChange={onChangeHandler}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        type="text"
        placeholder="Author image link"
      />
<br />
      <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
        Submit
      </button>
    </form>
  );
}

export default Page;
