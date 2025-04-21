import React, { useState } from "react";
import BlogItem from "./BlogItem";
import { blog_data } from "../assets/assets";

function BlogList() {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={`${
            menu === "All" ? "bg-black text-white" : ""
          } py-1 px-4 rounded-sm cursor-pointer`}
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={`${
            menu === "Technology" ? "bg-black text-white" : ""
          } py-1 px-4 rounded-sm cursor-pointer`}
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={`${
            menu === "Startup" ? "bg-black text-white" : ""
          } py-1 px-4 rounded-sm cursor-pointer`}
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("LifeStyle")}
          className={`${
            menu === "LifeStyle" ? "bg-black text-white" : ""
          } py-1 px-4 rounded-sm cursor-pointer`}
        >
          LifeStyle
        </button>
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => (
            <BlogItem
              key={index}
              id={item.id}
              title={item.title}
              desc={item.desc}
              img={item.img}
              date={item.date}
              category={item.category}
              author={item.author}
              author_img={item.author_img}
            />
          ))}
      </div>
    </div>
  );
}

export default BlogList;
