import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";



export default function CardVideo() {
    const [videos , setVideos] = useState([]);

    useEffect(() => {
     funcfetch();
    }, []);


    const funcfetch = async ()=>{
           const res =await axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyCkmleMPcUGZQpOC8DcDWmexkwGWyzJsvI');
           const videos = res.data.items;
           setVideos(videos);  
    }
 

    
  return (
    <div className='flex flex-wrap mx-28 my-3'>

    {videos.map((video)=>(

    <div key={video.id} className='mx-9 my-3 w-[40%]' >
   
    <iframe
      className="mx-28 my-9 w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
      src={`https://www.youtube.com/embed/${video.id}`}
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen=""
    />
     <Link to={`/details/${video.id}`}>
     <p className='mx-28 my-3'>{video.snippet.title}</p>
    </Link>
    </div>
    ))}
  </div>

  )
}
