//ie8+
;(function(define, _win) { 'use strict'; define( 'jquery.thfreeze', [ 'underscore', 'V.log' , 'jquery.browser' ], function( _, Log ){

    $.fn.thfreeze = function( _opt ){
        var  _opts = $.extend( {
            ieFirstThPlus: -1
            , ieTopPlus: -1
            , ieLeftPlus: 1
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
            if( !_trs.length ) return;

            _h = _item.height();
            _sh = _item[0].scrollHeight;
            _stop = _item.scrollTop();

            $( document ).off( 'DOMSubtreeModified', monitorDomChange );

            if( !_sh || ( _h >= _sh ) ) return;
            _cthead = _thead.clone();
            _thead.addClass( 'thfreeze_old_head' );
            _cthead.addClass( 'thfreeze_head' );
            var _ctheadth = _cthead.find( 'th' );
            _thead.find( 'th' ).each( function( _six, _sitem ){
                var _plus = 0;
                 $.browser.msie && !_six && ( _plus = _opts.ieFirstThPlus );
                _sitem = $( _sitem );
                _ctheadth.eq( _six ).css( { width: _sitem.width() + _plus + 'px' } );
            });
            _cthead.css( {
                position: 'absolute'
                , display: 'none'
            });
            _thead.css( { visibility: 'hidden' } );

            _cthead.appendTo( _table );

            updatePosition( _thead, _cthead, _item, _opts );

            $( document ).on( 'DOMSubtreeModified', monitorDomChange );

            function monitorDomChange( _evt ){
                updatePosition( _thead, _cthead, _item, _opts );
            }

        });
    };

    function updatePosition( _thead, _cthead, _item, _opts ){
        var _thoffset, _topPlus = 0, _leftPlus = 0;

        $.browser.msie && ( $.browser.mode > 8 ) && ( _topPlus = _opts.ieTopPlus );
        $.browser.msie && ( $.browser.mode < 9 ) && ( _leftPlus = _opts.ieLeftPlus );

        _thoffset = _thead.offset();
        _cthead.css( {
            top: _thoffset.top + _item.scrollTop() + _topPlus + 'px'
            , left: _thoffset.left + _item.scrollLeft() + _leftPlus + 'px'
            //, display: 'none'
            , display: 'block'
        });

        var _tmp = [_thoffset.top, _thoffset.left, _.now(), _thead.width(), _cthead.width() ].join( ', ' ); 
        /*
        Log.log( _tmp );
        document.title = _tmp;
        */
        //alert( _tmp );
    }
    

});}( typeof define === 'function' && define.amd ? define : 
        function ( _name, _require, _cb ) { 
            typeof _name == 'function' && ( _cb = _name );
            typeof _require == 'function' && ( _cb = _require ); 
            _cb && _cb(); 
        }
        , window
    )
);


