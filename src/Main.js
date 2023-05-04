import React, {useEffect ,useState} from "react";
import axios from "axios";
import Moviecard from "./Moviecard";
function Main() {
  const [data, setdata] = useState([])
  const getMoviedata = async () => {
    try {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      setdata(res.data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMoviedata();
  }, [])
  
  return <>
    <h1 className="text-center text-decoration-underline my-3 ">Moviesflix Shows</h1>
    <div className="container">
        <div className="row">
          {data.map((element)=>{
            const{name ,type,language,genres,summary,image,premiered,rating }=element.show;
            return <div className="col-sm-6 col-lg-4 col-xl-3" key={element.show.id}>
              <Moviecard name={name} type={type} language={language} genres={genres} summary={summary} image={image?.original} premiered={premiered} rating={rating?.average}/>
            </div>
          })}
        </div>
        </div>
  </>;
}

export default Main;
