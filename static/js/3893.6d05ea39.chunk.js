"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[3893,489],{83595:function(n,i,e){e.d(i,{Z:function(){return u}});var t=e(1413),r=e(45987),o=e(77822),s=e(45825),d=e(47313),a=e(46417),l=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],u=function(n){var i=n.segments,e=void 0===i?48:i,u=n.cross,c=void 0===u||u,x=n.color,h=void 0===x?"#000":x,p=(n.extendCone,n.extendArray),g=void 0===p?[]:p,v=n.lineWidth,f=void 0===v?1.5:v,w=n.innerRing,j=void 0===w||w,y=n.extendLine,W=void 0===y||y,R=n.split,Z=(0,r.Z)(n,l),b=(0,d.useCallback)((function(n){var i=n.points,e=n.cross,t=n.color,r=n.lineWidth,s=n.position,d=void 0===s?0:s;if(i.length%2===0||!e)return null;for(var l=i.slice(1),u=[],c=l.length/2,x=0;x<c;x++)if(!R||x%R===0){var h=l[x],p=l[x+c];u.push((0,a.jsx)(o.x,{color:t,lineWidth:r,position:[0,0,d],points:[[h.x,h.y,0],[p.x,p.y,0]]},x))}return u}),[R]),m=(0,d.useCallback)((function(n,i){return(new s.Path).absarc(0,0,n,0,2*Math.PI,!0).getSpacedPoints(i)}),[]),k=(0,d.useCallback)((function(){if(!(g instanceof Array))return null;var n=[];return g.forEach((function(i,t){var r,s=m(i.radius,e),d=g[t+1],l=d?m(d.radius,e):void 0;i.extend;var u,x,p,v,w=[];(null!==(r=i.innerRing)&&void 0!==r?r:j)&&w.push((0,a.jsx)(o.x,{rotation:[0,0,0],position:[0,0,i.extend],points:s,color:i.color||h,lineWidth:null!==(u=i.lineWidth)&&void 0!==u?u:f},"ring".concat(t)));(i.cross||c)&&w.push(b({points:s,position:i.extend,cross:null!==(x=i.cross)&&void 0!==x?x:c,lineWidth:null!==(p=i.lineWidth)&&void 0!==p?p:f,color:null!==(v=i.color)&&void 0!==v?v:h}));if(l)for(var y=s.slice(1),Z=l.slice(1),k=0;k<y.length;k++){var C,M,P=y[k],A=Z[k];if(!R||k%R===0)if(W)w.push((0,a.jsx)(o.x,{color:h,lineWidth:null!==(C=i.lineWidth)&&void 0!==C?C:f,points:[[P.x,P.y,i.extend],[A.x,A.y,null!==(M=null===d||void 0===d?void 0:d.extend)&&void 0!==M?M:i.extend]]},"cross".concat(k,"_").concat(t)))}n.push((0,a.jsx)("group",{children:w}))})),n}),[h,c,g,W,m,j,f,b,e,R]);return(0,a.jsx)("group",(0,t.Z)((0,t.Z)({},Z),{},{children:(0,a.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:k()})}))}},50489:function(n,i,e){e.r(i);var t=e(1413),r=e(45987),o=e(57809),s=(e(47313),e(83595)),d=e(46399),a=e(81569),l=e(46417),u=["visible","opacity","showEdige","shadow"];i.default=function(n){n.visible;var i=n.opacity,e=n.showEdige,c=n.shadow,x=(0,r.Z)(n,u),h=(0,o.L)("".concat("https://www.eightfeet.cn/dwx","/glb/vasea.glb")).nodes;return(0,l.jsxs)("group",(0,t.Z)((0,t.Z)({},x),{},{children:[(0,l.jsx)("group",{position:[0,-.98,0],rotation:[Math.PI/180*0,0,0],scale:.025,children:(0,l.jsx)("mesh",{scale:2,receiveShadow:c,rotation:[0,0,0],position:[0,0,0],castShadow:c,geometry:h.Vase.geometry,dispose:null,children:(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:i,roughness:.7,metalness:.25,envMapIntensity:.5})})}),!!e&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{rotation:[0,(0,a.B0)(15),0],cross:!1,split:6,lineWidth:2,extendArray:[{extend:-.97,radius:1.11},{extend:-.95,radius:1.18},{extend:-.9,radius:1.19},{extend:-.75,radius:1.21},{extend:-.2,radius:1.52,innerRing:!1},{extend:.5,radius:1.77},{extend:.8,radius:1.8,innerRing:!1},{extend:1.05,radius:1.78,cross:!1},{extend:1.2,radius:1.72,innerRing:!1},{extend:1.4,radius:1.55},{extend:1.68,radius:1.15,innerRing:!1},{extend:1.9,radius:.7},{extend:2.2,radius:.63,innerRing:!1},{extend:2.3,radius:.615,innerRing:!1},{extend:2.5,radius:.6,innerRing:!1},{extend:3,radius:.62,innerRing:!1},{extend:3.2,radius:.69,innerRing:!1},{extend:3.2,radius:.72},{extend:3.3,radius:.88},{extend:3.58,radius:1.025},{extend:3.61,radius:1},{extend:3.61,radius:.94}]}),(0,l.jsx)(d.Z,{color:"#000",lineWidth:.5,width:2.35,height:2.35,position:[0,-.97,0],rotation:[0,(0,a.B0)(8.5),0]}),(0,l.jsx)(d.Z,{color:"#000",lineWidth:.5,width:2,height:2,position:[0,3.62,0],rotation:[0,(0,a.B0)(8.5),0]}),(0,l.jsx)(d.Z,{width:0,height:0,extend:5,position:[0,-1,0]})]})]}))}},73893:function(n,i,e){e.r(i);var t=e(50489);i.default=t.default}}]);