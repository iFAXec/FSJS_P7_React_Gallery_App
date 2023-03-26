import React from "react";

/**
 * Initiate Photo component
 * @param {*} props - take the prop passed from PhotoContainer * 
 * @returns - an image element
 */


const Photo = (props) => {
    //console.log(props);
    return (
        <li>
            <img src={props.url} alt={props.title} />
        </li>
    )

}

export default Photo;



