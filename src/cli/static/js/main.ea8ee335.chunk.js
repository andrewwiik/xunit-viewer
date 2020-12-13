(this["webpackJsonpxunit-viewer"]=this["webpackJsonpxunit-viewer"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(56),r=a.n(i),c=(a(66),a(67),a(69),a(3)),l=(a(57),a(70),a(71),function(){return n.a.createElement("svg",{className:"logo",width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("rect",{width:"64",height:"64",fill:"#2C3E50"}),n.a.createElement("path",{d:"M19.0625 28.9688L24.5156 20.25H28.0469L20.8594 31.5312L28.2188 43H24.6562L19.0625 34.125L13.4375 43H9.89062L17.2656 31.5312L10.0625 20.25H13.5781L19.0625 28.9688Z",fill:"#0DBF1F"}),n.a.createElement("path",{d:"M42.4344 39.0156L48.9344 20.25H52.2156L43.7781 43H41.1219L32.7 20.25H35.9656L42.4344 39.0156Z",fill:"#B32010"}),n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 64L4 60V4H60L64 0H4H0V4V64Z",fill:"#0DBF1F"}),n.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 64H60H64V60V0L60 4V60H4L0 64Z",fill:"#B32010"}))}),o=function(){return n.a.createElement("i",{className:"fas fa-filter"})},u=function(e){var t=e.active,a=e.onClick,s=e.title,i=e.brand;return n.a.createElement("section",{className:"hero is-black"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"columns is-mobile"},n.a.createElement("div",{className:"column is-1"},n.a.createElement("button",{className:"filter button has-text-white",onClick:a},n.a.createElement("span",null,n.a.createElement(o,null)," ",t?"CLOSE":"FILTER"))),n.a.createElement("div",{className:"column is-11"},n.a.createElement("div",{className:"hero-center"},null!==i?n.a.createElement("img",{className:"brand",alt:s,src:i}):n.a.createElement(l,null),n.a.createElement("h1",{className:"title"},s))))))},p=a(58),m=a(9),d=a.n(m),f=a(59),v=a(19),E=a(6),g=a.n(E);a(73);var b=window.parse,h=function(){var e=Object(v.a)(d.a.mark((function e(t,a,s){var n,i,r,c,l,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(f.a)(a),e.prev=1,n.s();case 3:if((i=n.n()).done){e.next=17;break}return r=i.value,c=r.file,l=r.contents,e.prev=5,e.next=8,b(l);case 8:o=e.sent,s=g.a.recursive(!0,s,o),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log("Failed to parse",c,"\n",e.t0.message);case 15:e.next=3;break;case 17:e.next=22;break;case 19:e.prev=19,e.t1=e.catch(1),n.e(e.t1);case 22:return e.prev=22,n.f(),e.finish(22);case 25:t({type:"parse-suites",payload:{suites:s.suites}});case 26:case"end":return e.stop()}}),e,null,[[1,19,22,25],[5,12]])})));return function(t,a,s){return e.apply(this,arguments)}}(),y=function(e){var t=e.active,a=e.onIcon,s=e.offIcon,i=e.onLabel,r=e.offLabel,c=e.disabled,l=void 0!==c&&c,o=e.onChange,u=void 0===o?function(){}:o,p=e.className,m=void 0===p?"":p;return n.a.createElement("button",{onClick:function(){u(!t)},disabled:l,className:"button toggle is-".concat(t?"active":"inactive"," ").concat(m)},n.a.createElement("div",{className:"toggle-rail"},n.a.createElement("div",{className:"toggle-handle"})),t?a:s,n.a.createElement("span",null,t?i:r))},N=function(e){var t=e.label,a=e.dispatch;return n.a.createElement("div",{className:"field options-search"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{onChange:function(e){a({type:"search-properties",payload:{value:e.target.value}})},className:"input",type:"text",placeholder:t})))},w=function(e){var t=e.count,a=e.total;return n.a.createElement("div",{className:"options-total"},n.a.createElement("b",null,t),n.a.createElement("span",null,"/",a))},O=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-eye"}))},k=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-eye-slash"}))},j=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-chevron-up"}))},x=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-chevron-down"}))},S=function(e){var t=e.type,a=e.label,s=e.propertiesVisible,i=e.propertiesExpanded,r=e.dispatch;return n.a.createElement("div",null,n.a.createElement("div",{className:"properties-options-toggle-label"},n.a.createElement("span",null,a)),n.a.createElement(y,{className:"properties-options-toggle",active:s[t],onChange:function(){r({type:"toggle-properties-visbility",payload:{type:t,active:!s[t]}})},onLabel:"Visible",offLabel:"Hidden",onIcon:n.a.createElement(O,null),offIcon:n.a.createElement(k,null)}),n.a.createElement(y,{onChange:function(){r({type:"toggle-all-properties",payload:{type:t,active:!i[t]}})},className:"properties-options-toggle",active:i[t],onLabel:"Expanded",offLabel:"Contracted",offIcon:n.a.createElement(j,null),onIcon:n.a.createElement(x,null)}))},_=function(e){var t=e.count,a=void 0===t?0:t,s=e.total,i=void 0===s?0:s,r=e.active,c=void 0!==r&&r,l=e.dispatch,o=e.propertiesExpanded,u=void 0===o?{all:!0,suites:!0,tests:!0}:o,p=e.propertiesVisible,m=void 0===p?{all:!0,suites:!0,tests:!0}:p;return n.a.createElement("div",{className:"options card ".concat(c?"is-active":"is-inactive")},n.a.createElement("header",{className:"card-header"},n.a.createElement(N,{label:"Properties",dispatch:l}),n.a.createElement("button",{onClick:function(){return l({type:"toggle-properties-options"})},className:"button card-header-icon"},n.a.createElement("div",{className:"options-inputs"},n.a.createElement(w,{count:a,total:i})),n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-angle-down"})))),n.a.createElement("div",{className:"card-content"},c?n.a.createElement("div",null,n.a.createElement(S,{type:"all",label:"All",propertiesVisible:m,propertiesExpanded:u,dispatch:l}),n.a.createElement(S,{type:"suites",label:"Suites",propertiesVisible:m,propertiesExpanded:u,dispatch:l}),n.a.createElement(S,{type:"tests",label:"Tests",propertiesVisible:m,propertiesExpanded:u,dispatch:l})):null))},T=a(10),L=a.n(T),C=function(e,t,a,s,n){return a[s]=e[s],a[s][t.type]=t.active,"all"===t.type&&(a[s].suites=t.active,a[s].tests=t.active),"all"!==t.type&&"suites"!==t.type||Object.values(a.currentSuites).forEach((function(e){e.properties[n]=t.active})),"all"!==t.type&&"tests"!==t.type||Object.values(a.currentSuites).forEach((function(e){Object.values(e.tests).forEach((function(e){"properties"in e&&(e.properties[n]=t.active)}))})),a},A=function(e,t){var a=t.type,s=t.payload,n={};if(n.currentSuites=e.currentSuites,"parse-suites"===a){(e=g.a.recursive(!0,{},e)).suites=s.suites,e.currentSuites=s.suites;for(var i=function(){var t=l[r];s=e.testToggles[t],console.log(s),Object.values(e.currentSuites).forEach((function(e){Object.values(e.tests).forEach((function(e){"all"===t?(e.visible=s.visible,e.active=s.expanded,e.raw=s.raw):t===e.status?(e.visible=s.visible,e.active=s.expanded,e.raw=s.raw,console.log(s.status),console.log(e)):"undefined"===typeof e.status&&"unknown"===t&&(e.visible=s.visible,e.active=s.expanded,e.raw=s.raw)}))}))},r=0,l=["all","passed","skipped","failure","error","unknown"];r<l.length;r++)i();return n.currentSuites=e.currentSuites,n=C(e,{type:"all",active:!1},n,"propertiesVisible","_visible"),e=g.a.recursive(!0,e,n),Object.values(e.currentSuites).forEach((function(t){t.active=e.suitesExpanded})),Object.values(e.currentSuites).forEach((function(t){e.suitesEmpty?t._visible=Object.keys(t.tests).length>0&&Object.values(t.tests).filter((function(e){return e.visible})).length>0||t.properties._visible&&Object.keys(t.properties).filter((function(e){return"_visible"!==e})).length>0:t._visible=!0})),e}return"search-suites"===a&&(Object.values(e.suites).forEach((function(t){var a=t.name,i=t.id;L.a.test(s.value.toLowerCase(),a.toLowerCase())?(n.currentSuites[i]=n.currentSuites[i]||g.a.recursive(!0,{},e.suites[i]),"active"in n.currentSuites[i]||(n.currentSuites[i].active=!0)):delete n.currentSuites[i]})),n.suitesExpanded=Object.values(n.currentSuites).some((function(e){return!0===e.active}))),"search-tests"===a&&Object.values(e.suites).forEach((function(t){Object.values(t.tests).forEach((function(a){L.a.test(s.value.toLowerCase(),a.name.toLowerCase())||a.messages.some((function(e){return L.a.test(s.value.toLowerCase(),e.toLowerCase())}))?t.id in n.currentSuites&&!(a.id in n.currentSuites[t.id].tests)&&n.currentSuites[t.id]&&(n.currentSuites[t.id].tests[a.id]=g.a.recursive(!0,{},e.suites[t.id].tests[a.id]),n.currentSuites[t.id].tests[a.id].active=!0,n.currentSuites[t.id].tests[a.id].visible=!0,n.currentSuites[t.id].tests[a.id].raw=!0):n.currentSuites[t.id]&&delete n.currentSuites[t.id].tests[a.id]}))})),"search-properties"===a&&(Object.values(e.suites).forEach((function(t){Object.entries(t.properties).filter((function(e){var t=Object(c.a)(e,1)[0];return"_visible"!==t&&"_active"!==t})).forEach((function(a){var i=Object(c.a)(a,2),r=i[0],l=i[1];l=l||[],L.a.test(s.value.toLowerCase(),r.toLowerCase())||l.some((function(e){return L.a.test(s.value.toLowerCase(),e.toLowerCase())}))?t.id in n.currentSuites&&!(r in n.currentSuites[t.id].properties)&&n.currentSuites[t.id]&&(n.currentSuites[t.id].properties[r]=[].concat(e.suites[t.id].properties[r]),n.currentSuites[t.id].properties._active=!0,n.currentSuites[t.id].properties._visible=!0,n.propertiesExpanded=!1):delete n.currentSuites[t.id].properties[r]}))})),n.propertiesExpanded=Object.values(n.currentSuites).some((function(e){return e.properties._active||!1})),n.propertiesVisible=Object.values(n.currentSuites).some((function(e){return e.properties._visible||!1}))),"toggle-all-suites"===a&&(n.suitesExpanded=!e.suitesExpanded,Object.values(n.currentSuites).forEach((function(e){e.active=n.suitesExpanded}))),"toggle-empty-suites"===a&&(n.suitesEmpty=!e.suitesEmpty),"toggle-menu"===a&&(n.menuActive=!e.menuActive),"toggle-suite-options"===a&&(n.suiteOptionsActive=!e.suiteOptionsActive),"toggle-test-options"===a&&(n.testOptionsActive=!e.testOptionsActive),"toggle-properties-options"===a&&(n.propertiesOptionsActive=!e.propertiesOptionsActive),"toggle-files"===a&&(n.activeFiles=!e.activeFiles),"toggle-suite"===a&&(n.currentSuites[s.id].active=s.active,n.suitesExpanded=Object.values(n.currentSuites).some((function(e){return!0===e.active}))),"toggle-properties"===a&&("undefined"!==typeof s.test&&null!==s.test?n.currentSuites[s.suite].tests[s.test].properties._active=s.active:(n.currentSuites[s.suite].properties._active=s.active,n.propertiesExpanded=Object.values(n.currentSuites).some((function(e){return e.properties._active||!1})))),"toggle-all-properties"===a&&(n=C(e,s,n,"propertiesExpanded","_active")),"toggle-properties-visbility"===a&&(n=C(e,s,n,"propertiesVisible","_visible")),"toggle-test"===a&&(n.currentSuites[s.suite].tests[s.id].active=s.active),"toggle-test-mode"===a&&(n.currentSuites[s.suite].tests[s.id].raw=s.raw),"toggle-test-visibility"===a&&(n.testToggles=e.testToggles,n.testToggles[s.status].visible=s.active,Object.values(n.currentSuites).forEach((function(e){Object.values(e.tests).forEach((function(e){("all"===s.status||s.status===e.status||"undefined"===typeof e.status&&"unknown"===s.status)&&(e.visible=s.active)}))})),"all"===s.status?(n.testToggles.passed.visible=s.active,n.testToggles.failure.visible=s.active,n.testToggles.error.visible=s.active,n.testToggles.skipped.visible=s.active,n.testToggles.unknown.visible=s.active):(n.testToggles.passed.visible||n.testToggles.failure.visible||n.testToggles.error.visible||n.testToggles.skipped.visible||n.testToggles.unknown.visible)&&(n.testToggles.all.visible=!0)),"toggle-test-expanded"===a&&(n.testToggles=e.testToggles,n.testToggles[s.status].expanded=s.active,Object.values(n.currentSuites).forEach((function(e){Object.values(e.tests).forEach((function(e){("all"===s.status||s.status===e.status||"undefined"===typeof e.status&&"unknown"===s.status)&&(e.active=s.active)}))})),"all"===s.status?(n.testToggles.passed.expanded=s.active,n.testToggles.failure.expanded=s.active,n.testToggles.error.expanded=s.active,n.testToggles.skipped.expanded=s.active,n.testToggles.unknown.expanded=s.active):(n.testToggles.passed.expanded||n.testToggles.failure.expanded||n.testToggles.error.expanded||n.testToggles.skipped.expanded||n.testToggles.unknown.expanded)&&(n.testToggles.all.expanded=!0)),"toggle-test-raw"===a&&(n.testToggles=e.testToggles,n.testToggles[s.status].raw=s.active,Object.values(n.currentSuites).forEach((function(e){Object.values(e.tests).forEach((function(e){("all"===s.status||s.status===e.status||"undefined"===typeof e.status&&"unknown"===s.status)&&(e.raw=s.active)}))})),"all"===s.status?(n.testToggles.passed.raw=s.active,n.testToggles.failure.raw=s.active,n.testToggles.error.raw=s.active,n.testToggles.skipped.raw=s.active,n.testToggles.unknown.raw=s.active):(n.testToggles.passed.raw||n.testToggles.failure.raw||n.testToggles.error.raw||n.testToggles.skipped.raw||n.testToggles.unknown.raw)&&(n.testToggles.all.raw=!0)),e=g.a.recursive(!0,e,n),Object.values(e.currentSuites).forEach((function(t){e.suitesEmpty?t._visible=Object.keys(t.tests).length>0&&Object.values(t.tests).filter((function(e){return e.visible})).length>0||t.properties._visible&&Object.keys(t.properties).filter((function(e){return"_visible"!==e})).length>0:t._visible=!0})),e},I={passed:"check",failure:"times",error:"exclamation",skipped:"ban",unknown:"question"},V=function(e){var t=e.properties,a=e.active,s=void 0===a||a,i=e.dispatch,r=e.suite,c=e.test,l=void 0===c?null:c;return n.a.createElement("div",{className:"properties card is-".concat(s?"active":"inactive")},n.a.createElement("button",{className:"card-header",onClick:function(){i({type:"toggle-properties",payload:{suite:r,test:l,active:!s}})}},n.a.createElement("p",{className:"card-header-title"},"Properties"),n.a.createElement("span",{className:"card-header-icon"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-angle-down"})))),s?n.a.createElement("div",{className:"card-content"},n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Property"),n.a.createElement("th",null,"Value"))),n.a.createElement("tbody",null,Object.keys(t).filter((function(e){return"_active"!==e&&"_visible"!==e})).map((function(e){return n.a.createElement("tr",{key:e},n.a.createElement("td",null,e),n.a.createElement("td",null,t[e].join(", ")))}))))):null)},H=function(e){var t=e.messages;return n.a.createElement("div",{className:"raw-content"},t.map((function(e,t){return n.a.createElement("pre",{key:"test-message-".concat(t)},e)})))},F=function(e){var t=e.messages;return n.a.createElement("div",{className:"pretty-content"},t.map((function(e,t){return n.a.createElement("div",{key:"test-message-".concat(t),dangerouslySetInnerHTML:{__html:e}})})))},$=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-star"}))},B=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-code"}))},R=function(e){var t=e.id,a=e.messages,s=e.status,i=e.time,r=e.classname,c=e.name,l=e.properties,o=void 0===l?{}:l,u=e.active,p=void 0===u||u,m=e.raw,d=void 0===m||m,f=e.dispatch,v=e.suite,E=o._visible&Object.keys(o).filter((function(e){return"_active"!==e&&"_visible"!==e})).length>0,g=a.length>0;return n.a.createElement("div",{className:"test card is-".concat(p?"active":"inactive"," is-").concat(s," is-").concat(g||E?"populated":"empty")},n.a.createElement("button",{className:"card-header",onClick:function(){f({type:"toggle-test",payload:{suite:v,id:t,active:!p}})},disabled:!g&&!E},n.a.createElement("p",{className:"card-header-title"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-".concat(I[s]||I.unknown),"aria-hidden":"true"})),n.a.createElement("span",null,c),r?n.a.createElement("small",null,"classname = ",r):null,i?n.a.createElement("small",null,"time = ",i):null),g||E?n.a.createElement("span",{className:"card-header-icon"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-angle-down"}))):null),n.a.createElement("div",{className:"content"},p&&(g||E)?n.a.createElement("div",{className:"card-content"},E?n.a.createElement(V,{properties:o,suite:v,test:t,dispatch:f,active:o._active}):null,g?n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{active:d,onLabel:"raw",onIcon:n.a.createElement(B,null),offIcon:n.a.createElement($,null),offLabel:"pretty",onChange:function(){return f({type:"toggle-test-mode",payload:{suite:v,id:t,raw:!d}})}}),d?n.a.createElement(H,{messages:a}):n.a.createElement(F,{messages:a})):null):null))},P=function(e){var t=e.count,a=e.type;return t>0?n.a.createElement("span",{className:"suite-count"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-".concat(I[a]),"aria-hidden":"true"})),t):null},J=function(e){var t=e.visible,a=e.id,s=e.name,i=e.active,r=void 0!==i&&i,c=e.properties,l=void 0===c?{}:c,o=e.time,u=e.tests,p=void 0===u?{}:u,m=e.dispatch,d=e.systemOut,f=void 0===d?[]:d,v=0,E=0,g=0,b=0,h=0;Object.keys(p).forEach((function(e){var t=p[e].status;"passed"===t?v+=1:"failure"===t?E+=1:"skipped"===t?g+=1:"error"===t?b+=1:h+=1}));var y=Object.keys(p).length>0&&Object.values(p).some((function(e){return e.visible})),N="_visible"in l&&l._visible&&Object.keys(l).filter((function(e){return"_active"!==e&&"_visible"!==e})).length>0,w=y||N;return n.a.createElement("div",{className:"card suite is-".concat(r?"active":"inactive"," is-").concat(w?"populated":"empty"," is-").concat(t?"visible":"hidden")},n.a.createElement("button",{className:"card-header",onClick:function(){w&&m({type:"toggle-suite",payload:{id:a,active:!r}})},disabled:!w},n.a.createElement("p",{className:"card-header-title"},n.a.createElement("span",null,s),o?n.a.createElement("small",null,"time = ",o):null),w?n.a.createElement("span",{className:"card-header-icon"},n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-angle-down"}))):null,w?n.a.createElement("p",{className:"suite-count-container"},n.a.createElement(P,{type:"failure",count:E}),n.a.createElement(P,{type:"error",count:b}),n.a.createElement(P,{type:"passed",count:v}),n.a.createElement(P,{type:"skipped",count:g}),n.a.createElement(P,{type:"unknown",count:h})):null),r&&w?n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"content"},f.length>0?f.map((function(e,t){return n.a.createElement("pre",{key:"".concat(a,"-sysout-").concat(t)},e)})):null,N?n.a.createElement(V,{properties:l,suite:a,dispatch:m,active:l._active}):null,n.a.createElement("div",null,Object.keys(p).filter((function(e){return p[e].visible&&("passed"===p[e].status||"error"===p[e].status||"failure"===p[e].status)})).sort((function(e,t){try{return new Date(JSON.parse(p[e].messages[0]).start)-new Date(JSON.parse(p[t].messages[0]).start)}catch(a){return console.error(a),console.error(p[t].messages[0]),console.error(p[e].messages[0]),-1}})).map((function(e){return n.a.createElement(R,Object.assign({key:e},p[e],{suite:a,dispatch:m}))})),Object.keys(p).filter((function(e){return p[e].visible&&"skipped"===p[e].status})).map((function(e){return n.a.createElement(R,Object.assign({key:e},p[e],{suite:a,dispatch:m}))})),Object.keys(p).filter((function(e){return p[e].visible&&!["failure","error","passed","skipped"].includes(p[e].status)})).map((function(e){return n.a.createElement(R,Object.assign({key:e},p[e],{suite:a,dispatch:m}))}))))):null)},M=function(e){var t=e.label,a=e.dispatch;return n.a.createElement("div",{className:"field options-search"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{onChange:function(e){a({type:"search-suites",payload:{value:e.target.value}})},className:"input",type:"text",placeholder:t})))},D=function(e){var t=e.count,a=e.total;return n.a.createElement("div",{className:"options-total"},n.a.createElement("b",null,t),n.a.createElement("span",null,"/",a))},Z=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-chevron-up"}))},q=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-chevron-down"}))},U=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"far fa-eye-slash"}))},X=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"far fa-eye"}))},z=function(e){var t=e.suitesExpanded,a=void 0===t||t,s=e.suitesEmpty,i=void 0===s||s,r=e.count,c=void 0===r?0:r,l=e.total,o=void 0===l?0:l,u=e.dispatch,p=e.active,m=void 0!==p&&p;return n.a.createElement("div",{className:"options card ".concat(m?"is-active":"is-inactive")},n.a.createElement("header",{className:"card-header"},n.a.createElement(M,{label:"Suites",dispatch:u}),n.a.createElement("button",{onClick:function(){return u({type:"toggle-suite-options"})},className:"button card-header-icon"},n.a.createElement("div",{className:"options-inputs"},n.a.createElement(D,{count:c,total:o})),n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-angle-down"})))),n.a.createElement("div",{className:"card-content options-toggles"},m?n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{onChange:function(){return u({type:"toggle-all-suites"})},active:a,onLabel:"Expanded",offLabel:"Contracted",offIcon:n.a.createElement(Z,null),onIcon:n.a.createElement(q,null)}),n.a.createElement(y,{onChange:function(){return u({type:"toggle-empty-suites"})},active:i,onLabel:"Empty hidden",offLabel:"Empty shown",onIcon:n.a.createElement(U,null),offIcon:n.a.createElement(X,null)})):null))},G={passed:"check",failure:"times",error:"exclamation",skipped:"ban",unknown:"question"},K=function(e){var t=e.label,a=e.dispatch;e.suite,e.id;return n.a.createElement("div",{className:"field options-search"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{onChange:function(e){a({type:"search-tests",payload:{value:e.target.value}})},className:"input",type:"text",placeholder:t})))},Q=function(e){var t=e.count,a=e.total,s=e.icon;return n.a.createElement("div",{className:"options-total"},s?n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-".concat(G[s]||G.unknown),"aria-hidden":"true"})):null,n.a.createElement("b",null,t),n.a.createElement("span",null,"/",a))},W=function(e,t,a){return(e[t]||{})[a]||0},Y=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-eye"})))},ee=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-eye-slash"})))},te=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-star"}))},ae=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-code"}))},se=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-chevron-up"}))},ne=function(){return n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-chevron-down"}))},ie=function(e){var t=e.testCounts,a=e.status;return W(t,a,"total")>0?n.a.createElement(Q,{count:W(t,a,"count"),total:W(t,a,"total"),icon:a}):null},re=function(e){var t=e.status,a=e.label,s=e.dispatch,i=e.visible,r=void 0===i||i,c=e.expanded,l=void 0===c||c,o=e.raw,u=void 0===o||o;return n.a.createElement("div",{className:"test-options-toggle-row"},n.a.createElement("div",{className:"test-options-toggle-row-label"},"all"!==t?n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-".concat(G[t]||G.unknown),"aria-hidden":"true"})):n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"far fa-circle","aria-hidden":"true"})),n.a.createElement("span",null,a)),n.a.createElement(y,{onChange:function(){s({type:"toggle-test-visibility",payload:{status:t,active:!r}})},active:r,onLabel:"Visible",offLabel:"Hidden",onIcon:n.a.createElement(Y,null),offIcon:n.a.createElement(ee,null)}),n.a.createElement(y,{onChange:function(){s({type:"toggle-test-expanded",payload:{status:t,active:!l}})},active:l,onLabel:"Expanded",offLabel:"Contracted",onIcon:n.a.createElement(ne,null),offIcon:n.a.createElement(se,null)}),n.a.createElement(y,{onChange:function(){s({type:"toggle-test-raw",payload:{status:t,active:!u}})},active:u,onLabel:"Raw",offLabel:"Pretty",onIcon:n.a.createElement(ae,null),offIcon:n.a.createElement(te,null)}))},ce=function(e){var t=e.testCounts,a=void 0===t?{}:t,s=e.testToggles,i=void 0===s?{}:s,r=e.count,c=void 0===r?0:r,l=e.total,o=void 0===l?0:l,u=e.dispatch,p=e.active,m=void 0!==p&&p;return n.a.createElement("div",{className:"options card ".concat(m?"is-active":"is-inactive")},n.a.createElement("header",{className:"card-header"},n.a.createElement(K,{label:"Tests",dispatch:u}),n.a.createElement("button",{onClick:function(){return u({type:"toggle-test-options"})},className:"button card-header-icon"},n.a.createElement("div",{className:"options-inputs"},n.a.createElement(Q,{count:c,total:o}),n.a.createElement(ie,{testCounts:a,status:"passed"}),n.a.createElement(ie,{testCounts:a,status:"failure"}),n.a.createElement(ie,{testCounts:a,status:"error"}),n.a.createElement(ie,{testCounts:a,status:"skipped"}),n.a.createElement(ie,{testCounts:a,status:"unknown"})),n.a.createElement("span",{className:"icon"},n.a.createElement("i",{className:"fas fa-angle-down"})))),n.a.createElement("div",{className:"card-content options-toggles"},m?n.a.createElement(n.a.Fragment,null,n.a.createElement(re,Object.assign({status:"all",label:"All",dispatch:u},i.all)),n.a.createElement(re,Object.assign({status:"passed",label:"Passed",dispatch:u},i.passed)),n.a.createElement(re,Object.assign({status:"failure",label:"Failure",dispatch:u},i.failure)),n.a.createElement(re,Object.assign({status:"error",label:"Error",dispatch:u},i.error)),n.a.createElement(re,Object.assign({status:"skipped",label:"Skipped",dispatch:u},i.skipped)),n.a.createElement(re,Object.assign({status:"unknown",label:"Unknown",dispatch:u},i.unknown))):null))},le=function(e){var t=e.files,a=e.title,i=e.brand,r=Object(s.useReducer)(A,p),l=Object(c.a)(r,2),o=l[0],m=l[1];0===Object.keys(o.suites).length&&h(m,t,{});var d=0,f=0;Object.entries(o.currentSuites).forEach((function(e){var t=Object(c.a)(e,2),a=(t[0],t[1]);d+=Object.keys(a.properties).filter((function(e){return"_active"!==e&&"_visible"!==e})).length,Object.values(a.tests).forEach((function(e){e.properties&&(d+=Object.keys(e.properties).filter((function(e){return"_active"!==e&&"_visible"!==e})).length)}))})),Object.entries(o.currentSuites).forEach((function(e){var t=Object(c.a)(e,2),a=(t[0],t[1]);f+=Object.keys(a.properties).filter((function(e){return"_active"!==e&&"_visible"!==e})).length,Object.values(a.tests).forEach((function(e){e.properties&&(f+=Object.keys(e.properties).filter((function(e){return"_active"!==e&&"_visible"!==e})).length)}))}));var v={},E=0,g=0;Object.entries(o.currentSuites).forEach((function(e){var t=Object(c.a)(e,2),a=(t[0],t[1]);Object.entries(a.tests).forEach((function(e){var t=Object(c.a)(e,2),a=(t[0],t[1].status||"unknown");v[a]=v[a]||{},v[a].count=v[a].count||0,v[a].total=v[a].total||0,v[a].count+=1,v[a].total+=1,g+=1,E+=1}))}));var b=function(e){var t=e.files;h(m,t,{})};return window.sockets=window.sockets||null,Object(s.useEffect)((function(){null===window.sockets&&"io"in window&&(window.sockets=window.io(),window.sockets.on("update",b))})),n.a.createElement("div",null,n.a.createElement(u,{active:o.menuActive,onClick:function(){m({type:"toggle-menu"})},title:a,brand:i}),n.a.createElement("header",{className:"is-".concat(o.menuActive?"shown":"hidden")},n.a.createElement("div",{className:"container"},n.a.createElement(z,{active:o.suiteOptionsActive,suitesExpanded:o.suitesExpanded,suitesEmpty:o.suitesEmpty,dispatch:m,count:Object.keys(o.currentSuites).length,total:Object.keys(o.suites).length}),n.a.createElement(ce,{active:o.testOptionsActive,testToggles:o.testToggles,testCounts:v,count:E,total:g,dispatch:m}),n.a.createElement(_,{propertiesExpanded:o.propertiesExpanded,propertiesVisible:o.propertiesVisible,active:o.propertiesOptionsActive,count:d,total:f,dispatch:m}),null)),n.a.createElement("main",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",null,Object.values(o.currentSuites).map((function(e){return n.a.createElement(J,Object.assign({key:e.id},e,{visible:e._visible,dispatch:m}))}))))))},oe=a(60),ue=a.n(oe),pe=window.files||[],me=window.title||"Xunit Viewer",de=window.brand||null;pe=pe.map((function(e){var t=e.file,a=e.contents;return{file:t,contents:ue.a.decompress(a,{inputEncoding:"Base64"})}})),r.a.render(n.a.createElement(le,{files:pe,title:me,brand:de}),document.getElementById("root"))},58:function(e){e.exports=JSON.parse('{"suites":{},"currentSuites":{},"menuActive":false,"suiteOptionsActive":false,"testOptionsActive":false,"propertiesOptionsActive":false,"activeFiles":false,"suitesExpanded":false,"suitesEmpty":true,"propertiesExpanded":{"all":false,"suites":false,"tests":false},"propertiesVisible":{"all":false,"suites":false,"tests":false},"testToggles":{"all":{"visible":true,"expanded":false,"raw":true},"passed":{"visible":true,"expanded":false,"raw":true},"failure":{"visible":true,"expanded":true,"raw":true},"error":{"visible":true,"expanded":false,"raw":true},"skipped":{"visible":false,"expanded":false,"raw":true},"unknown":{"visible":true,"expanded":false,"raw":true}}}')},61:function(e,t,a){e.exports=a(100)},69:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t),function(e){var t=a(9),s=a.n(t),n=a(19),i=a(3),r=a(75),c=function(e){return new Promise((function(t,a){r.parseString(e,(function(e,s){e?a(new Error(e)):t(s)}))}))},l=function(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t&=t}return t},o=function(e,t){e.properties=e.properties||{},e.properties._visible=!0,t.forEach((function(t){"string"===typeof t?""!==(t=t.trim())&&(e.properties["No Name"]=e.properties["No Name"]||[],e.properties["No Name"].push(t)):t.property.forEach((function(t){var a=t.$||{},s=a.name||"No Name",n=a.value||t._;"string"===typeof t&&(n=t),n=(n=n||"").trim(),e.properties[s]=e.properties[s]||[],n&&e.properties[s].push(n)}))}))},u=function e(t,a,s){a.tests=a.tests||{};var n=0;s.forEach((function(s){var r=s.$||{},c=r.name||"No Name",u=r.classname||r.class||"",m=r.time||0,d=l(c+u+n);n++;var f=a.tests[d]||{id:d,name:c,messages:[],visible:!0};f.time=m,f.classname=u,"string"===typeof s&&f.messages.push(s.trim()),s._&&f.messages.push(s._.trim()),r.message&&f.messages.push(s.$.message.trim()),"undefined"!==typeof s.properties&&(o(f,s.properties),delete s.properties);var v=Object.assign({},r);if(delete v.time,delete v.name,delete v.classname,delete v.class,delete v.message,Object.keys(v).length>0){for(var E=[],g=0,b=Object.entries(v);g<b.length;g++){var h=Object(i.a)(b[g],2),y=h[0],N=h[1];E.push({$:{name:y,value:N}})}o(f,[{property:E}])}if("string"!==typeof s){var w=Object.keys(s).filter((function(e){return"$"!==e&&"_"!==e&&"testcase"!==e})),O=w[0];w.forEach((function(e){e&&function(e,t){t.forEach((function(t){var a="string"===typeof t._,s="undefined"!==typeof t.$&&"message"in t.$,n="undefined"!==typeof t.$&&"type"in t.$,i="string"===typeof t;a&&e.messages.push(t._.trim()),s&&e.messages.push(t.$.message.trim()),n&&e.messages.push(t.$.type.trim()),i&&e.messages.push(t.trim())}))}(f,s[e])})),"system-out"===O&&(O="passed"),f.status=O||"passed"}f.messages=f.messages.filter((function(e){return""!==e})),a.tests[d]=f,"undefined"!==typeof s.testcase&&e(t,a,s.testcase),"undefined"!==typeof s.testsuite&&p(t,s.testsuite)}))},p=function(e,t){Array.isArray(t)||(t=[t]),t.forEach((function(t){var a=function(e,t){var a=t.$||{},s=a.name||"No Name",n=l(s),r=e.suites[n]||{};return r.tests=r.tests||{},r.systemOut=r.systemOut||[],r.properties=r.properties||{_visible:!0},Object.entries(a).forEach((function(e){var t=Object(i.a)(e,2),a=t[0],s=t[1];["errors","failures","name","skipped","tests","time"].includes(a)||(r.properties[a]=r.properties[a]||[],r.properties[a].push(s))})),r.id=n,r.name=s,r.time=a.time||0,r}(e,t);"undefined"!==typeof t.properties&&o(a,t.properties),"undefined"!==typeof t.testcase&&u(e,a,t.testcase),"undefined"!==typeof t["system-out"]&&function(e,t){e.systemOut=e.systemOut||[];var a=t["system-out"];Array.isArray(a)||(a=[a]),e.systemOut=e.systemOut.concat(a)}(a,t),e.suites[a.id]=a}))},m=function e(t,a){Array.isArray(a)||(a=[a]),a.forEach((function(a){p(t,a),"undefined"!==typeof a.testsuite&&e(t,a.testsuite)}))},d=function(){var e=Object(n.a)(s.a.mark((function e(t){var a,n,i,r,l,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={suites:{}},e.next=3,c(t);case 3:for((n=e.sent).testsuites?(i=n.testsuites.testsuite,m(a,i)):n.testsuite&&m(a,n.testsuite),r=0,l=Object.values(a.suites);r<l.length;r++)(o=l[r])._visible=Object.keys(o.tests).length>0||Object.keys(o.properties).filter((function(e){return"_visible"!==e})).length>0,o.systemOut=o.systemOut.map((function(e){return e.trim()}));return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();"undefined"!==typeof window?window.parse=d:e.exports=d}.call(this,a(74)(e))},89:function(e,t){},91:function(e,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.ea8ee335.chunk.js.map