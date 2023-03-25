import React from "react";
import Photo from "./Photo";
import App from "../App";


const PhotoContainer = (props) => {


    const { sunsetData, mountainData, waterfallData } = props;
    console.log('sunsetData :', sunsetData);
    console.log('mountainData :', mountainData);
    console.log('waterfallData :', waterfallData);




    return (


        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {sunsetData.map(sunsetPhoto =>
                    <Photo
                        url={`https://live.staticflickr.com/${sunsetPhoto.server}/${sunsetPhoto.id}_${sunsetPhoto.secret}.jpg`}
                        key={`${sunsetPhoto.id}`}

                    />
                )}

                {mountainData.map(mountainPhoto =>
                    <Photo
                        url={`https://live.staticflickr.com/${mountainPhoto.server}/${mountainPhoto.id}_${mountainPhoto.secret}.jpg`}
                        key={`${mountainPhoto.id}`}
                    />
                )}

                {waterfallData.map(waterfallPhoto =>
                    <Photo
                        url={`https://live.staticflickr.com/${waterfallPhoto.server}/${waterfallPhoto.id}_${waterfallPhoto.secret}.jpg`}
                        key={`${waterfallPhoto.id}`}
                    />
                )}


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