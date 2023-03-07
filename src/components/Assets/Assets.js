import rita from "./rita.png";
import icon from "./icon.png";

const images= [rita,icon]

function Assets() {
    <div>
        <img src={"./rita.png"} alt="headshot"/>
        {images[0]}
    </div>
}

export default Assets;