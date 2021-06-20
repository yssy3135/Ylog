# 🔹Ylog

Node.js , React.js MongoDB를 사용하여 구현한 개인 블로그

React Hooks , 함수형 컴포넌트 사용

상태관리 → Redux

디자인 →antd

## Back-end

**모델 구성**

Category

![image](https://user-images.githubusercontent.com/62733005/122681934-b5303d00-d231-11eb-8cc6-7d138201b091.png)

Contents

![image](https://user-images.githubusercontent.com/62733005/122681959-cb3dfd80-d231-11eb-8472-beafc7024d5d.png)

users

![image](https://user-images.githubusercontent.com/62733005/122681965-d133de80-d231-11eb-80b3-ceb82fa61294.png)

🔹특징

- JWT를 사용하여 회원인증
- bcrypt를 통한 비밀번호 암호화
- HoC 구현해 로그인 했을 때와 안했을 때 판단하여 페이지 반환
- 보이는 대로 글 작성하기 위해 WYSIWYG 형식의 Toast UI 에디터 사용
- 카테고리별 글 작성
- Formik을 통한 회원가입 폼 및 유효성 검사
- 로그인 되어있고 자신의 블로그일 때만 글 수정 및 삭제가 보이도록 구성
- 카테고리 추가

🔹예정

AWS EC2배포 ,typescript로 전환

조회수,댓글,정렬,검색,게시판 출력 방식 


🔹Front 구현내용

![image](https://user-images.githubusercontent.com/62733005/122682021-1b1cc480-d232-11eb-9128-06d7c7feeec7.png)
---
![image](https://user-images.githubusercontent.com/62733005/122682010-0e986c00-d232-11eb-9ab8-88768c9e186e.png)
---
![image](https://user-images.githubusercontent.com/62733005/122682049-443d5500-d232-11eb-9fb0-961f0f3d0a27.png)
---
![image](https://user-images.githubusercontent.com/62733005/122682058-53bc9e00-d232-11eb-968c-48710246806f.png)
---
![image](https://user-images.githubusercontent.com/62733005/122682091-79e23e00-d232-11eb-97b0-a4a21f98ab1d.png)
---
![image](https://user-images.githubusercontent.com/62733005/122682141-b0b85400-d232-11eb-936e-a4524fbb6566.png)

