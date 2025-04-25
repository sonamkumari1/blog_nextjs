import logo from "@/assets/logo.png";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

function Header() {
  const [email, setEmail]=useState("");

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("email",email);
    const response=await axios.post("/api/email",formData)
   if(response.data.success){
      alert("Email added successfully")
      setEmail("");
    }else{
      alert("Error adding email")
    }

  }
  return (
    <div className="py-5 px-5 md:px-12 lg:px-18">
      <div className="flex justify-between items-center">
        <Image
          src={logo}
          width={180}
          alt="GitBook Logo"
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black rounded-md">
          Get Started <BsArrowRight />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latests Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          unde doloribus assumenda repellendus consectetur omnis natus molestias
          eius commodi, nihil nostrum atque, consequuntur reprehenderit sequi
          alias odio maiores sunt. Esse.
        </p>
        <form onSubmit={onSubmitHandler} className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]">
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter you email" className="pl-4 outline-none" />
          <button type="submit" className=" border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white ">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
