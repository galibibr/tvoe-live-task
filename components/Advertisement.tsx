import "@/styles/advertisement.scss";
import { AiOutlineLike } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";

const Advertisement = () => {
   return (
      <div className="advertisement">
         <div className="left_container">
            <p className="title_lc">Смотри зарубежное кино</p>
            <div className="main_info_lc">
               <div className="a">
                  <div>
                     <AiOutlineLike className="icon_pc" />
                     <p>От 149 ₽ в месяц</p>
                  </div>
                  <div>
                     <TbMovie className="icon_pc" />
                     <p>Никакой рекламы</p>
                  </div>
               </div>
               <div className="a">
                  <div>
                     <MdOutlinePhoneIphone className="icon_pc" />
                     <p>Доступно на любом устройстве</p>
                  </div>
                  <div>
                     <MdStarOutline className="icon_pc" />
                     <p>Единая подписка без доплат</p>
                  </div>
               </div>
            </div>
            <div className="btn_div">
               <button className="btn_lc">Смотреть 7 дней за 0₽</button>
            </div>
         </div>
         <div className="right_container">
            <div className="gr_img" />
            <div className="pop_img" />
            <div className="some_words">Субтитры</div>
            <div className="some_words">Дубляж</div>
            <div className="some_words">FULL HD</div>
         </div>
      </div>
   );
};

export { Advertisement };
