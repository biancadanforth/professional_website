var app=app?app:{},storedTasksString=window.localStorage.getItem("submittedTasks");if(!storedTasksString){var storedTasks={};window.localStorage.setItem("submittedTasks",JSON.stringify(storedTasks))}app.store={getTasks:function(){var e=window.localStorage.getItem("submittedTasks"),t=JSON.parse(e);return t},setTasks:function(e){var t=JSON.stringify(e);window.localStorage.setItem("submittedTasks",t)},getTask:function(e){var t=app.store.getTasks(),n=t[e];return n},setTask:function(e,t){var n=app.store.getTasks();n[e]=t,app.store.setTasks(n)},deleteTask:function(e){var t=app.store.getTasks();delete t[e],app.store.setTasks(t)},getTaskCounter:function(){var e=window.localStorage.getItem("taskCounter"),t=app.store.getTasks();return null!==e&&Object.keys(t).length?e:0},incrementTaskCounter:function(){var e=app.store.getTaskCounter();e++,window.localStorage.setItem("taskCounter",e)}},!function(){"use strict";function e(e){var t=n(e);v.appendChild(t);var c=i(e);t.appendChild(c);var u=a(e);t.appendChild(u);var m=s(e);u.appendChild(m),r("/to-do-list/images/checkmark.svg",m);var p=o(e,t);t.appendChild(p),p.focus();var g=d(e);t.appendChild(g);var b=l(e);t.appendChild(b),r("/to-do-list/images/delete-icon.svg",b),setTimeout(function(){t.classList.remove("hidden"),t.removeAttribute("aria-hidden")},50)}function t(){k();var t=app.store.getTaskCounter();e(t),app.store.incrementTaskCounter()}function n(e){var t=document.createElement("div");return t.setAttribute("id","task-container-"+e),t.setAttribute("class","task-container hidden"),t.setAttribute("aria-hidden","true"),t}function i(e){var t=document.createElement("input");return t.setAttribute("type","checkbox"),t.setAttribute("id","real-checkbox-"+e),t}function a(e){var t=document.createElement("span");return t.setAttribute("class","checkbox hidden"),t.setAttribute("id","fake-checkbox-"+e),t.setAttribute("title","Complete task"),t.setAttribute("aria-hidden","true"),t.setAttribute("aria-label","Complete"),t.style.display="none",t.onclick=function(){u(e)},t}function s(e){var t=document.createElement("span");return t.setAttribute("class","checkmark-icon-wrapper"),t.setAttribute("id","checkmark-icon-wrapper-"+e),t}function r(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.overrideMimeType("image/svg+xml"),n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE&&200===n.status){var e=n.responseXML.documentElement;e.setAttribute("aria-hidden","true"),t.appendChild(e)}},n.send()}function o(e){var t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("id","list-item-input-"+e),t.setAttribute("class","list-item"),t.setAttribute("placeholder","Enter task here.");var n=!1;return document.body.addEventListener("submit",function(){n=!0}),t.onblur=function(){n||b(e)},t.onkeyup=function(n){var i=n.keyCode,a=t.value;p(i,a,e)},t}function d(e){var t=document.createElement("p");return t.setAttribute("id","list-item-label-"+e),t.setAttribute("class","list-item hidden"),t.setAttribute("aria-hidden","true"),t.onclick=function(){g(t.textContent,e)},t}function l(e){var t=document.createElement("a");return t.setAttribute("class","hidden"),t.setAttribute("id","delete-icon-wrapper-"+e),t.setAttribute("title","Delete task"),t.setAttribute("aria-hidden","true"),t.setAttribute("aria-label","Delete"),t.style.display="none",t.onclick=function(){c(e,!0)},t}function c(e,t){var n=document.getElementById("task-container-"+e);n.classList.add("hidden"),n.setAttribute("aria-hidden","true");var i=document.getElementById("list-item-label-"+e).textContent.toString(),a=document.getElementById("real-checkbox-"+e).checked;if(app.store.deleteTask(e),t){var s=new CustomEvent("delete",{detail:{task:{id:e,complete:a,text:i}}});document.body.dispatchEvent(s)}}function u(e,t){var n=document.getElementById("real-checkbox-"+e),i=(document.getElementById("fake-checkbox-"+e),document.getElementById("checkmark-icon-wrapper-"+e));if(n.checked===!1){if(n.checked=!0,i.style.visibility="visible",document.getElementById("list-item-label-"+e).classList.add("complete"),!t){var a=app.store.getTask(e);a.complete=!0,app.store.setTask(e,a)}}else if(n.checked=!1,i.style.visibility="hidden",document.getElementById("list-item-label-"+e).classList.remove("complete"),!t){var a=app.store.getTask(e);a.complete=!1,app.store.setTask(e,a)}}function m(e,t,n){var i=document.getElementById("list-item-label-"+t),a=document.getElementById("list-item-input-"+t),s=document.getElementById("delete-icon-wrapper-"+t),r=document.getElementById("fake-checkbox-"+t),o=document.getElementById("real-checkbox-"+t);if(o.setAttribute("aria-label",e),i.textContent="",i.textContent=e,!n){var d={id:t,complete:o.checked,text:e};app.store.setTask(t,d)}s.style.display="inline-block",r.style.display="inline-block",setTimeout(function(){s.classList.toggle("hidden"),s.removeAttribute("aria-hidden"),r.classList.toggle("hidden"),r.removeAttribute("aria-hidden")},25),i.classList.toggle("hidden"),i.removeAttribute("aria-hidden"),a.classList.toggle("hidden"),a.setAttribute("aria-hidden","true")}function p(e,n,i){var a=document.getElementById("list-item-input-"+i);if(""!==n&&13===e){var s=new CustomEvent("submit");document.body.dispatchEvent(s),m(n,i);var r=v.lastChild.id,o=r.split("-")[2];i.toString()===o&&t()}else""===n&&13===e&&(a.classList.add("bounce"),setTimeout(function(){a.classList.remove("bounce")},1e3))}function g(e,t){var n=document.getElementById("list-item-label-"+t),i=document.getElementById("list-item-input-"+t),a=document.getElementById("delete-icon-wrapper-"+t),s=document.getElementById("fake-checkbox-"+t);document.getElementById("task-container-"+t);i.value=e,a.style.display="none",s.style.display="none",a.classList.toggle("hidden"),a.setAttribute("aria-hidden","true"),s.classList.toggle("hidden"),s.setAttribute("aria-hidden","true"),n.classList.toggle("hidden"),n.setAttribute("aria-hidden","true"),i.classList.toggle("hidden"),i.removeAttribute("aria-hidden"),i.focus();var r=!1;document.body.addEventListener("submit",function(){r=!0}),i.onblur=function(){r||b(t)}}function b(e){var n=document.getElementById("list-item-input-"+e),i=document.getElementById("task-container-"+e),a=n.value;if(""!==a){m(a,e);var s=v.lastChild.id,r=s.split("-")[2];e.toString()===r&&t()}1!==v.children.length&&v.lastChild!==i&&""===a&&"list-item"===n.classList.toString()&&c(e,!1)}function k(){window.scrollTo(0,document.body.scrollHeight)}var v=document.getElementById("list-container"),h=app.store.getTasks(),f=[];for(var y in h)if(h.hasOwnProperty(y)){var E=h[y];f.push([y,E])}f.sort(function(e,t){var n=parseInt(e[0],10),i=parseInt(t[0],10);return n-i});for(var T=0;T<f.length;T++){var y=f[T][0],E=f[T][1];e(y),m(E.text,y,!0),E.complete&&u(y,!0)}t()}();