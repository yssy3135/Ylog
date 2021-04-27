import React,{useEffect,useState} from 'react';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import { PageHeader } from 'antd';
import axios from 'axios';
import {Button} from 'antd';





function DetailContentsPage(props) {
    const userId = props.match.params.userId;
    const contentId = props.match.params.contentId

    const [contentsInfo, setcontentsInfo] = useState({})
    const [categoryInfo, setcategoryInfo] = useState({})
    const [writeInfo, setwriteInfo] = useState({})


    useEffect(() => {
       
        getContent()
        

    }, [])
    
    

    const getContent = () => {
        let body = {
            contentId : contentId
        }

        axios.post('/api/contents/detail',body)
        .then(response => {
            if(response.data.success){
                console.log(response.data)
                setcontentsInfo(response.data.contentsInfo[0])
                setcategoryInfo(response.data.contentsInfo[0].category)
                setwriteInfo(response.data.contentsInfo[0].writer);
            }else{
                alert("게시물을 불러오는데 실패했습니다.")
            }
        })
        
    }

    const listHandler = () => {
        props.history.push(`/blog/${userId}`)
    }

    if(document.getElementById("viewer")  ){
        const editor = new Viewer({
            el: document.querySelector('#viewer'),
            previewStyle: 'vertical',
            height:'700px',
            initialValue: contentsInfo.contents,
            

        });
    }




    

    return (
        <div>
      
            <div style={{display:'flex' , flexDirection: 'column' ,alignItems:'center',padding:'50px 0 100px 0'}}>
               
                <div style= {{     
                            height:'50px',
                            width:'880px',
                            marginBottom :'30px',
                            
                            display : 'flex',
                            alignItems:'center',
                            paddingBottom : '20px',
                            fontSize: 'xxx-large'
                }}>
                    <div style={{display: 'flex',fontSize :'x-large' ,borderBottom:'1px solid #a3a3a3'}} >
                        {categoryInfo.category}
                    </div>

                </div>
                    <div style= {{     
                            height:'50px',
                            width:'880px',
                            marginBottom :'30px',
                            borderBottom:'1px solid black',
                            display : 'flex',
                            alignItems:'center',
                            paddingBottom: '20px',
                            fontSize: 'xxx-large'
                        }}>
                        {contentsInfo.title}
                    </div>
                

                <div id = "viewer" style= {{     
                    overflowY: 'hidden',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                
                    width:'880px',
                    minHeight:'600px',
                    padding: '20px',
                    borderBottom:'1px solid black',
                }}>
                </div>
                <div style= {{paddingTop:'20px'}}>      
                    <Button onClick = {listHandler}style= {{marginRight:'10px'}}>목록</Button>
                    <Button style= {{marginLeft:'10px'}}>수정</Button>
                </div>
            </div>

        </div>
    )
}

export default DetailContentsPage
