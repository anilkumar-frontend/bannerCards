import React from 'react'


const BannerCard = (props) => {

    const {bannerDetails} = props
    const {headerText, description, className} = bannerDetails


  return (
    <li className={`${className} banner-card-item`} >
        <div>
            <h1 className="heading">{headerText}</h1>
            <p className="description"> {description} </p>
            <button className='show-more-btn'>Show More</button>
        </div>
    </li>
  )
}

export default BannerCard
