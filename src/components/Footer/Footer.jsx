import Container from "../Container/Container";
import style from './Footer.module.css';
import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as TGIcon } from '../../img/tg.svg';
import { ReactComponent as PIcon } from '../../img/pinterest.svg';
import { ReactComponent as SUIcon } from '../../img/stumbleupon.svg';

const Footer = () => (
    <footer className={style.footer}>
        <Container>
            <div className={style.wrapper}>
                <div className={style.contacts}>
                    <p>Design: <a href="#">Anastasia Ilina</a></p>
                    <p>Сoder: <a href="#">Nelly Nikitina</a></p>
                    <p>© HBCard, 2022</p>
                </div>

                <ul className={style.social}>
                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <VKIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <TGIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <PIcon />
                        </a>
                    </li>
                    <li className={style.item}>
                        <a href="#" className={style.link}>
                            <SUIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
)

export default Footer;