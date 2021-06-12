(this.webpackJsonpxo=this.webpackJsonpxo||[]).push([[0],{15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var i=r(1),a=r.n(i),n=r(7),o=r.n(n),s=r(2),c=r(0),l=function(e){var t=e.id,r=e.row,i=e.col;return Object(c.jsx)("div",{className:"field",id:t,"data-row":r,"data-col":i})},d=function(e){var t=e.fields,r=e.gameID,i=(e.mark,e.size),a=t.map((function(e,t){return e.map((function(e,r){return Object(c.jsx)(l,{id:"field_r".concat(t,"_c").concat(r),row:t,col:r},"field_r".concat(t,"_c").concat(r))}))})),n={gridTemplateColumns:"repeat( ".concat(i,", 1fr )"),gridTemplateRows:"repeat( ".concat(i,", 1fr )")};return Object(c.jsx)("div",{id:r,className:"board darkable",style:n,children:a})},f=r(5),u=" ",h=0,b=10,m=-10,v=2147483647,p=-2147483647,j=r(9),y=r(8),g=function(){function e(t,r,i){var a=this;Object(f.a)(this,e),this.setUp=function(){return a.elem=document.querySelector(a.selector),!!a.elem&&(a.setEmpty(),a.fields=Object(j.a)(a.elem.querySelectorAll(".field")),!0)},this.setEmpty=function(){for(var e=0;e<a.size;e++)for(var t=0;t<a.size;t++)a.board[e][t]=u},this.selector=t,this.size=r,this.need=i,this.elem=null,this.style=null,this.fields=[],this.board=new Array(+r).fill(null).map((function(e){return new Array(+r).fill(null)}))}return Object(y.a)(e,[{key:"isEmpty",value:function(e){var t=Object(s.a)(e,2),r=t[0],i=t[1];return!(r<0||r>this.size-1)&&(!(i<0||i>this.size-1)&&this.board[r][i]===u)}},{key:"isTie",value:function(e){for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++)if(this.board[t][r]===u)return!1;return!0}},{key:"isWin",value:function(e){for(var t=0;t<this.size;t++)for(var r=0;r<this.size-this.need+1;r++)if(this.board[t][r]===e){for(var i=!0,a=0;a<this.need;a++)i=this.board[t][r+a]===e&&i;if(i)return!0}for(var n=0;n<this.size;n++)for(var o=0;o<this.size-this.need+1;o++)if(this.board[o][n]===e){for(var s=!0,c=0;c<this.need;c++)s=this.board[o+c][n]===e&&s;if(s)return!0}for(var l=0;l<this.size-this.need+1;l++)for(var d=0;d<this.size-this.need+1;d++)if(this.board[l][d]===e){for(var f=!0,u=0;u<this.need;u++)f=this.board[l+u][d+u]===e&&f;if(f)return!0}for(var h=this.need-1;h<this.size;h++)for(var b=0;b<this.size-this.need+1;b++)if(this.board[h][b]===e){for(var m=!0,v=0;v<this.need;v++)m=this.board[h-v][b+v]===e&&m;if(m)return!0}return!1}}]),e}(),O=function e(t,r,i,a,n,o,s){var c=this;Object(f.a)(this,e),this.setUp=function(){c.board.setUp()&&(c.board.fields.forEach((function(e){return e.addEventListener("click",(function(e){return c.handleClick(e)}))})),c.start())},this.handleClick=function(e){if(e.preventDefault(),!c.gameOver&&c.player!==c.playerAI){var t={row:-1,col:-1};if(t.row=+e.target.dataset.row,t.col=+e.target.dataset.col,c.board.isEmpty([t.row,t.col])){if(c.board.board[t.row][t.col]=c.player,c.board.fields[t.row*c.size+t.col].classList.add("__".concat(c.player)),c.testStatus())return c.gameOver=!0,c.gameTie=!c.board.isWin(),void(c.gameTie=!!c.board.isWin());c.player=c.playerAI,c.shiftAI()}}},this.start=function(){c.player===c.playerAI&&c.shiftAI()},this.shiftAI=function(){if(console.log(c.board.board),!c.gameOver&&c.player!==c.playerHU){var e=c.bestShift();if(c.board.isEmpty([e.row,e.col])){if(c.board.board[e.row][e.col]=c.player,c.board.fields[e.row*c.size+e.col].classList.add("__".concat(c.player)),c.testStatus())return c.gameOver=!0,c.gameTie=!c.board.isWin(),void(c.gameTie=!!c.board.isWin())}else console.error("AI shift not set!!! "),console.log(e);c.player=c.playerHU}},this.testStatus=function(){return!!c.board.isWin(c.player)||!!c.board.isTie(c.player)},this.bestShift=function(){for(var e=p,t={row:-1,col:-1},r=0;r<c.size;r++)for(var i=0;i<c.size;i++)if(c.board.isEmpty([r,i])){c.board.board[r][i]=c.playerAI;var a=c.minimax(0,!1,p,v);console.log(" [ row: ".concat(r," | col: ").concat(i," ] :: score -> ").concat(a," ")),a>e&&(e=a,t.row=r,t.col=i),c.board.board[r][i]=u}return t},this.minimax=function(e,t,r,i){if(e>c.depth)return h;if(c.board.isWin(c.playerAI))return b*(2*c.depth-e);if(c.board.isWin(c.playerHU))return m*(2*c.depth-e);if(c.board.isTie())return h;if(t){for(var a=p,n=0;n<c.size;n++)for(var o=0;o<c.size;o++)if(c.board.isEmpty([n,o])){c.board.board[n][o]=c.playerAI;var s=c.minimax(e+1,!1,r,i);if(s>a&&(a=s),c.board.board[n][o]=u,i<=(r=s>r?s:r))break}return a}for(var l=v,d=0;d<c.size;d++)for(var f=0;f<c.size;f++)if(c.board.isEmpty([d,f])){c.board.board[d][f]=c.playerHU;var j=c.minimax(e+1,!0,r,i);if(j<l&&(l=j),c.board.board[d][f]=u,(i=j<i?j:i)<=r)break}return l},this.selector=t,this.depth=+s,this.size=+r,this.need=+i,this.player=a,this.playerAI=n,this.playerHU=o,this.gameOver=!1,this.gameTie=!1,this.gameWin=!1,this.board=new g(t,r,i)},z={X:"X",O:"O",E:" "},x=function(e){var t=e.size,r=e.need,a=e.depth,n=new Array(+t).fill(new Array(+t).fill(z.E)),o="boardTicTacToe";return Object(i.useEffect)((function(){new O("#".concat(o),t,r,z.X,z.O,z.X,a).setUp()}),[t,r,a]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(d,{gameID:o,fields:n,size:t,mark:z})})},w=function(e){var t=e.name,r=e.value,i=e.min,a=e.max,n=e.onChange;return Object(c.jsxs)("div",{className:"range",children:[Object(c.jsx)("span",{className:"range-value",children:"".concat(t," : ").concat(r)}),Object(c.jsx)("input",{type:"range",name:t,min:i,max:a,value:r,onChange:function(e){return n(e)}})]})},A=function(){var e=function(e){return Math.floor(3*Math.log(e))},t=function(e){return Math.floor(8-3*e/4)},r=Object(i.useState)(!1),a=Object(s.a)(r,2),n=a[0],o=a[1],l=Object(i.useState)(9),d=Object(s.a)(l,2),f=d[0],u=d[1],h=Object(i.useState)(3),b=Object(s.a)(h,2),m=b[0],v=b[1],p=Object(i.useState)(3),j=Object(s.a)(p,2),y=j[0],g=j[1],O=n?Object(c.jsx)(x,{size:m,need:y,depth:f}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w,{name:"size",value:m,onChange:function(r){v((function(e){return r.target.value})),g((function(t){return e(r.target.value)})),u((function(e){return t(r.target.value)}))},min:3,max:8}),Object(c.jsx)(w,{name:"need",value:y,onChange:function(e){g((function(t){return e.target.value}))},min:e(m),max:m}),Object(c.jsx)(w,{name:"depth",value:f,onChange:function(e){u((function(t){return e.target.value}))},min:3,max:t(m)})]});return console.log(m),console.log(y),console.log(f),Object(c.jsxs)(c.Fragment,{children:[O,Object(c.jsx)("button",{className:"btn",onClick:function(){o((function(e){return!e}))},children:n?"Stop":"Start"})]})};r(15);o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6f8feb1d.chunk.js.map