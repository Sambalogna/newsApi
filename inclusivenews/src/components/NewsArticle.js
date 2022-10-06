import React from "react";
import "./newsArticle.css"
const NewsArticle = ({ title, description, url, urlToImage }) => {
    return (
        <div className="news-article">
            <img className='news-image'src={urlToImage} alt="New image"/>
            <h3>
                <a href={url}>{title}</a>
            </h3>
            <p>{description}</p>
        </div>
    );
};
export default NewsArticle;