import {useParams, Link, useNavigate} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Edit = () => {

    
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [rating, setRating] = useState("")
    const [top50, setTop50] = useState(true)
    
    const [errors, setErrors] = useState([]);
    
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/episode/${id}`)
        .then((res) => {
            console.log("This is our edit get request:", res.data)
            const episode = res.data
            setTitle(episode.title)
            setDate(episode.date)
            setRating(episode.rating)
            setTop50(episode.top50)
        })
        .catch(error => console.log("This is the edit get error", error))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const episode = {title, date, rating, top50}
        console.log("This is handleSubmit", episode);
        axios.put(`http://127.0.0.1:8000/api/episode/${id}`, episode)
        .then((res) => {
            console.log("This is my put request", res)
            navigate("/view")
        })
        .catch(error => {
            const errorResponse = error.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })
    }
    return (
        <div className='container'>
        {errors.map((error, index) => <p key={index}>{error}</p>)}
        <form className='form-control' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input value={date} type="text" onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Rating</label>
                <input value={rating} type="number" onChange={(e) => setRating(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Top-10</label>
                <input checked={top50} type="checkbox" onChange={(e) => setTop50(e.target.checked)} />    
            </div>
            <div className="buttons">
            <button type='submit' className='btn btn-dark'>update episode</button> 
            <button className='btn btn-danger'><Link className='link-2' to={'/view'}>cancel</Link></button>
            </div>
        </form>
    </div>
    )
}

export default Edit