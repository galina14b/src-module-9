!function(){var e=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),o=document.querySelector('input[name="amount"]');function t(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector("form").addEventListener("submit",(function(u){u.preventDefault();var a=+e.value,c=+n.value,i=+o.value;e.value="",n.value="",o.value="";for(var l=0;l<i;l++){t(l+1,a).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),a+=c}}))}();
//# sourceMappingURL=03-promises.0fe32e38.js.map
