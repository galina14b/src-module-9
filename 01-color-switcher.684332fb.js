!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=null,o=!1;function a(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}t.addEventListener("click",(function(){o||(o=!0,e=setInterval(a,1e3))})),n.addEventListener("click",(function(){clearInterval(e),o=!1}))}();
//# sourceMappingURL=01-color-switcher.684332fb.js.map