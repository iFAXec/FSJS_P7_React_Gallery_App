import React from "react";
import Photo from "./Photo";

const PhotoContainer = (props) => {

    const results = props.data;

    let photos = results.map(photo =>
        <Photo
            url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            key={`${photo.id}`}
        />
    );

    return (


        <div class="photo-container">
            <h2>Results</h2>
            <ul>
                <li>
                    {photos}
                </li>


                {/* Not Found */}
                <li class="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            </ul>
        </div>
    );
}

export default PhotoContainer;