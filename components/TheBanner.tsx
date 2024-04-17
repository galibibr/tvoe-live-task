"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/banner.scss";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import avatar from "@/public/avatar.jpg";
import avatar_title from "@/public/avatar-title.png";
import Image from "next/image";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";

const TheBanner = () => {
   const progressCircle: any = useRef(null);
   const progressContent: any = useRef(null);
   const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
   };

   return (
      <>
         <Swiper
            spaceBetween={0}
            centeredSlides={false}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: false,
            }}
            modules={[Autoplay]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper">
            <SwiperSlide>
               <Image src={avatar} alt="Avatar" />
               <div className="container">
                  <div className="box">
                     <Image
                        className="title_of_movie"
                        src={avatar_title}
                        alt="avatar title"
                     />
                     <ul>
                        <li>7.9</li>
                        <li>2024</li>
                        <li>1 сезон</li>
                        <li>Фантези</li>
                        <li>США</li>
                        <li>16+</li>
                     </ul>
                     <div className="end_btns">
                        <button className="btn_more">Подробнее</button>
                        <button className="other_btn">
                           <FaRegBookmark />
                        </button>
                        <button className="other_btn">
                           <FaRegHeart />
                        </button>
                        <button className="other_btn">
                           <PiShareFat />
                        </button>
                     </div>
                  </div>
               </div>
               <div id="bg-grad" />
            </SwiperSlide>
            <SwiperSlide>
               <Image src={avatar} alt="Avatar" />
               <div className="container">
                  <div className="box">
                     <Image
                        className="title_of_movie"
                        src={avatar_title}
                        alt="avatar title"
                     />
                     <ul>
                        <li>7.9</li>
                        <li>2024</li>
                        <li>1 сезон</li>
                        <li>Фантези</li>
                        <li>США</li>
                        <li>16+</li>
                     </ul>
                     <div className="end_btns">
                        <button className="btn_more">Подробнее</button>
                        <button className="other_btn">
                           <FaRegBookmark />
                        </button>
                        <button className="other_btn">
                           <FaRegHeart />
                        </button>
                        <button className="other_btn">
                           <PiShareFat />
                        </button>
                     </div>
                  </div>
               </div>
               <div id="bg-grad" />
            </SwiperSlide>
            <SwiperSlide>
               <Image src={avatar} alt="Avatar" />
               <div className="container">
                  <div className="box">
                     <Image
                        className="title_of_movie"
                        src={avatar_title}
                        alt="avatar title"
                     />
                     <ul>
                        <li>7.9</li>
                        <li>2024</li>
                        <li>1 сезон</li>
                        <li>Фантези</li>
                        <li>США</li>
                        <li>16+</li>
                     </ul>
                     <div className="end_btns">
                        <button className="btn_more">Подробнее</button>
                        <button className="other_btn">
                           <FaRegBookmark />
                        </button>
                        <button className="other_btn">
                           <FaRegHeart />
                        </button>
                        <button className="other_btn">
                           <PiShareFat />
                        </button>
                     </div>
                  </div>
               </div>
               <div id="bg-grad" />
            </SwiperSlide>
            {/* display none */}
            <div className="autoplay-progress" slot="container-end">
               <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
               </svg>
               <span ref={progressContent}></span>
            </div>
         </Swiper>
      </>
   );
};

export { TheBanner };
