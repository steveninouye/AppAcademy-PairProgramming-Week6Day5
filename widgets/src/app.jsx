import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

// const widgetIdx = props => {
//   return(
//     <ul>
//     </ul>
//   )
// }

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render((<Clock/>), root);
});
