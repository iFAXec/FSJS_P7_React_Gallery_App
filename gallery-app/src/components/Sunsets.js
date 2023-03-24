import React from "react";
import PhotoContainer from "./PhotoContainer";



const Sunsets = (props) => {

    const urls = props.url;
    console.log('urls  :', props.url);

    return (
        <img src={props.url} alt="" />
    )
}


export default Sunsets







