import"./assets/nav-Dj_5-SSV.js";const o=document.querySelector(".feedback-form");let t={email:"",message:""};const n=()=>{try{const e=JSON.parse(localStorage.getItem("localStorageKey"));if(e===null)return;t=e;for(const l in e)o.elements[l].value=e[l]}catch(e){console.log(e)}};n();const s=e=>{const{target:l}=e,{value:r,name:a}=l;t[a]=r.trim(),localStorage.setItem("localStorageKey",JSON.stringify(t))},m=e=>{if(e.preventDefault(),t.email===""||t.message===""){alert("Fill please all fields!");return}console.log(t),o.reset(),localStorage.removeItem("localStorageKey")};o.addEventListener("input",s);o.addEventListener("submit",m);
//# sourceMappingURL=2-snackbar.js.map
