require( "./css/spreadsheet.css" );

const React = require( "react" ),
  ReactDOM = require( "react-dom" ),
  Main = require( "./components/main" );

( function( window, document ) {
  "use strict";

  var started = false;

  // Disable context menu (right click menu)
  window.oncontextmenu = function() {
    return false;
  };

  function start() {
    if ( !started ) {
      started = true;
      ReactDOM.render( <Main />, document.getElementById( "mainContainer" ) );
    }
  }

  window.addEventListener( "WebComponentsReady", function() {
    // At this point we are guaranteed that all required polyfills have loaded,
    // all HTML imports have loaded, and all defined custom elements have upgraded
    console.log( "web components ready!" ); // eslint-disable-line no-console
    start();
  } );

  setTimeout( function() {
    console.log( "delayed start attempt" ); // eslint-disable-line no-console
    start();
  }, 2000 );
} )( window, document );
