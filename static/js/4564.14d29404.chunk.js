"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[4564],{74564:function(e,t,r){r.r(t);var n=r(57809),o=r(85298),a=r(92505),u=(r(47313),r(46417));t.default=function(e){var t=e.position,r=(e.opacity,e.showEdige),i=e.name,c=(0,n.L)("".concat("https://www.eightfeet.cn/dwx","/glb/kitchen.glb")).nodes,l={Bowl:[c.Bowl.geometry,[1.6,0,0]],ButterKnife:[c.ButterKnife.geometry,[1.6,0,0]],Cup:[c.Cup.geometry,[1.6,0,0]],CupHandle:[c.CupHandle.geometry,[1.6,0,0]],Fork:[c.Fork.geometry,[1.6,0,0]],Plate:[c.Plate.geometry,[1.6,0,0]],Pot:[c.Pot.geometry,[1.6,0,0]],Scoop:[c.Scoop.geometry,[1.6,0,0]],ScoopStuff:[c.ScoopStuff.geometry,[1.6,0,0]],Spatula:[c.Spatula.geometry,[1.6,0,0]],Spoon:[c.Spoon.geometry,[1.6,0,0]],FryingPan:[c.FryingPan.geometry,[1.6,0,0]]}[i];return(0,u.jsx)(o.M,{top:!0,scale:.25,position:[0,-1,0],children:(0,u.jsxs)("mesh",{receiveShadow:!0,rotation:l[1],position:t,castShadow:!0,geometry:l[0],dispose:null,children:[(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:1,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,u.jsx)(a.w,{threshold:5,color:"red"})]})})}},85298:function(e,t,r){r.d(t,{M:function(){return c}});var n=r(45987),o=r(87462),a=r(45825),u=r(47313),i=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],c=u.forwardRef((function(e,t){var r=e.children,c=e.disableX,l=e.disableY,s=e.disableZ,d=e.left,m=e.right,f=e.top,p=e.bottom,h=e.front,g=e.back,y=e.onCentered,w=e.precise,b=void 0===w||w,v=(0,n.Z)(e,i),S=u.useRef(null),x=u.useRef(null),k=u.useRef(null);return u.useLayoutEffect((function(){x.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(k.current,b),t=new a.Vector3,r=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,u=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(r);var i=f?o/2:p?-o/2:0,w=d?-n/2:m?n/2:0,v=h?u/2:g?-u/2:0;x.current.position.set(c?0:-t.x+w,l?0:-t.y+i,s?0:-t.z+v),"undefined"!==typeof y&&y({parent:S.current.parent,container:S.current,width:n,height:o,depth:u,boundingBox:e,boundingSphere:r,center:t,verticalAlignment:i,horizontalAlignment:w,depthAlignment:v})}),[r]),u.useImperativeHandle(t,(function(){return S.current}),[]),u.createElement("group",(0,o.Z)({ref:S},v),u.createElement("group",{ref:x},u.createElement("group",{ref:k},r)))}))},92505:function(e,t,r){r.d(t,{w:function(){return c}});var n=r(45987),o=r(87462),a=r(47313),u=r(45825),i=["userData","children","geometry","threshold","color"];function c(e){e.userData;var t=e.children,r=e.geometry,c=e.threshold,l=void 0===c?15:c,s=e.color,d=void 0===s?"black":s,m=(0,n.Z)(e,i),f=a.useRef(null);return a.useLayoutEffect((function(){var e=f.current.parent;if(e){var t=r||e.geometry;t===f.current.userData.currentGeom&&l===f.current.userData.currentThreshold||(f.current.userData.currentGeom=t,f.current.userData.currentThreshold=l,f.current.geometry=new u.EdgesGeometry(t,l))}})),a.createElement("lineSegments",(0,o.Z)({ref:f,raycast:function(){return null}},m),t||a.createElement("lineBasicMaterial",{color:d}))}}}]);