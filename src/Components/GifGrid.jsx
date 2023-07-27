import { useEffect, useState } from "react";
//import { getGifs } from "../Helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";
import 'animate.css';

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs( category );


  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && (<h2 className="animate__animated animate__hinge">Cargando...</h2>)
        }

        <div className='card-grid'>
          {
            images.map( (image) => (
              <GifItem key={image.id}
              {...image}//esparsir props
              />
            ))
          }
        </div>
    </>
  )
}
