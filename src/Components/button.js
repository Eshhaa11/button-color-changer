import { useState } from "react";
import './Button.css';

function Button () {
    const [pastel, setPastel] = useState("white");
    
    const color = [
        {name: "pink" , color: "#FFD1DC"},
        {name: "green", color: "#B4E7CE"},
        {name: "blue", color:  "#AEC6CF"},
        {name: "yellow", color: "#FDFD96"},
        {name: "purple", color: "#77DD77"},
        {name: "peach", color: "#FFDAB9"},
        {name: "lavender", color: "#E6E6FA"},
        {name: "mint", color: "#98FF98"},
        {name: "coral", color: "#FB3AB"},
        {name: "aqua", color: "#A7C7E7"},
        {name: "turquoise", color: "#A0D6B4"},
        {name: "lemon", color: "#F1E8B8"},
        {name: "grey", color: "#BFBFBF"},
        {name: "rose", color: "#FFCCCB"},
        {name: "periwinkle", color: "CCCCFF"},
        {name: "lilac", color: "#B9AEDC"},
        {name: "mint green", color: "#A8E6CF"},
        {name: "butter", color: "#F9E79F"},
        {name: "sage", color: "#9C9E7B"},
        {name: "salmon", color: "#FF9999"},
        {name: "sk yblue", color: "#80C6E0"},
        {name: "grape fruit", color: "#F79C42"},
        {name: "sand", color: "#D9B88C"},
        {name: "plum", color: "#D1A1D1"},
        {name: "cotton candy", color: "#B4E7CE"},
        {name: "teal", color: "#A1D6D1"},
        {name: "cherry blossom", color: "#F2C1D1"},
        {name: "tangerine", color: "#F7B89C"},
        {name: "orchid", color: "#DAA6D4"},
        {name: "watermelon", color: "#F9A7B0"},

    ]
    return (
        <div className="container" style={{ backgroundColor: pastel }}>
            <h1>Choose a color you prefer</h1>

        </div>
    )

}

export default Button;