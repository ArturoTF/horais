import React from 'react'
import { Link } from 'react-router-dom'
import Masonry from 'react-masonry-css'
import '../styles/MasonryGallery.css'

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
}


function MasonryGallery() {

  const imagenes = ['img/gran/chantal-1.jpg', 'img/gran/chantal-2.png', 'img/gran/chantal-3.png', 'img/gran/chantal-4.jpg', 'img/gran/chantal-5.png', 'img/gran/chantal-6.png', 'img/gran/chantal-7.jpg', 'img/gran/chantal-8.png', 'img/gran/chantal-9.jpg', 'img/gran/chantal-10.jpg', 'img/gran/chantal-11.png', 'img/gran/chantal-12.png']
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
        {imagenes.map((img, index) => (
          <figure key={index}>
            <img src={img} alt={`Imagen ${index + 1}`} />
          </figure>
        ))}
    </Masonry>
  )
}

export default MasonryGallery