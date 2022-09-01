import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";

const Img = (props) => {
    const img = useContext(imgContext);
    
    return (
        <img src={props.img} alt="Фон открытки" width={840} height={520} />
    );
};

export default Img;