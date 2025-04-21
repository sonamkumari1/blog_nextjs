"use client";
import React, { useEffect, useState } from "react";
import { blog_data } from "@/assets/assets";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Footer from "@/components/Footer";
import Link from 'next/link';

function page({ params }) {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <>
      <div className="bg-white px-5 py-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
          <Image
            src={logo}
            width={180}
            alt="GitBook Logo"
            className="w-[130px] sm:w-auto"
          />
          </Link>
        
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black rounded-md">
            Get Started <BsArrowRight />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>

          {data.img && (
            <Image
              src={data.img}
              width={60}
              height={60}
              alt=""
              className="mx-auto mt-6 border border-white rounded-full "
            />
          )}
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        {data.img && (
          <Image
            src={data.img}
            width={1280}
            height={720}
            alt=""
            className="border-4 border-white "
          />
        )}
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.desc}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step:1 Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long-term goals.
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long-term goals.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step:2 Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long-term goals.
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long-term goals.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step:3 Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long-term goals.
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long-term goals.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Step:4 Conclusion</h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have clear
          understanding of what you want to achieve. Start by reflecting on your
          values, aspirations, and long-term goals.
        </p>

        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share the article on social media
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-black" size={20} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="text-black" size={20} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-black" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-black" size={20} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
}

export default page;

//sQdlsN2oHZQnWHxv