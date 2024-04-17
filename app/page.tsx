// 'use client';
import Link from "next/link";
import movies from "@/scripts/movies-list";
import { Movie_T } from "@/types/types";
import { TheBanner } from "@/components/TheBanner";

export default function Home() {
   return (
      <div>
         {/* The Banner */}
         <TheBanner />
         <ul>
            {movies.map((movie: Movie_T) => {
               return (
                  <li key={movie.id}>
                     <Link href={`/movies/${movie.id}`}>{movie.name}</Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
