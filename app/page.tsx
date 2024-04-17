import { TheBanner } from "@/components/TheBanner";
import { NewMovies } from "@/components/NewMovies";
import { Advertisement } from "@/components/Advertisement";

export default function Home() {
   return (
      <div className="layout_page">
         {/* The Banner */}
         <TheBanner />
         <NewMovies />
         <Advertisement />
      </div>
   );
}
