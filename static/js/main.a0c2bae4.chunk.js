(this.webpackJsonphuntweb=this.webpackJsonphuntweb||[]).push([[0],{34:function(e,t,a){e.exports=a(70)},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),i=a(7),l=a(6),s=a(9),u=a.n(s),p=a(33),d=a(11),m=a(12),f=a(14),h=a(13),v=a(15),g=a(30),E=a.n(g).a.create({baseURL:"https://rocketseat-node.herokuapp.com/api"}),b=(a(58),function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("i",{className:"fa fa-spinner fa-spin"}))}),w=(a(59),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(void 0).props,t=e.products,a=e.productInfo,n=e.page,c=e.prevPage,o=e.nextPage;return r.a.createElement("div",{className:"product__list-item"},t.map((function(e){return r.a.createElement("article",{key:e._id},r.a.createElement("strong",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement(i.b,{to:"/products/".concat(e._id)},"Acessar"))})),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{disabled:1===n,onClick:c},"Anterior"),r.a.createElement("button",{disabled:n===a.pages,onClick:o},"Pr\xf3ximo")))}),k=(a(65),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],productInfo:{},page:1,loading:!1},a.loadProducts=function(){var e,t,n,r,c,o=arguments;return u.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:1,i.next=3,u.a.awrap(E.get("/products?page=".concat(e)));case 3:t=i.sent,n=t.data,r=n.docs,c=Object(p.a)(n,["docs"]),a.setState({products:r,productInfo:c,page:e,loading:!0});case 6:case"end":return i.stop()}}))},a.prevPage=function(){var e=a.state,t=e.page;e.productInfo;if(1!==t){var n=t-1;a.loadProducts(n)}},a.nextPage=function(){var e=a.state,t=e.page;if(t!==e.productInfo.pages){var n=t+1;a.loadProducts(n)}},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadProducts()}},{key:"render",value:function(){var e=this.state,t=e.products,a=e.page,n=e.productInfo,c=e.loading;return console.log(this.state),console.log(this.state.products),r.a.createElement("div",{className:"product__list"},c?r.a.createElement(w,{products:t,page:a,productInfo:n,prevPage:this.prevPage,nextPage:this.nextPage}):r.a.createElement(b,null))}}]),t}(n.Component)),y=(a(66),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(void 0).props,t=e.product;return r.a.createElement("div",{className:"product__info"},r.a.createElement("h1",null,t.title),r.a.createElement("p",null,t.description),r.a.createElement("p",null,"URL: ",r.a.createElement("a",{href:t.url},t.url)))}),P=(a(67),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={product:{},loading:!1},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e,t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=this.props.match.params.id,a.next=3,u.a.awrap(E.get("/products/".concat(e)));case 3:t=a.sent,this.setState({product:t.data,loading:!0});case 5:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.product,a=e.loading;return r.a.createElement("div",{className:"product__container"},a?r.a.createElement(y,{product:t,p:!0}):r.a.createElement(b,null),r.a.createElement(i.b,{className:"button--back",to:"/"},"Voltar"))}}]),t}(n.Component)),j=function(){return r.a.createElement(i.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:k}),r.a.createElement(l.a,{path:"/products/:id",component:P})))},x=(a(68),a(69),function(){return r.a.createElement("header",{id:"main-header"},"JSHunt ")}),O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.a0c2bae4.chunk.js.map