"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[1510],{83595:function(i,n,e){e.d(n,{Z:function(){return c}});var o=e(1413),t=e(45987),s=e(77822),r=e(45825),d=e(47313),l=e(46417),a=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],c=function(i){var n=i.segments,e=void 0===n?48:n,c=i.cross,u=void 0===c||c,h=i.color,x=void 0===h?"#000":h,p=(i.extendCone,i.extendArray),v=void 0===p?[]:p,g=i.lineWidth,f=void 0===g?1.5:g,w=i.innerRing,j=void 0===w||w,y=i.extendLine,W=void 0===y||y,b=i.split,Z=(0,t.Z)(i,a),m=(0,d.useCallback)((function(i){var n=i.points,e=i.cross,o=i.color,t=i.lineWidth,r=i.position,d=void 0===r?0:r;if(n.length%2===0||!e)return null;for(var a=n.slice(1),c=[],u=a.length/2,h=0;h<u;h++)if(!b||h%b===0){var x=a[h],p=a[h+u];c.push((0,l.jsx)(s.x,{color:o,lineWidth:t,position:[0,0,d],points:[[x.x,x.y,0],[p.x,p.y,0]]},h))}return c}),[b]),k=(0,d.useCallback)((function(i,n){return(new r.Path).absarc(0,0,i,0,2*Math.PI,!0).getSpacedPoints(n)}),[]),C=(0,d.useCallback)((function(){if(!(v instanceof Array))return null;var i=[];return v.forEach((function(n,o){var t,r=k(n.radius,e),d=v[o+1],a=d?k(d.radius,e):void 0;n.extend;var c,h,p,g,w=[];(null!==(t=n.innerRing)&&void 0!==t?t:j)&&w.push((0,l.jsx)(s.x,{rotation:[0,0,0],position:[0,0,n.extend],points:r,color:n.color||x,lineWidth:null!==(c=n.lineWidth)&&void 0!==c?c:f},"ring".concat(o)));(n.cross||u)&&w.push(m({points:r,position:n.extend,cross:null!==(h=n.cross)&&void 0!==h?h:u,lineWidth:null!==(p=n.lineWidth)&&void 0!==p?p:f,color:null!==(g=n.color)&&void 0!==g?g:x}));if(a)for(var y=r.slice(1),Z=a.slice(1),C=0;C<y.length;C++){var A,E,M=y[C],P=Z[C];if(!b||C%b===0)if(W)w.push((0,l.jsx)(s.x,{color:x,lineWidth:null!==(A=n.lineWidth)&&void 0!==A?A:f,points:[[M.x,M.y,n.extend],[P.x,P.y,null!==(E=null===d||void 0===d?void 0:d.extend)&&void 0!==E?E:n.extend]]},"cross".concat(C,"_").concat(o)))}i.push((0,l.jsx)("group",{children:w}))})),i}),[x,u,v,W,k,j,f,m,e,b]);return(0,l.jsx)("group",(0,o.Z)((0,o.Z)({},Z),{},{children:(0,l.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:C()})}))}},61510:function(i,n,e){e.r(n);var o=e(1413),t=e(45987),s=e(57809),r=(e(47313),e(83595)),d=e(46399),l=e(81569),a=e(46417),c=["visible","opacity","showEdige","shadow"];n.default=function(i){i.visible;var n=i.opacity,e=i.showEdige,u=i.shadow,h=(0,t.Z)(i,c),x=(0,s.L)("".concat("https://www.eightfeet.cn/dwx","/glb/cupa.glb")).nodes;return(0,a.jsxs)("group",(0,o.Z)((0,o.Z)({},h),{},{children:[(0,a.jsx)("group",{position:[0,-.98,0],rotation:[(0,l.B0)(-180),0,0],scale:1,children:(0,a.jsx)("mesh",{scale:1,receiveShadow:u,rotation:[0,0,0],position:[0,0,0],castShadow:u,geometry:x.cup1.geometry,dispose:null,children:(0,a.jsx)("meshStandardMaterial",{transparent:!0,opacity:n,roughness:.7,metalness:.25,envMapIntensity:.5})})}),!!e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{width:2.05,height:2.05,extend:2,position:[0,-.98,0],color:"#000",lineWidth:.5}),(0,a.jsx)(d.Z,{width:.95,height:.3,extend:1.55,position:[-1.5,-.7,0],color:"#000",cross:[],axis:!1,diagonalExtend:!1}),(0,a.jsx)(r.Z,{color:"#000",split:6,lineWidth:2,rotation:[0,(0,l.B0)(7.5),0],extendArray:[{extend:-.98,radius:1,cross:!1},{extend:-.3,radius:1},{extend:1,radius:1,cross:!1},{extend:1.036,radius:.97,cross:!1},{extend:1.035,radius:.94,cross:!1}]})]})]}))}}}]);