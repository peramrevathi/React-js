import React from 'react'

const WomensCollections = (props) => {
  const {title , image1, image2, image3, image4, image5, image6, image7} = props.womensFashion
  return (
    <div className='womenscollectionSection'>
      <h2>{title}</h2>
      <div className="bannerBox">
      <img src="assets/womens banner.jpeg" alt="banner"/>
      </div>
      <div className="womensImages">

        <img src={image1} alt={title} />
        <img src={image2} alt={title} />
        <img src={image3} alt={title} />
        <img src={image4} alt={title} />
        <img src={image5} alt={title} />
        <img src={image6} alt={title} />
        <img src={image7} alt={title} />
        

      </div>

    </div>
  )
}

export default WomensCollections
