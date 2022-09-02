import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";

const Img = () => {
    const url = useContext(imgContext);
    
    return (
        <img src={Object.keys(url.img).length ? url.img : 'https://vanilla-legend-factory.glitch.me/img/4c709ab8.jpg'} alt="Фон открытки" width={840} height={520} />
    );
};

export default Img;