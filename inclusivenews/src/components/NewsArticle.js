import React from "react";

const NewsArticle = ({title, description, url, urlToImage}) => {
    return (
        <div>
            <img src={urlToImage} alt="New image"/>
            <h3>
                <a href={url}>
                    {title}
                </a>
            </h3>
            <p>{description}</p>
        </div>
    );
};
export default NewsArticle;