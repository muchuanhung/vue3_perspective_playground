(function(){"use strict";var e={634:function(e,t,n){var r=n(963),o=n(252),a=n(577);const i={class:"main"},l={class:"settings"},u={class:"settings-container"},s={class:"output"},c={class:"box-container"},p=(0,o.Uk)(" :doodle { @grid: 1x3 / 100vmax; position: absolute; top: 0; left: 0; z-index: 0; } @size: 100% 150%; position: absolute; background: @m(100, ( linear-gradient(transparent, @p( #FFFDE1@repeat(2, @p([0-9a-f])), #FB3569@repeat(2, @p([0-9a-f])) )) @r(0%, 100%) @r(0%, 100%) / @r(1px) @r(23vmin) no-repeat )); will-change: transform; animation: f 50s linear calc(-50s / @size() * @i()) infinite; @keyframes f { from { transform: translateY(-100%) } to { transform: translateY(100%) } } ");function f(e,t,n,f,d,v){const m=(0,o.up)("css-doodle");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",i,[(0,o._)("section",l,[(0,o._)("div",u,[(0,o._)("label",null,"perspective: "+(0,a.zw)(e.perspective)+" px;",1),(0,o.wy)((0,o._)("input",{type:"range",min:"0",max:"999","onUpdate:modelValue":t[0]||(t[0]=t=>e.perspective=t)},null,512),[[r.nr,e.perspective]]),(0,o._)("label",null,"rotateX: "+(0,a.zw)(e.rotateX)+" deg; ",1),(0,o.wy)((0,o._)("input",{type:"range",min:"-180",max:"180","onUpdate:modelValue":t[1]||(t[1]=t=>e.rotateX=t)},null,512),[[r.nr,e.rotateX]]),(0,o._)("label",null,"rotateY: "+(0,a.zw)(e.rotateY)+" deg; ",1),(0,o.wy)((0,o._)("input",{type:"range",min:"-180",max:"180","onUpdate:modelValue":t[2]||(t[2]=t=>e.rotateY=t)},null,512),[[r.nr,e.rotateY]]),(0,o._)("label",null,"rotateZ: "+(0,a.zw)(e.rotateZ)+" deg; ",1),(0,o.wy)((0,o._)("input",{type:"range",min:"-180",max:"180","onUpdate:modelValue":t[3]||(t[3]=t=>e.rotateZ=t)},null,512),[[r.nr,e.rotateZ]]),(0,o._)("button",{type:"button",onClick:t[4]||(t[4]=(0,r.iM)(((...t)=>e.reset&&e.reset(...t)),["prevent"]))},"Reset"),(0,o._)("button",{type:"button",onClick:t[5]||(t[5]=(0,r.iM)(((...t)=>e.copy&&e.copy(...t)),["prevent"]))},"Copy")])]),(0,o._)("section",s,[(0,o._)("div",c,[(0,o._)("div",{class:"box",style:(0,a.j5)(e.box)},null,4)])])]),(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[p])),_:1})],64)}n(596);var d=n(262),v=(0,o.aZ)({name:"App",setup(){const e=(0,d.iH)(100),t=(0,d.iH)(0),n=(0,d.iH)(0),r=(0,d.iH)(0),a=(0,o.Fl)((()=>({transform:`\n          perspective(${e.value}px)\n          rotateX(${t.value}deg)\n          rotateY(${n.value}deg)\n          rotateZ(${r.value}deg)\n        `}))),i=()=>{e.value=100,t.value=0,n.value=0,r.value=0},l=()=>{const e=document.createElement("textarea");e.setAttribute("readonly",""),e.value=`transform: ${a.value.transform}`,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)};return{perspective:e,rotateX:t,rotateY:n,rotateZ:r,box:a,reset:i,copy:l}}}),m=n(744);const b=(0,m.Z)(v,[["render",f]]);var y=b;(0,r.ri)(y).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var l=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],l=r[1],u=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var c=u(n)}for(t&&t(r);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkvue3"]=self["webpackChunkvue3"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(634)}));r=n.O(r)})();
//# sourceMappingURL=app.c67ce321.js.map