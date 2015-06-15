;(function(define, _win) { 'use strict'; define( 'jquery.thfreeze', [ 'underscore', 'V.log' ], function( _, Log ){

    $.fn.thfreeze = function( _opt ){
        var  _opts = $.extend( {
        }, _opt ), _p = this;

        _p.each( function( _ix, _item ){
            _item = $( _item );
            if( _item.css( 'position' ) != 'relative' ){
                _item.css( 'position', 'relative' );
            }
            _item.off( 'scroll' );

            var _h, _sh, _stop;
            _h = _item.height();
            _sh = _item[0].scrollHeight;
            _stop = _item.scrollTop();

            Log.log( _h, _sh, _stop );

            _sh = _item.scroll();
            _item.on( 'scroll', function( _evt ){
                _sh = _item[0].scrollHeight, _stop = _item.scrollTop();
                Log.log( _h, _sh, _stop );
            });
        });
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


