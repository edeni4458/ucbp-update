import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import foxUnit from '../../../images/fox-unit.jpg'
import axios from 'axios';


const View = () => {



    const [episodeList, setEpisodeList] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/episodes')
            .then((response) => {
                console.log('This is my response', response.data)
                setEpisodeList(response.data)
            })
            .catch((error) => { console.log('This is our catch error:', error) })
    }, [loaded])

    const handleDelete = (e, id) => {
        axios.delete(`http://127.0.0.1:8000/api/episode/${id}`)
            .then((res) => {
                console.log("Deleting this episode response:", res);
                setLoaded("")
            })
            .catch(error => console.log("This is handleDelete catch error:", error))
    }

    return (
        <div className='container-main' style={{
            backgroundImage: `url(${foxUnit})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "50%",
            backgroundPosition: "center",
        }} >
            <div className="button">
                <h3>Let us know your favorite UCBP episodes, add below.</h3>
                <button className='btn btn-success' >
                    <Link className='link-2' to={'/create'}>Add a Episode</Link>
                </button>
                <button className='btn btn-warning' >
                    <Link className='link-2' to={'/UCBP'}>Episodes</Link>
                </button>
            </div>
            <table id='button-view' className='table table-striped table-condensed'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Rating</th>
                        <th>Top-10</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        episodeList.map((glove, i) => {
                            return (
                                <tr key={i}>
                                    <td>{glove.title}</td>
                                    <td>{glove.date}</td>
                                    <td>{glove.rating}</td>
                                    {/* Condition ? "True" : "False" */}
                                    <td>{glove.top50 ? "Affirmative" : "Negative"}</td>
                                    <td>
                                        <div className="buttons">
                                            <button className='btn btn-warning'><Link className='link' to={`/details/${glove._id}`} >view</Link></button>
                                            <button className='btn btn-dark'><Link className='link-2' to={`/edit/${glove._id}`}>edit</Link></button>
                                            <button onClick={(e) => { handleDelete(e, glove._id); }} className='btn btn-danger'>delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default View
