import React from "react";
import Sunsets from "./Sunsets";
import Mountains from "./Mountains";
import Photo from "./Photo";
import Waterfalls from "./Waterfalls";

const PhotoContainer = (props) => {

    const { sunsetData, mountainData, waterfallData } = props;


    let sunsetPhotos = sunsetData.map(sunsetPhoto =>
        <Sunsets
            url={`https://live.staticflickr.com/${sunsetPhoto.server}/${sunsetPhoto.id}_${sunsetPhoto.secret}.jpg`}
            key={`${sunsetPhoto.id}`}
        />
    )

    let mountainPhotos = mountainData.map(mountainPhoto =>
        <Mountains
            url={`https://live.staticflickr.com/${mountainPhoto.server}/${mountainPhoto.id}_${mountainPhoto.secret}.jpg`}
            key={`${mountainPhoto.id}`}
        />
    )

    let waterfallPhotos = waterfallData.map(waterfallPhoto =>
        <Waterfalls
            url={`https://live.staticflickr.com/${waterfallPhoto.server}/${waterfallPhoto.id}_${waterfallPhoto.secret}.jpg`}
            key={`${waterfallPhoto.id}`}
        />
    )

    return (


        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <li>
                    {sunsetPhotos}
                </li>


                {/* Not Found */}
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            </ul>
        </div>
    );
}

export default PhotoContainer;