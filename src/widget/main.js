require( "./css/spreadsheet.css" );

const React = require( "react" ),
  ReactDOM = require( "react-dom" ),
  Main = require( "./components/main" );

( function( window, document ) {
  "use strict";

  // Disable context menu (right click menu)
  window.oncontextmenu = function() {
    return false;
  };

  window.addEventListener( "WebComponentsReady", function() {
    // At this point we are guaranteed that all required polyfills have loaded,
    // all HTML imports have loaded, and all defined custom elements have upgraded
    ReactDOM.render( <Main />, document.getElementById( "mainContainer" ) );
  } );
} )( window, document );
