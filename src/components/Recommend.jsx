import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Recommend({cat}) {
    const [videos , setVideos] = useState([]);

    useEffect(() => {
        fetchvideo();
    },[cat]);

    const fetchvideo = async ()=> {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyCkmleMPcUGZQpOC8DcDWmexkwGWyzJsvI`);
        const selectVedio = res.data.items.filter(video => video.snippet.categoryId === cat);
        setVideos(selectVedio);
        console.log('error');
    }


  return (
    <>
    <div className="w-full max-w-md mt-9 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white"> Latest Customers </h5>
          <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">View all</a>
        </div>

        {videos.map(video => (
          <div key={video.id} className="flex items-center w-44  h-28 mt-9 ml-2 ">
             <iframe
                className=" w-20  h-20 rounded-lg shadow-xl"
                src={`https://www.youtube.com/embed/${video.id}`}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""/>
            <p className="w-28 text-sm font-medium text-gray-900 truncate dark:text-white">
              {video.snippet.title}
            </p>
          </div>
          ))}
    </div>

    </>
  )
}
