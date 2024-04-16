"use client";

import Link from "next/link";
import "@/styles/header.scss";
import Image from "next/image";
import logo from "@/public/Logo.png";
import { RiSearchLine } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";

const TheHeader = () => {
   const handleFocus = () => {
      const search: HTMLElement | null = document.getElementById("search");
      search?.focus();
   };

   return (
      <header>
         <nav>
            <div className="container">
               <div className="logo">
                  <Image className="logo-img" src={logo} alt="logo Tvoe Live" />
               </div>
               <div className="right-btns">
                  <div className="search">
                     <input type="search" id="search" />
                     <div>
                        <RiSearchLine
                           onClick={handleFocus}
                           className="search-icon"
                        />
                     </div>
                  </div>
                  <div className="mobile-right-btns">
                     <div>
                        <GoBell />
                     </div>
                     <div>
                        <AiOutlineUser />
                     </div>
                  </div>
                  <div className="subscription">7 дней за 0 ₽</div>
                  <div className="promo-code">Промокод</div>
                  <div className="login">Войти</div>
               </div>
            </div>
         </nav>
         <div className="navigation">
            <Link href={"/"}>Главная</Link>
            <Link href={"/"}>Фильмы</Link>
            <Link href={"/"}>Сериалы</Link>
            <Link href={"/"}>ТВ каналы</Link>
            <Link href={"/"}>Моё</Link>
         </div>
      </header>
   );
};
export { TheHeader };
