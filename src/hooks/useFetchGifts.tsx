import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifts';

export const useFetchGifts = (category) => {

  const [images, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImage(newImages);
    setIsLoading(false)
  };

  useEffect(() => {
    getImages();
  }, []);
  
  return (
    // {
    //   images: image,
    //   isLoading: isLoading
    // }
    {
      images,
      isLoading
    }
  )
}
