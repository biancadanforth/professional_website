var app=app?app:{};!function(){"use strict";function e(){d.classList.add("search-link-active"),a.classList.remove("hidden"),a.removeAttribute("aria-hidden"),a.focus()}function t(){""===a.value&&(d.classList.remove("search-link-active"),a.classList.add("hidden"),a.setAttribute("aria-hidden","true"))}function s(){if(!a.classList.contains("hidden")){var e=a.value.toLowerCase(),t=app.store.getTasks();for(var s in t){var d=t[s].text.toLowerCase(),r=document.getElementById("task-container-"+s);-1===d.indexOf(e)&&""!==e?(r.classList.add("hidden"),r.setAttribute("aria-hidden","true"),r.classList.add("search")):(r.classList.remove("hidden"),r.removeAttribute("aria-hidden"),r.classList.remove("search")),""===e&&(r.classList.remove("hidden"),r.removeAttribute("aria-hidden"),r.classList.remove("search"))}i(e)}}function i(e){for(var t=0;t<r.children.length-1;t++)if(!r.children.item(t).classList.contains("hidden"))return n.classList.add("hidden"),n.setAttribute("aria-hidden","true"),n.classList.add("search"),r.classList.remove("hidden"),r.removeAttribute("aria-hidden"),void r.classList.remove("search");return""===e?(n.classList.add("hidden"),n.setAttribute("aria-hidden","true"),n.classList.add("search"),r.classList.remove("hidden"),r.removeAttribute("aria-hidden"),void r.classList.remove("search")):(n.classList.remove("hidden"),n.removeAttribute("aria-hidden"),n.classList.remove("search"),r.classList.add("hidden"),r.setAttribute("aria-hidden","true"),void r.classList.add("search"))}var d=document.getElementById("search-link"),a=document.getElementById("search-box"),r=document.getElementById("list-container"),n=document.getElementById("no-results");d.onclick=e,a.onblur=t,a.oninput=s,document.body.addEventListener("delete",s),document.body.addEventListener("undo",s)}();