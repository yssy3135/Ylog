import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../../_actions/user_actinos";
import { useDispatch } from "react-redux";
import {
    Form,
    Input,
    Button,
    Typography
  } from 'antd';

const { Title } = Typography;

const formItemLayout = {
labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
},
wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
},
};
const tailFormItemLayout = {
wrapperCol: {
    xs: {
    span: 24,
    offset: 0,
    },
    sm: {
    span: 16,
    offset: 10,
    },
},
};

function RegisterPage(props) {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues = {{
                name:'',
                id: '',
                password:'',
                confirmPassword:'',
                email:'',
                phone:'',
            }}
            validationSchema={Yup.object().shape({
                name : Yup.string()
                .required('이름을 입력해주세요'),
                id : Yup.string()
                .required('아이디를 입력해주세요'),
                email : Yup.string()
                .required('이메일을 입력해주세요'),
                phone : Yup.string()
                .required('전화번호를 입력해주세요'),
                password : Yup.string()
                .min(6, '비밀번호는 6자리 이상이어야합니다')
                .required('비밀번호를 입력해주세요'),
                confirmPassword : Yup.string()
                .oneOf([Yup.ref('password'),null],'비밀번호가 일치하지 않습니다')
                .required('비밀번호 확인란을 입력해주세요')
            })}

            onSubmit = {(values, { setSubmitting }) =>{
        
                setTimeout(() => {
                    let dataToSubmit = {
                        userId : values.id,
                        name : values.name,
                        email : values.email,
                        phone : values.phone,
                        password : values.password,
                    };

                    dispatch(registerUser(dataToSubmit)).then(response => {
                        if(response.payload.success){
                            props.history.push("/login")
                        }else{
                            alert("회원가입에 실패했습니다.")
                        }
                    })

                    setSubmitting(false);

                },500);
            }}


        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                  return (
                    <div className="app" style={{ fontFamily:'나눔고딕' ,width: '100%', backgroundColor: 'skyblue' ,display : 'flex', justifyContent:'center', paddingTop : '1.5%'}}>
                        <Title level={1}>회원가입</Title>
                        <br/>
                        <br/>
                    
                            <Form style={{ maxWidth: '375px',   width: '100%', backgroundColor: 'skyblue' }} onSubmit={handleSubmit} >

                                <Form.Item required label="이름">
                                    <Input
                                    id="name"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.name && touched.name ? 'text-input error' : 'text-input'
                                    }
                                    />
                                    {errors.name && touched.name && (
                                    <div className="input-feedback">{errors.name}</div>
                                    )}
                                </Form.Item>

                                <Form.Item required label="아이디">
                                    <Input
                                    id="id"
                                    type="text"
                                    value={values.id}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.id && touched.id ? 'text-input error' : 'text-input'
                                    }
                                    />
                                    {errors.id && touched.id && (
                                    <div className="input-feedback">{errors.id}</div>
                                    )}
                                </Form.Item>

                                <Form.Item required label="이메일" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                                    <Input
                                    id="email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.email && touched.email ? 'text-input error' : 'text-input'
                                    }
                                    />
                                    {errors.email && touched.email && (
                                    <div className="input-feedback">{errors.email}</div>
                                    )}
                                </Form.Item>

                                
                                <Form.Item required label="핸드폰">
                                    <Input
                                    id="phone"
                                    placeholder="010-0000-0000"
                                    type="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.phone && touched.phone ? 'text-input error' : 'text-input'
                                    }
                                    />
                                    {errors.phone && touched.phone && (
                                    <div className="input-feedback">{errors.phone}</div>
                                    )}
                                </Form.Item>

                                <Form.Item required label="비밀번호" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'} >
                                    <Input
                                    id="password"
                                    placeholder="6자리이상"
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.password && touched.password ? 'text-input error' : 'text-input'
                                    }
                                    />
                                    {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                    )}
                                </Form.Item>

                                <Form.Item required label="비밀번호 확인" hasFeedback>
                                    <Input
                                    id="confirmPassword"
                                    type="password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                                    }
                                    />
                                    {errors.confirmPassword && touched.confirmPassword && (
                                    <div className="input-feedback">{errors.confirmPassword}</div>
                                    )}
                                </Form.Item>

                                <Form.Item {...tailFormItemLayout}>
                                    <Button onClick={handleSubmit} type="primary" disabled={isSubmitting} >
                                    가입
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                  
                  );
                }}


        </Formik>
    )
}

export default RegisterPage
