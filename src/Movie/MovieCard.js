import React , {useState , useEffect} from 'react'

const MovieCard = () => {
    const [movie , setMovie] = useState([]);
    const [searchMov ,setSearchMov] = useState([]);
    const [search , setSearch] = useState("");

    const fetchData = async ()=>{
        let data = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1");
        data = await data.json();
        console.log(data.results)
        setMovie(data.results);
        setSearchMov(data.results);

    }

    useEffect(()=>{
        fetchData();
    },[])

    const changeHandler = (e) =>{
        setSearch(e.target.value.toLowerCase())

        const filterResult = movie.filter((data)=>data.title.toLowerCase().includes(e.target.value.toLowerCase()));

        setSearchMov(filterResult)
    }


  return (
    <div className='container my-5'>
        <div>
            <input onChange={changeHandler} value={search} type="text" className='form-control my-5' placeholder='Search Here'/>
        </div>
        <div className="row mx-auto">
        {
           searchMov.map((data , index)=>(
            <div className="col-12 col-sm-6 col-md-4 col-lg-3  my-5">
                <div className="card p-2">
                    <img style={{height : "150px" , width : "100%"}} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="" />
                    <h6>Title : {data.title}</h6>
                    <p>Description : {data.overview.slice(0 , 44)} ...</p>
                    <p>Release Date : {data.release_date}</p>
                    <p>Rating: {data.vote_average}</p>
                </div>
            </div>
           ))
       }
        </div>
        
    </div>
  )
}

export default MovieCard
