var KEY_UP=38,KEY_DOWN=40,KEY_ENTER=13,ELEMENT_NODE=1,KEY_ESCAPE=27,KEY_F4=115;function openCombo(e,t,o){var i=document.getElementById(t);if(!i.disabled){var l=gComboEx=document.getElementById(o),n="block"==l.style.display;gItemNum=(n?setStyle(l,"display","none",""):showCombo(i,l),-1),gFocusItem=i,setTimeout(function(){doFocus()},0)}}var g_iField=null,g_cb=null;function showCombo(e,t){g_cb=t,(g_iField=e).addEventListener("move",function(e){realShowCombo()},!1),realShowCombo()}function getY(e){for(var t=0;null!=e;)t+=e.offsetTop,e=e.offsetParent;return t}function getX(e){for(var t=0;null!=e;)t+=e.offsetLeft,e=e.offsetParent;return t}function realShowCombo(){var e=getY(g_iField),t=getX(g_iField),o=e+g_iField.offsetHeight+"px",i=t+"px";g_cb.style.minWidth=g_iField.offsetWidth+"px",setStyle(g_cb,"top",o,""),setStyle(g_cb,"left",i,""),setStyle(g_cb,"display","block","")}var gItemNum=0,gComboEx=null;function focusCombo(e,t,o){var i=e.keyCode,l=!0,n=gComboEx=document.getElementById(o);if(i==KEY_DOWN||i==KEY_F4){var s;l=!1,"block"==n.getAttribute("style.display")||showCombo(t,n);for(var d=n.childNodes,a=d.length,m=0;null!=d[m]&&m<a;){if(d[m].nodeType==ELEMENT_NODE&&"item"==d[m].className){gFocusItem=d[m];break}m++}gItemNum=0,setTimeout(function(){doFocus()},0),l=!1}else i==KEY_ENTER||i==KEY_ESCAPE&&(null!=t.val&&0<t.val.length?l=!0:(l=!1,setStyle(gComboEx,"display","none",""),gItemNum=-1));return l}function focusItem(e,t,o){for(var i=o.val,l=null,n=getItems(t),s=n.length,d=!1,a=0;a<s;a++)if(n[a].hasChildNodes()&&n[a].firstChild.nodeValue==i){d=!0,l=n[a],gItemNum=a;break}if(d||(l=addItem(t,i,n.length),gItemNum=n.length),null!=l){if(gFocusItem=l,"block"!=gComboEx.getAttribute("style.display")){var m=o.offsetTop+o.offsetHeight+"px",c=o.offsetLeft+"px";setStyle(t,"top",m,""),setStyle(t,"left",c,"")}else setStyle(t,"display","none","");setStyle(t,"display","block",""),setTimeout(function(){doFocus()},0)}}function addItem(e,t,o,i){var l=(i=i||document).createElement("div"),n=void 0!==t.label?t.label:t,s=void 0!==t.label?t.value:t;if(l.val=s,l.label=n,void 0!==t.label&&(l.label=t.label,void 0!==t.image)){var d=i.createElement("img");d.src=t.image,d.style.paddingRight="15px",l.appendChild(d),l.img=d.src}var a=i.createTextNode(n);return l.appendChild(a),l.setAttribute("tabindex","-1"),l.setAttribute("class","item"),l.setAttribute("data-lpcount",o),l.addEventListener("click",function(){gItemNum=this.getAttribute("data-lpcount")}),l.addEventListener("mouseover",function(){gFocusItem=this,doFocus()}),l.setAttribute("role","listitem"),l.style.overflow="hidden",e.appendChild(l),l}function doComboNav(e,t,o){var i=e.keyCode,l=!0;if(null==gComboEx&&(gComboEx=t),i==KEY_UP||i==KEY_DOWN){l=!1;var n=0,s,d=(s=getItems(gComboEx)).length;i==KEY_UP?n=gItemNum-1:(n=gItemNum+1)==d&&(n=-1),gFocusItem=-1==(gItemNum=n)?document.getElementById(o):s[n],setTimeout(function(){doFocus()},0)}else if(i==KEY_ENTER||!e.keyCode&&0<=e.button){var s,a=(s=getItems(gComboEx))[gItemNum];if(null!=a&&"true"!=a.getAttribute("aria-disabled")){var m=a.label,c=a.val,r=document.getElementById(o);r.value=m,r.val=c,void 0!==a.img&&(r.style.background="url("+a.img+") no-repeat 2px 5px",r.style.paddingLeft="25px"),r.onchange&&r.onchange(),setStyle(gComboEx,"display","none",""),gItemNum=0,gFocusItem=r,setTimeout(function(){doFocus()},0)}}else i==KEY_ESCAPE&&(l=!1,setStyle(t,"display","none",""),gItemNum=0,gFocusItem=document.getElementById(o),setTimeout(function(){doFocus()},0));return l}function getItems(e){for(var t=new Array,t=new Array,o=e.childNodes,i=o.length,l=0;l<i;l++)o[l].nodeType!=ELEMENT_NODE||"item"!=o[l].getAttribute("class")&&"item focus"!=o[l].getAttribute("class")||(t[t.length]=o[l]);return t}function setStyle(e,t,o,i){var l=!1;try{e.style&&e.style.setProperty&&(e.style.setProperty(t,o,i),l=!0)}catch(e){alert("exception caught setting style: "+e.message)}if(!l)try{e.style[t]=o,l=!0}catch(e){alert("exception caught setting direct style: "+e.message)}return l}var gFocusItem=null,gLastFocusItem=null;function doFocus(){null!=gFocusItem&&(gFocusItem.focus(),gLastFocusItem&&"item focus"==gLastFocusItem.className&&(gLastFocusItem.className="item"),gFocusItem&&"item"==gFocusItem.className&&(gFocusItem.className="item focus"),gLastFocusItem=gFocusItem,gFocusItem=null)}function create_combo(e,t,o,i,l){l=l||"";var n=(i=i||document).getElementById(e),s=e+"_combo";if(!i.getElementById(s)){n.onkeydown=function(e){return focusCombo(e,this,this.id+"_combo")},n.setAttribute("role","textfield"),n.setAttribute("aria-haspopup","true"),n.setAttribute("autocomplete","off"),n.style.marginRight="0px";var d=n.style.width.replace(/px/,"");if(""==d)try{var a;d=n.ownerDocument.defaultView.getComputedStyle(n,"").width.replace(/px/,"")}catch(e){}var m=i.createElement(l+"div");m.setAttribute("role","list"),m.style.display="none",m.setAttribute("id",s),m.setAttribute("class","dropStyle"),m.onkeydown=function(e){return doComboNav(e,this,this.id.substring(0,this.id.length-6))},m.addEventListener("click",function(e){doComboNav(e,this,this.id.substring(0,this.id.length-6))}),m.style.paddingLeft="6px",m.style.paddingRight="6px",m.style.position="absolute",void 0!==i.body&&i.body?i.body.appendChild(m):i.getElementById("main").appendChild(m),n.ownerDocument.defaultView.addEventListener("click",function(){close_combo(e,i)},!1);for(var c=0;c<t.length;c++)addItem(m,t[c],c,i);var r=i.createElement(l+"img");r.id=e+"_button",r.onclick=function(e){openCombo(e,this.id.substring(0,this.id.length-7),this.id.substring(0,this.id.length-7)+"_combo"),e.cancelBubble=!0};var u=("undefined"==typeof gLocalBaseUrl?"":gLocalBaseUrl)+"images/pwdrop.png";if("undefined"!=typeof g_isie&&g_isie&&(u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzRGRTU3Q0E0MEExMUUwOTJDNjk3MDYyMDFDNUI4RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNzRGRTU3REE0MEExMUUwOTJDNjk3MDYyMDFDNUI4RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjVFMTE0Q0M3QTQwOTExRTA5MkM2OTcwNjIwMUM1QjhFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVFMTE0Q0M4QTQwOTExRTA5MkM2OTcwNjIwMUM1QjhFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+I6ppiQAAAZhJREFUeNq0lc8rhEEcxve1m4sfB+IgFFk32oui9kDZiz1Jb36Ui4MLOSgcnNQWN7LlKJSD9kI4yUnKCVc54B/YZLc44PWZmrfeppl53zb71KfpffvO8z47890Zx/O8WDWUCD4UCgVdTQMMwCykoA3e4RXO4RJerMYadcMhDCq1rdALo7AmOYEfv6DGYroIT5C2BBDz2+EYzqA5zHgFdiP8oqCycmnqTcbDsAVOBXs2BHs6Y2F2FLJEYZqGjGowAR3/0GkLCc2GBVWEpOu6RZMLLdrH8ADxwOsRNXFSeW6CXEjCTcVUqFE1rtNMnCdVypA2K7tB24dhEmnyGtNahp2YpcGDKhnq0hjNKO+WoSeq8bMleU6mFGlbGNYttR+qcd5S3CVTCm34/zCDrp3gsSlPtzfoNEwow5Q8F+KGml8Y022eWMtvwySR8sJiKrQPVzrjW1iFSm6AG1gSqU3ttg1z8BXR0JPnsejpz7A+PoB+OPWLDYaPMCkPn1LUG0S037jcTPGRjFxnsUF3cC9ryupEp1qX6Z8AAwCnLFoADB2D+gAAAABJRU5ErkJggg=="),r.setAttribute("src",u),r.setAttribute("valign","middle"),"undefined"!=typeof g_isopera&&g_isopera&&(r.style.position="relative",r.style.top="7px"),n.nextSibling?n.parentNode.insertBefore(r,n.nextSibling):n.parentNode.appendChild(r),o&&"undefined"!=typeof getAbsolutePos){var g=22,b=getAbsolutePos(i,n),p;if(null!=b&&0<b.left&&0<b.top)p=b.left+b.width-2-22,r.style.left=p+"px",r.style.position="absolute";var h=Math.floor((22-b.height)/2);1<=h&&b.height<22&&(r.style.height=b.height+"px",r.style.width=b.height+"px",r.style.top=b.top+h+"px",p=b.left+b.width-2-22+h,r.style.left=p+"px");var f=Math.round((b.height-22)/2);22<b.height&&(r.style.top=b.top+f+"px"),n.style.paddingRight="24px",n.style.textOverflow="ellipsis",n.style.whiteSpace="nowrap",n.style.overflow="hidden"}}}function delete_combo_item(e,t){var o=e+"_combo",i=document.getElementById(o);if(i)for(var l=getItems(i),n=0;n<l.length;n++)if(l[n].innerHTML==t){for(l.splice(n,1);i.hasChildNodes();)i.removeChild(i.firstChild);for(var s=0;s<l.length;s++)addItem(i,l[s].innerHTML,s);break}}function close_combo(e,t){var o=e+"_combo",i=(t=t||document).getElementById(o),l;i&&"block"==i.style.display&&(setStyle(i,"display","none",""),gItemNum=-1)}function repopulate_combo(e,t,o){var i=e+"_combo",l=(o=o||document).getElementById(i);if(l){for(;l.hasChildNodes();)l.removeChild(l.firstChild);for(var n=0;n<t.length;n++)addItem(l,t[n],n,o)}}function destroy_combo(e,t){if(t=t||document,!(null==e||e.length<=0))try{var o=e+"_combo",i=t.getElementById(o);if(i){for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.parentNode.removeChild(i)}var l=e+"_button",n=t.getElementById(l);n&&n.parentNode.removeChild(n)}catch(e){console.log("destroy_combo error: "+e.message)}}
//# sourceMappingURL=sourcemaps/combobox.js.map
