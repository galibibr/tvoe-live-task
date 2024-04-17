"use client";

import movies from "@/scripts/movies-list";
import "@/styles/new_movies.scss";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/new_movies.scss";
import { FreeMode } from "swiper/modules";
import { Movie_T } from "@/types/types";

const NewMovies = () => {
   return (
      <>
         <div className="title container">Новинки</div>

         <Swiper
            slidesPerView={1}
            spaceBetween={0}
            // pagination={{
            //    clickable: false,
            // }}
            freeMode={true}
            breakpoints={{
               540: {
                  slidesPerView: 2,
                  spaceBetween: 0,
               },
               768: {
                  slidesPerView: 3,
                  spaceBetween: 0,
               },
               1024: {
                  slidesPerView: 4,
                  spaceBetween: 0,
               },
               1200: {
                  slidesPerView: 5,
                  spaceBetween: 0,
               },
            }}
            modules={[FreeMode]}
            className="mySwiper"
            id="newMovies-swiper">
            {movies.map((movie: Movie_T) => {
               return (
                  <SwiperSlide key={movie.id}>
                     <Link href={`/movies/${movie.id}`}>
                        <img
                           className="image"
                           src={movie.img}
                           alt={movie.name}
                        />
                     </Link>
                     <div className="pos_absolute">
                        <div className="rating">{movie.rating}</div>
                        {movie?.additionally && (
                           <div className="additionally">
                              {movie?.additionally}
                           </div>
                        )}
                     </div>
                     <div className="info_bottom">
                        <p>{movie.name}</p>
                        <p>{`${movie.year}, ${movie.time}`}</p>
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </>
   );
};

export { NewMovies };
