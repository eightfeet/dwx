"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[5495,5512],{45512:function(e,t,r){r.r(t);var n=r(57809),o=r(85298),a=r(92505),i=(r(47313),r(81569)),u=r(46417);t.default=function(e){var t=e.position,r=e.opacity,c=e.showEdige,s=void 0!==c&&c,l=e.shadow,d=(0,n.L)("".concat("https://www.eightfeet.cn/dwx","/glb/body/speed_head_anatomy.glb")).nodes;return(0,u.jsx)(o.M,{top:!0,scale:.17,position:[0,5.2,0],rotation:[(0,i.B0)(90),(0,i.B0)(90),(0,i.B0)(90)],children:(0,u.jsxs)("mesh",{receiveShadow:l,rotation:[(0,i.B0)(0),(0,i.B0)(90),(0,i.B0)(180)],position:t,castShadow:l,geometry:d.Object_2.geometry,dispose:null,children:[(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:r,roughness:.7,metalness:.25,envMapIntensity:.5}),!!s&&(0,u.jsx)(a.w,{threshold:3})]})})}},75495:function(e,t,r){r.r(t);var n=r(45512);t.default=n.default},85298:function(e,t,r){r.d(t,{M:function(){return c}});var n=r(45987),o=r(87462),a=r(45825),i=r(47313),u=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],c=i.forwardRef((function(e,t){var r=e.children,c=e.disableX,s=e.disableY,l=e.disableZ,d=e.left,h=e.right,f=e.top,m=e.bottom,p=e.front,g=e.back,b=e.onCentered,y=e.precise,v=void 0===y||y,w=(0,n.Z)(e,u),x=i.useRef(null),B=i.useRef(null),E=i.useRef(null);return i.useLayoutEffect((function(){B.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(E.current,v),t=new a.Vector3,r=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,i=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(r);var u=f?o/2:m?-o/2:0,y=d?-n/2:h?n/2:0,w=p?i/2:g?-i/2:0;B.current.position.set(c?0:-t.x+y,s?0:-t.y+u,l?0:-t.z+w),"undefined"!==typeof b&&b({parent:x.current.parent,container:x.current,width:n,height:o,depth:i,boundingBox:e,boundingSphere:r,center:t,verticalAlignment:u,horizontalAlignment:y,depthAlignment:w})}),[r]),i.useImperativeHandle(t,(function(){return x.current}),[]),i.createElement("group",(0,o.Z)({ref:x},w),i.createElement("group",{ref:B},i.createElement("group",{ref:E},r)))}))},92505:function(e,t,r){r.d(t,{w:function(){return c}});var n=r(45987),o=r(87462),a=r(47313),i=r(45825),u=["userData","children","geometry","threshold","color"];function c(e){e.userData;var t=e.children,r=e.geometry,c=e.threshold,s=void 0===c?15:c,l=e.color,d=void 0===l?"black":l,h=(0,n.Z)(e,u),f=a.useRef(null);return a.useLayoutEffect((function(){var e=f.current.parent;if(e){var t=r||e.geometry;t===f.current.userData.currentGeom&&s===f.current.userData.currentThreshold||(f.current.userData.currentGeom=t,f.current.userData.currentThreshold=s,f.current.geometry=new i.EdgesGeometry(t,s))}})),a.createElement("lineSegments",(0,o.Z)({ref:f,raycast:function(){return null}},h),t||a.createElement("lineBasicMaterial",{color:d}))}}}]);