"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[6900],{96900:function(e,r,t){t.r(r);var n=t(1413),o=t(45987),a=t(57809),i=t(85298),u=t(92505),c=(t(47313),t(81569)),l=t(46417),s=["visible","opacity","showEdige","shadow"];r.default=function(e){e.visible;var r=e.opacity,t=e.showEdige,d=e.shadow,h=(0,o.Z)(e,s),f=(0,a.L)("".concat("https://www.eightfeet.cn/dwx","/glb/body/human_female_skull.glb")).nodes;return(0,l.jsx)("group",(0,n.Z)((0,n.Z)({},h),{},{children:(0,l.jsx)(i.M,{position:[0,1,.4],rotation:[0,(0,c.B0)(0),0],children:(0,l.jsx)("group",{position:[0,8,0],rotation:[(0,c.B0)(-90),(0,c.B0)(0),(0,c.B0)(0)],scale:.1,children:f.Merged_female_skullOBJcleanergles.children[0].children.map((function(e,n){return(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:e.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:r,roughness:.7,metalness:.25,envMapIntensity:.5}),!!t&&(0,l.jsx)(u.w,{threshold:5})]},n)}))})})}))}},85298:function(e,r,t){t.d(r,{M:function(){return c}});var n=t(45987),o=t(87462),a=t(45825),i=t(47313),u=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],c=i.forwardRef((function(e,r){var t=e.children,c=e.disableX,l=e.disableY,s=e.disableZ,d=e.left,h=e.right,f=e.top,m=e.bottom,p=e.front,g=e.back,b=e.onCentered,w=e.precise,y=void 0===w||w,v=(0,n.Z)(e,u),x=i.useRef(null),E=i.useRef(null),k=i.useRef(null);return i.useLayoutEffect((function(){E.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(k.current,y),r=new a.Vector3,t=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,i=e.max.z-e.min.z;e.getCenter(r),e.getBoundingSphere(t);var u=f?o/2:m?-o/2:0,w=d?-n/2:h?n/2:0,v=p?i/2:g?-i/2:0;E.current.position.set(c?0:-r.x+w,l?0:-r.y+u,s?0:-r.z+v),"undefined"!==typeof b&&b({parent:x.current.parent,container:x.current,width:n,height:o,depth:i,boundingBox:e,boundingSphere:t,center:r,verticalAlignment:u,horizontalAlignment:w,depthAlignment:v})}),[t]),i.useImperativeHandle(r,(function(){return x.current}),[]),i.createElement("group",(0,o.Z)({ref:x},v),i.createElement("group",{ref:E},i.createElement("group",{ref:k},t)))}))},92505:function(e,r,t){t.d(r,{w:function(){return c}});var n=t(45987),o=t(87462),a=t(47313),i=t(45825),u=["userData","children","geometry","threshold","color"];function c(e){e.userData;var r=e.children,t=e.geometry,c=e.threshold,l=void 0===c?15:c,s=e.color,d=void 0===s?"black":s,h=(0,n.Z)(e,u),f=a.useRef(null);return a.useLayoutEffect((function(){var e=f.current.parent;if(e){var r=t||e.geometry;r===f.current.userData.currentGeom&&l===f.current.userData.currentThreshold||(f.current.userData.currentGeom=r,f.current.userData.currentThreshold=l,f.current.geometry=new i.EdgesGeometry(r,l))}})),a.createElement("lineSegments",(0,o.Z)({ref:f,raycast:function(){return null}},h),r||a.createElement("lineBasicMaterial",{color:d}))}}}]);