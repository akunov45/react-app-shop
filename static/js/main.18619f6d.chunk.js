(this["webpackJsonpreact-app-story"]=this["webpackJsonpreact-app-story"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(6),s=c.n(r),i=(c(13),c(0));function o(){return Object(i.jsx)("nav",{className:"teal accent-3",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"/",className:"brand-logo",children:"React Shop"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/frontdevkg/react-shop",target:"_blank",rel:"noreferrer",children:"Repo"})})})]})})}function l(){return Object(i.jsx)("footer",{className:"page-footer teal darken-2",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Created by Akunov",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/frontdevkg/react-shop",rel:"noreferrer",target:"_blank",children:"Repo"})]})})})}var d=c(7),j=c(8),u=c(1);function b(e,t){var c=t.type,n=t.payload;switch(c){case"SET_GOODS":return Object(u.a)(Object(u.a)({},e),{},{goods:n||[],loading:!1});case"REMOVE_FROM_BASKET":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.filter((function(e){return e.id!==n.id}))});case"ADD_TO_BASKET":var a=e.order.findIndex((function(e){return e.id===n.id})),r=null;if(a<0){var s=Object(u.a)(Object(u.a)({},n),{},{count:1});r=[].concat(Object(j.a)(e.order),[s])}else r=e.order.map((function(e,t){return t===a?Object(u.a)(Object(u.a)({},e),{},{count:e.count+1}):e}));return Object(u.a)(Object(u.a)({},e),{},{order:r,alertName:n.name});case"CLOSE_ALERT":return Object(u.a)(Object(u.a)({},e),{},{alertName:""});case"INC_QUANTITY":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.map((function(e){if(e.id===n.id){var t=e.count+1;return Object(u.a)(Object(u.a)({},e),{},{count:t})}return e}))});case"DEC_QUANTITY":return Object(u.a)(Object(u.a)({},e),{},{order:e.order.map((function(e){if(e.id===n.id){var t=e.count-1;return Object(u.a)(Object(u.a)({},e),{},{count:t>=0?t:0})}return e}))});case"TOGGLE_BASKET":return Object(u.a)(Object(u.a)({},e),{},{isBasketShow:!e.isBasketShow});default:return e}}var O=Object(n.createContext)(),h={goods:[],loading:!0,order:[],isBasketShow:!1,alertName:""},m=function(e){var t=e.children,c=Object(n.useReducer)(b,h),a=Object(d.a)(c,2),r=a[0],s=a[1];return r.closeAlert=function(){s({type:"CLOSE_ALERT"})},r.removeFromBasket=function(e){s({type:"REMOVE_FROM_BASKET",payload:{id:e}})},r.addToBasket=function(e){s({type:"ADD_TO_BASKET",payload:e})},r.incQuantity=function(e){s({type:"INC_QUANTITY",payload:{id:e}})},r.decQuantity=function(e){s({type:"DEC_QUANTITY",payload:{id:e}})},r.handleBasketShow=function(){s({type:"TOGGLE_BASKET"})},r.setGoods=function(e){s({type:"SET_GOODS",payload:e})},Object(i.jsx)(O.Provider,{value:r,children:t})};function x(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})}function f(e){var t=e.mainId,c=e.displayName,a=e.description,r=e.price,s=e.granted,o=Object(n.useContext)(O).addToBasket;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-image",children:Object(i.jsx)("img",{src:s.map((function(e){return e.images.full_background})),alt:c})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title text-darken-4",children:c}),Object(i.jsx)("p",{children:a})]}),Object(i.jsxs)("div",{className:"card-action",children:[Object(i.jsx)("button",{className:"btn",onClick:function(){return o({id:t,name:c,price:r})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(i.jsxs)("span",{className:"right",style:{fontsize:"1.8rem"},children:[r.regularPrice," \u0440\u0443\u0431"]})]})]})}function p(){var e=Object(n.useContext)(O).goods,t=void 0===e?[]:e;return t.length?Object(i.jsx)("div",{className:"goods",children:t.map((function(e){return Object(i.jsx)(f,Object(u.a)({},e),e.mainId)}))}):Object(i.jsx)("h3",{children:"Error"})}function v(){var e=Object(n.useContext)(O),t=e.order,c=void 0===t?0:t,a=e.handleBasketShow,r=void 0===a?Function.prototype:a,s=c.length;return Object(i.jsxs)("div",{className:"cart teal accent-3 white-text",onClick:r,children:[Object(i.jsx)("i",{className:"material-icons",children:"shopping_cart"}),s?Object(i.jsx)("span",{className:"cart-count",children:s}):null]})}function N(e){console.log(e);var t=e.id,c=e.name,a=e.count,r=e.price.finalPrice;console.log(r);var s=Object(n.useContext)(O),o=s.removeFromBasket,l=s.incQuantity,d=s.decQuantity;return console.log(),Object(i.jsxs)("li",{className:"collection-item",children:[c," ",Object(i.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return d(t)},children:"remove"})," x ",a,Object(i.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){return l(t)},children:"add"})," = ",r*a,"\u0440\u0443\u0431.",Object(i.jsx)("span",{className:"secondary-content",onClick:function(){return o(t)},children:Object(i.jsx)("i",{className:"material-icons basket-delete",children:"close"})})]})}function g(){var e=Object(n.useContext)(O),t=e.order,c=void 0===t?[]:t,a=e.handleBasketShow,r=void 0===a?Function.prototype:a,s=c.reduce((function(e,t){return e+t.price.regularPrice*t.count}),0);return Object(i.jsxs)("ul",{className:"collection basket-list",children:[Object(i.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),c.length?c.map((function(e){return Object(i.jsx)(N,Object(u.a)({},e),e.id)})):Object(i.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(i.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",s," \u0440\u0443\u0431."]}),Object(i.jsx)("li",{className:"collection-item",children:Object(i.jsx)("button",{className:"btn btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(i.jsx)("i",{className:"material-icons basket-close",onClick:r,children:"close"})]})}function k(){var e=Object(n.useContext)(O),t=e.alertName,c=void 0===t?"":t,a=e.closeAlert,r=void 0===a?Function.prototype:a;return Object(n.useEffect)((function(){var e=setTimeout(r,3e3);return function(){clearTimeout(e)}}),[c]),Object(i.jsx)("div",{id:"toast-container",children:Object(i.jsxs)("div",{className:"toast",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function y(){var e=Object(n.useContext)(O),t=e.alertName,c=e.isBasketShow,a=e.order,r=e.loading,s=e.setGoods;return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"37356637-142265eb-0c96acba-7d7090ae"}}).then((function(e){return e.json()})).then((function(e){e.shop&&s(e.shop)}))}),[]),Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(v,{count:a.length}),r?Object(i.jsx)(x,{}):Object(i.jsx)(p,{}),c&&Object(i.jsx)(g,{}),t&&Object(i.jsx)(k,{})]})}var T=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(m,{children:Object(i.jsx)(y,{})}),Object(i.jsx)(l,{})]})};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.18619f6d.chunk.js.map