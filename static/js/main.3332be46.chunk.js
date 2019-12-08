(this["webpackJsonpdad-jokes-app"]=this["webpackJsonpdad-jokes-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(65)},36:function(e,t,a){},38:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(23),i=a.n(o),r=(a(36),a(2)),c=a(3),l=a(5),u=a(4),m=a(6),p=a(28),h=a(30),d=a(10),k=a.n(d),v=a(29),f=a(8),g=(a(38),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getColor",value:function(){return this.props.votes>=15?"#4CAF50":this.props.votes>=12?"#8BC34A":this.props.votes>=9?"#CDDC39":this.props.votes>=6?"#FFEB3B":this.props.votes>=3?"#FFC107":this.props.votes>=0?"#FF9800":"#F44336"}},{key:"getEmoji",value:function(){return this.props.votes>=15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=9?"em em-smiley":this.props.votes>=6?"em em-slightly_smiling_face":this.props.votes>=3?"em em-neutral_face":this.props.votes>=0?"em em-confused":"em em-angry"}},{key:"render",value:function(){return s.a.createElement("div",{className:"Joke"},s.a.createElement("div",{className:"Joke-buttons"},s.a.createElement("i",{className:"fas fa-arrow-up",onClick:this.props.upvote}),s.a.createElement("span",{className:"Joke-votes",style:{borderColor:this.getColor()}},this.props.votes),s.a.createElement("i",{className:"fas fa-arrow-down",onClick:this.props.downvote})),s.a.createElement("div",{className:"Joke-text"},this.props.text),s.a.createElement("div",{className:"Joke-smiley"},s.a.createElement("i",{className:this.getEmoji()})))}}]),t}(n.Component)),j=a(24),b=a.n(j),E=a(25),J=a.n(E),y=(a(58),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),loading:!1},a.seenJokes=new Set(a.state.jokes.map((function(e){return e.text}))),console.log(a.seenJokes),a.handleClick=a.handleClick.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;0===this.state.jokes.length&&this.setState((function(){return{loading:!0}}),(function(){return e.getJokes()}))}},{key:"getJokes",value:function(){var e,t,a,n=this;return k.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:s.prev=0,e=[];case 2:if(!(e.length<this.props.numJokesToGet)){s.next=10;break}return s.next=5,k.a.awrap(b.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}}));case 5:t=s.sent,a=t.data.joke,this.seenJokes.has(a)?(console.log("Found a duplicate!"),console.log(a)):e.push({id:J()(),text:t.data.joke,votes:0}),s.next=2;break;case 10:this.setState((function(t){return{loading:!1,jokes:[].concat(Object(v.a)(t.jokes),e)}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(n.state.jokes))})),s.next=17;break;case 13:s.prev=13,s.t0=s.catch(0),alert(s.t0),this.setState({loading:!1});case 17:case"end":return s.stop()}}),null,this,[[0,13]])}},{key:"handleVote",value:function(e,t){var a=this;this.setState((function(a){return{jokes:a.jokes.map((function(a){return a.id===e?Object(h.a)({},a,{votes:a.votes+t}):a}))}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(a.state.jokes))}))}},{key:"handleClick",value:function(){this.setState({loading:!0},this.getJokes)}},{key:"render",value:function(){var e=this;if(this.state.loading)return s.a.createElement("div",{className:"JokeList-spinner"},s.a.createElement("i",{className:"far fa-8x fa-laugh fa-spin"}),s.a.createElement("h1",{className:"JokeList-title"},"Loading..."));var t=this.state.jokes.sort((function(e,t){return t.votes-e.votes}));return s.a.createElement("div",{className:"JokeList"},s.a.createElement("div",{className:"JokeList-sidebar"},s.a.createElement("h1",{className:"JokeList-title"},s.a.createElement("span",null,"Dad")," Jokes"),s.a.createElement("img",{src:"https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"}),s.a.createElement("button",{className:"JokeList-getmore",onClick:this.handleClick},"Fetch Jokes")),s.a.createElement("div",{className:"JokeList-jokes"},t.map((function(t){return s.a.createElement("div",null,s.a.createElement(g,{key:t.id,votes:t.votes,text:t.text,upvote:function(){return e.handleVote(t.id,1)},downvote:function(){return e.handleVote(t.id,-1)}}))}))))}}]),t}(n.Component));y.defaultProps={numJokesToGet:10};var w=y,O=(a(59),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,{basename:"/"},s.a.createElement("div",{className:"App"},s.a.createElement(w,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.3332be46.chunk.js.map