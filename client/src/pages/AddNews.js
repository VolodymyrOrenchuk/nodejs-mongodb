import classes from './AddNews.module.css'
import {useState} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import axios from "axios";


const AddNews = () => {
    const [title, setTitle] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [newsText, setNewsText] = useState('')
    const news = useSelector(state => state.formNewsReducer)
    const dispatch = useDispatch()

    function titleHandler(e) {
        setTitle(e.target.value)
    }
    function imageHandler(e) {
        setImageUrl(e.target.value)
    }
    function newsTextHandler (e) {
        setNewsText(e.target.value)
    }
    function addNews () {
        const news ={
            title: title,
            imageUrl: imageUrl,
            text: newsText
        }
         axios.post('http://localhost:4000/addNews',news)
             .then(res => console.log(res.data))

        dispatch({type:"ADD_NEWS",payload: news})
        setTitle('')
        setImageUrl('')
        setNewsText('')
    }

    function submitHandler(e) {
        e.preventDefault()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.formNewsContainer}>
                <label>Заголовок</label>
                <input type="text"
                       placeholder="Введіть заголовок"
                       onChange={titleHandler}
                       value={title}
                />
                <label>Посилання на картинку новини</label>
                <input type="text"
                       placeholder="Посилання на картинку новини"
                       onChange={imageHandler}
                       value={imageUrl}
                />
                <label>Текст новини</label>
                <textarea
                       placeholder="Текст новини"
                       onChange={newsTextHandler}
                       value={newsText}
                       rows={10}
                />
                <button onClick={addNews} className={classes.btn}>Add news</button>
            </div>
        </form>
    )
}

export default AddNews