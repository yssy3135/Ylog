import React from 'react'
import {Carousel } from 'antd'
import { PictureOutlined } from '@ant-design/icons';

function ImageSlider(props) {


    if(props.content.images.length === 0){

        return <PictureOutlined onClick ={ () => {props.cardHandler("detail",props.content)}}
                style={{width:'100%', display:'flex' ,justifyContent:'center' ,alignItems:'center', fontSize:'100px'}}
        
        />
    }else{
        return (
            
            <Carousel autoplay>
                {props.content.images.map((image,index)=>(
                    <div key = {index}  onClick ={ () => {props.cardHandler("detail",props.content)}}>
                        <img style={{width:'100%'}}src={`http://localhost:5000/${image}`}/>
                    </div>
    
                ))}
            </Carousel>
            
        )

    }

}

export default ImageSlider
