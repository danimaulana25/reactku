import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Test from './Test'
// import App from './App';
import HelloComponent from './component/HelloComponent';
import reportWebVitals from './reportWebVitals';

// const HelloComponent = () =>{
//   return HelloComponent
// }

class StateFullComponent extends React.Component{
  render(){
    return<p>StateFullComponent</p>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
