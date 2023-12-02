// ==UserScript==
// @name            Reload-Button-UserScript
// @description     Adds a simple reload button
// @license         AGPL-V3
// @version         1.1
// @author          John Litzow
// @namespace       https://www.searchforjohn.com/
// @homepageURL     https://github.com/CortezJEL/Reload-Button-UserScript
// @homepage        https://github.com/CortezJEL/Reload-Button-UserScript
// @website         https://github.com/CortezJEL/Reload-Button-UserScript
// @downloadURL     https://github.com/CortezJEL/Reload-Button-UserScript/raw/main/Reload_Button.js
// @updateURL       https://github.com/CortezJEL/Reload-Button-UserScript/raw/main/Reload_Button.js
// @supportURL      https://github.com/CortezJEL/Reload-Button-UserScript/issues
// @match           *://*.*/*
// @include         *://*.*/*
// @grant           GM_registerMenuCommand
// ==/UserScript==

// Reload the current page
function reload() {
  try {
    window.location.reload(false);
  } catch (e) {
    console.error("Error reloading the page:", e);
  }
}

// Fully reload the current page
function fullReload() {
  try {
    window.location.reload(true);
  } catch (e) {
    console.error("Error full reloading the page:", e);
  }
}

// Register the menu commands
GM_registerMenuCommand("Fast reload.", reload, "r");
GM_registerMenuCommand("Full reload.", fullReload, "R");
