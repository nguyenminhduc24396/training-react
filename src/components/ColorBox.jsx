import React from "react";

function ColorBox(props) {
    const { color } = props;

    return (
        <div className="box" style={{ backgroundColor: color }}>{ color }</div>
    )
}

export default ColorBox;
