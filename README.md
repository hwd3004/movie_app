#0 Introduction

nomad corder 의 reactJS 기초 강의를 보고 따라하면서
영화 웹 서비스 만들기

-----------------------------------------

#0.1 Requirements

nodejs 설치

npx 설치
npm install npx -g

git 설치

-----------------------------------------

#0.2 Theory Requirements

html, css, js 기본실력 필요

-----------------------------------------

#0.3 Why React

왜 리액트인가?
일단 리액트는 페이스북이 만들었다.
모든 페북은 리액트로 돌아간다.
에어비앤비, 넷플릭스, 스포티파이, 슬랙 등등 많은 웹사이트들이 리액트를 사용한다.

-----------------------------------------

#1.0 Creating your first React App

리액트만 사용할수는 없다. 몇가지 해줘야만 하는게 있다.
이유는 리액트가 매우 현대적인 코드와 동작하기 때문이다.
섹시한 코드와 아름다운 컴포넌트를 만들고, 아름다운 웹사이트를 만들 수 있다.

문제는 어리석은 브라우저가 이 코드를 이해하지 못하기때문에,
이 코드를 못생긴 코드로 바꿔줘야만 한다.

이것을 설정하기 위해 몇가지 단계가 필요하다.
webpack을 다운로드해야하고, babel을 다운로드해야한다.
그런 다음에 리액트 코드를 컴파일해야하고 등등의 과정이 많다.

하지만 create react app 을 이용하면 해결된다.
터미널에
npx create-react-app movie_app
를 입력하면 movie_app 폴더를 하나 생성하고, 패키지가 설치된다.

설치가 완료되면
package.json 에서
scripts 부분에서 test와 eject는 필요없어서 삭제

맨위의 name은 어플리케이션 이름

터미널로 movie_app으로 이동 후에 npm start 해서 잘되는지 테스트

-----------------------------------------

#1.1 Creating a Github Repository
깃헙 설치

-----------------------------------------

#1.2 How does React work?

기본부터 설명하기위해서 대부분을 지움

삭제한 파일
logo.svg
serviceWorker.js
index.css
App.test.js
App.css



function App() {
  return <div className="App">Hello!</div>
}

public 폴더의 index.html 파일에 가면
<div id="root"></div> 는 비어있다.
하지만 브라우저에서 내 localhost에 있는 div id="root"는
내부에 Hello를 갖고 있다.

리액트가 무엇이냐면, 리액트는 당신이 거기에 쓰는 모든 요소를 생성한다는 것이다.
자바스크립트와 함게 그것들을 만들고, 그것들을 html에 넣는다.
리액트는 index.html의 div id="root"에 element를 넣는 역할을 담당한다.

index.js 파일을 보면

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render 은 <App />을 render하려고 하는데,
document.getElementById('root') 으로 render한다.

virtual DOM이라는게 있다.
virtual document object model
index.html의 소스코드에는 존재하지않지만, reac가 그걸 만들어낸다.
이게 리액트가 빠른 이유이다.

-----------------------------------------

#2.0 Creating your first React Component

index.js 파일에서
<App /> 를 컴포넌트가 부른다.
리액트는 컴포넌트와 함께 동작한다.
리액트로 컴포넌트를 만들게 될 것이고, 컴포넌트를 보기 좋게 만들 것이다.
컴포넌트가 데이터를 보여주게 할 것이다.

기본적으로 컴포넌트가 무엇일까?
컴포넌트는 html을 반환하는 함수이다.

function App() {
  return <div>Hello!</div>
}

리액트는 컴포넌트를 사용해서 html처럼 작성하려는 경우에 필요하다.
자바스크립트와 html 사이의 이러한 조합을 jsx 라고 부른다.
jsx는 리액트에서 나온 유일한 개념이다.
이 jsx에 대한 지식은 다른 분야에선 쓰이지않는다.

주의사항으로 리액트는 하나의 컴포넌트만을 렌더링해야한다.
그 컴포넌트가 App이다.
App 말고 다른 컴포넌트를 하나 새로 만들었다면, App 안에 넣어야한다.

App.js 에
import Potato from './Potato';
추가한다
./ 는 같은 폴더라는 의미

function App() {
  return (
  <div>
    Hello!
    <Potato />
    </div>
  )
}

