import React from 'react'

function TrendingCoin(props) {
  return (
    <div>
        <div swiper-wrap>
        <div className="card">
         <div className="card-image">
         <h1>{props.item.coin_id}</h1>
         <p>{props.item.name}</p>
           {/* <img src={props.trending?.small} alt="card-image" /> */}
         </div>
          
        </div>

        </div>
    </div>
  )
}

export default TrendingCoin