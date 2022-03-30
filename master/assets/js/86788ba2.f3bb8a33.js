"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[611],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7010:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={sidebar_position:0},s="Init",l={unversionedId:"reference/cli/init",id:"reference/cli/init",title:"Init",description:"redata init CLI command is used for initialiazing a dbt project from scratch with redata setup.",source:"@site/docs/reference/cli/init.md",sourceDirName:"reference/cli",slug:"/reference/cli/init",permalink:"/master/docs/reference/cli/init",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/cli/init.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Configuration \u2699\ufe0f",permalink:"/master/docs/reference/config"},next:{title:"Overview",permalink:"/master/docs/reference/cli/overview"}},p={},u=[{value:"init",id:"init-1",level:2}],d={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"init"},"Init"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"re_data init")," CLI command is used for initialiazing a dbt project from scratch with re_data setup."),(0,o.kt)("h2",{id:"init-1"},"init"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"re_data init project_name\n")),(0,o.kt)("p",null,"This creates a folder with a valid dbt project setup. The ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"profile")," values in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," would use the project_name specified as argument to the command."),(0,o.kt)("p",null,"The project setup contains two seed files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"toy_shop/seeds/customers.csv"),(0,o.kt)("li",{parentName:"ul"},"toy_shop/seeds/orders.csv")),(0,o.kt)("p",null,"And it also contains one model:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"toy_shop/models/pending_orders_per_customer.sql")),(0,o.kt)("p",null,"which is used to showcase a ",(0,o.kt)("a",{parentName:"p",href:"/master/docs/getting_started/toy_shop/toy_shop_data"},"toy_shop project")," using re_data."))}f.isMDXComponent=!0}}]);