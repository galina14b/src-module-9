const e=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),o=document.querySelector('input[name="amount"]');function n(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector("form").addEventListener("submit",(function(l){l.preventDefault(),delay=+e.value,step=+t.value,amount=+o.value,e.value="",t.value="",o.value="";for(let e=0;e<amount;e++){n(e+1,delay).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),delay+=step}}));
//# sourceMappingURL=03-promises.4653a211.js.map
