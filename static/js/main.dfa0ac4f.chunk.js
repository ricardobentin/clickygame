(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Lion-o",image:"./img/Lion-o.jpg"},{id:2,name:"Panthro",image:"./img/Panthro.jpg",clicked:!1},{id:3,name:"Tygra",image:"./img/Tygra.jpg",clicked:!1},{id:4,name:"Cheetara",image:"./img/Cheetara.jpg",clicked:!1},{id:5,name:"Wilykat",image:"./img/Wilykat.jpg",clicked:!1},{id:6,name:"Wilykit",image:"./img/Wilykit.jpg",clicked:!1},{id:7,name:"Snarf",image:"./img/Snarf.jpg",clicked:!1},{id:8,name:"Jaga",image:"./img/Jaga.jpg",clicked:!1},{id:9,name:"Jackalman",image:"./img/Jackalman.jpg",clicked:!1},{id:10,name:"Monkian",image:"./img/Monkian.jpg",clicked:!1},{id:11,name:"Mumm-ra",image:"./img/Mumm-ra.jpg",clicked:!1},{id:12,name:"Slithe",image:"./img/Slithe.jpg",clicked:!1}]},,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),i=a.n(r),o=(a(14),a(1)),l=a(2),s=a(4),m=a(3),u=a(5),d=(a(16),function(e){return c.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),g=(a(18),function(e){return c.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)}),h=(a(20),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{className:"text-center"},c.a.createElement("h1",null,"Clicky Game!"),c.a.createElement("h2",null,"Click on an image to earn points, but don't click on any image more than once or your score will reset!!"))}}]),t}(n.Component)),f=(a(22),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("a",{href:"https://github.com/ricardobentin/clickygame"},"Clicky Game by Ricardo Bentin"))}}]),t}(n.Component)),k=(a(24),function(e){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",{className:"brand"},c.a.createElement("img",{src:"./tcats.jpg",alt:"thundercats",href:"/"})),c.a.createElement("li",{id:"rw"},e.userMessage),c.a.createElement("li",{id:"cur-sco"},"Current Score: ",e.score),c.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))}),p=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return c.a.createElement("div",{className:t},e.children)},j=function(e){return c.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},S=a(6);a(26);var y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={thundercats:S,currentScore:0,topScore:0,thundercatsClicked:[],userMessage:"Click on Any image to get started!"},a.handleClick=function(e){-1===a.state.thundercatsClicked.indexOf(e)?(a.handleIncrement(),a.setState({thundercatsClicked:a.state.thundercatsClicked.concat(e)})):a.handleReset()},a.handleIncrement=function(){var e=a.state.currentScore+1;a.setState({currentScore:e,userMessage:"Awesome! Keep Clicking Unique Images!"}),e>a.state.topScore?a.setState({topScore:e}):a.state.currentScore>11&&a.setState({userMessage:"You win! There are no more unique images to click!"}),a.handleShuffle()},a.handleReset=function(){a.setState({currentScore:0,topScore:a.state.topScore,userMessage:"You clicked this one already. Let's try to beat your top score until you can reach 12!",thundercatsClicked:[]}),a.handleShuffle()},a.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(S);a.setState({friends:e})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(g,null,c.a.createElement(k,{title:"Thundercats, WHOOOA!",score:this.state.currentScore,topScore:this.state.topScore,userMessage:this.state.userMessage}),c.a.createElement(h,null),c.a.createElement(j,null,this.state.thundercats.map(function(t){return c.a.createElement(p,{key:t.id,size:"md-3 sm-6"},c.a.createElement(d,{id:t.id,key:t.id,name:t.name,image:t.image,handleClick:e.handleClick}))})),c.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.dfa0ac4f.chunk.js.map