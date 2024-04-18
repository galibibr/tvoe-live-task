"use client";

import "@/styles/top_movies.scss";
import movies from "@/scripts/movies-list";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/new_movies.scss";
import { FreeMode } from "swiper/modules";
import { Movie_T } from "@/types/types";

const TopMovies = () => {
   return (
      <div>
         <p className="topM_title container">Топ недели</p>

         <Swiper
            slidesPerView={1.5}
            spaceBetween={0}
            // pagination={{
            //    clickable: false,
            // }}
            freeMode={true}
            breakpoints={{
               540: {
                  slidesPerView: 1.5,
                  spaceBetween: 0,
               },
               768: {
                  slidesPerView: 2.2,
                  spaceBetween: 0,
               },
               1024: {
                  slidesPerView: 3.2,
                  spaceBetween: 0,
               },
               1200: {
                  slidesPerView: 4.2,
                  spaceBetween: 0,
               },
            }}
            modules={[FreeMode]}
            className="mySwiper"
            id="topMovies-swiper">
            {movies
               .sort((a, b) => (a.rating < b.rating ? 1 : -1))
               .map((movie: Movie_T, id: number) => {
                  return (
                     <SwiperSlide key={movie.id}>
                        <Link href={`/movies/${movie.id}`}>
                           <div className="img-div">
                              <img
                                 className="image_topM"
                                 src={movie.img}
                                 alt={movie.name}
                              />
                           </div>
                           <div className="num">
                              <p>{id + 1}</p>
                           </div>
                        </Link>
                     </SwiperSlide>
                  );
               })}
         </Swiper>
      </div>
   );
};

export { TopMovies };
