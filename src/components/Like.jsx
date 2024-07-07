import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Like({ id }) {
    const [isLike, setIsLike] = useState(false);
    const [likeArray, setLikeArray] = useState([]);

    useEffect(() => {
        fetchVideo();
    }, []);

    const fetchVideo = async () => {
        const userId = localStorage.getItem('userId');
        const res = await axios.get(`https://6685bb30b3f57b06dd4da302.mockapi.io/test/${userId}`);
        setLikeArray(res.data.like || []);
        setIsLike(res.data.like.includes(id));
    }


    const toggle = () => {
        const updatedLikeArray = isLike ? likeArray.filter(id1 => id1 !== id) : [...likeArray, id];
        updateUserData(updatedLikeArray);
        setIsLike(!isLike);
    }

    const updateUserData = async (updatedLikeArray) => {
        const userId = localStorage.getItem('userId');
        const res = await axios.put(`https://6685bb30b3f57b06dd4da302.mockapi.io/test/${userId}`, { like: updatedLikeArray })};

   
  return (
    <>
        <div className="flex justify-end mr-16">
            <img 
            className='w-6 m-2'
            onClick={toggle} 
            src={isLike ?`https://cdn-icons-png.flaticon.com/128/3128/3128313.png`: `https://cdn-icons-png.flaticon.com/128/1077/1077035.png` } />
        </div>
    </>
  )
}
