// ==UserScript==
// @name            Reload-Button-UserScript
// @description     Adds a simple reload button
// @license         AGPL-V3
// @version         1.2.2
// @author          John Litzow
// @namespace       https://www.searchforjohn.com/
// @homepageURL     https://github.com/CortezJEL/Reload-Button-UserScript
// @homepage        https://github.com/CortezJEL/Reload-Button-UserScript
// @website         https://github.com/CortezJEL/Reload-Button-UserScript
// @downloadURL     https://github.com/CortezJEL/Reload-Button-UserScript/raw/main/Reload_Button.user.js
// @updateURL       https://github.com/CortezJEL/Reload-Button-UserScript/raw/main/Reload_Button.user.js
// @supportURL      https://github.com/CortezJEL/Reload-Button-UserScript/issues
// @match           *://*.*/*
// @include         *://*.*/*
// @grant           GM_registerMenuCommand
// @sandbox         raw
// ==/UserScript==

// Clear cache function
function clearCache() {
    // Clear local storage
    localStorage.clear();

    // Clear session storage
    sessionStorage.clear();

    document.cookie.split(";").forEach(function(c) {
    document.cookie = c.trim().split("=")[0] + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    });
}

// Reload the current page
function reload() {
  try {
    // window.location.reload();
    location.reload();
  } catch (e) {
    console.error("Error reloading the page:", e);
  }
}

// Fully reload the current page
function fullReload() {
  try {
    clearCache();
    // window.location.reload(true);
    location.reload(true);
  } catch (e) {
    console.error("Error full reloading the page:", e);
  }
}

// Register the menu commands
GM_registerMenuCommand("Fast reload.", reload, "r");
GM_registerMenuCommand("Full reload.", fullReload, "R");
