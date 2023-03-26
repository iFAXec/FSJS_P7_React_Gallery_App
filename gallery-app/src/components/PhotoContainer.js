import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

/**
 * PhotoContainer function 
 * @param {*} props - pass the data from App.js through props
 * @returns the image url with specific key
 */

const PhotoContainer = (props) => {

    const results = props.data;
    // console.log('results :', results);   

    if (results.length > 0) {

        return (

            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    {results.map(result =>
                        <Photo
                            url={`https://live.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`}
                            key={`${result.id}`}

                        />
                    )}

                </ul>
            </div>
        )
    } else {
        return (
            <NotFound />
        )
    }

}









export default PhotoContainer;