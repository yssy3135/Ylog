import React from 'react'
import {Carousel } from 'antd'
import { PictureOutlined } from '@ant-design/icons';

function ImageSlider(props) {


    if(props.content.images.length === 0){

        

        return <div   style={{width:'100%',height:'100%', display:'flex' ,justifyContent:'center' ,alignItems:'center', fontSize:'100px'}}> 
            <PictureOutlined onClick ={ () => {props.cardHandler("detail",props.content)}}
                    
            />
        </div>
    }else{
        return (
            
            <Carousel autoplay >
                {props.content.images.map((image,index)=>(
                    <div key = {index}   onClick ={ () => {props.cardHandler("detail",props.content)}}>
                        <img style={{width:'100%',height:'100%'}}src={`http://localhost:5000/${image}`}/>
                    </div>
    
                ))}
            </Carousel>
            
        )

    }

}

export default ImageSlider
