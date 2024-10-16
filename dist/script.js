"use strict";var darkButton=document.getElementById("dark"),lightButton=document.getElementById("light"),getColorMode=function(){localStorage.getItem("colorMode")},setDarkMode=function(){document.querySelector("body").classList="dark"},setLightMode=function(){document.querySelector("body").classList="light"},setColorMode=function(){"dark"==localStorage.getItem("colorMode")?(setDarkMode(),darkButton.click()):"light"==localStorage.getItem("colorMode")&&(setLightMode(),lightButton.click())},checkMode=function(){null==localStorage.getItem("colorMode")&&(window.matchMedia("(prefers-color-scheme: light)").matches?lightButton.click:window.matchMedia("(prefers-color-scheme: dark)").matches&&darkButton.click)},checkModeChange=function(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){checkMode()}))};setColorMode(),checkMode(),checkModeChange();for(var radioButtons=document.querySelectorAll(".toggle__wrapper input"),i=0;i<radioButtons.length;i++)radioButtons[i].addEventListener("click",(function(e){document.querySelector("#dark").checked?(setDarkMode(),localStorage.setItem("colorMode","dark")):(setLightMode(),localStorage.setItem("colorMode","light"))}));//# sourceMappingURL=script.js.map