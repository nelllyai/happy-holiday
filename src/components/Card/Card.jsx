import Img from "./Img/Img";
import Felicitation from "./Felicitation/Felicitation";
import style from './Card.module.css';
import CardBG from '../../img/card-bg.jpg';

const Card = () => (
    <div className={style.card}>
        <div className={style.wrapper}>
            <div className={style.image}>
                <Img img={CardBG} />
                <Felicitation />
            </div>
        </div>
    </div>
);

export default Card;