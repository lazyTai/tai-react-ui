import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/Mark.css'
import { removeClass, addClass } from '../utils/util'
var Singleton = (function () {
    var instantiated;
    function init() {
        /*这里定义单例代码*/
        if (!window.dyMark) {
            window.dyMark = document.createElement('div');
            window.dyMark.setAttribute('class', "dy-mark")
            document.body.appendChild(window.dyMark);
        }
        return {
            show: function (opacity, background) {
                addClass(window.dyMark, "active")
                window.dyMark.style.opacity = opacity || this.opacity
                window.dyMark.style.background = background || this.background
            },
            close: function () {
                removeClass(window.dyMark, "active")
            },
            opacity: .5,
            background: "#222"
        };
    }

    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    };
})();

export default Singleton.getInstance();