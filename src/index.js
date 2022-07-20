import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);






// ReactDOM.render(<App/> , document.getElementById("root"))


// App()
// <App /> => render!
// jsx =>

// const App = () => {
//   return  React.createElement('div', { id: "title", className: "app-title" }, "this is first app")
// }

// const element = React.createElement('div', { id: "title", className: "app-title" }, "this is first app")
// ReactDOM.render(element , document.getElementById('root'))