(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom'), require('react-router-dom')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom', 'react-router-dom'], factory) :
	(factory(global.react,global.reactDom));
}(this, (function (react,reactDom) { 'use strict';

	react = react && react.hasOwnProperty('default') ? react['default'] : react;
	reactDom = reactDom && reactDom.hasOwnProperty('default') ? reactDom['default'] : reactDom;

})));
//# sourceMappingURL=index.js.map
