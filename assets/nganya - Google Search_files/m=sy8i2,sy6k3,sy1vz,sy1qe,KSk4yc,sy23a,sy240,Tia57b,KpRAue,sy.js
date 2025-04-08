this._s=this._s||{};(function(_){var window=this;
try{
var M5z,N5z;M5z=RegExp("tw-data-text|tw-data-placeholder");N5z=class{constructor(){this.oa=!1}};_.O5z=new N5z;
_.P5z=class{constructor(a,b){this.pre=a;this.oa=this.pre.firstElementChild;this.textarea=b||null}wc(a){_.um(this.oa,a);this.pre.className=this.pre.className.replace(M5z,"tw-data-text");this.pre.className.indexOf("tw-data-placeholder")>=0||this.oa.innerHTML.length!=0||(_.um(this.oa,this.HW()),this.pre.className=this.pre.className.replace(M5z,"tw-data-placeholder"));this.textarea&&this.textarea.value!=a&&(this.textarea.value=a)}Zb(){return this.textarea?this.textarea.value:this.pre.className.indexOf("tw-data-text")>=
0?_.qDa(this.oa):""}HW(){return this.pre.getAttribute("data-placeholder")||""}cK(a){this.pre.setAttribute("data-placeholder",a);this.pre.className.indexOf("tw-data-placeholder")>=0&&_.um(this.oa,a)}};
}catch(e){_._DumpException(e)}
try{
_.hrr=_.x("KSk4yc",[_.NC]);
}catch(e){_._DumpException(e)}
try{
_.Eke=!!(_.Nh[34]>>17&1);_.Fke=!!(_.Nh[34]>>18&1);_.Gke=!!(_.Nh[34]>>19&1);_.Hke=!!(_.Nh[34]>>20&1);_.Ike=!!(_.Nh[34]>>21&1);_.Jke=!!(_.Nh[34]>>22&1);_.Kke=!!(_.Nh[34]>>23&1);_.Lke=!!(_.Nh[34]>>24&1);_.Mke=!!(_.Nh[34]>>25&1);_.Nke=!!(_.Nh[34]>>26&1);_.Oke=!!(_.Nh[34]>>27&1);_.Pke=!!(_.Nh[34]>>28&1);_.Qke=!!(_.Nh[34]>>29&1);_.Rke=!!(_.Nh[35]&1);_.kH=!!(_.Nh[35]&2);_.Ske=!!(_.Nh[35]&4);_.Tke=!!(_.Nh[35]&8);_.Uke=!!(_.Nh[35]&16);_.Vke=!!(_.Nh[35]&32);_.Wke=!!(_.Nh[35]&64);_.Xke=!!(_.Nh[35]&128);
_.Yke=!!(_.Nh[35]&256);_.Zke=!!(_.Nh[35]&512);_.$ke=!!(_.Nh[35]&1024);_.ale=!!(_.Nh[35]&2048);_.ble=!!(_.Nh[35]&4096);_.cle=!!(_.Nh[35]&8192);_.dle=!!(_.Nh[35]>>14&1);_.ele=!!(_.Nh[35]>>15&1);_.fle=!!(_.Nh[35]>>16&1);_.gle=!!(_.Nh[35]>>17&1);_.hle=!!(_.Nh[35]>>18&1);_.ile=!!(_.Nh[35]>>19&1);_.jle=!!(_.Nh[35]>>20&1);_.kle=!!(_.Nh[35]>>21&1);_.lle=!!(_.Nh[35]>>22&1);
}catch(e){_._DumpException(e)}
try{
var X_d,V_d,W_d;
_.Y_d=function(){var a=_.Yh?_.Vl("center_col"):_.Vl("rcnt");if(a===null)return[];var b=new Set;for(var c of V_d){var d=Array.prototype.slice.call(a.querySelectorAll(c[0]),0);for(var e of d)if(c.length===2&&c[1]==="PARENT")d=e.parentElement,d!==null&&b.add(d);else if(c.length===2&&c[1]==="DESCENDANTS"){if(d=e.childNodes,d!==null)for(var f of d)b.add(f)}else b.add(e)}a=Array.from(b);b=[];for(c=0;c<a.length;c++)if(a[c]instanceof HTMLElement){e=a[c];f=!0;d=e.getBoundingClientRect();if(e.offsetParent===null||
d.width===0||d.height===0)f=!1;if(f)for(d=0;d<a.length;d++)if(c!==d&&_.jg(a[d],e)){f=!1;break}if(f)for(const g of W_d){if(g.length===2&&g[1]==="ANCESTORS")e.querySelector(g[0])!==null&&(f=!1);else if(g.length===2&&g[1]==="DESCENDANTS")for(d=e.parentElement;d;){if(d.matches(g[0])){f=!1;break}d=d.parentElement}else if(g.length===2&&g[1]==="PARENT"){if(d=e.childNodes,d!==null)for(const h of d)if(h.matches(g[0])){f=!1;break}}else if(e.matches(g[0])){f=!1;break}if(!f)break}f&&b.push(e)}return X_d(b)};
X_d=function(a){const b=[..._.Xl("*")];return a.sort((c,d)=>b.indexOf(c)-b.indexOf(d))};
V_d=[["#rso > div:not(.ULSxyf):not([jsname='TlEBqd']):not(.MjjYud):not(.hlcw0c)[class]"],["#rso div.ULSxyf:not(:only-of-type):not(:last-of-type)"],["#rso div.MjjYud:not(:only-of-type):not(:last-of-type)"],["#rso div.hlcw0c:not(:only-of-type):not(:last-of-type)"],["#rso div.ULSxyf:not(:only-of-type):last-of-type:not(:nth-of-type(2))"],["#rso div.MjjYud:not(:only-of-type):last-of-type:not(:nth-of-type(2))"],["#rso div.hlcw0c:not(:only-of-type):last-of-type:not(:nth-of-type(2))"],["#bres"],["[jsname='xQjRM']"],
[".g-blk"],["[jsname='GDPwke'] div.MjjYud"],[".XqFnDf"],[".e6hL7d","DESCENDANTS"],[".kkCXT"],[".cu-container"],["#tvcap"],["#bottomads"]];W_d=[];
}catch(e){_._DumpException(e)}
try{
_.r("KSk4yc");
var X2A=function(a){return new _.Yd(a.top,a.right,a.bottom,a.left)},Y2A=function(a){const b=Object.values(a.getClientRects()).filter(c=>c.width>0);if(b.length===0)return X2A(a.range.getBoundingClientRect());a=X2A(b[0]);for(const c of b.slice(1))a.bottom!==c.bottom?a=X2A(c):a.right=c.right;return a},Z2A=function(a){const b=Object.values(a.getClientRects()).filter(c=>c.width>0);if(b.length===0)return X2A(a.range.getBoundingClientRect());a=X2A(b[0]);for(const c of b.slice(1)){if(a.top!==c.top)break;
a.right=c.right}return a},$2A=!!(_.Nh[50]&4);var a3A=class{constructor(a){this.range=a;const b=[];let c=a.startContainer;for(;c;){a:{var d;try{if(c.nodeType!==3||!_.Vf(c.parentNode)){var e=!1;break a}}catch(f){e=!1;break a}e=c.parentNode;if(d=e.tagName!=="STYLE".toString())d=_.gm().getComputedStyle(e),d=!(d.getPropertyValue("position")!=="fixed"&&!e.offsetParent)&&d.getPropertyValue("display")!=="none"&&d.getPropertyValue("visibility")!=="hidden"&&d.getPropertyValue("user-select")!=="none"&&d.getPropertyValue("-moz-user-select")!=="none"&&d.getPropertyValue("-ms-user-select")!==
"none"&&d.getPropertyValue("-webkit-user-select")!=="none";e=d}e&&c.nodeValue.trim()&&b.push(c);if(c===a.endContainer)break;c=_.dDa(c)}this.oa=b}toString(){return this.oa.length===0?"":this.oa.map(a=>{let b=0,c=a.nodeValue.length;a===this.range.startContainer&&(b=this.range.startOffset);a===this.range.endContainer&&(c=this.range.endOffset);return a.nodeValue.substring(b,c).trim()}).filter(Boolean).join(" ")}getClientRects(){const a=document.createRange();var b=this.oa[0];const c=b===this.range.startContainer?
this.range.startOffset:0;if(typeof b!=="object")return a.getClientRects();a.setStart(b,c);b=this.oa[this.oa.length-1];a.setEnd(b,b===this.range.endContainer?this.range.endOffset:b.nodeValue.length);return a.getClientRects()}};var c3A=function(a){const b=_.gm().getSelection();return b&&b.rangeCount!==0&&b3A(a,b)?a.Mb(b.getRangeAt(0)):(a.tooltip.Wd()&&a.oa(),null)},d3A=function(a,b,c){if(a.tooltip!==null&&a.tooltip.ob()!==null){var d=a.tooltip.ob().offsetWidth,e=a.tooltip.ob().offsetHeight,f=_.gm(),g=Y2A(b),h=Z2A(b);b=!1;a.Ca&&a.Ca.y+20<g.bottom&&(b=!0);g.bottom+8+a.tooltip.ob().offsetHeight>f.innerHeight&&(b=!0);h.top+8+a.tooltip.ob().offsetHeight<f.innerHeight&&(b=!1);b?e=f.pageYOffset+h.top-8-e:(e=f.pageYOffset+g.bottom+
8,h=g);a.tooltip.setStyle("top",Math.round(e)+"px");g=_.gm();e=g.innerWidth-16;{f=h.left;var k=h.right,m=a.Ca;h=f+8;const t=k-8;!m||h>=t?f=(f+k)/2:(f=m.x,f=f<h?h:f>t?t:f)}h=f;f=h-d/2;f<16?f=Math.min(16,h-12):f+d>e&&(f=Math.max(e-d,h+12-d));d=h-f;f+=g.pageXOffset;var {oDe:n,hQd:q}={oDe:f,hQd:d};c||a.tooltip.setStyle("left",Math.round(n)+"px");d=b;c=c?null:Math.round(q-6);a.Ia.isEmpty()||a.Ga.isEmpty()||(g=d?a.Ga:a.Ia,d=d?a.Ia:a.Ga,c&&g.setStyle("left",c+"px"),g.show(),d.hide());a.tooltip.setStyle("transform-origin",
q+"px "+(b?"bottom":"top"));a.Aa=null}},e3A=function(a){const b=a.Xa("YljVCc");(b.Wd()?_.Zo(b,'[role="button"], button, a'):_.Zo(a.Xa("ZmkZfc"),'[role="button"], button, a')).focus()},f3A=function(a,b){if(a.split(" ").length===1){var c=_.gm().getSelection();if(c&&c.anchorNode&&c.focusNode&&c.anchorNode===c.focusNode){var d=c.anchorNode;a=null;d.textContent&&(b.set("ctif",d.textContent),(d=d.parentElement)&&d.textContent&&(b.set("ctif",d.textContent),a=d,(d.tagName==="B"||d.tagName==="EM")&&(d=d.parentElement)&&
d.textContent&&(b.set("ctif",d.textContent),a=d)));a!==null&&c.rangeCount>0?(c=c.getRangeAt(0),d=c.cloneRange(),d.selectNodeContents(a),d.setEnd(c.startContainer,c.startOffset),a=d.toString().length,d.setEnd(c.endContainer,c.endOffset),c=d.toString().length,b.set("slst",a),b.set("sled",c)):isNaN(c.anchorOffset)||isNaN(c.focusOffset)||(a=Math.max(c.anchorOffset,c.focusOffset),b.set("slst",Math.min(c.anchorOffset,c.focusOffset)),b.set("sled",a))}}},i3A=function(a,b){if(a.Da){a.Da=!1;var c=c3A(a),d=
c?c.toString().slice(0,a.Fb).trim():null;a.Fa("Uo0pef").toggle(b);d&&(a.Qa===-1||d.split(" ").length<=a.Qa)?g3A(a,()=>h3A(a,c,d)):a.tooltip.Wd()&&a.oa()}},j3A=function(a,b,c){if(!b||c.has(b))return!1;c.add(b);if(!a.Ya&&b.tagName==="A".toString()||_.XDa(b)==="button"||b===a.Jb||b.id==="tw-container")return!0;const d=_.BDa(b,"zIndex");return d&&d.toString()!=="auto"&&d.toString()!=="0"||(_.Mke||$2A)&&b.getAttribute("jsname")==="dvXlsc"?!0:j3A(a,_.Sf(b),c)},b3A=function(a,b){const c=new Set;b=b.getRangeAt(0);
let d=b.startContainer;for(;d;){try{if(d.nodeType!==3&&d.nodeType!==1)return!1}catch(e){return!1}if(d.parentElement&&j3A(a,d.parentElement,c))return!1;if(d===b.endContainer)break;d=_.dDa(d)}return!0},g3A=function(a,b){a.Aa&&((0,_.Go)(a.Aa),a.Aa=null);a.Aa=(0,_.Fo)(b,a.yb)},h3A=function(a,b,c){if(a.Ba!==null&&a.Ba.el()!==null){var d=new Map;d.set("rt","tc");d.set("sltx",c);f3A(c,d);_.nv(a.Ba.el(),{context:d}).then(e=>{a.showTooltip(e,b);(0,_.Fo)(()=>_.vh(),200)})}},k3A=class extends _.Lg{static Ra(){return{qd:{snackbar:{jsname:"m3HYFd",
ctor:_.OC}}}}constructor(a){super(a.Oa);this.Al=[];this.Na=this.Pa=this.Da=!1;this.Ca=null;this.La=!1;this.Aa=null;this.Ea=!1;this.Ri=a.qd.snackbar;this.tooltip=this.Xa("suEOdc");this.tooltip.isEmpty()&&_.rfb(this,"suEOdc").then(b=>this.tooltip=b);this.Ia=this.Xa("ojBOCb");this.Ga=this.Xa("GV5nwf");this.Ba=this.Xa("V4zgDf");this.Ba.isEmpty()&&_.rfb(this,"V4zgDf").then(b=>this.Ba=b);this.Fb=_.zc(this.getData("mcl"),0);this.Qa=_.zc(this.getData("mwl"),-1);this.yb=_.zc(this.getData("dl"),0);this.Jb=
_.Vl("result-stats");this.Mb=b=>new a3A(b);this.Db=this.getData("cf").Hb();this.Ya=this.getData("ath").Hb();a=_.gm();this.Al.push(_.ze(a,"mousedown",b=>{this.onMouseDown(b)},!1,this));this.Al.push(_.ze(a,"keydown",b=>{this.onKeyDown(b)},!1,this));this.Al.push(_.ze(a,"mouseup",b=>{this.onMouseUp(b)},!1,this));this.Al.push(_.ze(a,"keyup",()=>{this.onKeyUp()},!1,this));this.Al.push(_.ze(document,"selectionchange",()=>{this.LGa()},!1,this))}Vb(){this.Al.forEach(a=>a&&_.qn(a));this.Al.length=0}Ua(){this.Xa("neDtlb").isEmpty()||
(this.Xa("ZmkZfc").hide(),this.oa())}Lb(a){const b=this.Xa("ZmkZfc");if(!b.isEmpty()&&!b.Wd()&&this.tooltip!==null){b.show();this.tooltip.addClass("lSNMte");this.Xa("YljVCc").hide();var c=c3A(this);c&&d3A(this,c,!0);e3A(this);this.Ea=!1;a=a.targetElement.el();_.Av([new _.zo(b.el(),"show")],{triggerElement:a})}}Wa(a){if(a.data.Aa()==="context_actions_dictionary"||a.data.Aa()==="context_actions_translate")this.Na=!0}Va(){this.Na=!1}onMouseDown(a){this.Pa=a=_.jg(this.tooltip.el(),a.target);!a&&this.tooltip.Wd()&&
this.oa()}onKeyDown(a){a.keyCode===27&&(this.La=!0,this.oa());var b;if(b=a.shiftKey)b=a.keyCode,b=b===38||b===40||b===37||b===39;b&&(this.La=!1,this.oa());a.ctrlKey&&a.shiftKey&&a.key==="X"&&this.tooltip.Wd()&&e3A(this)}onMouseUp(a){const b=_.jg(this.tooltip.el(),a.target);this.Pa=b;b||(this.Ca=a.clientX&&a.clientY?new _.Il(a.clientX,a.clientY):null,i3A(this,!1))}onKeyUp(){const a=!this.tooltip.Wd()&&!this.Aa;!this.La&&a&&(this.Ca=null,i3A(this,!0))}LGa(){this.Da=!0;(_.gm().getSelection()||"").toString()===
""&&!this.Pa&&this.tooltip.Wd()&&(this.oa(),this.Da=!1)}showTooltip(a,b){a&&!this.Xa("YljVCc").isEmpty()&&this.tooltip!==null&&this.tooltip.el()!==null&&(this.Db||this.tooltip===null||(this.tooltip.show(),d3A(this,b,!1),this.tooltip.setStyle("opacity",.999),this.tooltip.setStyle("transform","scale(1)")),this.Ea||(_.Av([new _.zo(this.tooltip.el(),"show")],{}),this.Ea=!0))}oa(){this.tooltip!==null&&this.Ba!==null&&this.Ba.el()!==null&&this.Na!==!0&&(this.Aa&&((0,_.Go)(this.Aa),this.Aa=null),this.tooltip.setStyle("top",
0),this.tooltip.setStyle("left",0),this.tooltip.hide(),this.tooltip.setStyle("opacity",.001),this.tooltip.setStyle("transform","scale(0.1)"),this.tooltip.removeClass("lSNMte"),_.pv(this.Ba.el()),this.Ea=!1)}qb(a){document.execCommand("copy")&&this.Ri&&this.Ri.show();_.Bv(a.targetElement.el());this.oa()}};_.H(k3A.prototype,"dK6tkc",function(){return this.qb});_.H(k3A.prototype,"VvZoSb",function(){return this.Va});_.H(k3A.prototype,"MlP2je",function(){return this.Wa});_.H(k3A.prototype,"v9xSwd",function(){return this.Lb});
_.H(k3A.prototype,"Geh74d",function(){return this.Ua});_.H(k3A.prototype,"k4Iseb",function(){return this.Vb});_.O(_.hrr,k3A);

_.v();
}catch(e){_._DumpException(e)}
try{
_.DIe=_.x("b1c25c",[]);
}catch(e){_._DumpException(e)}
try{
_.dMe=_.x("xSkvYe",[_.oMb,_.Yq,_.fr,_.NVa,_.GVa,_.DIe,_.nr,_.hr]);
}catch(e){_._DumpException(e)}
try{
_.r("Tia57b");
_.So(_.LVa,class extends _.Qo{Aa(a,b=!1){b&&_.Cd(location,a);return!1}hja(){}Fha(){this.oa||(this.oa=new Promise(a=>{_.wIa(_.wf(_.Mg(this,{service:{Zba:_.dMe}}),b=>a(b.service.Zba)),()=>a(this))}));return this.oa}aga(a,b={}){b.replace?(_.Gd(location,a),location.reload()):_.Cd(location,a);return Promise.resolve(null)}prefetch(){return Promise.resolve(null)}Rjb(){}});
_.v();
}catch(e){_._DumpException(e)}
try{
_.r("KpRAue");
_.OMe=new _.hf(_.jr);
_.v();
}catch(e){_._DumpException(e)}
try{
_.TIe=!!(_.Nh[55]&8);_.UIe=!!(_.Nh[55]&16);_.VIe=!!(_.Nh[55]&32);_.WIe=!!(_.Nh[55]&64);_.XIe=!!(_.Nh[55]&128);_.YIe=!!(_.Nh[55]&256);_.ZIe=!!(_.Nh[55]&512);_.$Ie=!!(_.Nh[55]&1024);_.aJe=!!(_.Nh[55]&2048);_.bJe=!!(_.Nh[55]&4096);_.cJe=!!(_.Nh[55]>>15&1);_.dJe=!!(_.Nh[55]>>16&1);_.eJe=!!(_.Nh[55]>>17&1);_.fJe={ZJe:"appbar",NWe:"ee",Maf:"mode",w_e:"fb",AVc:"rhs",b8e:"lhs",zlf:"sge",hLe:"atvcap",Ekf:"stb",mlf:"dark",cvf:"uib",Yef:"osrp_st_tabs",zUe:"dthm",L9e:"mgq",KSe:"ctor",Ssf:"taw",IQe:"cq",eXe:"emb",fXe:"emb_cb",g4e:"imlt",Kff:"pff_map"};_.gJe=Object.values(_.fJe);
}catch(e){_._DumpException(e)}
try{
_.$Je=Object.values(_.fJe);
}catch(e){_._DumpException(e)}
try{
_.vMe=function(a,b){if(!a.match(/.*com\/search|^\/search/))return _.se(new _.Ff("url invalid not /search")),{cLa:!1,Kuc:!0};let c;const d=(c=_.Fh(a,"tbm"))!=null?c:"web";if(d!=="web")return _.se(new _.Ff(`url invalid mode: ${d}`)),{cLa:!1,Kuc:!0};if(_.Fh(b,"vsrid")&&!_.Fh(a,"vsrid"))return{cLa:!1,Kuc:!0};b=_.ZIe&&_.Fh(a,"udm")===(49).toString();return _.Fh(a,"q")||_.Fh(a,"vsrid")||b?{cLa:!0}:(_.se(new _.Ff(`url invalid missing query: ${a}`)),{cLa:!1,reload:!0})};
}catch(e){_._DumpException(e)}
try{
_.r("NyeqM");
var son,uon,ron,xon,yon;
son=function(a){a.Aa||(a.Aa=!0,document.addEventListener("click",b=>{try{const d=b.target.closest("a");if(d&&!b.defaultPrevented){var c=ron(a,d);if(c){let e;const f=(e=c.onClick)==null?void 0:e.call(c,b,d),g=Object.assign({},c,f),{cLa:h}=_.vMe(d.href,a.Pc.location.href);if(h){if(!g.triggerElement){for(c=d;c&&!c.getAttribute("jslog")&&!c.getAttribute("data-ved");)c=c.parentElement;c||_.se(Error("Ms"));g.triggerElement=c}a.transition(d.href,g);b.preventDefault()}}}}catch(d){_.se(Error("Ks`"+d))}}))};
_.ton=function(a){return _.A(function*(){return a.lp.Fha().then(b=>{a.lp=b})})};uon=function(a){return Array.isArray(a)?a:[a]};_.von=function(a,b={}){son(a);b.bEf&&_.ton(a);b.feature&&a.lp.hja(b);if(b.aS)for(const c of uon(b.aS))a.oa.set(c,b)};_.won=function(a,b={}){b.feature&&a.lp.Fha().then(c=>{c.hja(b)})};
ron=function(a,b){try{const c=xon(a,b),d=c?a.oa.get(c):void 0;return((d==null?0:d.omit)?yon(d.omit):[]).find(e=>typeof e==="function"?e(b):a.isMatch(b,e)||typeof e==="string"&&b.closest(e))?void 0:d}catch(c){_.se(Error("Ls`"+c))}};xon=function(a,b){return Array.from(a.oa.keys()).find(c=>a.isMatch(b,c))};yon=function(a){return Array.isArray(a)?a:[a]};
_.zon=class extends _.Qo{static Ra(){return{service:{Pc:_.Gv,lp:_.OMe}}}constructor(a){super();this.Aa=!1;this.oa=new Map;this.Pc=a.service.Pc;this.lp=a.service.lp}transition(a,b){return this.lp.aga(a,b)}Rjb(){this.lp.Rjb()}isMatch(a,b){return b instanceof Element?a.isEqualNode(b):a.matches(b)||a.closest(b)}};_.So(_.Z1a,_.zon);
_.v();
}catch(e){_._DumpException(e)}
try{
_.fTn=_.x("O9SqHb",[_.hr,_.Z1a]);
}catch(e){_._DumpException(e)}
try{
_.nQn=!!(_.Nh[64]&1024);_.oQn=!!(_.Nh[64]&2048);_.pQn=!!(_.Nh[64]&4096);_.qQn=!!(_.Nh[64]&8192);_.rQn=!!(_.Nh[64]>>14&1);_.sQn=!!(_.Nh[64]>>15&1);_.tQn=!!(_.Nh[64]>>16&1);_.uQn=!!(_.Nh[64]>>17&1);_.vQn=!!(_.Nh[64]>>18&1);_.wQn=!!(_.Nh[64]>>19&1);
}catch(e){_._DumpException(e)}
try{
_.r("O9SqHb");
var gTn=class extends _.Lg{static Ra(){return{service:{yc:_.FC,DB:_.zon}}}constructor(a){super(a.Oa);this.yc=a.service.yc;_.qQn&&(this.DB=a.service.DB)}navigate(a){const b=this;return _.A(function*(){var c=!!a&&a.data||{};const d=c.url;c=c.Bqc;if(b.DB&&!c)try{b.trigger("JCifrc");yield b.DB.transition(d.toString());return}catch(e){_.se(Error("vt`"+e))}b.yc.navigateTo(d,!1)})}};_.H(gTn.prototype,"RySO6d",function(){return this.navigate});_.O(_.fTn,gTn);
_.v();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
