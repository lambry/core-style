!function(){var e,t={907:function(e,t,n){"use strict";var r=window.wp.hooks,o=window.wp.i18n,l=window.wp.element,i=window.wp.primitives,a=(0,l.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(i.Path,{d:"M12.5 3.9L6.7 9.7l1.1 1.1 4-4V20h1.4V6.7l4.5 4.1 1.1-1.1z"})),c=(0,l.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(i.Path,{d:"M14.3 6.7l-1.1 1.1 4 4H4v1.5h13.3l-4.1 4.4 1.1 1.1 5.8-6.3z"})),s=(0,l.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(i.Path,{d:"M16.2 13.2l-4 4V4h-1.5v13.3l-4.5-4.1-1 1.1 6.2 5.8 5.8-5.8-1-1.1z"})),d=(0,l.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(i.Path,{d:"M20 10.8H6.7l4.1-4.5-1.1-1.1-5.8 6.3 5.8 5.8 1.1-1.1-4-3.9H20z"}));const p=["core/group","core/cover"],u={shiftBlock:{type:"string",default:""},maxWidth:{type:"string",default:""},paddingTop:{type:"string",default:""},paddingRight:{type:"string",default:""},paddingBottom:{type:"string",default:""},paddingLeft:{type:"string",default:""},marginTop:{type:"string",default:""},marginRight:{type:"string",default:""},marginBottom:{type:"string",default:""},marginLeft:{type:"string",default:""}},f=[{label:(0,o.__)("-"),value:""},{label:(0,o.__)("sm"),value:"sm"},{label:(0,o.__)("md"),value:"md"},{label:(0,o.__)("lg"),value:"lg"}],g={up:{icon:a,title:(0,o.__)("Shift up")},right:{icon:c,title:(0,o.__)("Shift right")},down:{icon:s,title:(0,o.__)("Shift down")},left:{icon:d,title:(0,o.__)("Shift left")}};(0,r.addFilter)("blocks.registerBlockType","lambry/core-style",((e,t)=>{if(!p.includes(t))return e;const n={...e.attributes,...u};return{...e,attributes:n}}));var m=window.wp.compose,h=window.wp.blockEditor,v=window.wp.components,w=(0,l.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(i.Path,{d:"M2 11.2v1.5h20v-1.5H2zM5.5 6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v3H20V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v3h1.5V6zm2 14h2v-1.5h-2V20zm3.5 0h2v-1.5h-2V20zm7-1.5V20c1.1 0 2-.9 2-2h-1.5c0 .3-.2.5-.5.5zm.5-2H20V15h-1.5v1.5zM5.5 18H4c0 1.1.9 2 2 2v-1.5c-.3 0-.5-.2-.5-.5zm0-3H4v1.5h1.5V15zm9 5h2v-1.5h-2V20z"}));function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}(0,r.addFilter)("editor.BlockEdit","lambry/core-style",(0,m.createHigherOrderComponent)((e=>t=>{const{name:n,attributes:{shiftBlock:r,maxWidth:i,paddingTop:a,paddingRight:c,paddingBottom:s,paddingLeft:d},setAttributes:u}=t;return p.includes(n)?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(e,t),(0,l.createElement)(h.BlockControls,null,(0,l.createElement)(v.DropdownMenu,{className:"components-toolbar",icon:r?g[r].icon:w,label:"Shift block",controls:Object.keys(g).map((e=>({...g[e],isActive:r===e,onClick:()=>u({shiftBlock:e})})))})),(0,l.createElement)(h.InspectorControls,null,(0,l.createElement)(v.PanelBody,{title:(0,o.__)("Display")},(0,l.createElement)("h4",null,(0,o.__)("Padding")),(0,l.createElement)("div",{style:{display:"flex",gap:"5px"}},(0,l.createElement)(v.SelectControl,{label:(0,o.__)("Top"),value:a,options:f,onChange:e=>u({paddingTop:e})}),(0,l.createElement)(v.SelectControl,{label:(0,o.__)("Right"),value:c,options:f,onChange:e=>u({paddingRight:e})}),(0,l.createElement)(v.SelectControl,{label:(0,o.__)("Bottom"),value:s,options:f,onChange:e=>u({paddingBottom:e})}),(0,l.createElement)(v.SelectControl,{label:(0,o.__)("Left"),value:d,options:f,onChange:e=>u({paddingLeft:e})})),(0,l.createElement)(v.SelectControl,{label:(0,o.__)("Max width"),value:i,options:f,onChange:e=>u({maxWidth:e})})))):(0,l.createElement)(e,t)})));var b=n(184),_=n.n(b);const E=(e,t="")=>{const{shiftBlock:n,maxWidth:r,paddingTop:o,paddingRight:l,paddingBottom:i,paddingLeft:a}=e;return _()(t,{[`shift-${n}`]:n,[`max-width-${r}`]:r,[`padding-top-${o}`]:o,[`padding-right-${l}`]:l,[`padding-bottom-${i}`]:i,[`padding-left-${a}`]:a})};(0,r.addFilter)("editor.BlockListBlock","lambry/core-style",(0,m.createHigherOrderComponent)((e=>t=>{const{attributes:n,name:r}=t;if(!p.includes(r))return(0,l.createElement)(e,t);const o=E(n);return(0,l.createElement)(e,y({},t,{className:o}))})));var x=window.lodash;(0,r.addFilter)("blocks.getSaveContent.extraProps","lambry/core-style",((e,t,n)=>{if(!p.includes(t.name))return e;const r=E(n,e.className);return(0,x.assign)(e,{className:r})}))},184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var a in n)r.call(n,a)&&n[a]&&e.push(a);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,n,o,l){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],l=e[d][2];for(var a=!0,c=0;c<n.length;c++)(!1&l||i>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(a=!1,l<i&&(i=l));if(a){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,o,l]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,46:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,i=n[0],a=n[1],c=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var d=c(r)}for(t&&t(n);s<i.length;s++)l=i[s],r.o(e,l)&&e[l]&&e[l][0](),e[i[s]]=0;return r.O(d)},n=self.webpackChunkcore_style=self.webpackChunkcore_style||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[46],(function(){return r(907)}));o=r.O(o)}();