브라우저에서 소스 코드를 보면 리액트는 컴포넌트를 가져와서,
브라우저가 이해할 수 있는 평범한 html로 만들었다.

jsx는 자바스크립트 안의 html이다.


-----------------------------------------

#2.1 Reusable Components with JSX + Props

jsx에서 두번째로 이해해야 하는 것은, 컴포넌트에 정보를 보낼수 있다는 점이다.
리액트가 멋진 이유는 재사용 가능한 컴포넌트를 만들 수 있다는 점이다.

컴포넌트에서 컴포넌트로, 칠드런 컴포넌트로 정보를 보내는 방법이 있다.
컴포넌트로 정보를 보내고, 그 다음에 컴포넌트에서 그 정보를 어떻게 사용할 것인가.


<Food name="kimchi"/>

Food 컴포넌트에 정보를 보내는 방법이다.
Food 컴포넌트에 name 이라는 이름의 property를 kimchi라는 value로 주었다.


<Food fav="kimchi"/>

Food 컴포넌트에 fav 라는 이름의 property를 kimchi라는 value로 주었다.

이제 어떻게 이 props(property)를 사용할까?


<Food
    fav="kimchi"
    something={true}
    papapapa={["hello", 1, 2, 3, 4, true]}
/>

누군가 Food 컴포넌트로 정보를 보내려고 하면,
리액트는 이 모든 속성을 가져올 것이다.

그리고

function Food(){
  return <h1>Food</h1>
}

food function 컴포넌트의 argument(인자값)으로 그것들을 넣을 것이다.

function Food(props){
  console.log(props)
  return <h1>Food</h1>
}

콘솔로그를 이용하여 브라우저에서 확인해보면
object가 뜨는데, 이 object는 컴포넌트로 전달 된 모든 props들이다.
props라고 불리는 한 argument의 내부이다.


es6 문법으로

function Food(props){
  console.log(props.fav)
  return <h1>Food</h1>
}

또는

function Food( {fav} ){
  console.log(fav)
  return <h1>Food</h1>
}
 
이런게 있다.
props.fav 또는 {} 내부에 fav를 쓰는 것은 같은 것이다.


function Food( {fav} ){
  console.log(fav)
return <h1>Food is {fav}</h1>
}

value를 html로 보여주는 방법.


<Food fav="kimchi" />
<Food fav="ramen" />
<Food fav="meat" />
<Food fav="choco" />

동적 데이터가 있는 컴포넌트가 있으므로, jsx와 props로 인해 모두 재사용할 수 있다.

컴포넌트는 대문자로 시작하는 것에 주의.

-----------------------------------------

#2.2 Dynamic Component Generation

웹사이트에 동적 데이터를 추가하는 방법.
데이터가 이미 api에서 왔다고 가정.

map은 array의 각 item에서 function을 실행하는 array를 가지는
JavaScript function이며, 그 function의 result를 갖는 array를 나에게 준다.
뭔 소리인지 이해하기 위한 과정으로 브라우저 콘솔창에서
const friends = ["dal", "mark", "lynn", "japan guy"]
입력
여기서 이름 옆에 작은 하트를 더하려고 하면,
friends.map(current =>  {
    console.log(current);
    return 0
})

또는

friends.map(function(current){
    console.log(current);
    return 0
})

실행해보면, 4개의 0을 반환한 item의 array를 가지고 있다.
map은 function을 취해서 그 function을 array의 각 item에 적용해,
한 번은 dal에, 한 번은 mark에게... 그리고 각 연산의 결과로 array를 만들고,
각 연산의 result는 0이다.

friends.map(function(friend){
    return friend + "❤"
})

실행하면
(4) ["dal❤", "mark❤", "lynn❤", "japan guy❤"]
이렇게 결과가 나타난다.

map은 array를 취하고, 내가 정확히 원하는 array를 반환한다.


function App() {
  return (
  <div>
    Hello!
    {foodILike}
    </div>
  )
}
여기서 {foodILike} 는 자바스크립트이다.

에러발생

index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`. See https://fb.me/react-warning-keys for more information.
    in Food (at App.js:43)
    in App (at src/index.js:7)
    in StrictMode (at src/index.js:6)
    
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------