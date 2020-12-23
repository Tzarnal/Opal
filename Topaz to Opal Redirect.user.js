// ==UserScript==
// @name         Topaz To Opal Redirect
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Redirects Topaz Paste to Beryl
// @author       Tzarnal
// @match        https://topaz.github.io/paste/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var loc = window.location.href;
    var baseURL = "https://topaz.github.io/paste/#";
    var newURL = "https://tzarnal.github.io/Opal/#";

    if(loc.length > baseURL.length)
    {
        loc = loc.replace(baseURL, newURL);
        window.location.replace(loc);
    }
})();