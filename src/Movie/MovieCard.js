import React, { useState, useEffect } from 'react'

const MovieCard = ({mode}) => {
    const [movies, setMovies] = useState([]);
    const [searchmovies, setSerachMovies] = useState([]);
    const [search, setSerach] = useState("");
    const [id, setId] = useState("");
    const [overview, setOverView] = useState("");
    const [page, setPage] = useState(1);
    const [load, setLoad] = useState(false);

    const fetchData = async () => {
        setLoad(true)
        let data = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`)
        data = await data.json()
        console.log(data.results)
        setMovies(data.results)
        setTimeout(() => {
            setSerachMovies(data.results);
            setLoad(false)
        }, 1000)

    }

    useEffect(() => {
        fetchData()
    }, [page])

    const changeHandler = (e) => {
        setSerach(e.target.value.toLowerCase());

        const result = movies.filter((data) => data.title.toLowerCase().includes(e.target.value.toLowerCase()))

        setSerachMovies(result)
    }

    const getData = (index, data) => {
        setId(index);
        setOverView(data)
        console.log(index, data)
    }

    return (
        <div  className='container'>



            <div>
                <input style={{backgroundColor : mode == true ? `#121212` : 'white' , color : mode == true ? `white` : 'black' }} type="text" value={search} onChange={changeHandler} placeholder='Search Here' className='form-control my-5' />
            </div>

            {load && <div className='w-100 text-center'>
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>}

            
            {!load &&<div className='row'>

                {
                    searchmovies.map((data, index) => (
                            <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                            <div style={{backgroundColor : mode == true ? `#121212` : 'white' , color : mode == true ? `white` : 'black' , borderColor : mode == true ? `white` : ''}} className="card my-2">
                                <img style={{ height: "150px", width: "100%" }} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
                                <div className='px-2'>
                                    <h6>Title : {data.title}</h6>
                                    <p>OverView : {data.overview.slice(0, 40)}...</p>
                                    <p>Rating : {data.vote_average}</p>
                                </div>
                                <button onClick={() => getData(index, data.overview)} data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-primary m-2'>Show Details</button>
                            </div>
                        </div>
                    ))
                }

                

                
                    <div className='d-flex justify-content-between'>
                        <button onClick={() => setPage(page - 1)} className="btn btn-primary " disabled={page <= 1}>Prvious</button>
                        <p>Page # {page}</p>
                        <button onClick={() => setPage(page + 1)} className='btn btn-primary'>Next</button>
                    </div>
                
                


                {/* Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Description : {overview}</p>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default MovieCard