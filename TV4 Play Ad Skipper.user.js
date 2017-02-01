// ==UserScript==
// @name         TV4 Play Ad Skipper
// @namespace    http://github.com/FLeXyo
// @version      1.0
// @description  Skip TV4 Play ads
// @author       FLeX
// @match        *://tv4play.se/*
// @match        *://www.tv4play.se/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var i = setInterval(function() {
        $("video[id*=pulseAdPlayerHTML5]:visible").each(function() {
            this.src="";
        });
    }, 1000);
})();