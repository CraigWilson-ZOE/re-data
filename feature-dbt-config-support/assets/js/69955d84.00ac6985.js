"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[797],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},891:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},l="Reliability UI \ud83d\udc40",p={unversionedId:"getting_started/toy_shop/generate_ui",id:"getting_started/toy_shop/generate_ui",isDocsHomePage:!1,title:"Reliability UI \ud83d\udc40",description:"Now let's investigate generated data in re_data UI. We first generate HTML/JSON from the data warehouse and then serve files.",source:"@site/docs/getting_started/toy_shop/generate_ui.md",sourceDirName:"getting_started/toy_shop",slug:"/getting_started/toy_shop/generate_ui",permalink:"/feature-dbt-config-support/docs/getting_started/toy_shop/generate_ui",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/toy_shop/generate_ui.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Reliability data",permalink:"/feature-dbt-config-support/docs/getting_started/toy_shop/compute_monitoring"},next:{title:"Notifications",permalink:"/feature-dbt-config-support/docs/getting_started/toy_shop/notifications"}},c=[{value:"Alerts",id:"alerts",children:[]},{value:"Graph",id:"graph",children:[]},{value:"Tests",id:"tests",children:[]},{value:"Tables",id:"tables",children:[]}],d={toc:c};function u(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reliability-ui-"},"Reliability UI \ud83d\udc40"),(0,i.kt)("p",null,"Now let's investigate generated data in re_data UI. We first generate HTML/JSON from the data warehouse and then serve files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"re_data overview generate --start-date 2021-01-01 --interval days:1\nre_data overview serve\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We don't pass --end-date to ",(0,i.kt)("inlineCode",{parentName:"p"},"re_data overview generate")," and this is causing re_data to use the default (today). We generate for this whole period to get also tests history (just ran) displayed"))),(0,i.kt)("p",null,"After running these commands you should be able to see views similar to those:"),(0,i.kt)("h2",{id:"alerts"},"Alerts"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GraphExample",src:n(842).Z})),(0,i.kt)("p",null,"Alerts view lets you see if there are any problems currently detected in your data.\nre_data compares past & current metric computed using ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Standard_score"},"z_score"))," to determinate if value is suspicious. It also shows any schema changes detected here."),(0,i.kt)("p",null,"From the alerts view, you can go to learn more details about specific alerts in the graph view."),(0,i.kt)("h2",{id:"graph"},"Graph"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GraphExample",src:n(5661).Z})),(0,i.kt)("p",null,"Graph view lets you investigate anomalies, metrics & schema changes on top of the dbt lineage graph."),(0,i.kt)("h2",{id:"tests"},"Tests"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GraphExample",src:n(9087).Z})),(0,i.kt)("p",null,"Tests view lets you see history of all dbt tests run. (re_data comes with a ",(0,i.kt)("inlineCode",{parentName:"p"},"save_test_history")," macro which when passed into ",(0,i.kt)("inlineCode",{parentName:"p"},"on-run-end")," dbt configuration, saves tests history into the data warehouse)"),(0,i.kt)("h2",{id:"tables"},"Tables"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GraphExample",src:n(2714).Z})),(0,i.kt)("p",null,"Tables view lets you investigate any table easily. Check out for anomalies, metrics, tests related to it."),(0,i.kt)("p",null,"In the next section, let's see how we can notify ourselves about problems in the data"))}u.isMDXComponent=!0},842:function(e,t,n){t.Z=n.p+"assets/images/alerts-88b3a97d7215bb7ae60c8a844267939a.png"},5661:function(e,t,n){t.Z=n.p+"assets/images/graph-e012e8062166c0a5be0e380b7b3f7e01.png"},2714:function(e,t,n){t.Z=n.p+"assets/images/tables-954a39d89b60725734b49938a05354de.png"},9087:function(e,t,n){t.Z=n.p+"assets/images/tests-1503457059983aedb53dea60918ace9c.png"}}]);