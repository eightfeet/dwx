"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[5983],{25983:function(e,r,t){t.r(r);var n=t(1413),a=t(45987),o=t(57809),s=t(92505),c=(t(47313),t(46417)),u=["visible","opacity","showEdige","shadow"];r.default=function(e){e.visible;var r=e.opacity,t=(e.showEdige,e.shadow),i=(0,a.Z)(e,u),l=(0,o.L)("".concat("https://www.eightfeet.cn/dwx","/glb/pear.glb")).nodes;return(0,c.jsx)("group",(0,n.Z)((0,n.Z)({},i),{},{children:(0,c.jsx)("group",{position:[0,-.98,0],rotation:[Math.PI/180*90,0,0],scale:.025,children:(0,c.jsxs)("mesh",{scale:2,receiveShadow:t,rotation:[0,0,0],position:[0,0,0],castShadow:t,geometry:l.pear_.geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:r,roughness:.7,metalness:.25,envMapIntensity:.5}),(0,c.jsx)(s.w,{threshold:4})]})})}))}},92505:function(e,r,t){t.d(r,{w:function(){return u}});var n=t(45987),a=t(87462),o=t(47313),s=t(45825),c=["userData","children","geometry","threshold","color"];function u(e){e.userData;var r=e.children,t=e.geometry,u=e.threshold,i=void 0===u?15:u,l=e.color,h=void 0===l?"black":l,d=(0,n.Z)(e,c),p=o.useRef(null);return o.useLayoutEffect((function(){var e=p.current.parent;if(e){var r=t||e.geometry;r===p.current.userData.currentGeom&&i===p.current.userData.currentThreshold||(p.current.userData.currentGeom=r,p.current.userData.currentThreshold=i,p.current.geometry=new s.EdgesGeometry(r,i))}})),o.createElement("lineSegments",(0,a.Z)({ref:p,raycast:function(){return null}},d),r||o.createElement("lineBasicMaterial",{color:h}))}}}]);