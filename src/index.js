/* eslint-disable no-console */

import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I'll pay ${courseValue} for this course!`);
