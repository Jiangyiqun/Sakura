(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(19),l=t.n(c),r=(t(80),t(81),t(20)),s=t(15),o=t(22),m=t(21),d=t(12),h=t(23),u=t(142),p=(t(82),t(135)),g=t(144),v=t(136),C=t(137),b=t(139),E=t(140),f=t(138),k=t(52),N=t.n(k),O=t(51),D=t.n(O),y=t(48),S=t.n(y),x=(t(102),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleClick=t.handleClick.bind(Object(d.a)(t)),t.handleClickDay=t.handleClickDay.bind(Object(d.a)(t)),t.handleRenderCalendar=t.handleRenderCalendar.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"handleClick",value:function(e){var a=this.props.state;a.currentPage="Add",this.props.handleChangeState(a)}},{key:"handleClickDay",value:function(e){var a=this.props.state;a.currentDate=e,this.props.handleChangeState(a)}},{key:"handleRenderCalendar",value:function(e){var a=e.view,t=e.date.toString(),n=this.props.state.userData,i=this.props.state.startDate,c=this.props.state.totaolDuration,l=this.props.state.periodDuration;if("month"!==a)return null;if(t in n)return"blood-"+n[t].Blood;var r=(Date.parse(t)-Date.parse(i))/864e5%c;return r<=0?null:r<l?"predict-1":"predict-0"}},{key:"render",value:function(){var e=this.props.state,a=Object(p.a)(function(e){return{root:{flexGrow:1},title:{flexGrow:1},margin:{margin:e.spacing(1)}}});return i.a.createElement("div",null,i.a.createElement("div",{className:a.root},i.a.createElement(g.a,{position:"static",className:"app-bar"},i.a.createElement(v.a,null,i.a.createElement(C.a,{variant:"h6",color:"inherit",className:a.title},"Period Tracker"),i.a.createElement(f.a,{edge:"end",color:"inherit",target:"_blank",href:"https://github.com/jiangyiqun/sakura"},i.a.createElement(D.a,null))))),i.a.createElement(b.a,{maxWidth:"xs"},i.a.createElement(S.a,{value:e.currentDate,onClickDay:this.handleClickDay,tileClassName:this.handleRenderCalendar})),i.a.createElement("div",{className:"container-div"},i.a.createElement("div",{className:"sub-container"},i.a.createElement(E.a,{size:"medium",color:"secondary","aria-label":"add",className:a.margin,onClick:this.handleClick},i.a.createElement(N.a,null)))))}}]),a}(i.a.Component)),j=t(141),w=(t(113),t(53)),P=t.n(w),B=t(54),M=t.n(B),_=t(55),J=t.n(_),I=t(56),G=t.n(I),H=t(57),R=t.n(H),X=t(58),W=t.n(X),A=t(59),q=t.n(A),z=t(60),T=t.n(z),$=t(61),F=t.n($),K=t(62),L=t.n(K),Q=t(63),U=t.n(Q),V=t(64),Y=t.n(V),Z=t(65),ee=t.n(Z),ae=t(66),te=t.n(ae),ne=t(67),ie=t.n(ne),ce=t(68),le=t.n(ce),re=t(69),se=t.n(re),oe=t(70),me=t.n(oe),de={Blood:0,Pain:0,Mood:0,Sex:0,Mental:0},he=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleClick=t.handleClick.bind(Object(d.a)(t)),t.handleOnSave=t.handleOnSave.bind(Object(d.a)(t)),t.handleOnCancel=t.handleOnCancel.bind(Object(d.a)(t)),t.state={currentPage:"blood",userData:JSON.parse(JSON.stringify(de))},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"handleOnSave",value:function(){var e=this.props.state,a=this.state,t=e.currentDate;e.userData[t]=a.userData,e.currentPage="Home",this.props.handleChangeState(e)}},{key:"handleOnCancel",value:function(){var e=this.props.state;e.currentPage="Home",this.props.handleChangeState(e)}},{key:"handleClick",value:function(e){var a=e.target.id,t=this.props.state,n=this.state,i=t.currentDate;0===a.search(/b/)?(n.userData.Blood=parseInt(a.substring(1,2)),n.currentPage="mood",this.setState(n)):0===a.search(/m/)?(n.userData.Mood=parseInt(a.substring(1,2)),n.currentPage="pain",this.setState(n)):0===a.search(/p/)?(n.userData.Pain=parseInt(a.substring(1,2)),n.currentPage="sex",this.setState(n)):0===a.search(/s/)?(n.userData.Sex=parseInt(a.substring(1,2)),t.userData[i]=n.userData):console.log(e)}},{key:"render",value:function(){var e=this.state,a=Object(p.a)(function(e){return{root:{flexGrow:1},title:{flexGrow:1},margin:{margin:e.spacing(1)}}});return"blood"===e.currentPage?i.a.createElement("div",null,i.a.createElement("div",{className:a.root},i.a.createElement(g.a,{position:"static",className:"app-bar"},i.a.createElement(v.a,null,i.a.createElement(j.a,{variant:"contained",color:"primary",onClick:this.handleOnCancel},"X"),i.a.createElement(j.a,{variant:"contained",color:"primary",onClick:this.handleOnSave},"Done")))),i.a.createElement("div",{className:"head"},i.a.createElement("img",{className:"image",alt:"404",src:ie.a})),i.a.createElement("div",{className:"bleed_choice"},i.a.createElement("img",{className:"image",alt:"404",src:P.a,id:"b1",onClick:this.handleClick}),i.a.createElement("img",{className:"image",alt:"404",src:M.a,id:"b2",onClick:this.handleClick})),i.a.createElement("div",{className:"bleed_choice"},i.a.createElement("img",{className:"image",alt:"404",src:J.a,id:"b3",onClick:this.handleClick}),i.a.createElement("img",{className:"image",alt:"404",src:G.a,id:"b4",onClick:this.handleClick}))):"mood"===e.currentPage?i.a.createElement("div",null,i.a.createElement("div",{className:a.root},i.a.createElement(g.a,{position:"static",className:"app-bar"},i.a.createElement(v.a,null,i.a.createElement(j.a,{variant:"contained",color:"primary",onClick:this.handleOnCancel},"X"),i.a.createElement(j.a,{variant:"contained",color:"primary",onClick:this.handleOnSave},"Done")))),i.a.createElement("div",{className:"head"},i.a.createElement("img",{className:"image",alt:"404",src:le.a})),i.a.createElement("div",{className:"bleed_choice"},i.a.createElement("img",{className:"image",alt:"404",src:R.a,id:"m1",onClick:this.handleClick}),i.a.createElement("img",{className:"image",alt:"404",src:W.a,id:"m2",onClick:this.handleClick})),i.a.createElement("div",{className:"bleed_choice"},i.a.createElement("img",{className:"image",alt:"404",src:q.a,id:"m3",onClick:this.handleClick}),i.a.createElement("img",{className:"image",alt:"404",src:T.a,id:"m4",onClick:this.handleClick}))):"pain"===e.currentPage?i.a.createElement("div",null,i.a.createElement("div",{className:a.root},i.a.createElement(g.a,{position:"static",className:"app-bar"},i.a.createElement(v.a,null,i.a.createElement(j.a,{variant:"contained",color:"primary",onClick:this.handleOnCancel},"X"),i.a.createElement(j.a,{variant:"contained",color:"primary",onClick:this.handleOnSave},"Done")))),i.a.createElement("div",{className:"head"},i.a.createElement("img",{className:"image",alt:"404",src:se.a})),i.a.createElement("div",{className:"bleed_choice"},i.a.createElement("img",{className:"image",alt:"404",src:F.a,id:"p1",onClick:this.handleClick}),i.a.createElement("img",{className:"image",alt:"404",src:L.a,id:"p2",onClick:this.handleClick})),i.a.createElement("div",{className:"bleed_choice"},i.a.createElement("img",{className:"image",alt:"404",src:U.a,id:"p3",onClick:this.handleClick}),i.a.createElement("img",{className:"image",alt:"404",src:Y.a,id:"p4",onClick:this.handleClick}))):"sex"===e.currentPage?i.a.createElement("div",null,i.a.createElement("div",{className:a.root},i.a.createElement(g.a,{position:"static",className:"app-bar"},i.a.createElement(v.a,null,i.a.createElement(j.a,{variant:"contained",color:"primary",onClick:this.handleOnCancel},"X"),i.a.createElement(j.a,{variant:"contained",color:"primary",onClick:this.handleOnSave},"Done")))),i.a.createElement("div",{className:"head"},i.a.createElement("img",{className:"image",alt:"404",src:me.a})),i.a.createElement("div",{className:"bleed_choice"},i.a.createElement("img",{className:"image",alt:"404",src:ee.a,id:"s1",onClick:this.handleClick}),i.a.createElement("img",{className:"image",alt:"404",src:te.a,id:"s2",onClick:this.handleClick}))):void 0}}]),a}(i.a.Component),ue={};ue[new Date(2019,6,24)]={Blood:0,Pain:1,Mood:1,Sex:1,Mental:0},ue[new Date(2019,6,25)]={Blood:2,Pain:2,Mood:2,Sex:2,Mental:0},ue[new Date(2019,6,26)]={Blood:3,Pain:3,Mood:3,Sex:2,Mental:0};var pe=ue;var ge=function(e){var a=e.userData,t=null,n=!0,i=!1,c=void 0;try{for(var l,r=Object.keys(a).sort()[Symbol.iterator]();!(n=(l=r.next()).done);n=!0){var s=l.value;if(0===a[s].Blood){if(null!==t)return t}else t=s}}catch(o){i=!0,c=o}finally{try{n||null==r.return||r.return()}finally{if(i)throw c}}},ve=function(e){function a(e){var t;Object(r.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleChangeState=t.handleChangeState.bind(Object(d.a)(t)),t.state={currentPage:"Home",currentDate:new Date,userData:JSON.parse(JSON.stringify(pe)),totaolDuration:30,periodDuration:5,startDate:null};var n=ge(t.state);return t.state.startDate=n,t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"handleChangeState",value:function(e){e.startDate=ge(e),this.setState(e)}},{key:"render",value:function(){var e=this.state;return"Home"===e.currentPage?i.a.createElement(x,{handleChangeState:this.handleChangeState,state:e}):"Add"===e.currentPage?i.a.createElement(he,{handleChangeState:this.handleChangeState,state:e}):(console.log(e),i.a.createElement(u.a,{label:"Error! See console for detail",color:"secondary"}))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,a,t){e.exports=t.p+"static/media/1.dee15ccd.png"},54:function(e,a,t){e.exports=t.p+"static/media/2.106f8075.png"},55:function(e,a,t){e.exports=t.p+"static/media/3.a634a3b0.png"},56:function(e,a,t){e.exports=t.p+"static/media/4.ae79ef0c.png"},57:function(e,a,t){e.exports=t.p+"static/media/1.1a1816da.png"},58:function(e,a,t){e.exports=t.p+"static/media/2.7228a8eb.png"},59:function(e,a,t){e.exports=t.p+"static/media/3.4f284546.png"},60:function(e,a,t){e.exports=t.p+"static/media/4.6a7661c5.png"},61:function(e,a,t){e.exports=t.p+"static/media/1.f1c75bfe.png"},62:function(e,a,t){e.exports=t.p+"static/media/2.b8ef385d.png"},63:function(e,a,t){e.exports=t.p+"static/media/3.6b9c6dd5.png"},64:function(e,a,t){e.exports=t.p+"static/media/4.8612b05b.png"},65:function(e,a,t){e.exports=t.p+"static/media/1.68de0dc6.png"},66:function(e,a,t){e.exports=t.p+"static/media/2.b42f32a5.png"},67:function(e,a,t){e.exports=t.p+"static/media/theme.4e50600d.png"},68:function(e,a,t){e.exports=t.p+"static/media/theme.95186819.png"},69:function(e,a,t){e.exports=t.p+"static/media/theme.de9058ba.png"},70:function(e,a,t){e.exports=t.p+"static/media/theme.9e9008ff.png"},75:function(e,a,t){e.exports=t(114)},80:function(e,a,t){},82:function(e,a,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.8d1831b8.chunk.js.map