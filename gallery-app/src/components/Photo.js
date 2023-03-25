import React from "react";


const Photo = (props) => {
    //console.log(props);
    return (
        <li>
            <img src={props.url} alt={props.title} />
        </li>
    )

}

export default Photo;



