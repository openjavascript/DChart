;(function(){
window.DC = window.DC|| {log:function(){}};
DC.PATH = DC.PATH || scriptPath();
/**
 * requirejs config.js for DC Chart Project
 */

window.requirejs && 
requirejs.config( {
    baseUrl: DC.PATH
    , urlArgs: 'v=' + new Date().getTime() 
    , paths: {
        'jquery': 'modules/jquery/1.9.1/jquery'
        , 'underscore': 'modules/underscore/1.8.3/underscore'
        , 'backbone': 'modules/backbone/1.1.2/backbone'
        , 'd3': 'modules/d3/3.5.5/d3'
        , 'dcommon': 'modules/dcommon/0.1/dcommon'
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
