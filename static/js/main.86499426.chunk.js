(this.webpackJsonpe1t1leaderboard=this.webpackJsonpe1t1leaderboard||[]).push([[0],{64:function(e,a,t){e.exports=t(76)},76:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(16),o=t.n(i),l=t(28),c=t(8),s=t(56),m=t(102),p=t(103),d=t(94),u=t(95),g=t(92),h=t(93),f=Object(g.a)({button:{margin:"25px 15px",paddingLeft:40,paddingRight:40}});function v(e){var a=e.primary,t=e.to,n=e.color,i=e.variant,o=f(),c=r.a.useMemo((function(){return r.a.forwardRef((function(e,a){return r.a.createElement(l.b,Object.assign({to:t,ref:a},e))}))}),[t]);return r.a.createElement(h.a,{color:n,variant:i,component:c,className:o.button},a)}function w(){return r.a.createElement(d.a,{container:!0,alignItems:"center",direction:"column",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(d.a,{item:!0,xs:12,style:{marginBottom:"40px"}},r.a.createElement(u.a,{variant:"h1",style:{margin:"0 20px",fontSize:"min(15vw, 100px)",textAlign:"center"}}," E1T1 Leaderboard 2021")),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(u.a,{variant:"h4",style:{fontSize:"min(6vw, 40px)"}}," Interns ")),r.a.createElement(d.a,{item:!0,xs:12,container:!0,alignItems:"center",justify:"center"},r.a.createElement(v,{primary:"Cumalative",to:"/cumalative",color:"primary",variant:"contained"}),r.a.createElement(v,{primary:"Current Week",to:"/current-week",color:"primary",variant:"contained"})),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(u.a,{variant:"h4",style:{fontSize:"min(6vw, 40px)"}}," Team Leaders (WIP) ")),r.a.createElement(d.a,{item:!0,xs:12,container:!0,alignItems:"center",justify:"center"},r.a.createElement(v,{primary:"Cumalative",to:"/tl-cumalative",color:"primary",variant:"contained"}),r.a.createElement(v,{primary:"Current Week",to:"/tl-current-week",color:"primary",variant:"contained"})))}var b=t(96),E=t(97),x=t(98),y=t(55),S=t.n(y),k=Object(g.a)((function(e){return{homeButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appbar:{background:e.palette.background.default,color:e.palette.text.primary,marginBottom:e.spacing(4)}}}));function N(e){var a=e.primary,t=e.to,n=k(),i=r.a.useMemo((function(){return r.a.forwardRef((function(e,a){return r.a.createElement(l.b,Object.assign({to:t,ref:a},e))}))}),[t]);return r.a.createElement(b.a,{edge:"start",className:n.homeButton,color:"inherit",component:i},a)}function j(e){var a=k();return r.a.createElement(E.a,{position:"static",className:a.appbar,elevation:0},r.a.createElement(x.a,null,r.a.createElement(N,{primary:r.a.createElement(S.a,null),to:"/"}),r.a.createElement(u.a,{variant:"h6",className:a.title},e.name)))}var P=t(20),L=t(21),O=t(24),T=t(22),C={apiKey:"AIzaSyCaS_MvM8zO_IpBmura0jDUbZ4JscmjjPY",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetIdMaster:"1wzWBhvUjeYrtfjx8zi4lyfXkLmt5mA6pEmgt4zpF3Bc",spreadsheetIdData:"1SDwXm2k-ti1PwFoD8hAoJxwG5lpdF7Pf53jX__0zUZE"};function R(e,a,t,n){console.log("sheetname",e),console.log("nameRange",a),console.log("pointRange",t),e+="!",window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.batchGet({spreadsheetId:C.spreadsheetIdMaster,majorDimension:"COLUMNS",ranges:[e+a,e+t]}).then((function(e){for(var a=e.result.valueRanges[0].values,t=e.result.valueRanges[1].values,r=[],i=0;i<a[0].length;i++)r.push({name:a[0][i],points:parseInt(t[0][i])});n({fullSend:r||[]})}),(function(e){console.log(e.result.error),n(!1,e.result.error)}))}))}function D(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:C.spreadsheetIdData,majorDimension:"COLUMNS",range:["B1:B6"]}).then((function(a){var t=a.result.values[0]||[];e({fullSend:t})}),(function(a){console.log(a.result.error),e(!1,a.result.error)}))}))}var B=t(80),I=t(99),M=t(78),z=t(105),G=t(100),W=t(106),A=t(101),K=t(40),F=t(104),U=function(e){Object(O.a)(t,e);var a=Object(T.a)(t);function t(){return Object(P.a)(this,t),a.apply(this,arguments)}return Object(L.a)(t,[{key:"comparePoints",value:function(e,a){return e.points===a.points?0:e.points>a.points?-1:1}},{key:"Bar",value:function(e){var a=e.name,t=e.points,n=e.classes,i=e.max,o=e.teamMax,l=t/i;"/e1t1-leaderboard/current-week"===window.location.pathname&&(l=t>1e3?1:t<100?.09:t/1e3);var c=n.barPaper;return t===o&&(c=n.barPaperGold),t>=1e3&&"/e1t1-leaderboard/current-week"===window.location.pathname&&(c=n.barPaperComplete),r.a.createElement(F.a,{width:l},r.a.createElement(M.a,{elevation:3,className:c},r.a.createElement(u.a,{className:n.name}," ",a," "),r.a.createElement(u.a,null," ",t," ")))}},{key:"render",value:function(){var e=this,a=this.props,t=a.isLoading,n=a.data,i=a.classes,o=Object(K.a)(n),l=1,c=o.slice(0,10).sort(this.comparePoints),s=o.slice(10,21).sort(this.comparePoints),m=o.slice(21,32).sort(this.comparePoints),p=o.slice(32,41).sort(this.comparePoints),d=c.sort(this.comparePoints)[0].points,g=s.sort(this.comparePoints)[0].points,h=m.sort(this.comparePoints)[0].points,f=p.sort(this.comparePoints)[0].points;return t||(l=o.sort(this.comparePoints)[0].points),r.a.createElement("div",null,r.a.createElement(u.a,{variant:"h6",className:i.teamNames}," Team 1 "),c.map((function(a,t){return r.a.createElement(e.Bar,{key:t,name:a.name,points:a.points,classes:i,max:l,teamMax:d})})),r.a.createElement(u.a,{variant:"h6",className:i.teamNames}," Team 2 "),s.map((function(a,t){return r.a.createElement(e.Bar,{key:t,name:a.name,points:a.points,classes:i,max:l,teamMax:g})})),r.a.createElement(u.a,{variant:"h6",className:i.teamNames}," Team 3 "),m.map((function(a,t){return r.a.createElement(e.Bar,{key:t,name:a.name,points:a.points,classes:i,max:l,teamMax:h})})),r.a.createElement(u.a,{variant:"h6",className:i.teamNames}," Team 4 "),p.map((function(a,t){return r.a.createElement(e.Bar,{key:t,name:a.name,points:a.points,classes:i,max:l,teamMax:f})})))}}]),t}(n.Component),J=Object(B.a)((function(e){return{paper:{paddingRight:e.spacing(4),paddingLeft:e.spacing(4),paddingTop:e.spacing(3),paddingBottom:e.spacing(3),margin:e.spacing(2)},barPaper:{padding:e.spacing(2),margin:"20px 0px 20px 0px",display:"flex",flexDirection:"row",overflow:"hidden",whiteSpace:"nowrap",color:"white",background:e.palette.primary.dark},barPaperComplete:{padding:e.spacing(2),margin:"20px 0px 20px 0px",display:"flex",flexDirection:"row",overflow:"hidden",whiteSpace:"nowrap",color:"white",background:"green"},barPaperGold:{padding:e.spacing(2),margin:"20px 0px 20px 0px",display:"flex",flexDirection:"row",overflow:"hidden",whiteSpace:"nowrap",color:"white",background:"#ffc107",boxShadow:"0 0 10px 5px #ffc107"},name:{flexGrow:1},loading:{margin:e.spacing(2)},notLoading:{padding:0,margin:0},teamNames:{textAlign:"center"}}}))(U),_=function(e){Object(O.a)(t,e);var a=Object(T.a)(t);function t(){return Object(P.a)(this,t),a.apply(this,arguments)}return Object(L.a)(t,[{key:"Bar",value:function(e){var a=e.name,t=e.points,n=e.classes,i=e.max,o=t/i;"/e1t1-leaderboard/current-week"===window.location.pathname&&(o=t>1e3?1:t<100?.09:t/1e3);var l=n.barPaper;return t===i&&"/e1t1-leaderboard/team-leaders"!==window.location.pathname&&(l=n.barPaperGold),t>=1e3&&"/e1t1-leaderboard/current-week"===window.location.pathname&&(l=n.barPaperComplete),r.a.createElement(F.a,{width:o},r.a.createElement(M.a,{elevation:3,className:l},r.a.createElement(u.a,{className:n.name}," ",a," "),r.a.createElement(u.a,null," ",t," ")))}},{key:"comparePoints",value:function(e,a){return e.points===a.points?0:e.points>a.points?-1:1}},{key:"render",value:function(){var e=this,a=this.props,t=a.isLoading,n=a.data,i=a.classes,o=Object(K.a)(n);o.sort(this.comparePoints);var l=1;return t||(l=o[0].points),r.a.createElement("div",null,o.map((function(a,t){return r.a.createElement(e.Bar,{key:t,name:a.name,points:a.points,classes:i,max:l})})))}}]),t}(n.Component),X=Object(B.a)((function(e){return{paper:{paddingRight:e.spacing(4),paddingLeft:e.spacing(4),paddingTop:e.spacing(3),paddingBottom:e.spacing(3),margin:e.spacing(2)},barPaper:{padding:e.spacing(2),margin:"20px 0px 20px 0px",display:"flex",flexDirection:"row",overflow:"hidden",whiteSpace:"nowrap",color:"white",background:e.palette.primary.dark},barPaperComplete:{padding:e.spacing(2),margin:"20px 0px 20px 0px",display:"flex",flexDirection:"row",overflow:"hidden",whiteSpace:"nowrap",color:"white",background:"green"},barPaperGold:{padding:e.spacing(2),margin:"20px 0px 20px 0px",display:"flex",flexDirection:"row",overflow:"hidden",whiteSpace:"nowrap",color:"white",background:"#ffc107",boxShadow:"0 0 10px 5px #fff"},name:{flexGrow:1}}}))(_),Y=t(57);function Z(e){var a=e.children,t=e.value,n=e.index,i=(e.classes,Object(Y.a)(e,["children","value","index","classes"]));return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},i),t===n&&a)}var H=function(e){Object(O.a)(t,e);var a=Object(T.a)(t);function t(){var e;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={interns:[],error:null,loading:!0,value:0,weekSheetName:"",cumSheetName:"",internNameRange:"",internPointRange:""},e.onLoadSetRange=function(a,t){a?(e.setState({weekSheetName:a.fullSend[0]}),e.setState({cumSheetName:a.fullSend[1]}),e.setState({internNameRange:a.fullSend[2]}),e.setState({internPointRange:a.fullSend[3]}),window.gapi.client.init({apiKey:C.apiKey,discoveryDocs:C.discoveryDocs}).then((function(){var a=e.state.cumSheetName;"/e1t1-leaderboard/current-week"===window.location.pathname&&(a=e.state.weekSheetName),R(a,e.state.internNameRange,e.state.internPointRange,e.onLoad)}))):e.setState({error:t})},e.onLoad=function(a,t){if(a){var n=a.fullSend;e.setState({interns:n}),e.setState({loading:!1})}else e.setState({error:t})},e.initClient=function(){window.gapi.client.init({apiKey:C.apiKey,discoveryDocs:C.discoveryDocs}).then((function(){D(e.onLoadSetRange)}))},e.handleChange=function(a,t){e.setState({value:t})},e}return Object(L.a)(t,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"a11yProps",value:function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}},{key:"render",value:function(){var e=this.state,a=e.interns,t=e.error,n=e.loading,i=e.value,o=this.props.classes,l=o.loading;return!n&&(l=o.notLoading,t)?(console.log(t),r.a.createElement("div",null," error occured fetching data, contact Lucas Guzman-Finn ")):r.a.createElement(I.a,{maxWidth:"lg"},r.a.createElement(M.a,{elevation:2,className:o.paper,width:1},r.a.createElement(z.a,{value:i,onChange:this.handleChange,"aria-label":"simple tabs example",indicatorColor:"primary",variant:"fullWidth"},r.a.createElement(G.a,Object.assign({label:"All"},this.a11yProps(0))),r.a.createElement(G.a,Object.assign({label:"Teams"},this.a11yProps(1)))),r.a.createElement(W.a,{in:n,timeout:30,className:l},r.a.createElement(A.a,{color:"secondary"})),r.a.createElement(W.a,{in:!n,timeout:1e3},r.a.createElement("div",null,r.a.createElement(Z,{value:i,index:0,className:o.allTab},r.a.createElement(X,{data:a,isLoading:n})),r.a.createElement(Z,{value:i,index:1,className:o.teamTab},r.a.createElement(J,{data:a,isLoading:n}))))))}}]),t}(n.Component),$=Object(B.a)((function(e){return{paper:{paddingRight:e.spacing(4),paddingLeft:e.spacing(4),paddingTop:e.spacing(3),paddingBottom:e.spacing(3),margin:e.spacing(2)},loading:{margin:e.spacing(2),marginTop:e.spacing(5)},notLoading:{padding:0,margin:0},allTab:{marginTop:e.spacing(1)},teamTab:{marginTop:e.spacing(1)}}}))(H);function q(){return r.a.createElement("div",null,r.a.createElement(j,{name:"Current Week"}),r.a.createElement($,null))}function Q(){return r.a.createElement("div",null,r.a.createElement(j,{name:"Cumalative"}),r.a.createElement($,null))}var V=function(e){Object(O.a)(t,e);var a=Object(T.a)(t);function t(){var e;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={tls:[],error:null,loading:!0,value:0,weekSheetName:"",cumSheetName:"",TLNameRange:"",TLPointRange:""},e.onLoadSetRange=function(a,t){a?(e.setState({weekSheetName:a.fullSend[0]}),e.setState({cumSheetName:a.fullSend[1]}),e.setState({TLNameRange:a.fullSend[4]}),e.setState({TLPointRange:a.fullSend[5]}),window.gapi.client.init({apiKey:C.apiKey,discoveryDocs:C.discoveryDocs}).then((function(){var a=e.state.cumSheetName;"/e1t1-leaderboard/tl-current-week"===window.location.pathname&&(a=e.state.weekSheetName),R(a,e.state.TLNameRange,e.state.TLPointRange,e.onLoad)}))):e.setState({error:t})},e.onLoad=function(a,t){if(a){var n=a.fullSend;e.setState({tls:n}),e.setState({loading:!1})}else e.setState({error:t})},e.initClient=function(){window.gapi.client.init({apiKey:C.apiKey,discoveryDocs:C.discoveryDocs}).then((function(){D(e.onLoadSetRange)}))},e.handleChange=function(a,t){e.setState({value:t})},e}return Object(L.a)(t,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"a11yProps",value:function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}},{key:"render",value:function(){var e=this.state,a=e.tls,t=e.error,n=e.loading,i=e.value,o=this.props.classes,l=o.loading;return!n&&(l=o.notLoading,t)?(console.log(t),r.a.createElement("div",null," error occured fetching data, contact Lucas Guzman-Finn ")):r.a.createElement(I.a,{maxWidth:"lg"},r.a.createElement(M.a,{elevation:2,className:o.paper,width:1},r.a.createElement(z.a,{value:i,onChange:this.handleChange,"aria-label":"simple tabs example",indicatorColor:"primary",variant:"fullWidth"},r.a.createElement(G.a,Object.assign({label:"All"},this.a11yProps(0)))),r.a.createElement(W.a,{in:n,timeout:30,className:l},r.a.createElement(A.a,{color:"secondary"})),r.a.createElement(W.a,{in:!n,timeout:1e3},r.a.createElement("div",null,r.a.createElement(Z,{value:i,index:0,className:o.allTab},r.a.createElement(X,{data:a,isLoading:n}))))))}}]),t}(n.Component),ee=Object(B.a)((function(e){return{paper:{paddingRight:e.spacing(4),paddingLeft:e.spacing(4),paddingTop:e.spacing(3),paddingBottom:e.spacing(3),margin:e.spacing(2)},loading:{margin:e.spacing(2),marginTop:e.spacing(5)},notLoading:{padding:0,margin:0},allTab:{marginTop:e.spacing(1)},teamTab:{marginTop:e.spacing(1)}}}))(V);function ae(){return r.a.createElement("div",null,r.a.createElement(j,{name:"Team Leaders Current Week"}),r.a.createElement(ee,null))}function te(){return r.a.createElement("div",null,r.a.createElement(j,{name:"Team Leaders Cumalative"}),r.a.createElement(ee,null))}var ne=Object(s.a)({palette:{type:"dark"}});var re=function(){return r.a.createElement(m.a,{theme:ne},r.a.createElement(p.a,null),r.a.createElement(l.a,{basename:"/e1t1-leaderboard"},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/"}," ",r.a.createElement(w,null)," "),r.a.createElement(c.a,{exact:!0,path:"/current-week"}," ",r.a.createElement(q,null)," "),r.a.createElement(c.a,{exact:!0,path:"/cumalative"}," ",r.a.createElement(Q,null)," "),r.a.createElement(c.a,{exact:!0,path:"/tl-current-week"}," ",r.a.createElement(ae,null)," "),r.a.createElement(c.a,{exact:!0,path:"/tl-cumalative"}," ",r.a.createElement(te,null)," "))))};o.a.render(r.a.createElement(re,null),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.86499426.chunk.js.map