"use client";

import Link from "next/link";
import "@/styles/header.scss";
import Image from "next/image";
import logo from "@/public/Logo.png";
import { RiSearchLine } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { PiHouseLine } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { TbMovie } from "react-icons/tb";
import { PiTelevision } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink_T } from "@/types/types";
import { usePathname } from "next/navigation";

const navLinks: NavLink_T[] = [
   {
      label: "Главная",
      href: "/",
      icon: <PiHouseLine className="navigation-icons" />,
   },
   {
      label: "Фильмы",
      href: "/movies",
      icon: <BiMoviePlay className="navigation-icons" />,
   },
   {
      label: "Сериалы",
      href: "/serials",
      icon: <TbMovie className="navigation-icons" />,
   },
   {
      label: "ТВ каналы",
      href: "/tv-cannels",
      icon: <PiTelevision className="navigation-icons" />,
   },
   {
      label: "Моё",
      href: "/my",
      icon: <FaRegHeart className="navigation-icons" />,
   },
];

const TheHeader = () => {
   const handleFocus = () => {
      const search: HTMLElement | null = document.getElementById("search");
      search?.focus();
   };
   const pathname = usePathname();
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
                     -*
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
         <div className="nav-container">
            <div className="navigation">
               {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                     <Link key={link.label} href={link.href}>
                        {link.icon}
                        <p>{link.label}</p>
                        <div className={`${isActive && "active"}`} />
                     </Link>
                  );
               })}
            </div>
         </div>
      </header>
   );
};
export { TheHeader };
