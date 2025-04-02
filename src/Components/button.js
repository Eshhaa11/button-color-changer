import { useState } from "react";
import './Button.css';

function Button() {
    const [pastel, setPastel] = useState("white");

    return (
        <div className="container" style={{ backgroundColor: pastel }}>
            <h1>Choose a color you prefer</h1>
            
            <div className="button-wrapper">
                <button className="color-button" onClick={() => setPastel("#FFD1DC")}>Pink</button>
                <button className="color-button" onClick={() => setPastel("#B4E7CE")}>Green</button>
                <button className="color-button" onClick={() => setPastel("#AEC6CF")}>Blue</button>
                <button className="color-button" onClick={() => setPastel("#FDFD96")}>Yellow</button>
                <button className="color-button" onClick={() => setPastel("#77DD77")}>Purple</button>
                <button className="color-button" onClick={() => setPastel("#FFDAB9")}>Peach</button>
                <button className="color-button" onClick={() => setPastel("#E6E6FA")}>Lavender</button>
                <button className="color-button" onClick={() => setPastel("#98FF98")}>Mint</button>
                <button className="color-button" onClick={() => setPastel("#FB3AB")}>Coral</button>
                <button className="color-button" onClick={() => setPastel("#A7C7E7")}>Aqua</button>
                <button className="color-button" onClick={() => setPastel("#A0D6B4")}>Turquoise</button>
                <button className="color-button" onClick={() => setPastel("#F1E8B8")}>Lemon</button>
                <button className="color-button" onClick={() => setPastel("#BFBFBF")}>Grey</button>
                <button className="color-button" onClick={() => setPastel("#FFCCCB")}>Rose</button>
                <button className="color-button" onClick={() => setPastel("#CCCCFF")}>Periwinkle</button>
                <button className="color-button" onClick={() => setPastel("#B9AEDC")}>Lilac</button>
                <button className="color-button" onClick={() => setPastel("#A8E6CF")}>Mint Green</button>
                <button className="color-button" onClick={() => setPastel("#F9E79F")}>Butter</button>
                <button className="color-button" onClick={() => setPastel("#9C9E7B")}>Sage</button>
                <button className="color-button" onClick={() => setPastel("#FF9999")}>Salmon</button>
                <button className="color-button" onClick={() => setPastel("#80C6E0")}>Skyblue</button>
                <button className="color-button" onClick={() => setPastel("#F79C42")}>Grapefruit</button>
                <button className="color-button" onClick={() => setPastel("#D9B88C")}>Sand</button>
                <button className="color-button" onClick={() => setPastel("#D1A1D1")}>Plum</button>
                <button className="color-button" onClick={() => setPastel("#B4E7CE")}>Cotton Candy</button>
                <button className="color-button" onClick={() => setPastel("#A1D6D1")}>Teal</button>
                <button className="color-button" onClick={() => setPastel("#F2C1D1")}>Cherry Blossom</button>
                <button className="color-button" onClick={() => setPastel("#F7B89C")}>Tangerine</button>
                <button className="color-button" onClick={() => setPastel("#DAA6D4")}>Orchid</button>
                <button className="color-button" onClick={() => setPastel("#F9A7B0")}>Watermelon</button>
            </div>
        </div>
    );
}

export default Button;
