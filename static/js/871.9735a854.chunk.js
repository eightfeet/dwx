"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[871],{90871:function(e,t,r){r.r(t);var n=r(57809),s=r(85298),o=r(92505),a=(r(47313),r(81569)),i=r(46417);t.default=function(e){var t=e.position,r=(e.opacity,e.showEdige),c=void 0!==r&&r,d=e.shadow,l=(0,n.L)("".concat("https://www.eightfeet.cn/dwx","/glb/body/ecorche_anatomy_study.glb")).nodes;return(0,i.jsxs)(s.M,{top:!0,scale:.09,position:[0,2.05,0],rotation:[(0,a.B0)(-90),(0,a.B0)(0),0],children:[(0,i.jsxs)("mesh",{receiveShadow:d,rotation:[(0,a.B0)(0),0,0],position:t,castShadow:d,geometry:l.Object_2.children[0].children[0].geometry,dispose:null,children:[(0,i.jsx)("meshStandardMaterial",{transparent:!0,opacity:1,roughness:.7,metalness:.25,envMapIntensity:.5}),!!c&&(0,i.jsx)(o.w,{threshold:3})]}),(0,i.jsxs)("mesh",{receiveShadow:d,rotation:[(0,a.B0)(0),0,0],position:t,castShadow:d,geometry:l.Object_2.children[0].children[1].geometry,dispose:null,children:[(0,i.jsx)("meshStandardMaterial",{transparent:!0,opacity:1,roughness:.7,metalness:.25,envMapIntensity:.5}),!!c&&(0,i.jsx)(o.w,{threshold:3})]}),(0,i.jsxs)("mesh",{receiveShadow:d,rotation:[(0,a.B0)(0),0,0],position:t,castShadow:d,geometry:l.Object_2.children[0].children[2].geometry,dispose:null,children:[(0,i.jsx)("meshStandardMaterial",{transparent:!0,opacity:1,roughness:.7,metalness:.25,envMapIntensity:.5}),!!c&&(0,i.jsx)(o.w,{threshold:3})]}),(0,i.jsxs)("mesh",{receiveShadow:d,rotation:[(0,a.B0)(0),0,0],position:t,castShadow:d,geometry:l.Object_2.children[0].children[3].geometry,dispose:null,children:[(0,i.jsx)("meshStandardMaterial",{transparent:!0,opacity:1,roughness:.7,metalness:.25,envMapIntensity:.5}),!!c&&(0,i.jsx)(o.w,{threshold:3})]}),(0,i.jsxs)("mesh",{receiveShadow:d,rotation:[(0,a.B0)(0),0,0],position:t,castShadow:d,geometry:l.Object_2.children[1].children[0].geometry,dispose:null,children:[(0,i.jsx)("meshStandardMaterial",{transparent:!0,opacity:1,roughness:.7,metalness:.25,envMapIntensity:.5}),!!c&&(0,i.jsx)(o.w,{threshold:3})]}),(0,i.jsxs)("mesh",{receiveShadow:d,rotation:[(0,a.B0)(0),0,0],position:t,castShadow:d,geometry:l.Object_2.children[2].children[0].geometry,dispose:null,children:[(0,i.jsx)("meshStandardMaterial",{transparent:!0,opacity:1,roughness:.7,metalness:.25,envMapIntensity:.5}),!!c&&(0,i.jsx)(o.w,{threshold:3})]}),(0,i.jsxs)("mesh",{receiveShadow:d,rotation:[(0,a.B0)(0),0,0],position:t,castShadow:d,geometry:l.Object_4.geometry,dispose:null,children:[(0,i.jsx)("meshStandardMaterial",{transparent:!0,opacity:1,roughness:.7,metalness:.25,envMapIntensity:.5}),!!c&&(0,i.jsx)(o.w,{threshold:3})]}),(0,i.jsxs)("mesh",{receiveShadow:d,rotation:[(0,a.B0)(0),0,0],position:t,castShadow:d,geometry:l.Object_5.geometry,dispose:null,children:[(0,i.jsx)("meshStandardMaterial",{transparent:!0,opacity:1,roughness:.7,metalness:.25,envMapIntensity:.5}),!!c&&(0,i.jsx)(o.w,{threshold:3})]})]})}},85298:function(e,t,r){r.d(t,{M:function(){return c}});var n=r(45987),s=r(87462),o=r(45825),a=r(47313),i=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],c=a.forwardRef((function(e,t){var r=e.children,c=e.disableX,d=e.disableY,l=e.disableZ,h=e.left,u=e.right,m=e.top,p=e.bottom,y=e.front,g=e.back,w=e.onCentered,f=e.precise,x=void 0===f||f,j=(0,n.Z)(e,i),v=a.useRef(null),S=a.useRef(null),b=a.useRef(null);return a.useLayoutEffect((function(){S.current.matrixWorld.identity();var e=(new o.Box3).setFromObject(b.current,x),t=new o.Vector3,r=new o.Sphere,n=e.max.x-e.min.x,s=e.max.y-e.min.y,a=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(r);var i=m?s/2:p?-s/2:0,f=h?-n/2:u?n/2:0,j=y?a/2:g?-a/2:0;S.current.position.set(c?0:-t.x+f,d?0:-t.y+i,l?0:-t.z+j),"undefined"!==typeof w&&w({parent:v.current.parent,container:v.current,width:n,height:s,depth:a,boundingBox:e,boundingSphere:r,center:t,verticalAlignment:i,horizontalAlignment:f,depthAlignment:j})}),[r]),a.useImperativeHandle(t,(function(){return v.current}),[]),a.createElement("group",(0,s.Z)({ref:v},j),a.createElement("group",{ref:S},a.createElement("group",{ref:b},r)))}))},92505:function(e,t,r){r.d(t,{w:function(){return c}});var n=r(45987),s=r(87462),o=r(47313),a=r(45825),i=["userData","children","geometry","threshold","color"];function c(e){e.userData;var t=e.children,r=e.geometry,c=e.threshold,d=void 0===c?15:c,l=e.color,h=void 0===l?"black":l,u=(0,n.Z)(e,i),m=o.useRef(null);return o.useLayoutEffect((function(){var e=m.current.parent;if(e){var t=r||e.geometry;t===m.current.userData.currentGeom&&d===m.current.userData.currentThreshold||(m.current.userData.currentGeom=t,m.current.userData.currentThreshold=d,m.current.geometry=new a.EdgesGeometry(t,d))}})),o.createElement("lineSegments",(0,s.Z)({ref:m,raycast:function(){return null}},u),t||o.createElement("lineBasicMaterial",{color:h}))}}}]);