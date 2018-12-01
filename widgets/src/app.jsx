import React from 'react';
import ReactDOM from 'react-dom';
import Widgets from './widgets';

// const widgetIdx = props => {
//   return(
//     <ul>
//     </ul>
//   )
// }

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render((<Widgets/>), root);
});
