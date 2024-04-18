"use client";

import { TheMovieBanner } from "@/components/TheMovieBanner";
import movies from "@/scripts/movies-list";
import { Movie_T } from "@/types/types";
import "@/styles/movie_id.scss";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/new_movies.scss";
import { FreeMode } from "swiper/modules";
import a1 from "@/public/a1.png";
import a2 from "@/public/a2.png";
import Image from "next/image";
import { AiOutlineExclamationCircle } from "react-icons/ai";

type Props = {
   params: {
      id: number;
   };
};

export default function TheMovie({ params: { id } }: Props) {
   const movie: Movie_T | undefined = movies.find((e) => e.id == id);
   return (
      <div>
         <TheMovieBanner movie={movie} />
         {/* the trailer */}
         <ul className="trailer">
            <li>Трейлер</li>
            <li className="tr_active">1 сезон</li>
            <li className="">2 сезон</li>
            <li className="">3 сезон</li>
            <li className="">4 сезон</li>
         </ul>
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
            id="tr-swiper">
            <SwiperSlide>
               <div className="img_tr">
                  <Image src={a1} alt="trailer" />
               </div>
               <div className="inf_tr">
                  <p>1 серия</p>
                  <p>Просмотрено</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="img_tr">
                  <Image src={a2} alt="trailer" />
               </div>
               <div className="inf_tr">
                  <p>2 серия</p>
                  <p>Просмотрено</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="img_tr">
                  <Image src={a1} alt="trailer" />
               </div>
               <div className="inf_tr">
                  <p>3 серия</p>
                  <p>Просмотрено</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="img_tr">
                  <Image src={a2} alt="trailer" />
               </div>
               <div className="inf_tr">
                  <p>4 серия</p>
                  <p>Просмотрено</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="img_tr">
                  <Image src={a1} alt="trailer" />
               </div>
               <div className="inf_tr">
                  <p>5 серия</p>
                  <p>Просмотрено</p>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="img_tr">
                  <Image src={a2} alt="trailer" />
               </div>
               <div className="inf_tr">
                  <p>6 серия</p>
                  <p>Просмотрено</p>
               </div>
            </SwiperSlide>
         </Swiper>
         {/* description */}
         <ul className="description">
            <li className="tr_active">Описание</li>
            <li className="">Съемочная группа</li>
            <li className="">Информация</li>
         </ul>
         <p className="descipption_p container">
            Прекрасная планета Пандорра по-прежнему похожа на рай, где нашел
            себе приют бывший солдат Салли. Подрастают дети его нового народа,
            они играют на морских рифах и в подводном царстве. Кроме подростков
            на’ви на Пандорре растет и земной ребенок Джек Чемпион. Воскресают
            те, кто умер в былых сражениях: героиня Сигурни Уивер и зловещий
            полковник. Наконец, и земные корпорации снова предъявляют свои права
            на богатства Пандорры. Независимость фантастического первобытного
            рая придется отстаивать всем, кто его населяет.
         </p>
         <div className="important">
            <div className="icon_im">
               <AiOutlineExclamationCircle />
            </div>
            <p>
               Контент может содержать сцены курения и употребления спиртных
               напитков. Курение и чрезмерное употребление алкоголя вредит
               вашему здоровью.
            </p>
         </div>
      </div>
   );
}
