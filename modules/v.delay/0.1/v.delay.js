;(function(define, _win) { 'use strict'; define( 'V.delay', [ 'underscore' ], function( _ ){
    return {
        timeoutItems: {}
        , intervalItems: {}

        , setTimeout: 
            function( _callback, _ms, _timeName ){
                return this._doer( _callback, _ms, _timeName, 'timeoutItems', 'setTimeout', 'clearTimeout' );
            }

        , setInterval: 
            function( _callback, _ms, _timeName ){
                return this._doer( _callback, _ms, _timeName, 'intervalItems', 'setInterval', 'clearInterval' );
            }

        , _doer:
            function( _callback, _ms, _timeName, _typeName, _funcName, _clear ){
                _timeName = _timeName || _.now();
                var _p = this;
                _p[ _typeName ][ _timeName ] && ( window[ _clear ]( _p[ _typeName ][ _timeName ] )
                    , delete _p[ _typeName ][ _timeName ] 
                );
                _p[ _typeName ][ _timeName ] = window[ _funcName ]( _callback, _ms );

                return _timeName;
            }
        , clear: 
            function( _timeName ){
                this.clearTimeout( _timeName );
                this.clearInterval( _timeName );
                return this;
            }
        , clearTimeout:
            function( _timeName ){
                this.timeoutItems[ _timeName ] 
                    && ( clearTimeout( this.timeoutItems[_timeName ]  )
                         , delete this.timeoutItems[ _timeName ]
                     );
                return this;
            }
        , clearInterval:
            function( _timeName ){
                this.intervalItems[ _timeName ]
                    && ( clearInterval( this.intervalItems[_timeName ]  )
                         , delete this.intervalItems[ _timeName ]
                     );
                return this;
            }
    };
});}( typeof define === 'function' && define.amd ? define : 
        function ( _name, _require, _cb ) { 
            typeof _name == 'function' && ( _cb = _name );
            typeof _require == 'function' && ( _cb = _require ); 
            _cb && _cb(); 
        }
        , window
    )
);

