import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render: 컴포넌트를 페이지에 렌더링하는 역할.
// 첫번째 파라미터는 JSX를 렌더링할 document 내부요소를 설정
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React.StrictMode: 리액트의 래거시 기능들을 사용하지 못하게 하는 기능
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
