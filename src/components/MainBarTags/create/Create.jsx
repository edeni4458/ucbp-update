// import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
// import axios from 'axios'
import underCons from "../../../images/under-construction-2.jpg"
import './create.css'

const Create = () => {
    // const [title, setTitle] = useState("")
    // const [date, setDate] = useState("")
    // const [rating, setRating] = useState("")
    // const [top50, setTop50] = useState(true)

    // const [errors, setErrors] = useState([]);

    // const navigate = useNavigate()

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     const episode = { title, date, rating, top50 }
    //     console.log("This is handleSubmit", episode);
    //     axios.post("http://127.0.0.1:8000/api/episodes/new", episode)
    //         .then((res) => {
    //             console.log("This is my post request", res)
    //             navigate("/view")
    //         })
    //         .catch(error => {
    //             const errorResponse = error.response.data.errors;
    //             const errorArr = [];
    //             for (const key of Object.keys(errorResponse)) {
    //                 errorArr.push(errorResponse[key].message)
    //             }
    //             setErrors(errorArr)
    //         })
    // }

    return (
        <div className='create-container'>
            <div className="construction">
                <img id='cons-image' src={underCons} alt="Metal Gear Solid Delta Naked Snake" />
            </div>
            {/* {errors.map((error, index) => <p key={index}>{error}</p>)}
                <form className='form-control' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label>Title</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='form-control'>
                        <label>Date</label>
                        <input type="text" onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className='form-control'>
                        <label>Rating</label>
                        <input type="number" onChange={(e) => setRating(e.target.value)} />
                    </div>
                    <div className='form-control'>
                        <label>Top-10</label>
                        <input type="checkbox" onChange={(e) => setTop50(e.target.checked)} />    
                    </div>
                    <div className="buttons">
                        <button type='submit' className='btn btn-dark'>add episode</button> 
                        <button className='btn btn-danger'><Link className='link-2' to={'/view'}>cancel</Link></button>
                    </div>
                </form> */}
        </div>
    )
}

export default Create