import movies from "@/scripts/movies-list"
import { Movie_T } from "@/types/types"

type Props = {
   params: {
      id: number;
   }
}

export default function TheMovie({ params: { id } }: Props) {
   const movie: Movie_T | undefined = movies.find((e) => e.id == id)
   return (
      <>id: {movie?.name}</>
   )
}
