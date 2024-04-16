import movies from "@/scripts/movies-list"
import { Movie_T, Props_T } from "@/types/types"

export default function TheMovie({ params: { id } }: Props_T) {
   const movie: Movie_T | undefined = movies.find((e) => e.id == id)
   return (
      <>id: {movie?.name}</>
   )
}
