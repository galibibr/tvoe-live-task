import "@/styles/footer.scss";
import { IoGiftOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import logo_footer from "@/public/logo_footer.png";
import Image from "next/image";

const TheFooter = () => {
   return (
      <footer className="container">
         <div className="grid_container">
            {/* desktop hidden */}
            <button className="btn_promocode">
               <IoGiftOutline />
               <p>Ввести промокод</p>
            </button>
            <div className="networks">
               <a href="#" className="youtube">
                  <FaYoutube />
                  <p>YouTube</p>
               </a>
               <a href="#" className="vk">
                  <SlSocialVkontakte />
                  <p>ВКонтакте</p>
               </a>
               <a href="#" className="telegram">
                  <FaTelegramPlane />
                  <p>Telegram</p>
               </a>
            </div>
            <ul className="other">
               <li>
                  <a href="#">Контакты</a>
               </li>
               <li>
                  <a href="#">Реферальная программа</a>
               </li>
               <li>
                  <a href="#">Скачать приложение</a>
               </li>
               <li>
                  <a href="#">Вопросы и ответы</a>
               </li>
               <li>
                  <a href="#">Условия использования</a>
               </li>
            </ul>
            <div className="support_container">
               <button className="btn_support">Написать в поддержку</button>
            </div>
         </div>
         <div className="end">
            <p className="inn">
               2023, ООО «ТВОЁ ЛАЙВ» 18+ <br /> ИНН 7720904034{" "}
            </p>
            <Image src={logo_footer} alt="Tvoe Live" className="logo_footer" />
         </div>
      </footer>
   );
};
export { TheFooter };
