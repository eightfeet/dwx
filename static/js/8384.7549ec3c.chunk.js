"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[8384,4798],{14798:function(e,t,r){r.r(t);var n=r(1413),o=r(45987),a=r(57809),s=r(85298),i=r(92505),c=(r(47313),r(81569)),l=r(46417),u=["visible","opacity","showEdige","shadow"];t.default=function(e){e.visible;var t=e.opacity,r=e.showEdige,d=e.shadow,h=(0,o.Z)(e,u),p=(0,a.L)("".concat("https://www.eightfeet.cn/dwx","/glb/body/planar_head_by_oleg_toropygin_b.glb")),m=p.nodes;p.materials;return console.log(p),(0,l.jsx)("group",(0,n.Z)((0,n.Z)({},h),{},{children:(0,l.jsx)(s.M,{position:[0,1.6,0],children:(0,l.jsxs)("group",{position:[0,0,0],rotation:[(0,c.B0)(-90),(0,c.B0)(0),0],scale:.7,children:[(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:m.Object_2.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,l.jsx)(i.w,{threshold:5})]}),(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:m.Object_3.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,l.jsx)(i.w,{threshold:5})]}),(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:m.Object_4.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,l.jsx)(i.w,{threshold:5})]})]})})}))}},88384:function(e,t,r){r.r(t);var n=r(14798);t.default=n.default},85298:function(e,t,r){r.d(t,{M:function(){return c}});var n=r(45987),o=r(87462),a=r(45825),s=r(47313),i=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],c=s.forwardRef((function(e,t){var r=e.children,c=e.disableX,l=e.disableY,u=e.disableZ,d=e.left,h=e.right,p=e.top,m=e.bottom,f=e.front,g=e.back,y=e.onCentered,b=e.precise,w=void 0===b||b,v=(0,n.Z)(e,i),x=s.useRef(null),j=s.useRef(null),S=s.useRef(null);return s.useLayoutEffect((function(){j.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(S.current,w),t=new a.Vector3,r=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,s=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(r);var i=p?o/2:m?-o/2:0,b=d?-n/2:h?n/2:0,v=f?s/2:g?-s/2:0;j.current.position.set(c?0:-t.x+b,l?0:-t.y+i,u?0:-t.z+v),"undefined"!==typeof y&&y({parent:x.current.parent,container:x.current,width:n,height:o,depth:s,boundingBox:e,boundingSphere:r,center:t,verticalAlignment:i,horizontalAlignment:b,depthAlignment:v})}),[r]),s.useImperativeHandle(t,(function(){return x.current}),[]),s.createElement("group",(0,o.Z)({ref:x},v),s.createElement("group",{ref:j},s.createElement("group",{ref:S},r)))}))},92505:function(e,t,r){r.d(t,{w:function(){return c}});var n=r(45987),o=r(87462),a=r(47313),s=r(45825),i=["userData","children","geometry","threshold","color"];function c(e){e.userData;var t=e.children,r=e.geometry,c=e.threshold,l=void 0===c?15:c,u=e.color,d=void 0===u?"black":u,h=(0,n.Z)(e,i),p=a.useRef(null);return a.useLayoutEffect((function(){var e=p.current.parent;if(e){var t=r||e.geometry;t===p.current.userData.currentGeom&&l===p.current.userData.currentThreshold||(p.current.userData.currentGeom=t,p.current.userData.currentThreshold=l,p.current.geometry=new s.EdgesGeometry(t,l))}})),a.createElement("lineSegments",(0,o.Z)({ref:p,raycast:function(){return null}},h),t||a.createElement("lineBasicMaterial",{color:d}))}}}]);