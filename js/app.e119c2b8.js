(function(t){function e(e){for(var a,c,l=e[0],n=e[1],o=e[2],d=0,h=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&h.push(s[c][0]),s[c]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,o||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,l=1;l<i.length;l++){var n=i[l];0!==s[n]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=i[0]))}return t}var a={},s={app:0},r=[];function c(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=a,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(i,a,function(e){return t[e]}.bind(null,a));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/my-vue-cli/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=n;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"09ed":function(t,e,i){"use strict";i("2a7a")},"202e":function(t,e,i){},2077:function(t,e,i){"use strict";i("b80b")},"2a7a":function(t,e,i){},"4ce5":function(t,e,i){t.exports=i.p+"img/Rectangle 645.cabf659a.png"},"4e5d":function(t,e,i){"use strict";i("68b4")},"509a":function(t,e,i){"use strict";i("e53b")},5483:function(t,e,i){t.exports=i.p+"img/Photo (5).6363d321.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Nav",{attrs:{cardsBasket:t.cardsBasket},on:{clickBasket:t.clickBasket}}),i("Breadcrumbs"),i("VueSlickCarousel",t._b({staticClass:"slider-home"},"VueSlickCarousel",t.settings,!1),t._l(5,(function(e){return i("div",{key:e,staticClass:"slider-img"},[i("div",{staticClass:"slider-img__text"},[i("h1",[t._v("Краски")]),i("span",[t._v(" Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет! ")])])])})),0),i("div",{staticClass:"wrapper"},[i("h2",{staticClass:"titel-mobile"},[t._v("Краски")]),i("Filters",{class:{open:t.filterMobile},on:{changeFilterNew:t.changeFilterNew,changeFilterAvail:t.changeFilterAvail,changeFilterContractual:t.changeFilterContractual,changeFilterExclusive:t.changeFilterExclusive,changeFilterSale:t.changeFilterSale,closeFilterMobile:t.closeFilterMobile}}),i("div",{staticClass:"items"},[i("div",{staticClass:"items-row"},[i("div",{staticClass:"btn-filter-mobile",on:{click:function(e){t.filterMobile=!t.filterMobile}}},[t._v(" Фильтры ")]),i("div",{staticClass:"items__quantity"},[t._v(" "+t._s(t.cardsFilter.length)+" товаров ")]),i("VSelect",{on:{isClickSelect:t.isClickSelect}})],1),i("div",{staticClass:"cards"},t._l(t.cardsFilter,(function(e,a){return i("Card",{key:a,attrs:{card:e},on:{addBasket:t.addBasket}})})),1)])],1),i("footer"),i("Basket",{attrs:{cardsBasket:t.cardsBasket,isClickBasket:t.isClickBasket},on:{closeBasket:t.clickBasket,deleteCard:t.deleteCard,clearBasket:t.clearBasket}})],1)},r=[],c=(i("4de4"),i("a15b"),i("d81d"),i("a434"),i("a9e3"),i("d3b7"),i("ac1f"),i("1276"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Nav wrapper"},[t._m(0),a("div",{staticClass:"Nav__wrapper wrapper-1"},[a("div",{staticClass:"Nav__logo"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:i("ea0f")}})])],1),a("nav",[a("router-link",{attrs:{to:"/"}},[t._v("Продукты")]),a("router-link",{attrs:{to:"/"}},[t._v("Цвета")]),a("router-link",{attrs:{to:"/"}},[t._v("Вдохновение")]),a("router-link",{attrs:{to:"/"}},[t._v("Советы")]),a("router-link",{attrs:{to:"/"}},[t._v("Найти магазин")])],1)]),a("div",{staticClass:"Nav__wrapper wrapper-2"},[t._m(1),a("div",{staticClass:"Nav__icons"},[a("ul",[a("li",[a("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",stroke:"#1F2020","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}}),a("path",{attrs:{d:"M17.5 17.5L13.875 13.875",stroke:"#1F2020","stroke-width":"1.4","stroke-linecap":"round","stroke-linejoin":"round"}})])]),a("li",[a("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("g",{attrs:{"clip-path":"url(#clip0)"}},[a("circle",{attrs:{cx:"11",cy:"23",r:"8.4",stroke:"black","stroke-width":"1.2"}}),a("circle",{attrs:{cx:"11",cy:"7",r:"3.4",stroke:"black","stroke-width":"1.2"}})]),a("defs",[a("clipPath",{attrs:{id:"clip0"}},[a("rect",{attrs:{width:"22",height:"22",fill:"white"}})])])])]),a("li",[a("svg",{attrs:{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M11.0009 19C10.745 19.0001 10.4978 18.9074 10.3052 18.739C9.57966 18.1047 8.87674 17.5067 8.25817 16.9802C6.65691 15.7048 5.16127 14.3023 3.78581 12.7865C2.67695 11.5918 2.0423 10.0341 2.00085 8.4053C1.97621 6.99164 2.48598 5.62067 3.42845 4.56595C3.88583 4.0681 4.44256 3.67154 5.06275 3.40184C5.68294 3.13214 6.35283 2.9953 7.0292 3.00012C8.05552 2.99541 9.053 3.3392 9.8581 3.97514C10.2942 4.31625 10.6791 4.71815 11.0009 5.16854C11.3231 4.71841 11.7082 4.31682 12.1446 3.97605C12.9489 3.34036 13.9453 2.99628 14.9708 3.00012C15.6472 2.9953 16.3171 3.13214 16.9372 3.40184C17.5574 3.67154 18.1142 4.0681 18.5715 4.56595C19.514 5.62067 20.0238 6.99164 19.9991 8.4053C19.9585 10.0337 19.3249 11.5915 18.2169 12.7865C16.8425 14.3013 15.3481 15.7028 13.7482 16.9775C13.1287 17.5049 12.4267 18.1029 11.6975 18.7399C11.5045 18.9081 11.257 19.0005 11.0009 19V19Z",stroke:"black","stroke-width":"1.2"}})])]),a("li",[a("div",{staticClass:"Nav__icons_counter",on:{click:t.clickBasket}},[t._v(" "+t._s(t.cardsBasket.length)+" ")])])])])])])}),l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"burger-wrapp"},[i("a",{staticClass:"burger"},[i("span")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Nav__phone"},[i("a",{attrs:{href:"tel:+7 (495) 221-77-69"}},[t._v("+7 (495) 221-77-69")]),i("div",[t._v("Заказать звонок")])])}],n={props:["cardsBasket"],data:function(){return{}},methods:{clickBasket:function(){this.$emit("clickBasket")}}},o=n,u=(i("4e5d"),i("2877")),d=Object(u["a"])(o,c,l,!1,null,"110a63ce",null),h=d.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Filters__mobile-bg",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeFilterMobile(e)}}},[i("div",{staticClass:"Filters"},[i("span",{staticClass:"Filters__mobile-line",on:{click:t.closeFilterMobile}}),i("div",{staticClass:"filter"},[i("input",{attrs:{id:"new",type:"checkbox"},on:{input:t.changeFilterNew}}),t._m(0),t._m(1)]),i("div",{staticClass:"filter"},[i("input",{attrs:{id:"availability ",type:"checkbox"},on:{input:t.changeFilterAvail}}),t._m(2),t._m(3)]),i("div",{staticClass:"filter"},[i("input",{attrs:{id:"Contractual",type:"checkbox"},on:{input:t.changeFilterContractual}}),t._m(4),t._m(5)]),i("div",{staticClass:"filter"},[i("input",{attrs:{id:"Exclusive",type:"checkbox"},on:{input:t.changeFilterExclusive}}),t._m(6),t._m(7)]),i("div",{staticClass:"filter"},[i("input",{attrs:{id:"sale",type:"checkbox"},on:{input:t.changeFilterSale}}),t._m(8),t._m(9)])])])},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"switch",attrs:{for:"new"}},[i("span",{staticClass:"round"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"new"}},[i("div",{staticClass:"filter__name"},[t._v("Новинки")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"switch",attrs:{for:"availability "}},[i("span",{staticClass:"round"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"availability "}},[i("div",{staticClass:"filter__name"},[t._v("Есть в наличии")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"switch",attrs:{for:"Contractual"}},[i("span",{staticClass:"round"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"Contractual"}},[i("div",{staticClass:"filter__name"},[t._v("Контрактные")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"switch",attrs:{for:"Exclusive"}},[i("span",{staticClass:"round"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"Exclusive"}},[i("div",{staticClass:"filter__name"},[t._v("Эксклюзивные")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"switch",attrs:{for:"sale"}},[i("span",{staticClass:"round"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:"sale"}},[i("div",{staticClass:"filter__name"},[t._v("Распродажа")])])}],f={name:"Filters",data:function(){return{}},computed:{},methods:{closeFilterMobile:function(){this.$emit("closeFilterMobile")},changeFilterNew:function(t){this.$emit("changeFilterNew",t.target.checked)},changeFilterAvail:function(t){this.$emit("changeFilterAvail",t.target.checked)},changeFilterContractual:function(t){this.$emit("changeFilterContractual",t.target.checked)},changeFilterExclusive:function(t){this.$emit("changeFilterExclusive",t.target.checked)},changeFilterSale:function(t){this.$emit("changeFilterSale",t.target.checked)}}},m=f,_=(i("dd51"),Object(u["a"])(m,p,v,!1,null,"a49aaaea",null)),g=_.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Select items__sorting",on:{click:function(e){t.clickSelect=!0}}},[t._v(" "+t._s(t.select)+" "),i("svg",{attrs:{width:"8",height:"5",viewBox:"0 0 8 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M4 4.5L7.4641 0L0.535898 0L4 4.5Z",fill:"#202020"}})]),i("div",{staticClass:"select-modal",class:{open:t.clickSelect}},[i("div",{staticClass:"select-modal__option"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.select,expression:"select"}],attrs:{id:"option-1",type:"radio",name:"sort",value:"Сначала дорогие"},domProps:{checked:t._q(t.select,"Сначала дорогие")},on:{click:t.isClickSelect,change:function(e){t.select="Сначала дорогие"}}}),i("label",{attrs:{for:"option-1"}},[t._v("Сначала дорогие")])]),i("div",{staticClass:"select-modal__option"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.select,expression:"select"}],attrs:{id:"option-2",type:"radio",name:"sort",value:"Сначала недорогие"},domProps:{checked:t._q(t.select,"Сначала недорогие")},on:{click:t.isClickSelect,change:function(e){t.select="Сначала недорогие"}}}),i("label",{attrs:{for:"option-2"}},[t._v("Сначала недорогие")])]),i("div",{staticClass:"select-modal__option"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.select,expression:"select"}],attrs:{id:"option-3",type:"radio",name:"sort",value:"Сначала популярные"},domProps:{checked:t._q(t.select,"Сначала популярные")},on:{click:t.isClickSelect,change:function(e){t.select="Сначала популярные"}}}),i("label",{attrs:{for:"option-3"}},[t._v("Сначала популярные")])]),i("div",{staticClass:"select-modal__option"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.select,expression:"select"}],attrs:{id:"option-4",type:"radio",name:"sort",value:"Сначала новые"},domProps:{checked:t._q(t.select,"Сначала новые")},on:{click:t.isClickSelect,change:function(e){t.select="Сначала новые"}}}),i("label",{attrs:{for:"option-4"}},[t._v("Сначала новые")])]),i("div",{staticClass:"select-modal__close",on:{click:t.isClickSelect}})])])},b=[],C={name:"Select",data:function(){return{select:"Сначала дорогие",clickSelect:!1}},methods:{isClickSelect:function(t){t.stopPropagation(),this.clickSelect=!1,this.$emit("isClickSelect",t.target.id)}}},w=C,F=(i("09ed"),Object(u["a"])(w,k,b,!1,null,"6959fe6a",null)),B=F.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Card"},[a("div",{staticClass:"Card-wrapper"},[a("div",{staticClass:"Card__img"},[a("img",{attrs:{src:i("bb6e")("./"+t.card.img),alt:"image"}}),a("img",{staticClass:"img-hover",attrs:{src:i("9730"),alt:"image"}})]),a("div",{staticClass:"Card__name"},[t._v(t._s(t.card.name))]),a("div",{staticClass:"Card__price"},[a("div",[t._v(t._s(t.card.price)+" ₽")]),a("div",{staticClass:"btn plus",on:{click:t.addBasket}})])])])},x=[],q={name:"Card",props:["card"],methods:{addBasket:function(){this.$emit("addBasket",this.card)}}},S=q,P=(i("dcf8"),Object(u["a"])(S,y,x,!1,null,"a274e0dc",null)),M=P.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Basket",class:{open:t.isClickBasket}},[i("div",{staticClass:"Basket__list"},[i("div",{staticClass:"Basket__head"},[i("div",{staticClass:"Basket__title"},[i("h2",[t._v("Корзина")]),i("div",{staticClass:"Basket__title_btn-close",on:{click:t.closeBasket}})]),i("div",{staticClass:"Basket__number"},[i("div",[t._v(t._s(t.cardsBasket.length)+" товара")]),i("div",{on:{click:t.clearBasket}},[t._v("Очистить список")])])]),i("div",{staticClass:"Basket__card-basket-wrapper"},t._l(t.cardsBasket,(function(e,a){return i("CardBasket",{key:a,attrs:{card:e},on:{deleteCard:function(e){return t.deleteCard(a)},qtyPlus:t.qtyPlus}})})),1),i("div",{staticClass:"Basket__total"},[i("div",{staticClass:"Basket__total_total"},[i("div",[t._v("Итого")]),i("div",[t._v(t._s(t.totalPrice)+"₽")])]),i("button",[t._v("Оформить заказ")])])])])},E=[],O=(i("13d5"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Basket__item"},[a("router-link",{attrs:{to:"#"}},[a("img",{attrs:{src:i("bb6e")("./"+t.card.img),alt:"image"}}),a("div",[a("div",{staticClass:"Basket__item_name"},[t._v(t._s(t.card.name))]),a("div",{staticClass:"Basket__item_price"},[t._v(t._s(t.card.price)+" ₽")])])]),a("div",{staticClass:"Basket__counter_btn minus",on:{click:t.qtyRemove}}),a("div",{staticClass:"Basket__counter_count"},[t._v(t._s(t.card.qty))]),a("div",{staticClass:"Basket__counter_btn plus",on:{click:t.qtyPlus}}),a("div",{staticClass:"Basket__counter_delete",on:{click:t.deleteCard}})],1)}),j=[],T={name:"CardBasket",props:["card"],data:function(){return{}},methods:{qtyPlus:function(){this.card.qty++,this.card.priceTotal=this.card.price*this.card.qty,this.$emit("qtyPlus",this.priceCounter)},qtyRemove:function(){this.card.qty>1&&this.card.qty--,this.card.priceTotal=this.card.price*this.card.qty},deleteCard:function(){this.$emit("deleteCard")}}},N=T,W=(i("88c0"),Object(u["a"])(N,O,j,!1,null,"6d8b692e",null)),A=W.exports,L={name:"Basket",props:["isClickBasket","cardsBasket"],components:{CardBasket:A},data:function(){return{total:0,count:0}},computed:{totalPrice:function(){return this.cardsBasket.reduce((function(t,e){return t+e.priceTotal}),0)}},methods:{qtyPlus:function(t){this.$emit("qtyPlus",t)},clearBasket:function(){this.$emit("clearBasket")},closeBasket:function(){this.$emit("closeBasket"),document.body.classList.remove("no-scroll")},deleteCard:function(t){this.$emit("deleteCard",t)}},mounted:function(){var t=this,e=document.querySelector(".Basket");window.onclick=function(i){i.target===e&&t.closeBasket()}}},V=L,R=(i("509a"),Object(u["a"])(V,$,E,!1,null,"875abec6",null)),Z=R.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Breadcrumbs"},[i("ul",[i("li",[i("router-link",{attrs:{to:"/"}},[t._v("Главная")])],1),i("li",[i("router-link",{attrs:{to:"/"}},[t._v("Продукты")])],1),i("li",[i("router-link",{attrs:{to:"/"}},[t._v("Краски")])],1)])])},H=[],J={name:"Breadcrumbs"},U=J,z=(i("2077"),Object(u["a"])(U,D,H,!1,null,"a4acf51c",null)),G=z.exports,I={name:"App",components:{Nav:h,Filters:g,VSelect:B,Card:M,Basket:Z,Breadcrumbs:G},data:function(){return{cardsFilter:[],cardsBasket:[],isClickBasket:!1,settings:{infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!0},cards:[{id:1,img:"Photo (1).png",name:"Краска Wallquest, Brownsone MS90102",price:6e3,priceTotal:0,rating:0,qty:1,date:"10.10.2020",availability:!0,contractual:!1,exclusive:!0},{id:2,img:"Photo (1).png",name:"Краска Wallquest, Brownsone MS90102",price:4800,priceTotal:0,rating:0,qty:1,date:"10.06.2020",availability:!0,contractual:!0,exclusive:!1},{id:3,img:"Photo (2).png",name:"Краска Wallquest, Brownsone MS90102",price:5290,priceTotal:0,rating:2,qty:1,date:"01.10.2020",availability:!0,contractual:!1,exclusive:!0},{id:4,img:"Photo (3).png",name:"Краска Wallquest, Brownsone MS90102",price:2800,priceTotal:0,rating:10,qty:1,date:"10.10.2020",availability:!0,contractual:!1,exclusive:!1},{id:5,img:"Photo (4).png",name:"Краска Wallquest, Brownsone MS90102",price:3400,priceTotal:0,rating:1,qty:1,date:"10.10.2019",availability:!0,contractual:!1,exclusive:!1},{id:6,img:"Photo (1).png",name:"Краска Wallquest, Brownsone MS90102",price:6e3,priceTotal:0,rating:6,qty:1,date:"10.10.2020",availability:!0,contractual:!0,exclusive:!0},{id:7,img:"Photo (1).png",name:"Краска Wallquest, Brownsone MS90102",price:4800,priceTotal:0,rating:6,qty:1,date:"01.03.2020",availability:!0,contractual:!1,exclusive:!1},{id:8,img:"Photo (2).png",name:"Краска Wallquest, Brownsone MS90102",price:5290,priceTotal:0,rating:0,qty:1,date:"11.06.2020",availability:!1,contractual:!1,exclusive:!1},{id:9,img:"Photo (3).png",name:"Краска Wallquest, Brownsone MS90102",price:2800,priceTotal:0,rating:10,qty:1,date:"10.01.2020",availability:!0,contractual:!1,exclusive:!1},{id:10,img:"Photo (4).png",name:"Краска Wallquest, Brownsone MS90102",price:3400,priceTotal:0,rating:9,qty:1,date:"10.05.2019",availability:!1,contractual:!1,exclusive:!1},{id:11,img:"Photo (1).png",name:"Краска Wallquest, Brownsone MS90102",price:6e3,priceTotal:0,rating:8,qty:1,date:"12.11.2018",availability:!0,contractual:!1,exclusive:!0},{id:12,img:"Photo (1).png",name:"Краска Wallquest, Brownsone MS90102",price:4800,priceTotal:0,rating:3,qty:1,date:"20.12.2019",availability:!0,contractual:!1,exclusive:!1},{id:13,img:"Photo (2).png",name:"Краска Wallquest, Brownsone MS90102",price:5290,priceTotal:0,rating:0,qty:1,date:"13.12.2020",availability:!1,contractual:!1,exclusive:!0},{id:14,img:"Photo (3).png",name:"Краска Wallquest, Brownsone MS90102",price:2800,priceTotal:0,rating:2,qty:1,date:"15.11.2020",availability:!0,contractual:!1,exclusive:!1},{id:15,img:"Photo (4).png",name:"Краска Wallquest, Brownsone MS90102",price:3400,priceTotal:0,rating:12,qty:1,date:"15.10.2020",availability:!0,contractual:!1,exclusive:!1}],new:!1,avail:!1,contractual:!1,exclusive:!1,sale:!1,filterMobile:!1}},computed:{},methods:{closeFilterMobile:function(){this.filterMobile=!this.filterMobile},clearBasket:function(){this.cardsBasket=[]},deleteCard:function(t){this.cardsBasket.splice(t,1)},clickBasket:function(){this.isClickBasket=!this.isClickBasket,document.body.classList.add("no-scroll")},addBasket:function(t){if(this.cardsBasket.length){var e=!1;this.cardsBasket.map((function(i){i.id===t.id&&(e=!0,i.qty++,i.priceTotal+=i.price)})),e||(this.cardsBasket.push(t),t.priceTotal+=t.price)}else this.cardsBasket.push(t),t.priceTotal+=t.price},isClickSelect:function(t){if("option-1"===t&&this.cardsFilter.sort((function(t,e){return parseFloat(e.price)-parseFloat(t.price)})),"option-2"===t&&this.cardsFilter.sort((function(t,e){return parseFloat(t.price)-parseFloat(e.price)})),"option-3"===t&&this.cardsFilter.sort((function(t,e){return parseFloat(e.rating)-parseFloat(t.rating)})),"option-4"===t){var e=function(t){return t.split(".").reverse().join("")};this.cardsFilter.sort((function(t,i){return parseFloat(e(i.date))-e(t.date)}))}},changeFilterNew:function(t){if(this.new=t,t){var e=function(t){return Number(t.split(".").reverse().join(""))};this.cardsFilter=this.cardsFilter.filter((function(t){return e(t.date)<20201001}))}else t?this.cardsFilter=[]:(this.cardsFilter=this.cards,this.avail&&this.changeFilterAvail(this.avail),this.contractual&&this.changeFilterContractual(this.contractual),this.exclusive&&this.changeFilterExclusive(this.exclusive),this.sale&&this.changeFilterSale(this.sale))},changeFilterAvail:function(t){this.avail=t,t?this.cardsFilter=this.cardsFilter.filter((function(t){return t.availability})):t?this.cardsFilter=[]:(this.cardsFilter=this.cards,this.new&&this.changeFilterNew(this.new),this.contractual&&this.changeFilterContractual(this.contractual),this.exclusive&&this.changeFilterExclusive(this.exclusive),this.sale&&this.changeFilterSale(this.sale))},changeFilterContractual:function(t){this.contractual=t,t?this.cardsFilter=this.cardsFilter.filter((function(t){return t.contractual})):t?this.cardsFilter=[]:(this.cardsFilter=this.cards,this.new&&this.changeFilterNew(this.new),this.avail&&this.changeFilterAvail(this.avail),this.exclusive&&this.changeFilterExclusive(this.exclusive),this.sale&&this.changeFilterSale(this.sale))},changeFilterExclusive:function(t){this.exclusive=t,t?this.cardsFilter=this.cardsFilter.filter((function(t){return t.exclusive})):t?this.cardsFilter=[]:(this.cardsFilter=this.cards,this.new&&this.changeFilterNew(this.new),this.avail&&this.changeFilterAvail(this.avail),this.contractual&&this.changeFilterContractual(this.contractual),this.sale&&this.changeFilterSale(this.sale))},changeFilterSale:function(t){this.sale=t,t?this.cardsFilter=this.cardsFilter.filter((function(t){return t.price<3e3})):t?this.cardsFilter=[]:(this.cardsFilter=this.cards,this.new&&this.changeFilterNew(this.new),this.avail&&this.changeFilterAvail(this.avail),this.contractual&&this.changeFilterContractual(this.contractual),this.exclusive&&this.changeFilterExclusive(this.exclusive))}},created:function(){this.cardsFilter=this.cards},mounted:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/todos?_limit=3").then((function(t){return t.json()})).then((function(e){return t.todos=e}))}},K=I,Q=(i("5c0b"),i("5c64"),Object(u["a"])(K,s,r,!1,null,null,null)),X=Q.exports,Y=i("8c4f"),tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("h2",[t._v(t._s(t.titles.home))]),i("div",{staticClass:"d-flex"},[i("div",[i("section",[i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error itaque laborum omnis quod? Ad adipisci aperiam architecto aut ea error explicabo illum mollitia nihil, officia omnis optio quam quis quos recusandae sit soluta, sunt ullam. Accusamus architecto deserunt error iste nihil nulla quae quibusdam repellendus sequi temporibus! Facere, itaque! ")]),i("div",{staticClass:"cards"},t._l(t.products,(function(e){return i("Card",{key:e.id,attrs:{product:e},on:{addBasket:t.addBasket}})})),1)])])])])},et=[],it=i("5530"),at=i("2f62"),st={name:"Home",props:["titles"],components:{Card:M},data:function(){return{settings:{infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,pauseOnFocus:!0,pauseOnHover:!0,arrows:!0}}},computed:Object(it["a"])({},Object(at["c"])(["products"])),methods:Object(it["a"])(Object(it["a"])({},Object(at["b"])(["inBasket"])),{},{addBasket:function(t){this.inBasket(t)}})},rt=st,ct=(i("6faf"),Object(u["a"])(rt,tt,et,!1,null,"60d529ee",null)),lt=ct.exports;a["a"].use(Y["a"]);var nt=new Y["a"]({mode:"history",routes:[{path:"/",component:lt}]});a["a"].use(at["a"]);var ot=new at["a"].Store({state:{count:0},mutations:{},actions:{},getters:{}}),ut=ot;i("7b8d"),i("6a2c");a["a"].component("VueSlickCarousel",i("a7ab")),a["a"].config.productionTip=!1,new a["a"]({store:ut,router:nt,render:function(t){return t(X)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"5c64":function(t,e,i){"use strict";i("d32a")},6600:function(t,e,i){},"68b4":function(t,e,i){},"6faf":function(t,e,i){"use strict";i("b613")},"811a":function(t,e,i){t.exports=i.p+"img/Photo (1).68184938.png"},"88c0":function(t,e,i){"use strict";i("9c1d")},9730:function(t,e,i){t.exports=i.p+"img/Border.86f8ba97.png"},"9c0c":function(t,e,i){},"9c1d":function(t,e,i){},b342:function(t,e,i){t.exports=i.p+"img/Photo.dfee9eda.png"},b5ba:function(t,e,i){t.exports=i.p+"img/Photo (2).682f3b14.png"},b613:function(t,e,i){},b80b:function(t,e,i){},bb6e:function(t,e,i){var a={"./Border.png":"9730","./Frame 37.png":"ea0f","./Photo (1).png":"811a","./Photo (2).png":"b5ba","./Photo (3).png":"be95","./Photo (4).png":"fb5f","./Photo (5).png":"5483","./Photo (6).png":"e880","./Photo (7).png":"db0f","./Photo.png":"b342","./Rectangle 645.png":"4ce5"};function s(t){var e=r(t);return i(e)}function r(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=r,t.exports=s,s.id="bb6e"},be95:function(t,e,i){t.exports=i.p+"img/Photo (3).29dcf688.png"},d32a:function(t,e,i){},db0f:function(t,e,i){t.exports=i.p+"img/Photo (7).68102449.png"},dcf8:function(t,e,i){"use strict";i("202e")},dd51:function(t,e,i){"use strict";i("6600")},e53b:function(t,e,i){},e880:function(t,e,i){t.exports=i.p+"img/Photo (6).5700f4ac.png"},ea0f:function(t,e,i){t.exports=i.p+"img/Frame 37.a8d6cade.png"},fb5f:function(t,e,i){t.exports=i.p+"img/Photo (4).ab68b926.png"}});
//# sourceMappingURL=app.e119c2b8.js.map