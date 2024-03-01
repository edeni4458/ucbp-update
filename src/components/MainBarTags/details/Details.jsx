import {useParams, Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Details = () => {
    const [episode, setEpisode] = useState("")
    const {id} = useParams()
    // const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/episode/${id}`)
        .then((res) => {
            console.log("This is our details get request:", res.data);
            setEpisode(res.data)
        })
        .catch(error => console.log("This is the details get error", error))
    }, [id])

    return (
        <div className='container'>
            {
                episode ?
            <div>
                <h3>{episode.title}</h3>
                <h4>{episode.date}</h4>
                <h5>{episode.rating}</h5>
                <h5>{episode.top50 ? "Yes" : "No"}</h5>
            </div>  
                :
            <h1>Episode not available</h1>
            }
            <button className='btn btn-danger'><Link className='link-2' to={'/view'}>cancel</Link></button>
        </div>
    )
}

export default Details