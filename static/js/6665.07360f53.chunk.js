"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[6665],{83595:function(e,n,r){r.d(n,{Z:function(){return l}});var i=r(1413),t=r(45987),o=r(77822),s=r(45825),d=r(47313),a=r(46417),u=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],l=function(e){var n=e.segments,r=void 0===n?48:n,l=e.cross,c=void 0===l||l,h=e.color,x=void 0===h?"#000":h,p=(e.extendCone,e.extendArray),v=void 0===p?[]:p,g=e.lineWidth,f=void 0===g?1.5:g,y=e.innerRing,m=void 0===y||y,j=e.extendLine,w=void 0===j||j,b=e.split,C=(0,t.Z)(e,u),W=(0,d.useCallback)((function(e){var n=e.points,r=e.cross,i=e.color,t=e.lineWidth,s=e.position,d=void 0===s?0:s;if(n.length%2===0||!r)return null;for(var u=n.slice(1),l=[],c=u.length/2,h=0;h<c;h++)if(!b||h%b===0){var x=u[h],p=u[h+c];l.push((0,a.jsx)(o.x,{color:i,lineWidth:t,position:[0,0,d],points:[[x.x,x.y,0],[p.x,p.y,0]]},h))}return l}),[b]),Z=(0,d.useCallback)((function(e,n){return(new s.Path).absarc(0,0,e,0,2*Math.PI,!0).getSpacedPoints(n)}),[]),k=(0,d.useCallback)((function(){if(!(v instanceof Array))return null;var e=[];return v.forEach((function(n,i){var t,s=Z(n.radius,r),d=v[i+1],u=d?Z(d.radius,r):void 0;n.extend;var l,h,p,g,y=[];(null!==(t=n.innerRing)&&void 0!==t?t:m)&&y.push((0,a.jsx)(o.x,{rotation:[0,0,0],position:[0,0,n.extend],points:s,color:n.color||x,lineWidth:null!==(l=n.lineWidth)&&void 0!==l?l:f},"ring".concat(i)));(n.cross||c)&&y.push(W({points:s,position:n.extend,cross:null!==(h=n.cross)&&void 0!==h?h:c,lineWidth:null!==(p=n.lineWidth)&&void 0!==p?p:f,color:null!==(g=n.color)&&void 0!==g?g:x}));if(u)for(var j=s.slice(1),C=u.slice(1),k=0;k<j.length;k++){var R,E,L=j[k],q=C[k];if(!b||k%b===0)if(w)y.push((0,a.jsx)(o.x,{color:x,lineWidth:null!==(R=n.lineWidth)&&void 0!==R?R:f,points:[[L.x,L.y,n.extend],[q.x,q.y,null!==(E=null===d||void 0===d?void 0:d.extend)&&void 0!==E?E:n.extend]]},"cross".concat(k,"_").concat(i)))}e.push((0,a.jsx)("group",{children:y}))})),e}),[x,c,v,w,Z,m,f,W,r,b]);return(0,a.jsx)("group",(0,i.Z)((0,i.Z)({},C),{},{children:(0,a.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:k()})}))}},6665:function(e,n,r){r.r(n);var i=r(1413),t=r(45987),o=r(57809),s=r(92505),d=(r(47313),r(83595)),a=r(56659),u=r(81569),l=r(46417),c=["visible","opacity","showEdige","shadow"];n.default=function(e){e.visible;var n=e.opacity,r=e.showEdige,h=e.shadow,x=(0,t.Z)(e,c),p=(0,o.L)("".concat("https://www.eightfeet.cn/dwx","/glb/goblet.glb")).nodes;return(0,l.jsxs)("group",(0,i.Z)((0,i.Z)({},x),{},{children:[(0,l.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,-1,0],castShadow:h,geometry:p.goblet.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:n,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,l.jsx)(s.w,{threshold:17})]}),!!r&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("group",{scale:1,position:[0,0,0],children:[(0,l.jsx)(a.Z,{radius:1.15,position:[0,.9,0],squareColor:"#000",squareCrossLineWidth:.5,color:"#000"}),(0,l.jsx)(a.Z,{radius:.95,position:[0,1.95,0],squareColor:"#000",squareCrossLineWidth:.5,color:"#000"}),(0,l.jsx)(a.Z,{radius:.86,position:[0,-.95,0],squareColor:"#000",squareCrossLineWidth:.5,color:"#000"}),(0,l.jsx)(d.Z,{rotation:[0,(0,u.B0)(7),0],split:12,position:[0,-1,0],cross:!1,extendArray:[{extend:2.94,radius:.9},{extend:2.97,radius:.92},{extend:2.93,radius:.986},{extend:2.5,radius:1.115},{extend:2.2,radius:1.16,innerRing:!1},{extend:1.9,radius:1.15},{extend:1.7,radius:1.08,innerRing:!1},{extend:1.6,radius:1.015},{extend:1.5,radius:.9,innerRing:!1},{extend:1.4,radius:.77,innerRing:!1},{extend:1.3,radius:.55},{extend:1.2,radius:.24},{extend:1.1,radius:.14},{extend:1,radius:.11},{extend:.4,radius:.1},{extend:.25,radius:.11},{extend:.2,radius:.15},{extend:.15,radius:.25},{extend:.1,radius:.5},{extend:.06,radius:.85},{extend:.02,radius:.88}]})]})})]}))}},92505:function(e,n,r){r.d(n,{w:function(){return a}});var i=r(45987),t=r(87462),o=r(47313),s=r(45825),d=["userData","children","geometry","threshold","color"];function a(e){e.userData;var n=e.children,r=e.geometry,a=e.threshold,u=void 0===a?15:a,l=e.color,c=void 0===l?"black":l,h=(0,i.Z)(e,d),x=o.useRef(null);return o.useLayoutEffect((function(){var e=x.current.parent;if(e){var n=r||e.geometry;n===x.current.userData.currentGeom&&u===x.current.userData.currentThreshold||(x.current.userData.currentGeom=n,x.current.userData.currentThreshold=u,x.current.geometry=new s.EdgesGeometry(n,u))}})),o.createElement("lineSegments",(0,t.Z)({ref:x,raycast:function(){return null}},h),n||o.createElement("lineBasicMaterial",{color:c}))}}}]);