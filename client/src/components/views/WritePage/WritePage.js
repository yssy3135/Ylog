import React,{useState ,useEffect} from 'react'
import { useSelector,  } from "react-redux";
import Editor from '@toast-ui/editor';
import { Input ,Button,Select} from 'antd';
import axios from 'axios';
import '@toast-ui/editor/dist/toastui-editor.css'; 


let editor;
const { Option } = Select;

function WritePage(props) {
  
    
    const [Title, setTitle] = useState("");
    const [Images, setImages] = useState([]);
    const [Category, setCategory] = useState([]);
    const user = useSelector(state => state.user);
    const [categoryValue, setcategoryValue] = useState("");
    
    useEffect( () => {
     
        if(user.userData){
            getCategory();
        }
        
        
    },[user])
  

    const  getCategory = () => {
        let  body = {
            id : user.userData._id
        }

         
        axios.post('/api/categorys/category',body)
        .then( response => {
            if(response.data.success){
               setCategory(response.data.categoryNames); 

            }else{
                alert('카테고리 목록을 불러오는데 실패하였습니다.')
            }
        });
    }
        
    const handleChange = (value) => {
        setcategoryValue(value);
    }

    
    const showCategory = Category.map((categorys,index) => {
        return  <Option key = {index} value= {categorys._id}> {categorys.category}</Option>
               
    }) 


    const titleChangeHandler = (event) =>{
        setTitle(event.currentTarget.value);
        
        
    }
    
    
    if(document.getElementById("editor") && document.getElementById("editor").childElementCount === 0){
            let formData = new FormData();

            const config = {
                header : {'content-type': 'multipart/form-data'}
            }

            editor = new Editor({
            el: document.querySelector('#editor'),
            previewStyle: 'vertical',
            height:'700px',
            initialEditType: 'wysiwyg',
            placeholder: '내용을 입력하세요',
            hooks : {
                addImageBlobHook: (blob,callback) =>{
                    
                    console.log(blob)
                    formData.append("file",blob)
                    

                    axios.post("/api/contents/image",formData,config)
                    .then(response => {
                        if(response.data.success){
                            console.log(response.data.filePath)
                            setImages([...Images,response.data.filePath])
                            let replaced = response.data.filePath.replace("\\","/");
                            callback(`http://localhost:5000/${replaced}`,"alt text");

                        }else{
                            alert('파일을 저장하는데 실패했습니다.')
                        }
                    })
              

                }
                
            }

            });
        }


    const submitHandler= (event) => {
      

        let content = editor.getHtml();
        let textcontent = document.getElementsByClassName('tui-editor-contents')[0].innerText
        // console.log(editor.getTextObject(editor.getRange()))
        // console.log(document.getElementsByClassName('tui-editor-contents')[0].innerText)
        if(!Title || !content || !categoryValue){
            return alert("모든 값을 작성해야합니다.")
        }

        const contents = {
            writer : props.user.userData._id,
            title : Title,
            contents : content,
            textcontents : textcontent,
            images : Images,
            category : categoryValue
           
        }

        axios.post('/api/contents/write',contents)
        .then(response => {
            if(response.data.success){
       
                props.history.push(`/blog/${user.userData._id}`)
            }else{
                console.log(response.data.err)
            }

        });

       


    }


      


    return (
       
         
            <div style={{display:'flex' , flexDirection: 'column' ,alignItems:'center',marginTop:'50px'}}>

                  
                    <div style={{display:'flex' ,flexDirection:'column'}}>
                
                    <Select onChange = {handleChange}  style={{width :'150px' ,marginBottom :'10px'}}>
                        {showCategory}
                    </Select>
                  

                    <Input placeholder="제목을 입력하세요" style= {{     
                        
                        height:'50px',
                        width:'860px',
                        marginBottom :'50px'
                        }} onChange = {titleChangeHandler} value = {Title}>
                    </Input>
                    </div>   
                    <div id = "editor" style= {{     
                        overflowY: 'hidden',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        paddingBottom: '50px',
                        width:'880px',
                        }}>
                
                    </div>
                    
                    <div style={{display:'flex' ,justifyContent:'center'}}>
                        <Button onClick = {submitHandler}  style={{marginRight:'10px'}}>완료</Button>
                        <Button onClick = {()=> { props.history.push(`blog/${props.user.userData._id}`)}}>취소</Button>
                    </div>   
            </div>
   
    )
}

export default WritePage
