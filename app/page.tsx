import { TheBanner } from "@/components/TheBanner";
import { NewMovies } from "@/components/NewMovies";
import { Advertisement } from "@/components/Advertisement";
import { TopMovies } from "@/components/TopMovies";

export default function Home() {
   return (
      <div className="layout_page">
         <TheBanner />
         <NewMovies />
         <Advertisement />
         <TopMovies />
      </div>
   );
}
