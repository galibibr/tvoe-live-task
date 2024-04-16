import { ReactElement } from "react";

export type Movie_T = {
   id: number;
   name: string;
}

export type NavLink_T = {
   label: string;
   href: string;
   icon: ReactElement<any>;
};