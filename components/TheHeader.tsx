import Link from "next/link";

const TheHeader = () => {
   return (
      <header>
         <Link href={"/"}>Главная</Link>
         <Link href={"/"}>Фильмы</Link>
         <Link href={"/"}>Сериалы</Link>
         <Link href={"/"}>ТВ каналы</Link>
         <Link href={"/"}>Моё</Link>
      </header>
   );
};
export { TheHeader };
