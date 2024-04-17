import { ReactElement } from "react";

export type Movie_T = {
   id: number;
   name: string;
   rating: number;
   img: string;
   year: number;
   time: string;
   category: string;
   additionally?: string;
}

export type NavLink_T = {
   label: string;
   href: string;
   icon: ReactElement<any>;
};
