"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[498,2173],{83595:function(e,n,i){i.d(n,{Z:function(){return u}});var r=i(1413),t=i(45987),o=i(77822),s=i(45825),d=i(47313),a=i(46417),l=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],u=function(e){var n=e.segments,i=void 0===n?48:n,u=e.cross,c=void 0===u||u,h=e.color,x=void 0===h?"#000":h,v=(e.extendCone,e.extendArray),g=void 0===v?[]:v,p=e.lineWidth,f=void 0===p?1.5:p,y=e.innerRing,m=void 0===y||y,w=e.extendLine,j=void 0===w||w,W=e.split,R=(0,t.Z)(e,l),Z=(0,d.useCallback)((function(e){var n=e.points,i=e.cross,r=e.color,t=e.lineWidth,s=e.position,d=void 0===s?0:s;if(n.length%2===0||!i)return null;for(var l=n.slice(1),u=[],c=l.length/2,h=0;h<c;h++)if(!W||h%W===0){var x=l[h],v=l[h+c];u.push((0,a.jsx)(o.x,{color:r,lineWidth:t,position:[0,0,d],points:[[x.x,x.y,0],[v.x,v.y,0]]},h))}return u}),[W]),b=(0,d.useCallback)((function(e,n){return(new s.Path).absarc(0,0,e,0,2*Math.PI,!0).getSpacedPoints(n)}),[]),C=(0,d.useCallback)((function(){if(!(g instanceof Array))return null;var e=[];return g.forEach((function(n,r){var t,s=b(n.radius,i),d=g[r+1],l=d?b(d.radius,i):void 0;n.extend;var u,h,v,p,y=[];(null!==(t=n.innerRing)&&void 0!==t?t:m)&&y.push((0,a.jsx)(o.x,{rotation:[0,0,0],position:[0,0,n.extend],points:s,color:n.color||x,lineWidth:null!==(u=n.lineWidth)&&void 0!==u?u:f},"ring".concat(r)));(n.cross||c)&&y.push(Z({points:s,position:n.extend,cross:null!==(h=n.cross)&&void 0!==h?h:c,lineWidth:null!==(v=n.lineWidth)&&void 0!==v?v:f,color:null!==(p=n.color)&&void 0!==p?p:x}));if(l)for(var w=s.slice(1),R=l.slice(1),C=0;C<w.length;C++){var k,E,D=w[C],M=R[C];if(!W||C%W===0)if(j)y.push((0,a.jsx)(o.x,{color:x,lineWidth:null!==(k=n.lineWidth)&&void 0!==k?k:f,points:[[D.x,D.y,n.extend],[M.x,M.y,null!==(E=null===d||void 0===d?void 0:d.extend)&&void 0!==E?E:n.extend]]},"cross".concat(C,"_").concat(r)))}e.push((0,a.jsx)("group",{children:y}))})),e}),[x,c,g,j,b,m,f,Z,i,W]);return(0,a.jsx)("group",(0,r.Z)((0,r.Z)({},R),{},{children:(0,a.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:C()})}))}},82173:function(e,n,i){i.r(n);var r=i(1413),t=i(45987),o=i(57809),s=i(92505),d=(i(47313),i(83595)),a=i(46399),l=i(56659),u=i(81569),c=i(46417),h=["visible","opacity","showEdige","shadow"];n.default=function(e){e.visible;var n=e.opacity,i=e.showEdige,x=e.shadow,v=(0,t.Z)(e,h),g=(0,o.L)("".concat("https://www.eightfeet.cn/dwx","/glb/vasec.glb")).nodes;return(0,c.jsxs)("group",(0,r.Z)((0,r.Z)({},v),{},{children:[(0,c.jsx)("group",{position:[0,-1,0],rotation:[Math.PI/180*-180,0,0],scale:.05,children:(0,c.jsxs)("mesh",{scale:2,receiveShadow:x,rotation:[0,0,0],position:[0,0,0],castShadow:x,geometry:g.Vasec.geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:n,roughness:.7,metalness:.25,envMapIntensity:.5}),!!i&&(0,c.jsx)(s.w,{color:"#000",threshold:6.46})]})}),!!i&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Z,{radius:.48,position:[0,-.96,0],color:"#000",squareColor:"#000",lineWidth:.5}),(0,c.jsx)(l.Z,{radius:.51,position:[0,1.93,0],color:"#000",squareColor:"#000",lineWidth:.5}),(0,c.jsx)(d.Z,{rotation:[0,(0,u.B0)(8),0],position:[.008,-.98,-.001],cross:!1,split:6,lineWidth:2.5,innerRing:!1,extendArray:[{extend:0,radius:.45,lineWidth:3,innerRing:!0},{extend:.03,radius:.5},{extend:.15,radius:.52},{extend:.3,radius:.665,lineWidth:3,innerRing:!0},{extend:.5,radius:.845},{extend:.7,radius:.95},{extend:.9,radius:.975,innerRing:!0},{extend:1.1,radius:.94,innerRing:!0,cross:!0},{extend:1.3,radius:.78},{extend:1.5,radius:.56,innerRing:!0},{extend:1.7,radius:.385,innerRing:!0},{extend:1.9,radius:.31},{extend:2.1,radius:.29},{extend:2.3,radius:.29},{extend:2.5,radius:.315,innerRing:!0},{extend:2.7,radius:.376,innerRing:!0},{extend:2.9,radius:.5,innerRing:!0}]}),(0,c.jsx)(a.Z,{width:0,height:0,extend:3.5,position:[0,-1.5,0]})]})]}))}},10498:function(e,n,i){i.r(n);var r=i(82173);n.default=r.default},92505:function(e,n,i){i.d(n,{w:function(){return a}});var r=i(45987),t=i(87462),o=i(47313),s=i(45825),d=["userData","children","geometry","threshold","color"];function a(e){e.userData;var n=e.children,i=e.geometry,a=e.threshold,l=void 0===a?15:a,u=e.color,c=void 0===u?"black":u,h=(0,r.Z)(e,d),x=o.useRef(null);return o.useLayoutEffect((function(){var e=x.current.parent;if(e){var n=i||e.geometry;n===x.current.userData.currentGeom&&l===x.current.userData.currentThreshold||(x.current.userData.currentGeom=n,x.current.userData.currentThreshold=l,x.current.geometry=new s.EdgesGeometry(n,l))}})),o.createElement("lineSegments",(0,t.Z)({ref:x,raycast:function(){return null}},h),n||o.createElement("lineBasicMaterial",{color:c}))}}}]);