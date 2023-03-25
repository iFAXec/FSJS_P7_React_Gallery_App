import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";

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