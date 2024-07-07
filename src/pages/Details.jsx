import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Comment from '../components/Comment';
import Recommend from '../components/Recommend';
import Like from '../components/Like';




export default function Details() {
    const {id} = useParams();
    const [videocat , setVideocat] = useState([]);

    useEffect(() => {
        fetchvideo();
    },[]);

    const fetchvideo = async ()=> {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyCkmleMPcUGZQpOC8DcDWmexkwGWyzJsvI`);
        const selectVedio = res.data.items.find(video => video.id === id);
        setVideocat(selectVedio.snippet.categoryId) }


  return (
    <div >
    <Nav/>
    <div className='flex ml-28'>
    <div className='w-[60%]'>
    <iframe
      className="mx-28 my-9 w-[80%]  h-64 rounded-lg sm:h-96 shadow-xl"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen=""
    />
    <Like id={id}/>
    <Comment id={id} />
    </div>
    <Recommend cat={videocat}/>
    </div>
  </div>  )
}
