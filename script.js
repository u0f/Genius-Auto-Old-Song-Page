// ==UserScript==
// @name         Genius Auto Old Song Page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  When it detects that you are on a lyrics page, it reloads the page with the old interface.
// @author       u0f
// @include      https://genius.com/*
// @match        https://genius.com/*
// @icon         https://assets.genius.com/images/apple-touch-icon.png?1659714721
// @license      MIT
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
    const url = document.URL.split("-");
    const lastArg = url[url.length - 1];
    if(lastArg === "lyrics" || lastArg === "annotated") {
        window.location.href = `${document.URL}?bagon=1`;
    }
})();
