import { TheBanner } from "@/components/TheBanner";
import { NewMovies } from "@/components/NewMovies";

export default function Home() {
   return (
      <div>
         {/* The Banner */}
         <TheBanner />
         <NewMovies />
      </div>
   );
}
