(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(76)},48:function(e,t,a){},49:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(17),o=a.n(s),c=(a(48),a(10));a(49);var i=function(){return n.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement("a",{className:"navbar-item",href:"https://bulma.io",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28",alt:"logo"}))),n.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},n.a.createElement("div",{className:"navbar-start"},n.a.createElement(c.b,{className:"navbar-item",to:"/"},"Home"),n.a.createElement(c.b,{className:"navbar-item",to:"/posts"},"Posts")),n.a.createElement("div",{className:"navbar-end"},n.a.createElement("div",{className:"navbar-item"},n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{className:"button is-primary"},n.a.createElement("strong",null,"Sign up")),n.a.createElement("button",{className:"button is-light"},"Log in"))))))},l=a(13),u=a(12),d=a(14),m=a(2),E=a(26),f=a.n(E),L=a(40),b=a(41),p=a.n(b),v=Object(m.b)({slice:"lastError",initialState:null,reducers:{clearLastError:function(){return null},setLastError:function(e,t){return t.payload}}}),g=v.reducer,h=v.actions,j=(h.clearLastError,h.setLastError),O=(v.selectors.getLastError,"https://jsonplaceholder.typicode.com/");function P(e){var t=e.route,a=e.params,r=e.isLoading,n=e.dataLoaded,s=e.loadError,o=e.beforeFetch,c=e.afterSuccess;if(!r||!n||!s)throw new Error("Actions for isLoading, dataLoaded, and loadError are required");return function(){var e=Object(L.a)(f.a.mark(function e(i){var l;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o&&i(o()),i(r(!0)),i(s(null)),e.prev=3,e.next=6,p.a.get("".concat(O).concat(t),a);case 6:l=e.sent,i(n(l.data)),c&&i(c(l)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),i(s(e.t0.message)),i(j(e.t0.message));case 15:i(r(!1));case 16:case"end":return e.stop()}},e,null,[[3,11]])}));return function(t){return e.apply(this,arguments)}}()}var y=Object(m.b)({slice:"userList",initialState:{data:null,isLoading:!1,loadError:null},reducers:{setUserList:function(e,t){e.data=t.payload},clearUserList:function(e){e.data=null},setUserListIsLoading:function(e,t){e.isLoading=t.payload},setUserListLoadError:function(e,t){e.loadError=t.payload}}}),U=y.reducer,N=y.actions,w=N.setUserList,C=N.setUserListIsLoading,I=N.setUserListLoadError;var S=y.selectors.getUserList,D=Object(m.a)([S],function(e){return e.data}),k=Object(m.a)([S],function(e){return e.isLoading});var x=function(e){var t=e.name;return n.a.createElement("div",null,t)};var B=function(){return n.a.createElement("div",{className:"columns is-mobile"},n.a.createElement("div",{className:"column is-half is-offset-one-quarter"},n.a.createElement("progress",{className:"progress is-primary",max:"100"})))};var q=function(e){var t=e.title;return n.a.createElement("h1",{className:"title"},t)};var F=Object(d.createStructuredSelector)({userListData:D,userListIsLoading:k}),J={fetchUsers:function(){return P({route:"users",isLoading:C,dataLoaded:w,loadError:I})}},W=Object(u.b)(F,J)(function(e){var t=e.userListData,a=e.userListIsLoading,s=e.fetchUsers;return Object(r.useEffect)(function(){null===t&&s()},[t,s]),n.a.createElement("div",null,n.a.createElement(q,{title:"Users"}),a&&n.a.createElement(B,null),t&&t.map(function(e){return n.a.createElement(x,Object.assign({key:e.id},e))}))}),A=Object(m.b)({slice:"postList",initialState:{data:null,isLoading:!1,loadError:null},reducers:{setPostList:function(e,t){e.data=t.payload},clearPostList:function(e){e.data=null},setPostListIsLoading:function(e,t){e.isLoading=t.payload},setPostListLoadError:function(e,t){e.loadError=t.payload}}}),G=A.reducer,H=A.actions,M=H.setPostList,R=H.setPostListIsLoading,$=H.setPostListLoadError;var _=A.selectors.getPostList,z=Object(m.a)([_],function(e){return e.data}),K=Object(m.a)([_],function(e){return e.isLoading});var Q=function(e){var t=e.id,a=e.title;return n.a.createElement("div",null,n.a.createElement(c.b,{to:"/post/".concat(t)},a))};var T=Object(d.createStructuredSelector)({postListData:z,postListIsLoading:K}),V={fetchPosts:function(){return P({route:"posts",isLoading:R,dataLoaded:M,loadError:$})}},X=Object(u.b)(T,V)(function(e){var t=e.postListData,a=e.postListIsLoading,s=e.fetchPosts;return Object(r.useEffect)(function(){t||s()},[t,s]),n.a.createElement("div",null,n.a.createElement(q,{title:"Posts"}),a&&n.a.createElement(B,null),t&&t.map(function(e){return n.a.createElement(Q,Object.assign({key:e.id},e))}))}),Y=Object(m.b)({slice:"userDetail",initialState:{data:null,isLoading:!1,loadError:null},reducers:{setCurrentUser:function(e,t){e.data=t.payload},clearCurrentUser:function(e){e.data=null},setCurrentUserIsLoading:function(e,t){e.isLoading=t.payload},setCurrentUserLoadError:function(e,t){e.loadError=t.payload}}}),Z=Y.reducer,ee=Y.actions,te=ee.setCurrentUser,ae=ee.clearCurrentUser,re=ee.setCurrentUserIsLoading,ne=ee.setCurrentUserLoadError;var se=Y.selectors.getUserDetail,oe=Object(m.a)([se],function(e){return e.data}),ce=(Object(m.a)([se],function(e){return e.isLoading}),Object(m.a)([se],function(e){return e.loadError}),Object(m.b)({slice:"postDetail",initialState:{data:null,isLoading:!1,loadError:null},reducers:{setCurrentPost:function(e,t){e.data=t.payload},clearCurrentPost:function(e){e.data=null},setCurrentPostIsLoading:function(e,t){e.isLoading=t.payload},setCurrentPostLoadError:function(e,t){e.loadError=t.payload}}})),ie=ce.reducer,le=ce.actions,ue=le.setCurrentPost,de=le.clearCurrentPost,me=le.setCurrentPostIsLoading,Ee=le.setCurrentPostLoadError;var fe=ce.selectors.getPostDetail,Le=Object(m.a)([fe],function(e){return e.data}),be=Object(m.a)([fe],function(e){return e.isLoading}),pe=Object(m.a)([fe],function(e){return e.loadError});var ve=function(e){var t=e.name;return n.a.createElement("h2",{className:"subtitle"},"By: ",t)};var ge=function(e){var t=e.title,a=e.user,r=e.body;return n.a.createElement("div",null,n.a.createElement(q,{title:t}),n.a.createElement(ve,Object.assign({className:"sub-title"},a)),n.a.createElement("p",null,r))};var he=Object(d.createStructuredSelector)({currentPostData:Le,currentPostIsLoading:be,currentPostLoadError:pe,currentUserData:oe}),je={fetchPost:function(e){return P({route:"posts/".concat(e),isLoading:me,dataLoaded:ue,loadError:Ee,beforeFetch:function(){return de()},afterSuccess:function(e){return t=e.data.userId,P({route:"users/".concat(t),isLoading:re,dataLoaded:te,loadError:ne,beforeFetch:function(){return ae()}});var t}})}},Oe=Object(u.b)(he,je)(function(e){var t=e.fetchPost,a=e.match,s=e.currentPostData,o=e.currentPostLoadError,i=e.currentPostIsLoading,l=e.currentUserData;return Object(r.useEffect)(function(){var e=a.params.id;e&&t(e)},[t,a.params.id]),n.a.createElement("div",null,i&&n.a.createElement(B,null),o&&n.a.createElement("div",null,n.a.createElement("h4",{className:"has-text-danger"},"Unable to find requested item"),n.a.createElement("span",null,"Go to ",n.a.createElement(c.b,{to:"/posts"},"Posts"))),s&&!i&&n.a.createElement(ge,Object.assign({},s,{user:l})))});var Pe=function(){return n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/",component:W}),n.a.createElement(l.a,{path:"/posts",component:X}),n.a.createElement(l.a,{path:"/post/:id",component:Oe}))};var ye=function(){return n.a.createElement(c.a,{basename:"/react-sample"},n.a.createElement(i,null),n.a.createElement("section",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement(Pe,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue=a(3),Ne=a(20),we=(a(75),Object(Ue.combineReducers)({lastError:g,postList:G,postDetail:ie,userList:U,userDetail:Z})),Ce=[Ne.a];var Ie=Object(Ue.createStore)(we,Ue.applyMiddleware.apply(void 0,Ce)),Se=document.getElementById("root");o.a.render(n.a.createElement(u.a,{store:Ie},n.a.createElement(ye,null)),Se),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.e7f6049d.chunk.js.map