import React, { useState, useEffect } from 'react'

const MovieCard = () => {
    const [result, setResult] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        let data = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1");
        data = await data.json();
        console.log(data.results)
        setResult(data.results)
        setSearchResult(result)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleSearch = (e) =>{
    setSearch(e.target.value);
    const results = searchResult.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    if(results){
        setSearchResult(results)
    }
    else{
        // setSearchResult(result)
    }

    }
    return (
        <div style={ { width: "85vw" } } className='container my-5'>
            <input type="text" name="" id="" value={search} onChange={handleSearch}  className='form-control my-2' placeholder='Search here'/>
            <div className="row gap-1">
                {
                    searchResult.map((data, index) => (
                        <div key={ index } className="col-12 col-sm-6 col-md-4 col-lg-3  mx-auto my-2">
                            <div className="shadow-lg p-3 mb-5 bg-white rounded">
                                <img style={ { width: "100px", height: "100px" } } src={ data.poster_path } alt="" />
                                <h5>{ data.title }</h5>
                                <p>Description : { data.overview.slice(0, 44) }...</p>
                                <p>Release date : { data.release_date }</p>
                                <p>Rating : { data.vote_average }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieCard
