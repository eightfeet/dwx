"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[98],{30098:function(e,r,t){t.r(r);var n=t(57809),o=t(85298),a=t(92505),i=(t(47313),t(81569)),c=t(46417);r.default=function(e){e.position;var r=e.opacity,t=e.showEdige,u=void 0!==t&&t,l=e.shadow,s=(0,n.L)("".concat("https://www.eightfeet.cn/dwx","/glb/body/female_head_2.glb")).nodes;return(0,c.jsx)(o.M,{top:!0,scale:1.5,position:[0,-1,0],rotation:[0,(0,i.B0)(0),0],children:s["968230f3904b4e10b289f0ffb0ef03f9fbx"].children[0].children[0].children.map((function(e,t){return(0,c.jsxs)("mesh",{scale:2,receiveShadow:l,rotation:[0,0,0],position:[0,0,0],castShadow:l,geometry:e.geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:r,roughness:.7,metalness:.25,envMapIntensity:.5}),!!u&&(0,c.jsx)(a.w,{threshold:5})]},t)}))})}},85298:function(e,r,t){t.d(r,{M:function(){return u}});var n=t(45987),o=t(87462),a=t(45825),i=t(47313),c=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],u=i.forwardRef((function(e,r){var t=e.children,u=e.disableX,l=e.disableY,s=e.disableZ,d=e.left,f=e.right,h=e.top,m=e.bottom,p=e.front,g=e.back,b=e.onCentered,y=e.precise,v=void 0===y||y,w=(0,n.Z)(e,c),x=i.useRef(null),E=i.useRef(null),k=i.useRef(null);return i.useLayoutEffect((function(){E.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(k.current,v),r=new a.Vector3,t=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,i=e.max.z-e.min.z;e.getCenter(r),e.getBoundingSphere(t);var c=h?o/2:m?-o/2:0,y=d?-n/2:f?n/2:0,w=p?i/2:g?-i/2:0;E.current.position.set(u?0:-r.x+y,l?0:-r.y+c,s?0:-r.z+w),"undefined"!==typeof b&&b({parent:x.current.parent,container:x.current,width:n,height:o,depth:i,boundingBox:e,boundingSphere:t,center:r,verticalAlignment:c,horizontalAlignment:y,depthAlignment:w})}),[t]),i.useImperativeHandle(r,(function(){return x.current}),[]),i.createElement("group",(0,o.Z)({ref:x},w),i.createElement("group",{ref:E},i.createElement("group",{ref:k},t)))}))},92505:function(e,r,t){t.d(r,{w:function(){return u}});var n=t(45987),o=t(87462),a=t(47313),i=t(45825),c=["userData","children","geometry","threshold","color"];function u(e){e.userData;var r=e.children,t=e.geometry,u=e.threshold,l=void 0===u?15:u,s=e.color,d=void 0===s?"black":s,f=(0,n.Z)(e,c),h=a.useRef(null);return a.useLayoutEffect((function(){var e=h.current.parent;if(e){var r=t||e.geometry;r===h.current.userData.currentGeom&&l===h.current.userData.currentThreshold||(h.current.userData.currentGeom=r,h.current.userData.currentThreshold=l,h.current.geometry=new i.EdgesGeometry(r,l))}})),a.createElement("lineSegments",(0,o.Z)({ref:h,raycast:function(){return null}},f),r||a.createElement("lineBasicMaterial",{color:d}))}}}]);