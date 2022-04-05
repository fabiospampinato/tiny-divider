
/* IMPORT */

import divider from '../dist/index.js';

/* MAIN */

const intervalId = setInterval ( () => {

  console.log ( 'Content' );

  divider ();

}, 200 );

setTimeout ( () => {

  clearInterval ( intervalId );

}, 3000 );
