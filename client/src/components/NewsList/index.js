import React from "react";
import "./newsList.css"
const NewsList = ({ title, description, url, urlToImage }) => {
    return (
        <div className="news-article">
            <img className='news-image'src={urlToImage} alt="New image"/>
            <h3>
                <a href={url} target='_blank'>{title}</a>
            </h3>
            <p>{description}</p>
        </div>
    );
};
export default NewsList;