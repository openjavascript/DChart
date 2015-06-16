;(function(define, _win) { 'use strict'; define( 'jquery.thfreeze', [ 'underscore', 'V.log' ], function( _, Log ){

    $.fn.thfreeze = function( _opt ){
        var  _opts = $.extend( {
        }, _opt ), _p = this;

        _p.each( function( _ix, _item ){
            _item = $( _item );
            var _h, _sh, _stop, _hasThead
                , _trs, _thead, _cthead, _table
                , _thoffset
                ;
            _table = _item.find( '> table' );
            _hasThead = _item.find( '> table > thead' ).length;
            if( !_hasThead ) return;
            _thead = _item.find( '> table > thead' );
            _trs = _item.find( '> table > tbody > tr' );
            _item.off( 'scroll' );
            if( !_trs.length ) return;

            _h = _item.height();
            _sh = _item[0].scrollHeight;
            _stop = _item.scrollTop();

            if( !_sh || ( _h >= _sh ) ) return;
            _thoffset = _thead.offset();
            _cthead = _thead.clone();
            _cthead.addClass( 'thfreeze_head' );
            _cthead.css( {
                position: 'fixed'
                , top: _thoffset.top + 'px'
                , left: _thoffset.left + 'px'
            });
            _thead.css( { visibility: 'hidden' } );
            var _ctheadth = _cthead.find( 'th' );
            _thead.find( 'th' ).each( function( _six, _sitem ){
                _sitem = $( _sitem );
                _ctheadth.eq( _six ).css( { width: _sitem.width() + 'px' } );
            });
            _cthead.prependTo( _table );

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


