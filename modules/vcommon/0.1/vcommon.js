;(function(define, _win) { 'use strict'; define( 'vcommon'
    , [ 'json2', 'underscore', 'backbone', 'V.log' ], function( json, _, b, log ){

    window.V = window.V || {};
    V.log = log;

});}( typeof define === 'function' && define.amd ? define : 
        function ( _name, _require, _cb ) { 
            typeof _name == 'function' && ( _cb = _name );
            typeof _require == 'function' && ( _cb = _require ); 
            _cb && _cb(); 
        }
        , window
    )
);

