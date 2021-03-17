import { useEffect, useState } from 'react';

function Home() {
  const url = "https://api.nasa.gov/planetary/apod?api_key=LPzAvbxG9rkOPhhk2bZatlZZldfPo9N5ycnb0ZGS"
  
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
  }, [])

  return (
    <div className="container mt-5">
    <div className="card">
      <img className="card-img-top img-fluid mx-auto mt-3 mb-3" style={{width: '30%'}} src={ data.url } alt={ data.title }/>
      <div className="card-body">
        <h5 className="card-title">{ data.title }</h5>
        <p className="card-text">{ data.explanation }</p>
      </div>
    </div>
    </div>
  );
}

export default Home;
