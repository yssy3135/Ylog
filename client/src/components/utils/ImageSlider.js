import React from 'react'
import {Carousel } from 'antd'
function ImageSlider(props) {


    return (
        
        <Carousel autoplay>
            {props.content.images.map((image,index)=>(
                <div key = {index}  onClick ={ () => {props.cardHandler("detail",props.content)}}>
                    <img style={{width:'100%', height : '150px'}}src={`http://localhost:5000/${image}`}/>
                </div>

            ))}
        </Carousel>
        
    )
}

export default ImageSlider
