"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[7071],{27071:function(e,r,t){t.r(r);var n=t(1413),o=t(45987),i=t(57809),a=t(85298),c=t(92505),u=(t(47313),t(81569)),s=t(46417),l=["visible","opacity","showEdige","shadow"];r.default=function(e){e.visible;var r=e.opacity,t=e.showEdige,d=e.shadow,h=(0,o.Z)(e,l),f=(0,i.L)("".concat("https://www.eightfeet.cn/dwx","/glb/body/head_of_david.glb")).nodes;return(0,s.jsx)("group",(0,n.Z)((0,n.Z)({},h),{},{children:(0,s.jsx)(a.M,{position:[0,1.01,.4],rotation:[0,(0,u.B0)(0),0],children:(0,s.jsx)("group",{position:[0,8,0],rotation:[(0,u.B0)(180),(0,u.B0)(-90),0],scale:.01,children:(0,s.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:f.Object_2.geometry,dispose:null,children:[(0,s.jsx)("meshStandardMaterial",{transparent:!0,opacity:r,roughness:.7,metalness:.25,envMapIntensity:.5}),!!t&&(0,s.jsx)(c.w,{threshold:5})]})})})}))}},85298:function(e,r,t){t.d(r,{M:function(){return u}});var n=t(45987),o=t(87462),i=t(45825),a=t(47313),c=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],u=a.forwardRef((function(e,r){var t=e.children,u=e.disableX,s=e.disableY,l=e.disableZ,d=e.left,h=e.right,f=e.top,p=e.bottom,m=e.front,g=e.back,b=e.onCentered,v=e.precise,w=void 0===v||v,y=(0,n.Z)(e,c),x=a.useRef(null),E=a.useRef(null),Z=a.useRef(null);return a.useLayoutEffect((function(){E.current.matrixWorld.identity();var e=(new i.Box3).setFromObject(Z.current,w),r=new i.Vector3,t=new i.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,a=e.max.z-e.min.z;e.getCenter(r),e.getBoundingSphere(t);var c=f?o/2:p?-o/2:0,v=d?-n/2:h?n/2:0,y=m?a/2:g?-a/2:0;E.current.position.set(u?0:-r.x+v,s?0:-r.y+c,l?0:-r.z+y),"undefined"!==typeof b&&b({parent:x.current.parent,container:x.current,width:n,height:o,depth:a,boundingBox:e,boundingSphere:t,center:r,verticalAlignment:c,horizontalAlignment:v,depthAlignment:y})}),[t]),a.useImperativeHandle(r,(function(){return x.current}),[]),a.createElement("group",(0,o.Z)({ref:x},y),a.createElement("group",{ref:E},a.createElement("group",{ref:Z},t)))}))},92505:function(e,r,t){t.d(r,{w:function(){return u}});var n=t(45987),o=t(87462),i=t(47313),a=t(45825),c=["userData","children","geometry","threshold","color"];function u(e){e.userData;var r=e.children,t=e.geometry,u=e.threshold,s=void 0===u?15:u,l=e.color,d=void 0===l?"black":l,h=(0,n.Z)(e,c),f=i.useRef(null);return i.useLayoutEffect((function(){var e=f.current.parent;if(e){var r=t||e.geometry;r===f.current.userData.currentGeom&&s===f.current.userData.currentThreshold||(f.current.userData.currentGeom=r,f.current.userData.currentThreshold=s,f.current.geometry=new a.EdgesGeometry(r,s))}})),i.createElement("lineSegments",(0,o.Z)({ref:f,raycast:function(){return null}},h),r||i.createElement("lineBasicMaterial",{color:d}))}}}]);