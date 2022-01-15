(function(t){function e(e){for(var a,o,i=e[0],u=e[1],s=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},c=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"201f":function(t,e,n){"use strict";n("47d3")},"47d3":function(t,e,n){},"53b3":function(t,e,n){"use strict";n("a832")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(t,e,n,r,c,o){var i=Object(a["l"])("data-table");return Object(a["h"])(),Object(a["c"])(i)}var c={class:"table"};function o(t,e,n,r,o,i){var u=Object(a["l"])("filter-group"),s=Object(a["l"])("main-table"),l=Object(a["l"])("table-pagination");return Object(a["h"])(),Object(a["e"])("div",c,[Object(a["g"])(u,{onFilterChanged:i.getDataByFilters},null,8,["onFilterChanged"]),Object(a["g"])(s,{rows:o.rows,sorting:o.sorting,onChangeSorting:i.changeSorting,onNewRow:i.newRow},null,8,["rows","sorting","onChangeSorting","onNewRow"]),Object(a["g"])(l,{ref:"tablePagination",onPageChange:i.changePage,pages:o.pages},null,8,["onPageChange","pages"])])}var i=n("5530"),u=n("1da1"),s=(n("96cf"),n("99af"),n("bc3a")),l=n.n(s);function d(t,e){return f.apply(this,arguments)}function f(){return f=Object(u["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l()("/api/getData?offset=".concat(e,"&orderBy=").concat(n.orderBy,"&direction=").concat(n.direction));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}function p(){return b.apply(this,arguments)}function b(){return b=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l()("/api/getCount");case 2:return e=t.sent,t.abrupt("return",e.data.count);case 4:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}function g(t){return h.apply(this,arguments)}function h(){return h=Object(u["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l()("/api/filterData?column=".concat(e.column,"&condition=").concat(e.condition,"&value=").concat(e.value,"&offset=").concat(e.page));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function O(t){return j.apply(this,arguments)}function j(){return j=Object(u["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.post("/api/addNewRow/",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)}))),j.apply(this,arguments)}var m=function(t){return Object(a["j"])("data-v-52510554"),t=t(),Object(a["i"])(),t},w={class:"filter-group"},v=m((function(){return Object(a["f"])("option",{value:"date"},"Дата",-1)})),y=m((function(){return Object(a["f"])("option",{value:"name"},"Название",-1)})),P=m((function(){return Object(a["f"])("option",{value:"count"},"Количество",-1)})),C=m((function(){return Object(a["f"])("option",{value:"distance"},"Расстояние",-1)})),k=[v,y,P,C],R={key:0,value:">"},x={key:1,value:"<"},S=m((function(){return Object(a["f"])("option",{value:"="}," = ",-1)})),_={key:2,value:"||"};function D(t,e,n,r,c,o){return Object(a["h"])(),Object(a["e"])("div",w,[Object(a["p"])(Object(a["f"])("select",{onChange:e[0]||(e[0]=function(){return o.filterColumns&&o.filterColumns.apply(o,arguments)}),"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.column=t}),class:"filter",name:"column"},k,544),[[a["n"],c.column]]),Object(a["p"])(Object(a["f"])("select",{onChange:e[2]||(e[2]=function(){return o.filterColumns&&o.filterColumns.apply(o,arguments)}),class:"filter","onUpdate:modelValue":e[3]||(e[3]=function(t){return c.condition=t}),name:"condition",id:""},["name"!==c.column?(Object(a["h"])(),Object(a["e"])("option",R," > ")):Object(a["d"])("",!0),"name"!==c.column?(Object(a["h"])(),Object(a["e"])("option",x,"<")):Object(a["d"])("",!0),S,"name"===c.column?(Object(a["h"])(),Object(a["e"])("option",_," || ")):Object(a["d"])("",!0)],544),[[a["n"],c.condition]]),"date"===c.column?Object(a["p"])((Object(a["h"])(),Object(a["e"])("input",{key:0,onChange:e[4]||(e[4]=function(){return o.filterColumns&&o.filterColumns.apply(o,arguments)}),"onUpdate:modelValue":e[5]||(e[5]=function(t){return c.date=t}),class:"filter",type:"date"},null,544)),[[a["o"],c.date]]):Object(a["p"])((Object(a["h"])(),Object(a["e"])("input",{key:1,onInput:e[6]||(e[6]=function(){return o.filterColumns&&o.filterColumns.apply(o,arguments)}),"onUpdate:modelValue":e[7]||(e[7]=function(t){return c.value=t}),class:"filter",type:"text"},null,544)),[[a["o"],c.value]])])}var V={name:"FilterGroup",data:function(){return{column:null,condition:null,value:null,date:null}},emits:{filterChanged:{type:Object}},methods:{filterColumns:function(){var t="date"===this.column?this.date:this.value;this.column&&this.condition&&this.$emit("filterChanged",{column:this.column,condition:this.condition,value:t})}}},N=(n("ba55"),n("6b0d")),T=n.n(N);const F=T()(V,[["render",D],["__scopeId","data-v-52510554"]]);var M=F,U={class:"table-names-row"},B=Object(a["f"])("td",{class:"table-names-row-item"},"Дата",-1);function $(t,e,n,r,c,o){var i=Object(a["l"])("data-row"),u=Object(a["l"])("add-new-row");return Object(a["h"])(),Object(a["e"])("table",null,[Object(a["f"])("tr",U,[Object(a["f"])("td",{onClick:e[0]||(e[0]=function(t){return o.changeSorting("id")}),class:"table-names-row-item"},"#"),B,Object(a["f"])("td",{onClick:e[1]||(e[1]=function(t){return o.changeSorting("name")}),class:"table-names-row-item"},"Название"),Object(a["f"])("td",{onClick:e[2]||(e[2]=function(t){return o.changeSorting("count")}),class:"table-names-row-item"},"Количество"),Object(a["f"])("td",{onClick:e[3]||(e[3]=function(t){return o.changeSorting("distance")}),class:"table-names-row-item"},"Расстояние")]),(Object(a["h"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(n.rows,(function(t){return Object(a["h"])(),Object(a["c"])(i,{key:t.id,row:t},null,8,["row"])})),128)),Object(a["g"])(u,{onNewRow:o.newRow},null,8,["onNewRow"])])}n("b0c0");var A={class:"add-new-row"};function I(t,e,n,r,c,o){return Object(a["h"])(),Object(a["e"])("tr",A,[Object(a["f"])("td",null,[Object(a["f"])("button",{onClick:e[0]||(e[0]=function(){return o.sendData&&o.sendData.apply(o,arguments)}),class:"add-new-row-button"},"Add")]),Object(a["f"])("td",null,[Object(a["p"])(Object(a["f"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return c.date=t}),class:"add-new-row-input",type:"date"},null,512),[[a["o"],c.date]])]),Object(a["f"])("td",null,[Object(a["p"])(Object(a["f"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return c.name=t}),class:"add-new-row-input",type:"text"},null,512),[[a["o"],c.name]])]),Object(a["f"])("td",null,[Object(a["p"])(Object(a["f"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return c.count=t}),class:"add-new-row-input",type:"number"},null,512),[[a["o"],c.count]])]),Object(a["f"])("td",null,[Object(a["p"])(Object(a["f"])("input",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return c.distance=t}),class:"add-new-row-input",type:"number"},null,512),[[a["o"],c.distance]])])])}var q={name:"AddNewRow",data:function(){return{date:null,name:null,count:null,distance:null}},methods:{sendData:function(){this.date&&this.name&&this.count&&this.distance?(this.$emit("newRow",{date:new Date(this.date).getTime(),name:this.name,count:this.count,distance:this.distance}),this.clearValues()):alert("Введите значение!")},clearValues:function(){var t=[null];this.date=t[0],this.name=t[1],this.count=t[2],this.distance=t[3]}}};n("201f");const G=T()(q,[["render",I],["__scopeId","data-v-d14f181c"]]);var J=G,W={class:"table-data-row"},z={class:"table-data-row-item"},E={class:"table-data-row-item"},H={class:"table-data-row-item"},K={class:"table-data-row-item"},L={class:"table-data-row-item"};function Q(t,e,n,r,c,o){return Object(a["h"])(),Object(a["e"])("tr",W,[Object(a["f"])("td",z,Object(a["m"])(n.row.id),1),Object(a["f"])("td",E,Object(a["m"])(n.row.date),1),Object(a["f"])("td",H,Object(a["m"])(n.row.name),1),Object(a["f"])("td",K,Object(a["m"])(n.row.count),1),Object(a["f"])("td",L,Object(a["m"])(n.row.distance)+"km",1)])}var X={name:"DataRow",props:{row:{type:Object,required:!0}}};const Y=T()(X,[["render",Q]]);var Z=Y,tt={name:"MainTable",components:{DataRow:Z,AddNewRow:J},emits:{changeSorting:{type:Object},newRow:{type:Object}},props:{rows:{type:Array,required:!0},sorting:{type:Object,required:!0}},methods:{changeSorting:function(t){var e="desc";this.sorting.orderBy===t&&(e="desc"===this.sorting.direction?"asc":"desc"),this.$emit("changeSorting",{orderBy:t,direction:e})},newRow:function(t){this.$emit("newRow",t)}}};n("7ea2");const et=T()(tt,[["render",$]]);var nt=et,at={class:"page"},rt={class:"pagination"},ct={class:"pagination-link"},ot={key:2,class:"pagination-link"};function it(t,e,n,r,c,o){return Object(a["h"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("div",at," Page: "+Object(a["m"])(c.currentPage),1),Object(a["f"])("div",rt,[c.currentPage-1!==0?(Object(a["h"])(),Object(a["e"])("div",{key:0,class:"pagination-link",onClick:e[0]||(e[0]=function(t){return c.currentPage=c.currentPage-1})},Object(a["m"])(c.currentPage-1),1)):Object(a["d"])("",!0),Object(a["f"])("div",ct,Object(a["m"])(c.currentPage),1),c.currentPage+1<n.pages?(Object(a["h"])(),Object(a["e"])("div",{key:1,class:"pagination-link",onClick:e[1]||(e[1]=function(t){return c.currentPage=c.currentPage+1})},Object(a["m"])(c.currentPage+1),1)):Object(a["d"])("",!0),c.currentPage+2<n.pages?(Object(a["h"])(),Object(a["e"])("div",ot,"...")):Object(a["d"])("",!0),c.currentPage!==n.pages&&n.pages>1?(Object(a["h"])(),Object(a["e"])("div",{key:3,class:"pagination-link",onClick:e[2]||(e[2]=function(t){return c.currentPage=n.pages})},Object(a["m"])(n.pages),1)):Object(a["d"])("",!0)])],64)}n("a9e3");var ut={name:"TablePagination",data:function(){return{currentPage:1}},emits:{pageChange:{type:Number}},props:{pages:{type:Number,required:!0}},watch:{currentPage:function(){this.pageChange()}},methods:{pageChange:function(){this.$emit("pageChange",this.currentPage)},setPage:function(t){this.currentPage=t}}};n("53b3");const st=T()(ut,[["render",it],["__scopeId","data-v-b88f7232"]]);var lt=st,dt={name:"DataTable",data:function(){return{rows:[],pages:0,filters:null,sorting:{orderBy:"id",direction:"asc"}}},components:{TablePagination:lt,MainTable:nt,FilterGroup:M},methods:{changePage:function(t){this.getRows(t)},setPage:function(t){this.$refs.tablePagination.setPage(t)},getDataByFilters:function(t){t.value?(this.filters=t,this.getRowsWithFilters()):(this.filters=null,this.getRows(1))},getRows:function(t){var e=this,n=t?10*t:10*this.page;d(n,this.sorting).then((function(t){e.rows=t}))},getRowsWithFilters:function(){var t=this,e=Object(i["a"])(Object(i["a"])({},this.filters),{},{page:this.page});g(e).then((function(e){t.pages=Math.ceil(e.count/10),t.rows=e.rows}))},changeSorting:function(t){this.sorting=t,this.getRows()},newRow:function(t){var e=this;O(t).then((function(t){t&&e.getRows()}))}},computed:{page:function(){return this.$refs.tablePagination.currentPage}},mounted:function(){var t=this;this.getRows(1),p().then((function(e){t.pages=Math.ceil(e/10)}))}};n("9d80");const ft=T()(dt,[["render",o],["__scopeId","data-v-20c2748a"]]);var pt=ft,bt={name:"App",components:{DataTable:pt}};const gt=T()(bt,[["render",r]]);var ht=gt;Object(a["b"])(ht).mount("#app")},"5c49":function(t,e,n){},"7ea2":function(t,e,n){"use strict";n("fcb9")},"9d80":function(t,e,n){"use strict";n("5c49")},a832:function(t,e,n){},ba55:function(t,e,n){"use strict";n("d3e4")},d3e4:function(t,e,n){},fcb9:function(t,e,n){}});
//# sourceMappingURL=app.0923b398.js.map