"use client";

import "@/styles/movie_banner.scss";
import avatar from "@/public/avatar.jpg";
import avatar_title from "@/public/avatar-title.png";
import Image from "next/image";
import { FaRegBookmark, FaRegHeart } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { Movie_T } from "@/types/types";

const TheMovieBanner = ({ movie }: { movie: Movie_T | undefined }) => {
   return (
      <>
         <div className="box_mb">
            <div className="movie_banner">
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
                     <p className="p">
                        Чтобы спасти мир от разрушительной войны, мальчик
                        по имени Аанг должен справиться с четырьмя стихиями
                        и вступить в схватку с безжалостным противником, который
                        пытается его остановить.
                     </p>
                     <div className="end_btns">
                        <button className="btn_watch">Смотреть</button>
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
            </div>
         </div>
      </>
   );
};

export { TheMovieBanner };
