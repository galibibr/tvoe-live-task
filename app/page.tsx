import styles from "@/styles/page.module.scss";
import Link from "next/link";
import movies from "@/scripts/movies-list";
import { Movie_T } from "@/types/types";

export default function Home() {
   return (
      <main className={styles.main}>
         page
         <ul>
            {movies.map((movie: Movie_T) => {
               return (
                  <li key={movie.id}>
                     <Link href={`/${movie.id}`}>{movie.name}</Link>
                  </li>
               );
            })}
         </ul>
      </main>
   );
}
