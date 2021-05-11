'use strict';

import React from 'react';
import ReactDom from 'react-dom';


function Logo() {
  return <img src='../public/wordLogo.png'></img>;
}

ReactDom.render(<Logo/>, document.getElementById('root'));