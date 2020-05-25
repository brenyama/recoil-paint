(this["webpackJsonprecoil-paint"]=this["webpackJsonprecoil-paint"]||[]).push([[0],{135:function(e,t,n){e.exports=n(317)},317:function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),o=n(28),i=n.n(o),c=n(79),s=n(6),u=n(1),a=n(318),m="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/shapes/Element.js";function b({x:e,y:t,width:n,height:l,fill:o,label:i,style:s,onMouseDown:u,onClick:b,children:f}){return r.a.createElement(c.a,{style:[_.root,{top:t,left:e,width:n,height:l,backgroundColor:o},s],onMouseDown:u,onClick:b,__self:this,__source:{fileName:m,lineNumber:9,columnNumber:5}},i?r.a.createElement(a.a,{selectable:!1,__self:this,__source:{fileName:m,lineNumber:27,columnNumber:9}},i):null,f)}const _=s.a.create({root:{position:"absolute",justifyContent:"center",alignItems:"center"}});const f=s.a.create({root:{}});const h=s.a.create({root:{borderRadius:"50%"}});var N=n(319),d="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/shapes/Image.js";const g=s.a.create({root:{}}),p={rect:function(e){return r.a.createElement(b,Object.assign({},e,{style:f.root,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/shapes/Rectangle.js",lineNumber:7,columnNumber:5}}))},ellipse:function(e){return r.a.createElement(b,Object.assign({},e,{style:h.root,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/shapes/Ellipse.js",lineNumber:7,columnNumber:5}}))},image:function(e){const{originWidth:t,originHeight:n,width:l,height:o,uri:i}=e,c=t/n;return r.a.createElement(b,Object.assign({},e,{style:g.root,__self:this,__source:{fileName:d,lineNumber:11,columnNumber:5}}),r.a.createElement(N.a,{resizeMode:"contain",ratio:c,source:{uri:i,width:l,height:o},__self:this,__source:{fileName:d,lineNumber:15,columnNumber:7}}))}};const y={},j={type:"rect",x:0,y:0,label:"Recoil",fill:"#dbdde4",width:200,height:100};let E=1;function w(e){let t=E++;return y[t]=Object.assign({id:t},j,e),t}function v(e){return y[e]||j}const O=Object(u.atom)({key:"canvasLayoutState",default:{x:0,y:0,width:800,height:600}}),x=Object(u.atom)({key:"backgroundColorState",default:"white"}),k=Object(u.atom)({key:"itemIdsState",default:[]}),R=Object(u.atom)({key:"selectedIdsState",default:[]}),C=Object(u.atom)({key:"movingItemIdsState",default:[]}),D=Object(u.atom)({key:"movingItemsSnapshotState",default:{}}),S=function(e){let t=new Map;return(n,...l)=>{if(t.has(n))return t.get(n);const r=e(n,...l);return t.set(n,r),r}}(e=>Object(u.atom)({key:"private-item"+e,default:v(e)}));const H=e=>Object(u.selector)({key:"item"+e,get:({get:t})=>function(e){const{type:t,originWidth:n,originHeight:l,width:r}=e;if("image"!==t)return e;let o=r/(n/l);return{...e,height:o}}(t(S(e))),set:({set:t},n)=>{t(S(e),n)}});const I=(M="selectedItemsSelector",G=R,Object(u.selector)({key:M,get:({get:e})=>{const t=e(G);return t.length?t.map(t=>e(H(t))):[]},set:({set:e},t)=>{t.forEach(t=>{let n=t.id;e(H(n),t)})}}));var M,G;const U=Object(u.selector)({key:"selectionBoundingBox",get:({get:e})=>function(e){if(!e.length)return null;let t=null,n=null,l=null,r=null;return e.forEach(e=>{(null===t||e.x<t)&&(t=e.x),(null===l||e.y<l)&&(l=e.y),(null===n||e.x+e.width>n)&&(n=e.x+e.width),(null===r||e.y+e.height>r)&&(r=e.y+e.height)}),{x:t,y:l,width:n-t,height:r-l,isMutilple:e.length>1}}(e(I))});function L(){return Object(u.useRecoilCallback)(({set:e},t)=>{e(H(t.id),t)})}function B(e){const[t,n]=Object(l.useState)(!1),[r,o]=Object(l.useState)({clientX:0,clientY:0}),[i,c]=Object(l.useState)({x:0,y:0}),s=Object(l.useCallback)((t,n,l,r)=>{e({status:t,isMoving:n,origin:l,offset:r})},[e]),u=Object(l.useCallback)(({clientX:e,clientY:t,metaKey:l,shiftKey:r})=>{let c={clientX:e,clientY:t,metaKey:l,shiftKey:r};n(!0),o(c),s("start",!0,c,i)},[s,i]),a=Object(l.useCallback)(({clientX:e,clientY:n})=>{if(!t)return;const l={x:e-r.clientX,y:n-r.clientY};c(l),s("moving",!0,r,l)},[s,t,r]),m=Object(l.useCallback)(()=>{t&&(n(!1),c({x:0,y:0}),s("end",!1,r,i))},[s,t,i,r]);return Object(l.useEffect)(()=>{function e(){window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",m)}return t?(window.addEventListener("mousemove",a),window.addEventListener("mouseup",m)):e(),e},[a,m,t]),{onMouseDown:u}}function V({id:e}){const[t,n]=Object(l.useState)(null),o=Object(u.useRecoilValue)(H(e)),i=Object(u.useSetRecoilState)(R),c=L(),{onMouseDown:s}=B(({status:l,origin:r,offset:s})=>{"start"===l&&n(o),"moving"===l&&t&&c({...t,x:t.x+s.x,y:t.y+s.y}),"end"===l&&(n(null),i(t=>r.metaKey||r.shiftKey?[...t,e]:[e]))}),a=function(e){const{type:t}=e;return p[t]}(o);return a?r.a.createElement(a,Object.assign({},o,{onMouseDown:s,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/CanvasItem.js",lineNumber:44,columnNumber:10}})):null}var W="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/ResizeHandler.js";function z(){const[e,t]=Object(u.useRecoilState)(I),[n,o]=Object(l.useState)(null),{onMouseDown:i}=B(({status:l,offset:r})=>{1===e.length&&("start"===l&&o(e),"moving"===l&&t(n.map(e=>function(e,t){let{x:n,y:l,width:r,height:o}=e;return r+=t.x,o+=t.y,r<0&&(r=-r,n-=r),o<0&&(o=-o,l-=o),{...e,x:n,y:l,width:r,height:o}}(e,r))))});if(1!==e.length)return null;const{x:s,y:a,width:m,height:b}=e[0];return r.a.createElement(c.a,{style:[P.resizeHandler,{left:s+m,top:a+b}],onMouseDown:i,__self:this,__source:{fileName:W,lineNumber:57,columnNumber:5}},r.a.createElement(c.a,{style:P.resizeHandlerDot,__self:this,__source:{fileName:W,lineNumber:64,columnNumber:7}}))}const P=s.a.create({resizeHandler:{width:24,height:24,marginLeft:-13,marginTop:-13,justifyContent:"center",alignItems:"center",cursor:"nwse-resize"},resizeHandlerDot:{width:10,height:10,borderRadius:4,backgroundColor:"white",borderWidth:2,borderColor:"blue",position:"absolute"}});function X(e){const[t,n]=Object(u.useRecoilState)(D),r=Object(u.useRecoilValue)(C),o=Object(u.useRecoilCallback)(async({getPromise:e},t)=>await Promise.all(t.map(t=>e(H(t))))),i=Object(u.useRecoilCallback)(({set:e},t)=>{t.forEach(t=>{e(H(t.id),t)})}),{onMouseDown:c}=B(n=>{const{status:l,offset:r}=n;if(e(n),"moving"===l&&t.length){const e=t.map(e=>({...e,x:e.x+r.x,y:e.y+r.y}));i(e)}});return Object(l.useEffect)(()=>{o(r).then(e=>{n(e)})},[r]),{onMouseDown:c}}var T="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/Selection.js";function Y(){const e=Object(u.useRecoilValue)(R),t=Object(u.useRecoilValue)(U),n=Object(u.useSetRecoilState)(C),{onMouseDown:l}=X(({status:l})=>{if(!t)return null;"start"===l&&n(e),"end"===l&&n([])});if(!t)return null;const{x:o,y:i,width:s,height:a}=t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{style:[K.selection,{left:o,top:i,width:s,height:a}],onMouseDown:l,__self:this,__source:{fileName:T,lineNumber:36,columnNumber:7}}),r.a.createElement(z,{__self:this,__source:{fileName:T,lineNumber:45,columnNumber:7}}))}const K=s.a.create({selection:{borderWidth:2,borderStyle:"dashed",borderColor:"blue",position:"absolute",cursor:"move"}});function Z(e){const t=Object(u.useSetRecoilState)(R),n=Object(u.useRecoilValue)(x),o=Object(l.useCallback)(()=>{t([])},[t]);return r.a.createElement(c.a,{style:[s.a.absoluteFill,{backgroundColor:n}],onClick:o,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/CanvasBackground.js",lineNumber:15,columnNumber:5}})}var A="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/canvas/Canvas.js";function $(){const e=Object(l.useRef)(),t=Object(u.useRecoilValue)(k),n=Object(u.useSetRecoilState)(O);return r.a.createElement(c.a,{style:F.root,ref:e,onLayout:({nativeEvent:{layout:{x:e,y:t,width:l,height:r}}})=>n({x:e,y:t,width:l,height:r}),__self:this,__source:{fileName:A,lineNumber:21,columnNumber:5}},r.a.createElement(c.a,{style:F.container,__self:this,__source:{fileName:A,lineNumber:22,columnNumber:7}},r.a.createElement(Z,{__self:this,__source:{fileName:A,lineNumber:23,columnNumber:9}}),t.map(e=>r.a.createElement(V,{key:"item-"+e,id:e,__self:this,__source:{fileName:A,lineNumber:24,columnNumber:28}})),r.a.createElement(Y,{__self:this,__source:{fileName:A,lineNumber:25,columnNumber:9}})))}const F=s.a.create({root:{flex:1,backgroundColor:"white",overflow:"auto"},container:{flex:1},svg:{flex:1}});var J="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/common/Button.js";function q({Icon:e,disabled:t,style:n,children:o,title:i,accessibilityLabel:s,...u}){const a=Object(l.useRef)();return Object(l.useEffect)(()=>{a.current.setNativeProps({title:i})},[i]),r.a.createElement(c.a,Object.assign({},u,{accessibilityRole:"button",accessibilityLabel:s||i,disabled:t,ref:a,style:[Q.root,t&&Q.disabled,e&&Q.iconOnly,!e&&Q.text,n],__self:this,__source:{fileName:J,lineNumber:16,columnNumber:5}}),e&&r.a.createElement(e,{style:[t&&Q.disabledIcon],__self:this,__source:{fileName:J,lineNumber:30,columnNumber:16}}),!e&&o)}const Q=s.a.create({root:{borderWidth:1,borderColor:"#ccc",backgroundColor:"#fff",justifyContent:"center",alignItems:"center",borderRadius:4},iconOnly:{width:32,height:32},text:{paddingVertical:8,paddingHorizontal:8},disabled:{cursor:"default",opacity:.8},disabledIcon:{fill:"#ccc"}});function ee({newShapeProps:e={},...t}){const[n,o]=Object(l.useState)(null),i=Object(u.useSetRecoilState)(k),c=Object(u.useSetRecoilState)(R),s=Object(u.useRecoilValue)(O),a=Object(u.useRecoilCallback)(async({getPromise:e},t)=>{let n=w(t);return await e(H(n))}),m=L(),{onMouseDown:b}=B(({status:t,origin:l,offset:r})=>{"start"===t&&(o(null),a({...e,x:l.clientX-s.x,y:l.clientY-s.y}).then(e=>{o(e),i(t=>[...t,e.id]),c([])})),"moving"===t&&n&&m({...n,x:l.clientX+r.x-s.x,y:l.clientY+r.y-s.y}),"end"===t&&n&&(o(null),c([n.id]))});return r.a.createElement(q,Object.assign({},t,{onMouseDown:b,__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/toolbar/NewItemButton.js",lineNumber:51,columnNumber:10}}))}var te=n(19);function ne(e){const{ariaLabel:t,children:n,width:l,height:r,viewBox:o}=e,i=[le.root,e.style];return Object(te.a)("svg",{role:"presentation",width:l,height:r,"aria-label":t,style:i,viewBox:o||"0 0 24 24"},n)}ne.defaultProps={width:24,height:24};const le=s.a.create({root:{display:"inline-block",fill:"currentcolor",height:"1.25em",maxWidth:"100%",position:"relative",userSelect:"none",textAlignVertical:"text-bottom"},iconRtl:{transform:[{scaleX:-1}]}});var re="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/icons/Square.js";function oe(e){return r.a.createElement(ne,Object.assign({},e,{__self:this,__source:{fileName:re,lineNumber:7,columnNumber:5}}),r.a.createElement("g",{transform:"matrix(.48 0 0 .48 0 0)",__self:this,__source:{fileName:re,lineNumber:10,columnNumber:7}},r.a.createElement("path",{fill:"#000",d:"M44 1h-38c-2.757 0-5 2.243-5 5v38c0 2.757 2.243 5 5 5h38c2.757 0 5-2.243 5-5v-38c0-2.757-2.243-5-5-5Zm3 43c0 1.654-1.346 3-3 3h-38c-1.654 0-3-1.346-3-3v-38c0-1.654 1.346-3 3-3h38c1.654 0 3 1.346 3 3v38Z",__self:this,__source:{fileName:re,lineNumber:11,columnNumber:9}})))}function ie({style:e,...t}){return r.a.createElement(ee,Object.assign({},t,{Icon:oe,style:e,title:"Drag to create a new Rectangle",__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/toolbar/NewRectangleButton.js",lineNumber:7,columnNumber:5}}))}var ce="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/icons/Image.js";function se(e){return r.a.createElement(ne,Object.assign({},e,{__self:this,__source:{fileName:ce,lineNumber:7,columnNumber:5}}),r.a.createElement("g",{__self:this,__source:{fileName:ce,lineNumber:10,columnNumber:7}},r.a.createElement("path",{d:"M19.235,1.75H4.765c-1.662,0-3.015,1.352-3.015,3.015v14.471c0,1.662,1.352,3.015,3.015,3.015h14.471  c1.662,0,3.015-1.352,3.015-3.015V4.765C22.25,3.102,20.898,1.75,19.235,1.75z M21.044,19.235c0,0.997-0.811,1.809-1.809,1.809  H4.765c-0.997,0-1.809-0.811-1.809-1.809v-2.181l4.866-5.407l6.573,5.975l3.635-3.029l3.015,2.512V19.235z M21.044,15.536  l-3.015-2.512l-3.601,3L7.737,9.94l-4.781,5.312V4.765c0-0.997,0.811-1.809,1.809-1.809h14.471c0.997,0,1.809,0.811,1.809,1.809  V15.536z",__self:this,__source:{fileName:ce,lineNumber:11,columnNumber:9}}),r.a.createElement("path",{d:"M16.221,10.794c1.662,0,3.015-1.352,3.015-3.015s-1.352-3.015-3.015-3.015c-1.662,0-3.015,1.352-3.015,3.015  S14.558,10.794,16.221,10.794z M16.221,5.971c0.997,0,1.809,0.811,1.809,1.809s-0.811,1.809-1.809,1.809s-1.809-0.811-1.809-1.809  S15.223,5.971,16.221,5.971z",__self:this,__source:{fileName:ce,lineNumber:12,columnNumber:9}})))}function ue({style:e,...t}){return r.a.createElement(ee,Object.assign({},t,{Icon:se,style:e,title:"Drag to create a new Image",newShapeProps:{type:"image",uri:"/recoil-paint/olympic-marmot.jpg",originWidth:1062,originHeight:1388,width:306,height:400,label:""},__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/toolbar/NewImageButton.js",lineNumber:17,columnNumber:5}}))}var ae="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/icons/Statistics.js";function me(e){return r.a.createElement(ne,Object.assign({},e,{__self:this,__source:{fileName:ae,lineNumber:7,columnNumber:5}}),r.a.createElement("g",{transform:"matrix(.380952 0 0 .380952 0 0)",__self:this,__source:{fileName:ae,lineNumber:10,columnNumber:7}},r.a.createElement("path",{d:"M10 9h-8c-1.104 0-2 .896-2 2v40c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2v-40c0-1.104-.896-2-2-2Z",__self:this,__source:{fileName:ae,lineNumber:11,columnNumber:9}}),r.a.createElement("path",{d:"M27.833 23h-8c-1.104 0-2.833.11-2.833.864v27.273c0 .753 1.729 1.863 2.833 1.863h8c1.105 0 1.167-1.11 1.167-1.863v-27.273c0-.754-.062-.864-1.167-.864Z",__self:this,__source:{fileName:ae,lineNumber:12,columnNumber:9}}),r.a.createElement("path",{d:"M44.5 12h-8c-1.104 0-2.5.334-2.5 1.364v37.273c0 1.029 1.396 2.363 2.5 2.363h8c1.104 0 1.5-1.334 1.5-2.363v-37.273c0-1.03-.396-1.364-1.5-1.364Z",__self:this,__source:{fileName:ae,lineNumber:13,columnNumber:9}}),r.a.createElement("path",{d:"M61.5 37h-8c-1.104 0-2.5-.175-2.5.228v14.545c0 .402 1.396 1.227 2.5 1.227h8c1.104 0 1.5-.825 1.5-1.228v-14.544c0-.403-.396-.228-1.5-.228Z",__self:this,__source:{fileName:ae,lineNumber:14,columnNumber:9}})))}var be="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/toolbar/Toolbar.js";function _e(){return r.a.createElement(c.a,{style:fe.root,__self:this,__source:{fileName:be,lineNumber:10,columnNumber:5}},r.a.createElement(ie,{style:fe.button,__self:this,__source:{fileName:be,lineNumber:11,columnNumber:7}}),r.a.createElement(ue,{style:fe.button,__self:this,__source:{fileName:be,lineNumber:12,columnNumber:7}}),r.a.createElement(q,{disabled:!0,Icon:me,style:fe.button,__self:this,__source:{fileName:be,lineNumber:13,columnNumber:7}}))}const fe=s.a.create({root:{flexDirection:"row",marginBottom:16},button:{marginRight:8}});var he="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/sidebar/ItemInfo.js";function Ne({id:e}){const t=Object(u.useRecoilValue)(H(e)),{label:n,x:l,y:o}=t;return r.a.createElement(c.a,{style:de.root,__self:this,__source:{fileName:he,lineNumber:11,columnNumber:5}},n&&r.a.createElement(a.a,{style:de.label,__self:this,__source:{fileName:he,lineNumber:12,columnNumber:17}},n),r.a.createElement(a.a,{style:de.subLabel,__self:this,__source:{fileName:he,lineNumber:13,columnNumber:7}},`(x = ${l} y = ${o})`))}const de=s.a.create({root:{marginBottom:16},label:{fontWeight:"bold"},subLabel:{}});var ge="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/sidebar/ItemInfoList.js";function pe(){const e=Object(u.useRecoilValue)(k);return r.a.createElement(c.a,{style:ye.root,__self:this,__source:{fileName:ge,lineNumber:11,columnNumber:5}},e.map(e=>r.a.createElement(Ne,{key:"item-info-"+e,id:e,__self:this,__source:{fileName:ge,lineNumber:12,columnNumber:26}})))}const ye=s.a.create({root:{flex:1,overflow:"auto"}});var je="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/sidebar/AddRectsButton.js";function Ee(){const[e,t]=Object(u.useRecoilState)(k),n=Object(u.useSetRecoilState)(R);return r.a.createElement(q,{style:we.root,onClick:()=>{let l=[],r=e.length;for(let e=0;e<100;e++){let t=r+e,n=Math.floor(t/5),o=t%5,i=w({x:16*(o+1)+100*o,y:16*(n+1)+100*n,width:100,height:100});l.push(i)}t([...e,...l]),n([])},__self:this,__source:{fileName:je,lineNumber:34,columnNumber:5}},r.a.createElement(a.a,{style:we.text,__self:this,__source:{fileName:je,lineNumber:35,columnNumber:7}},"Add 100 Rects"))}const we=s.a.create({root:{backgroundColor:"#3c8227"},text:{color:"white"}});var ve="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/sidebar/Sidebar.js";function Oe(){return r.a.createElement(c.a,{style:xe.root,__self:this,__source:{fileName:ve,lineNumber:9,columnNumber:5}},r.a.createElement(_e,{__self:this,__source:{fileName:ve,lineNumber:10,columnNumber:7}}),r.a.createElement(pe,{__self:this,__source:{fileName:ve,lineNumber:11,columnNumber:7}}),r.a.createElement(c.a,{__self:this,__source:{fileName:ve,lineNumber:12,columnNumber:7}},r.a.createElement(Ee,{__self:this,__source:{fileName:ve,lineNumber:13,columnNumber:9}})))}const xe=s.a.create({root:{width:240,height:"100vh",borderRightWidth:1,borderRightColor:"#ccc",borderRightType:"solid",padding:16}});var ke=n(134),Re="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/infobar/ColorPicker.js";function Ce(){const[e,t]=Object(l.useState)(!1),[n,o]=Object(u.useRecoilState)(x),i=Object(l.useCallback)(e=>{o(e.hex)},[o]),s=Object(l.useCallback)(()=>{t(!0)},[]);return Object(l.useEffect)(()=>{function e(e){e.target.closest("#color-picker")||t(!1)}return document.body.addEventListener("click",e),()=>{document.body.removeEventListener("click",e)}},[]),r.a.createElement(c.a,{style:De.root,onClick:s,__self:this,__source:{fileName:Re,lineNumber:35,columnNumber:5}},r.a.createElement(c.a,{style:[De.inner,{backgroundColor:n}],__self:this,__source:{fileName:Re,lineNumber:36,columnNumber:7}}),e&&r.a.createElement(c.a,{style:De.popup,nativeID:"color-picker",__self:this,__source:{fileName:Re,lineNumber:38,columnNumber:9}},r.a.createElement(ke.SketchPicker,{color:n,onChangeComplete:i,__self:this,__source:{fileName:Re,lineNumber:39,columnNumber:11}})))}const De=s.a.create({root:{borderRadius:"50%",backgroundColor:"white",borderWidth:1,borderColor:"#ccc",width:24,height:24,marginLeft:16,padding:2},inner:{borderRadius:"50%",width:18,height:18},popup:{position:"absolute",right:32}});var Se=n(320);function He(e){const{value:t,style:n,onChangeNumber:l,...o}=e;return r.a.createElement(Se.a,Object.assign({},o,{value:t,style:[Ie.input,n],onChangeText:e=>{let t=parseInt(e);isNaN(t)||l(t)},__self:this,__source:{fileName:"/Users/junminliu/Documents/GitHub/recoil-paint/src/components/common/NumberInput.js",lineNumber:16,columnNumber:5}}))}const Ie=s.a.create({input:{flex:1,paddingVertical:8,paddingHorizontal:8,backgroundColor:"white",borderRadius:4,borderColor:"#ccc",borderWidth:1,marginTop:8}});var Me="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/infobar/SelectionInfo.js";function Ge(){const[e,t]=Object(u.useRecoilState)(I),n=Object(l.useCallback)((n,l)=>{t([{...e[0],[n]:l}])},[e,t]);if(1!==e.length)return null;const o=e[0];return r.a.createElement(c.a,{style:Ue.root,__self:this,__source:{fileName:Me,lineNumber:22,columnNumber:5}},r.a.createElement(c.a,{style:Ue.row,__self:this,__source:{fileName:Me,lineNumber:23,columnNumber:7}},r.a.createElement(a.a,{__self:this,__source:{fileName:Me,lineNumber:24,columnNumber:9}},"Selection:")),r.a.createElement(c.a,{style:Ue.row,__self:this,__source:{fileName:Me,lineNumber:26,columnNumber:7}},r.a.createElement(c.a,{style:Ue.column,__self:this,__source:{fileName:Me,lineNumber:27,columnNumber:9}},r.a.createElement(a.a,{style:Ue.bold,__self:this,__source:{fileName:Me,lineNumber:28,columnNumber:11}},"X"),r.a.createElement(He,{value:o.x,style:Ue.input,onChangeNumber:e=>n("x",e),__self:this,__source:{fileName:Me,lineNumber:29,columnNumber:11}})),r.a.createElement(c.a,{style:Ue.columnSpace,__self:this,__source:{fileName:Me,lineNumber:35,columnNumber:9}}),r.a.createElement(c.a,{style:Ue.column,__self:this,__source:{fileName:Me,lineNumber:36,columnNumber:9}},r.a.createElement(a.a,{style:Ue.bold,__self:this,__source:{fileName:Me,lineNumber:37,columnNumber:11}},"Y"),r.a.createElement(He,{value:o.y,style:Ue.input,onChangeNumber:e=>n("y",e),__self:this,__source:{fileName:Me,lineNumber:38,columnNumber:11}}))),-1===["image"].indexOf(o.type)&&r.a.createElement(c.a,{style:Ue.labelRow,__self:this,__source:{fileName:Me,lineNumber:46,columnNumber:9}},r.a.createElement(a.a,{style:Ue.bold,__self:this,__source:{fileName:Me,lineNumber:47,columnNumber:11}},"Label:"),r.a.createElement(Se.a,{value:o.label,style:Ue.input,onChangeText:e=>n("label",e),__self:this,__source:{fileName:Me,lineNumber:48,columnNumber:11}})))}const Ue=s.a.create({root:{},row:{marginBottom:24,flexDirection:"row",alignItems:"center"},labelRow:{},column:{flex:1},columnSpace:{width:8},bold:{fontWeight:"bold"},input:{flex:1,paddingVertical:8,paddingHorizontal:8,backgroundColor:"white",borderRadius:4,borderColor:"#ccc",borderWidth:1,marginTop:8}});var Le="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/infobar/InformationBar.js";function Be(){return r.a.createElement(c.a,{style:Ve.root,__self:this,__source:{fileName:Le,lineNumber:8,columnNumber:5}},r.a.createElement(c.a,{style:Ve.row,__self:this,__source:{fileName:Le,lineNumber:9,columnNumber:7}},r.a.createElement(a.a,{__self:this,__source:{fileName:Le,lineNumber:10,columnNumber:9}},"Document:")),r.a.createElement(c.a,{style:[Ve.row,Ve.colorRow],__self:this,__source:{fileName:Le,lineNumber:12,columnNumber:7}},r.a.createElement(a.a,{style:Ve.title,__self:this,__source:{fileName:Le,lineNumber:13,columnNumber:9}},"Background color:"),r.a.createElement(Ce,{__self:this,__source:{fileName:Le,lineNumber:14,columnNumber:9}})),r.a.createElement(Ge,{__self:this,__source:{fileName:Le,lineNumber:16,columnNumber:7}}))}const Ve=s.a.create({root:{width:240,borderLeftWidth:1,borderLeftColor:"#ccc",borderLeftType:"solid",padding:16},row:{marginBottom:24,flexDirection:"row",alignItems:"center"},colorRow:{zIndex:1},title:{fontWeight:"bold"}});var We="/Users/junminliu/Documents/GitHub/recoil-paint/src/components/Main.js";function ze(){return r.a.createElement(c.a,{style:Pe.root,__self:this,__source:{fileName:We,lineNumber:9,columnNumber:5}},r.a.createElement(Oe,{__self:this,__source:{fileName:We,lineNumber:10,columnNumber:7}}),r.a.createElement($,{__self:this,__source:{fileName:We,lineNumber:11,columnNumber:7}}),r.a.createElement(Be,{__self:this,__source:{fileName:We,lineNumber:12,columnNumber:7}}))}const Pe=s.a.create({root:{height:"100vh",flexDirection:"row",backgroundColor:"#ebeef2"}});var Xe="/Users/junminliu/Documents/GitHub/recoil-paint/src/App.js";var Te=function(){return r.a.createElement(u.RecoilRoot,{__self:this,__source:{fileName:Xe,lineNumber:7,columnNumber:5}},r.a.createElement(ze,{__self:this,__source:{fileName:Xe,lineNumber:8,columnNumber:7}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye="/Users/junminliu/Documents/GitHub/recoil-paint/src/index.js";i.a.render(r.a.createElement(r.a.StrictMode,{__self:void 0,__source:{fileName:Ye,lineNumber:7,columnNumber:3}},r.a.createElement(Te,{__self:void 0,__source:{fileName:Ye,lineNumber:8,columnNumber:5}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}},[[135,1,2]]]);
//# sourceMappingURL=main.b3a427f0.chunk.js.map