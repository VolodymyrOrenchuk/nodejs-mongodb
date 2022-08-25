import React, {useEffect, useState} from 'react';
import axios from "axios";
import classes from './News.module.css'
import moment from "moment";

const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/getNews')
            .then(res => setNews(res.data))
            .catch(err => console.log(err));
    }, [])
    console.log(news)
    return (
        <div className={classes.boxContainer}>
            {news.map((item, index) => (
                <div key={index} className={classes.newsContainer}>
                    <h1>
                        <strong>{item.title}</strong>
                    </h1>
                    <div>
                        {item.text}
                    </div>
                    <div className={classes.imageBox}>
                        <img src={item.imageUrl} alt="no picture"/>
                    </div>
                    <div>
                        {moment(item.date).format('dddd, MMMM Do YYYY, h:mm:ss a"')}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default News;