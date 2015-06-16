;(function(){
window.V = window.V|| {};
V.PATH = V.PATH || scriptPath();
/**
 * requirejs config.js for V Chart Project
 */

window.requirejs && 
requirejs.config( {
    baseUrl: V.PATH
    , urlArgs: 'v=' + new Date().getTime() 
    , paths: {
        json2: 'modules/json/2/json2'
        //, 'jquery': 'modules/jquery/1.9.1/jquery'
        , underscore: 'modules/underscore/1.8.3/underscore'
        , backbone: 'modules/backbone/1.1.2/backbone'
        , d3: 'modules/d3/3.5.5/d3'

        , 'V.log': 'modules/v.log/0.1/v.log'
        , 'V.delay': 'modules/v.delay/0.1/v.delay'

        , 'jquery.browser': 'modules/jquery.browser/0.1/jquery.browser'
        , 'jquery.thfreeze': 'modules/jquery.thfreeze/0.1/jquery.freeze'

        , vcommon: 'modules/vcommon/0.1/vcommon'

        , dtmp: 'modules/dtmp/0.1/dtmp'
    }

    , shim: {
        underscore: {
            exports: "_"
        }
        , backbone: {
            deps: ['underscore']
            , exports: 'Backbone'
        }
        , d3: {
            exports: 'd3'
        }

    }
});

/**
 * 取当前脚本标签的 src路径 
 * @static
 * @return  {string} 脚本所在目录的完整路径
 */
function scriptPath(){
    var _sc = document.getElementsByTagName('script'), _sc = _sc[ _sc.length - 1 ], _path = _sc.getAttribute('src');
    if( /\//.test( _path ) ){ _path = _path.split('/'); _path.pop(); _path = _path.join('/') + '/'; }
    else if( /\\/.test( _path ) ){ _path = _path.split('\\'); _path.pop(); _path = _path.join('\\') + '/'; }
    return _path;
}
}());
