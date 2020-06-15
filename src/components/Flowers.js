import React from 'react';
import ImageLoader from 'react-load-image';
import BeatLoader from "react-spinners/BeatLoader";

 const Flowers = () => {
	return (	
		Array(8).fill().map((_,i)=>{
 		return (
 		<div className="flowerPic" >
 		<ImageLoader
          src={require(`../assets/images/${i+1}flower.png`)}>
          <img alt="flower"/>
          <div>Error!</div>
          <BeatLoader color={"#50E3C2"}/>
        </ImageLoader>
        </div>
		)
		})
		)
} 
export default Flowers;