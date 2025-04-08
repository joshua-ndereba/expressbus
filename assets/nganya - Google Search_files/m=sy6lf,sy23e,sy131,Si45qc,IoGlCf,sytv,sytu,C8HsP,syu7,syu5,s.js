_F_installCss(".oYLlHe{display:-moz-box;display:flex;-moz-box-flex:1;flex-grow:1;overflow:clip}sentinel{}");
this._s=this._s||{};(function(_){var window=this;
try{
_.csr=_.x("Si45qc",[]);
}catch(e){_._DumpException(e)}
try{
_.hJe=function(){return _.Wl("center_col")};
}catch(e){_._DumpException(e)}
try{
var n_b,m_b,p_b,o_b,q_b,r_b;n_b=function(a){return document.startViewTransition?document.startViewTransition(a):m_b(a)};m_b=function(a){a=Promise.resolve(a()).then(()=>{});return{ready:Promise.resolve(),updateCallbackDone:a,finished:a,skipTransition:()=>{}}};
p_b=function(a,b={}){const c=document.createElement("style");document.head.prepend(c);var d;const e=(d=b.groups)!=null?d:[];for(d=0;d<e.length;d++){const f=e[d],g=`${"spa-vt-"}${d}`;f.viewTransitionName=g;f.element.style.viewTransitionName=g}d=n_b(()=>_.A(function*(){yield a();for(const f of e)f.sab=f.R8c?f.R8c():f.element,f.element.style.viewTransitionName="",f.sab.style.viewTransitionName=f.viewTransitionName}));d.updateCallbackDone.then(()=>{});d.ready.then(()=>{for(var f of e)f.sab.style.viewTransitionName=
"";if(f=b.keyframes)for(var g of f){f=c.sheet.insertRule(`@keyframes ${g.name} {}`);f=c.sheet.cssRules[f];for(const [h,k]of Object.entries(g.keyframes)){const m=k;f.appendRule(`${h} {}`);const n=f.cssRules[f.cssRules.length-1];for(const q in m)m.hasOwnProperty(q)&&(n.style[q]=m[q])}}for(g=0;g<e.length;g++)o_b(c,e[g]);o_b(c,b.root)});d.finished.then(()=>{c.remove()});return d};
o_b=function(a,b){if(b){var c,d=(c=b.viewTransitionName)!=null?c:"root";q_b(a,d,"old",b.VKb);q_b(a,d,"new",b.new);q_b(a,d,"group",b.group);q_b(a,d,"image-pair",b.sGf)}};
q_b=function(a,b,c,d){if(d){if(d.animation){var e=d.animation;document.documentElement.animate(e.keyframes,Object.assign({},e.options,{pseudoElement:`::view-transition-${c}(${b})`}));d.styles=d.styles||{};d.styles.animation="none"}if(d=d.styles){b=a.sheet.insertRule(`${`::view-transition-${c}(${b})`} {}`);a=a.sheet.cssRules[b];for(const f in d)d.hasOwnProperty(f)&&(a.style[f]=d[f])}}};_.s_b=function(a,b){return r_b?m_b(a):p_b(a,b)};r_b=!!(_.Nh[48]>>20&1);_.t_b=!!(_.Nh[48]>>21&1);_.u_b=!!document.startViewTransition;
}catch(e){_._DumpException(e)}
try{
_.r("Si45qc");
var cdB=function(a){if(a.oa){var b=_.cm();a=a.oa.getBoundingClientRect();b.height<=a.bottom?window.scrollTo({top:window.scrollY+a.bottom-b.height+40,behavior:"auto"}):80>=a.top&&window.scrollTo({top:window.scrollY+a.top-80,behavior:"auto"})}},ddB=class extends _.Lg{static Ra(){return{}}constructor(a){super(a.Oa);this.oa=null;this.Da=()=>{if(_.t_b){const b=[],c=this.getRoot().el().querySelectorAll('[jsname="dTDiAc"]');for(const d of c)b.push({element:d});_.s_b(()=>{this.Ba.classList.add("xKxVbb")},
{groups:b})}else this.Ba.classList.add("xKxVbb")};this.Ca=()=>{if(_.t_b){const b=[],c=this.getRoot().el().querySelectorAll('[jsname="dTDiAc"]');for(const d of c)b.push({element:d});_.s_b(()=>{this.Ba.classList.remove("xKxVbb")},{groups:b})}else this.Ba.classList.remove("xKxVbb");cdB(this)};this.Ea=b=>{const c=b.detail.id;b=b.detail.k;if(c==="mosaic"||c==="regis"){if(c==="regis"){let d,e,f;this.oa=(f=(d=this.container.children().filter(_.Vo("jsname","yk2ZCc")))==null?void 0:(e=d.toArray())==null?void 0:
e[0])!=null?f:null}else this.oa=b<this.Aa.length?this.Aa[b]:this.oa;cdB(this)}};this.Ba=_.hJe();this.container=_.Zo(this.getRoot(),".jFk0f");a=this.Xa("BRTknd");this.hm=a.isEmpty()?new _.uh([]):_.WNa(a,"GDPwke");this.hm.setStyle("visibility","hidden");this.Aa=this.container.children().filter(_.Uo("ivg-i")).toArray();document.addEventListener("viewerOpened",this.Da);document.addEventListener("viewerClosed",this.Ca);document.addEventListener("viewerUpdated",this.Ea);this.addOnDisposeCallback(()=>{document.removeEventListener("viewerOpened",
this.Da);document.removeEventListener("viewerClosed",this.Ca);document.removeEventListener("viewerUpdated",this.Ea)})}Ga(a){var b=_.Zo(this.hm,".jFk0f");const c=!b.isEmpty();if(c){var d=this.container.children().last();d&&d.setStyle("flex-grow","10000");b=b.children();this.Aa=this.Aa.concat(b.filter(_.Uo("ivg-i")).toArray());d=Math.min(10,b.size());for(let e=0;e<d;e++)b.eq(e).setStyle("flex-grow","10000");b.appendTo(this.container);this.notify("k7WJpc")}!a.data&&(a=this.container.children().last())&&
(a.setStyle("visibility","visible"),a.setStyle("height","unset"),c&&a.setStyle("flex-grow","1"));this.hm.empty()}};_.H(ddB.prototype,"T13UJb",function(){return this.Ga});_.O(_.csr,ddB);
_.v();
}catch(e){_._DumpException(e)}
try{
_.r("IoGlCf");
_.OHb=new _.hf(_.MWa);
_.v();
}catch(e){_._DumpException(e)}
try{
_.PHb={vxf:0,wxf:5,Gwf:7,gxf:10,xwf:9,Twf:11,uwf:13,qwf:14,ywf:15,axf:16,uxf:17,jxf:18,swf:19,rwf:25,fxf:36,Hwf:20,txf:21,mxf:22,Cwf:23,vwf:24,cxf:26,dxf:54,ixf:27,kxf:28,nxf:29,Dwf:31,qxf:32,Mwf:33,sxf:34,bxf:35,Fwf:37,Ywf:1E5,Uwf:100001,Vwf:100002,Wwf:100003,Zwf:100004,Xwf:100005,pxf:30,lxf:38,yxf:39,Ewf:40,hxf:41,zwf:42,Qwf:43,Rwf:59,Owf:44,Kwf:45,Lwf:46,nwf:47,Awf:48,rxf:49,exf:50,Jwf:51,oxf:52,owf:53,wwf:55,xxf:56,pwf:57,Nwf:58,twf:60,Swf:61,Pwf:62,Bwf:63,Iwf:64};
}catch(e){_._DumpException(e)}
try{
_.Ov=_.x("C8HsP",[_.MWa]);
}catch(e){_._DumpException(e)}
try{
_.r("C8HsP");
var QHb;_.Pv=new Set;QHb=function(a,b){b.Ia()||(a=_.Wf(a.getRoot().el(),c=>c instanceof Element&&_.qf(c,"ved"),!0))&&(a=_.pf(a,"ved"))&&b.Ca(a)};_.Qv=function(a,b){let c;a.getRoot().el().setAttribute("data-vhid",(c=b==null?void 0:b.VY())!=null?c:"");QHb(a,b);a.La.resolve(b);a.dDc(b)};_.RHb=function(a,b,c){QHb(a,c);a.Aa.set(b,c);a.Ia=!0};
_.SHb=function(a,b,c,d){if(b.event){var e;let k;(k=(e=b.event).preventDefault)==null||k.call(e);let m,n;(n=(m=b.event).stopPropagation)==null||n.call(m)}c&&QHb(a,c);var f;d=d?(f=_.pf(d,"ved"))!=null?f:void 0:void 0;f=a.Ca(b);let g,h;e=((g=b.rb)==null?0:g.el())?_.qf((h=b.rb)==null?void 0:h.el(),"hsr"):!1;a.trigger("aevozb",{sse:c,oG:d,interactionContext:f,Q9:e})};
_.Rv=class extends _.Lg{static Ra(){return{service:{yBa:_.OHb}}}constructor(a){super(a.Oa);this.Aa=new Map;this.Ia=!1;this.La=_.Je();this.yBa=a.service.yBa;this.trigger("k7WJpc")}Pa(a){a.data.element?_.RHb(this,a.data.element,a.data.Go):_.Qv(this,a.data.Go)}Em(){const a=this;return _.A(function*(){return yield a.La.promise})}Vc(a){if(this.Ia){let b=a.targetElement.el();const c=this.getRoot().el();for(;b&&b!==c;){if(this.Aa.has(b))return _.SHb(this,a,this.Aa.get(b),b),!1;b=b.parentElement}c&&this.Aa.has(c)?
_.SHb(this,a,this.Aa.get(c),c):_.SHb(this,a)}else _.SHb(this,a);return!1}Ca(a){return(a=a.rb.el())?Number(_.pf(a,"ictx"))||void 0:void 0}dDc(a){let b;(a=(b=a.Ba())==null?void 0:b.getViewerType())&&_.Pv.has(a)&&this.yBa.dDc(a)}DPa(a){const b=this;return _.A(function*(){b.trigger("vcOT6c",a)})}Qa(){return!1}};_.H(_.Rv.prototype,"M5Scjd",function(){return this.Qa});_.H(_.Rv.prototype,"zYAnae",function(){return this.Ca});_.H(_.Rv.prototype,"h5M12e",function(){return this.Vc});
_.H(_.Rv.prototype,"mKCalb",function(){return this.Em});_.H(_.Rv.prototype,"kNqZ1c",function(){return this.Pa});_.O(_.Ov,_.Rv);
_.Pv.add(10);_.Pv.add(15);_.Pv.add(16);_.Pv.add(18);_.Pv.add(19);_.Pv.add(25);_.Pv.add(36);_.Pv.add(21);_.Pv.add(22);_.Pv.add(23);_.Pv.add(24);_.Pv.add(26);_.Pv.add(27);_.Pv.add(28);_.Pv.add(29);_.Pv.add(31);_.Pv.add(40);_.Pv.add(32);_.Pv.add(33);_.Pv.add(35);
_.v();
}catch(e){_._DumpException(e)}
try{
_.uIb=_.x("gOTY1",[_.nva,_.MWa]);
}catch(e){_._DumpException(e)}
try{
_.fw=class extends _.l{constructor(a){super(a)}};_.fw.prototype.wb="PFrTzf";
}catch(e){_._DumpException(e)}
try{
_.aw=function(a){return _.wi(a,_.ru,4)};_.bIb=function(a,b){return _.ni(a,1,_.Uv,b)};_.bw=function(a,b){return _.cc(a,_.Sv,1,b)};_.cIb=function(a){return _.xi(a,_.uu,1,_.$Hb)};_.cw=function(a,b){return _.Ai(a,1,_.$Hb,b)};_.dw=function(a,b){return _.ug(a,3,b)};_.dIb=function(a,b){return _.ug(a,7,b)};_.eIb=_.lc(_.$v);
}catch(e){_._DumpException(e)}
try{
_.r("gOTY1");
var vIb=function(a){const b=a.getRoot().el();a=[...b.querySelectorAll('[data-viewer-entrypoint]:not([data-nv="1"])')];return a.length===0?a:a.filter(c=>{for(c=c.parentElement;c!==null&&c!==b;){if(c.hasAttribute("data-viewer-group"))return!1;c=c.parentElement}return!0})},xIb=function(a,b,c=null,d=null){return _.A(function*(){var e=yield Promise.all(b.map(g=>wIb(a,g)));const f=new Set;e=e.filter(g=>f.has(g.VY())?!1:(f.add(g.VY()),!0));e=_.hIb(_.fIb(new _.ew,e),a.streamId);a.Q8b&&e.setQuery(a.Q8b);if(c&&
d){const g=b.indexOf(c);g>=0&&_.oi(e,1,_.$v,g,d)}return e})},wIb=function(a,b){if(a.Ca.has(b))return a.Ca.get(b);const c=yIb(a,b);a.Ca.set(b,c);return c},yIb=function(a,b){return _.A(function*(){if(_.qIb)try{return yield a.Bl.resolve(b,_.$v)}catch(c){}return(yield a.xc(b,_.lp)).Em()})},zIb=class extends _.Lg{static Ra(){return{service:{Bl:_.YTa,yBa:_.OHb},Gf:{IGb:_.fw}}}constructor(a){super(a.Oa);this.Ca=new Map;this.oa=[];this.Ba=this.Aa=null;this.Da=Promise.resolve();this.Bl=a.service.Bl;this.yBa=
a.service.yBa;let b,c;this.streamId=(c=(b=_.ql(this.getData("id")))!=null?b:_.ql(this.getData("vssid")))!=null?c:"global";this.Q8b=_.ql(this.getData("q"));this.IGb=a.Gf.IGb;_.qIb||this.Im(this.initialize(),_.Po)}initialize(){const a=this;return _.A(function*(){const b=vIb(a);yield a.registerStream(b)})}Vmb(a){const b=this;return _.A(function*(){const c=a.targetElement.el();var d,e=(d=a.data.sse)!=null?d:null;d=e?c:null;var f=void 0;if(_.qIb)f=vIb(b),f=yield xIb(b,f,d,e);else if(b.Aa!==d||b.Ba!==e)yield b.registerStream(b.oa,
d,e);e=e!=null?e:yield wIb(b,c);let g;yield b.yBa.navigateToView({streamId:b.streamId,historyId:e.VY(),resultElement:c,tzb:_.Vhb(a)+_.ppa,zqd:_.qj(e,5),oG:a.data.oG,interactionContext:a.data.interactionContext,replace:!!a.data.Q9,IGb:(g=b.IGb)!=null?g:void 0,stream:f})})}Huc(a){this.yBa.DPa(a.data)}Ea(a){const b=this;return _.A(function*(){var c=a.targetElement.el();_.qIb||b.oa.includes(c)||(c=vIb(b),yield b.registerStream(c,b.Aa,b.Ba))})}Ga(){const a=this;return _.A(function*(){if(!_.qIb){const b=
vIb(a);yield a.registerStream(b,a.Aa,a.Ba)}return!0})}registerStream(a,b=null,c=null){const d=this;return _.A(function*(){const e=d.oa;d.oa=a;d.Aa=b;d.Ba=c;var f=d.Da;const g=new _.yh;d.Da=g.promise;yield f;f=yield xIb(d,a,b,c);a.length>0&&e.length===0?yield d.yBa.registerStream(d,f):yield d.yBa.QEe(d,f);g.resolve()})}Vb(){_.qIb||this.yBa.Kcc(this,this.streamId)}};_.H(zIb.prototype,"k4Iseb",function(){return this.Vb});_.H(zIb.prototype,"sCDZjb",function(){return this.Ga});
_.H(zIb.prototype,"beCLof",function(){return this.Ea});_.H(zIb.prototype,"C6KsF",function(){return this.Huc});_.H(zIb.prototype,"T2P31d",function(){return this.Vmb});_.O(_.uIb,zIb);
_.v();
}catch(e){_._DumpException(e)}
try{
_.dsr=_.x("sFFyCd",[]);
}catch(e){_._DumpException(e)}
try{
_.r("sFFyCd");
var edB=class extends _.l{constructor(a){super(a)}};edB.prototype.wb="JDto1e";_.fdB=class extends _.Dh{static Ra(){return{jsdata:{Kte:edB}}}constructor(a){super();a=this.data=a.jsdata.Kte;var b=_.Zl("GMFBpe",this.Ca());b=b.length===1?_.pf(b[0],"incompleteRowData")||"0":"0";_.ug(a,3,b)}};_.bs(_.dsr,_.fdB);
_.v();
}catch(e){_._DumpException(e)}
try{
_.esr=_.x("XW992c",[_.dsr,_.lr]);
}catch(e){_._DumpException(e)}
try{
_.r("XW992c");
var gdB=class extends _.Lg{static Ra(){return{model:{anc:_.fdB},service:{Xb:_.Lu}}}constructor(a){super(a.Oa);this.anc=a.model.anc;this.Xb=a.service.Xb;var b=this.anc.data;if(a=_.Jg(document.body,document.body,"BRTknd")[0])b={Gne:_.Ri(b,1),CFa:_.C(b,3)},_.dg(a,"QEvNdb",b)}oa(){const a=this.Fa("xMkiWb"),b=this.Fa("qVH5fe"),c=this.Xa("R5j3Z").first();a.show();b.hide();c&&c.show();c?_.Mu(_.Mu(_.bxb(this.Xb.oa().oa(b.el()),b.el()),a.el()),c.el()).log():_.Mu(_.bxb(this.Xb.oa().oa(b.el()),b.el()),a.el()).log();
this.notify("XGRTMd")}};_.H(gdB.prototype,"Dl4LN",function(){return this.oa});_.O(_.esr,gdB);
_.v();
}catch(e){_._DumpException(e)}
try{
_.r("G6wU6e");
_.qGB=new _.hf(_.UWa);
_.v();
}catch(e){_._DumpException(e)}
try{
_.DC=class extends _.l{constructor(a){super(a,2)}FA(){return _.Eg(this,_.BC,1,_.Fg())}};_.DC.prototype.wb="U9CFPc";_.vLc=[-2,{},_.Yk,_.rLc];
}catch(e){_._DumpException(e)}
try{
_.jD=class extends _.l{constructor(a){super(a)}imb(){return _.de(this,_.DC,2)}};_.jD.prototype.wb="X2sNs";
}catch(e){_._DumpException(e)}
try{
_.wLc=function(a,b){return _.ug(a,1,b)};_.xLc=class extends _.l{constructor(a){super(a)}getId(){return _.C(this,1)}Vf(){return _.qj(this,1)}getTitle(){return _.mj(this,4,_.sLc)}setTitle(a){return _.Lj(this,4,_.sLc,a)}xd(){return _.ek(this,4,_.sLc)}ym(){return _.C(this,18)}iy(){return _.dk(this,18)}getUrl(){return _.C(this,5)}Xc(){return _.dk(this,5)}getContentType(){return _.Yi(this,7)}O7c(){return _.Ri(this,19,-1)}};_.xLc.prototype.wb="IRVcEb";_.yLc=function(a,b){return _.ug(a,8,b)};
_.zLc=function(a,b){return _.cc(a,_.BC,2,b)};_.ALc=function(a){return _.p(a,_.xLc,13)};_.BLc=_.lc(_.BC);_.CLc=_.lc(_.CC);new _.zh(_.BC);_.yp.XZxcdf=function(a){return _.zp(_.Ap(_.qj(a,2)))};new _.zh(_.DC);_.yp.U9CFPc=_.xp;_.Xq(_.DC,_.BC,function(a){return a.FA()});_.EC=_.dc(444383007,_.Sv,_.CC);_.Tv[444383007]=_.uLc;var DLc=new _.zh(_.CC);DLc.Ua=new _.zh(_.xLc);DLc.Wa=_.EC;_.yp.j0Opre=function(a){return _.zp(_.Ap(a.Vf()))};_.Xq(_.CC,_.BC,function(a){a=a.getImage();return a!=null?[a]:[]});_.Xq(_.CC,_.xLc,function(a){a=_.ALc(a);return a!=null?[a]:[]});_.yp.IRVcEb=function(a){return _.zp(_.Ap(a.Vf()))};
}catch(e){_._DumpException(e)}
try{
_.TXc=function(a){return(0,_.CLc)(a)?a.getId():(0,_.eIb)(a)?a.VY():a.getUniqueId()};
}catch(e){_._DumpException(e)}
try{
_.SXc=_.x("Wn3aEc",[]);
}catch(e){_._DumpException(e)}
try{
_.r("Wn3aEc");
var UXc;UXc=function(a){if((0,_.BLc)(a))return a;if((0,_.eIb)(a)){let c,d;a=(c=a.Da())==null?void 0:(d=c.Aa())==null?void 0:d.getExtension(_.EC);if(!a)return null}let b;return a.getType()===1?(b=a.getImage())!=null?b:null:null};
_.VXc=class extends _.Dh{static Ra(){return{Gf:{Fdc:_.jD}}}constructor(a){super();this.oa=a.Gf.Fdc;this.Aa=_.Je();this.Ba=_.Je();this.results=new Map;a:{if(this.getData("vnora").Hb()){a=_.Zl("WA6vPb",this.Ca());if(a.length===1){a=Number(_.pf(a[0],"count"));break a}a=_.Zl("LgL7He",this.Ca());if(a.length===1){a=Number(_.pf(a[0],"count"));break a}}a=_.zc(this.getData("count"),-1)}this.Da=a}W5(){if(this.Da<0){const a=this.oa?_.p(this.oa,_.DC,2):null;return a?_.Nf(a.FA()):_.Nf([])}return this.Aa.promise}FA(){return this.W5().then(a=>
a.map(UXc).filter(b=>b!=null))}Atc(){return this.Ba.promise}P3d(){return this.Atc().then(a=>{const b=new Map;for(const [c,d]of a){a=c;const e=UXc(d);e&&b.set(a,e)}return b})}Cy(a,b){b&&_.TXc(b)&&this.results.set(a,b);if(--this.Da===0){this.Aa.resolve(Array.from(this.results.entries()).sort((c,d)=>_.gDa(c[0],d[0])).map(c=>c[1]));a=new Map;for(const [c,d]of this.results.entries()){b=c;const e=d;e&&a.set(b,e)}this.Ba.resolve(a)}}};_.bs(_.SXc,_.VXc);
_.v();
}catch(e){_._DumpException(e)}
try{
_.l1s=!!(_.Nh[20]&1);_.m1s=!!(_.Nh[20]&4);_.n1s=!!(_.Nh[20]&8);
}catch(e){_._DumpException(e)}
try{
_.Vur=_.x("Um3BXb",[_.SXc]);
}catch(e){_._DumpException(e)}
try{
_.az=function(a,b=!1,c){var d=a.getRoot().el();_.dg(d,"EormBc",new oWb(a,b,c))};_.pWb=function(a,b=!1,c=!1){a=a.getRoot().el();_.dg(a,"EormBc",{logVisibility:b,hf:c,zD:void 0})};var oWb=class{constructor(a,b,c){this.logVisibility=b;this.zD=c;this.aba=a}};
}catch(e){_._DumpException(e)}
try{
_.r("Um3BXb");
var uGB;_.tGB=function({construct:a}){sGB.push({construct:a})};uGB=_.nc(_.CC);var sGB=[],vGB=class extends _.Lg{static Ra(){return{model:{i6:_.VXc},Gf:{hJc:_.CC}}}constructor(a){super(a.Oa);this.oa=!this.getData("ni").Hb();this.Dy=a.Gf.hJc;if((this.Ba=this.getData("au").Hb())&&this.Dy){var b=(b=this.getRoot().closest(_.Vo("jsname","uK8Ylc")).el())?_.pf(b,"ved"):null;const e=uGB(this.Dy.serialize());if(b&&e&&e.Vi()){var c;(c=e.getImage())!=null&&_.ug(c,5,b)}this.Dy=e}a.model.i6.Cy(this.getRoot().el(),this.Dy);_.az(this);let d;(c=(d=this.Dy)==null?void 0:d.getImage())&&this.trigger("cEfxe",
c==null?void 0:c.getUniqueId());this.oY(a)}Ca(a){var b=a.targetElement.parent();a=_.$l("srrRv",this.getRoot().el());b=_.ms(this,b.eq(0),"YsWoif").el();_.Av([new _.zo(b,"show")],{triggerElement:b,userAction:9});_.ig(b,"BUYwVb");a==null&&_.Cm(b,"display","inline-block")}Da(a){const b=a.targetElement;a=a.targetElement.parent();a=_.ms(this,a.eq(0),"YsWoif").el();_.Av([new _.zo(a,"hide")],{triggerElement:b.eq(0).el(),userAction:9});_.Cm(a,"display","none")}Vc(a){if(this.Dy&&this.Dy.getId()){var b,c;(c=
(b=a.event).preventDefault)==null||c.call(b);var d,e;(e=(d=a.event).stopPropagation)==null||e.call(d);this.trigger("PdWSXe",{qx:a.event});var f;(a=(f=this.Dy)==null?void 0:f.getImage())&&this.trigger("Kc2lDe",a==null?void 0:a.getUniqueId())}}Ye(){this.notify("BUYwVb")}Oe(){this.oa||(_.Av([new _.zo(this.getRoot().el(),"show")]),this.oa=!0)}hidden(){}oY(a){for(const b of sGB)b.construct(this,a)}Aa(){this.notify("BUYwVb");const a=!_.l1s;this.getRoot().setStyle("display",a?"inline-flex":"unset");this.getRoot().removeAttr("aria-hidden");
this.Oe()}};_.H(vGB.prototype,"bNsLWe",function(){return this.Aa});_.H(vGB.prototype,"L6cTce",function(){return this.hidden});_.H(vGB.prototype,"TSZdd",function(){return this.Oe});_.H(vGB.prototype,"AwdEqd",function(){return this.Ye});_.H(vGB.prototype,"h5M12e",function(){return this.Vc});_.H(vGB.prototype,"XEuVS",function(){return this.Da});_.H(vGB.prototype,"RrAr1",function(){return this.Ca});_.O(_.Vur,vGB);
var wGB=function(a,b,c,d){const e=a.Xa("tdeeNb");e.isEmpty()||(d=new _.mo(_.Zn(d.url)),c=d.get("imgrc")===c&&!d.get("imgdii")||d.get("vhid")===c,c||(a=a.getRoot(),e.hasClass("srrRv")&&(d=e.prev(),b.mjd(a,d))),e.toggleClass("srrRv",c))},yGB=function(a,b){if(!a.closest(g=>xGB.some(h=>g.classList.contains(h))).isEmpty()){var c=a.el().getBoundingClientRect();a=a.parent();a.hasClass("dECn0b")&&(a=a.closest(".T62xob"));var d=a.el().getBoundingClientRect();a=c.top===d.top;var e=Math.abs(d.bottom-c.bottom)<
8,f=Math.abs(d.left-c.left)<8;c=Math.abs(d.right-c.right)<8;b.toggleClass("Xn9Tkc",a&&f);b.toggleClass("oGwWse",a&&c);b.toggleClass("y0jvId",e&&c);b.toggleClass("lM9tvf",e&&f)}},xGB=["DhGrzc","l5X1Ye","o6uAG","OXEsB","T62xob"];
_.tGB({construct(a){const b=_.ql(a.getData("docid"));b&&_.Mg(a,{service:{jGb:_.YC,focus:_.qGB}}).then(f=>{const g=f.service.focus;f=f.service.jGb;f.addListener(h=>{wGB(a,g,b,h)});wGB(a,g,b,f.getState())},f=>void _.se(f));const c=a.getRoot();_.Zf(c.el(),"qWWJ8e",()=>{yGB(c,a.Xa("tdeeNb"))});yGB(c,a.Xa("tdeeNb"));let d=null;const e=a.Xa("qQjpJ").el();e&&(e.addEventListener("mouseenter",()=>{d===null&&(d=(0,_.Fo)(()=>{c.toggleClass("dB3j8",!0);d=null},50))}),e.addEventListener("mouseleave",()=>{d&&((0,_.Go)(d),
d=null);c.toggleClass("dB3j8",!1)}))}});
_.v();
}catch(e){_._DumpException(e)}
try{
_.pLc[53]=[0,_.aIb];
}catch(e){_._DumpException(e)}
try{
_.nJb={};
}catch(e){_._DumpException(e)}
try{
_.ow=function(a,b){return _.Hh(a,1,_.Uv,b)};_.YJb={};_.YJb[13]=_.WHb;
}catch(e){_._DumpException(e)}
try{
_.r("A7ULAd");
var cYc;_.YXc=function(a){let b,c;return(b=a.Da())==null?void 0:(c=b.Aa())==null?void 0:c.Kf(_.EC)};
_.aYc=function(a){if((0,_.eIb)(a))return a;if(ZXc(a)){var b;var c=(b=a.Aa())==null?void 0:b.Kf(_.EC)}else{if((0,_.BLc)(a)){let h;c=_.zLc(_.yLc(new _.CC,(h=a.getUniqueId())!=null?h:"").setType(1),a)}else c=a;a=_.bw(new _.Uv,(new _.Sv).oa(_.EC,c))}var d;if((d=c)==null?0:d.hasExtension($Xc))return c.Kf($Xc).Em();d=_.Zv(new _.$v,a);let e;b=(e=c)==null?void 0:e.getId();b!=null&&_.dw(d,b);let f,g;c=(f=c)==null?void 0:(g=f.getImage())==null?void 0:_.qj(g,5);c!=null&&d.Ca(c);return d};
_.bYc=function(a,b){return _.Nj(a,3,b)};cYc=class extends _.l{constructor(a){super(a)}Em(){return _.p(this,_.$v,1)}};cYc.prototype.wb="JAZN7b";var $Xc=_.dc(53,_.CC,cYc),ZXc=_.lc(_.Uv);
_.v();
}catch(e){_._DumpException(e)}
try{
_.rYc=class extends _.l{constructor(a){super(a)}zv(){return _.B(this,4)}Dmb(){return _.Yi(this,6,1)}};
}catch(e){_._DumpException(e)}
try{
_.oYc=function(a,b){return _.Nj(a,1,b)};_.pYc=class extends _.l{constructor(a){super(a)}};_.qYc=function(a,b){return _.cc(a,_.pYc,15,b)};
}catch(e){_._DumpException(e)}
try{
_.dYc=function(a,b){return _.Gh(a,2,b)};_.eYc=function(a,b){return _.Gh(a,3,b)};_.fYc=function(a,b){return _.ug(a,2,b)};var gYc=[0,_.F,_.E];var hYc=[0,_.F,_.Tk,_.Jk,_.F];var iYc=[0,_.F,-1];_.jYc=function(a,b){return _.ug(a,3,b)};_.kYc=function(a,b){return _.ug(a,4,b)};_.lYc=function(a,b){return _.ug(a,13,b)};_.mYc=function(a,b){return _.ug(a,18,b)};_.nYc=class extends _.l{constructor(a){super(a,37)}TU(){return _.C(this,3)}oE(){return _.C(this,4)}xf(){return _.C(this,5)}ow(){return _.dk(this,5)}Gw(){return _.C(this,11)}RK(){return _.C(this,13)}Y6a(){return _.C(this,18)}Jn(){return _.C(this,31)}};_.nYc.prototype.wb="onFC6b";_.kD=_.dc(2003,_.BC,_.nYc);_.lLc[2003]=[-37,{},_.F,-4,_.E,1,_.F,1,_.E,_.F,_.E,_.F,4,_.F,hYc,1,gYc,1,_.E,1,_.E,2,_.E,_.F,1,_.F,iYc,1,_.F,_.gp,_.E];
}catch(e){_._DumpException(e)}
try{
_.r("cNgdQc");
var sYc,wYc;
_.uYc=function(a){if(a=_.YXc(a)){var b=a.getImage(),c;const g=b==null?void 0:(c=b.getExtension(_.kD))==null?void 0:c.TU();var d;g&&((d=_.Yn(g))==null?0:d.match(/\.gstatic\.com$/))&&_.AGa(g)==="/licensed-image"&&(b==null||_.oYc(b,18));switch(b==null?void 0:_.Qi(b,1)){case 16:c=new _.rYc;c=_.Eh(c,5,!0);c=_.Nj(c,6,2);c=_.cc(a,_.rYc,22,c);d=sYc();d=_.Eh(d,5,!0);_.qYc(c,d);break;case 9:case 19:_.qYc(a,sYc());break;case 18:_.qYc(a,_.Nj(_.Nj(_.Nj(new _.pYc,4,2),1,2),2,2));break;case 20:_.qYc(a,_.Nj(_.Nj(new _.pYc,
2,2),1,2))}var e,f;c=(f=b==null?void 0:_.B(b,9))!=null?f:!1;f=(b==null?void 0:_.Yi(b,1))===18;!c&&!f&&(b==null?void 0:(e=b.Kf(tYc))==null?void 0:_.uj(e,1))!==!0||_.bYc(_.wi(a,_.pYc,15),2)}};_.vYc=function(a){var b;if(a=(b=_.YXc(a))==null?void 0:b.getImage())a.oa(_.kD,a.Kf(_.kD)||new _.nYc),b=a.getExtension(_.kD),b.RK()||_.lYc(b,b.Y6a()||_.Yn(b.TU()||""))};sYc=function(){var a=_.Nj(_.bYc(_.Nj(new _.pYc,2,2),2),4,2);a=_.Nj(a,7,2);return _.Nj(a,8,2)};wYc=class extends _.l{constructor(a){super(a)}};
wYc.prototype.wb="LMXOyf";var tYc=_.dc(2009,_.BC,wYc);_.lLc[2009]=[0,_.E];
_.v();
}catch(e){_._DumpException(e)}
try{
_.r("K02r3e");

_.v();
}catch(e){_._DumpException(e)}
try{
_.mpn=_.x("qKrDxc",[_.Ar,_.hr,_.or,_.lr,_.Ov]);
}catch(e){_._DumpException(e)}
try{
var a_c;
_.b_c=function(a,b,c,d,e){var f=(a==null?void 0:a.La())||"";if(!f){var g,h,k;if(a=(h=(g=a.Da())==null?void 0:g.Aa())==null?void 0:(k=h.Kf(_.EC))==null?void 0:k.getImage()){f=a;a=(0,_.CLc)(f)?f.getImage():f;g=(f=a.Kf(_.kD))&&_.wg(f,2);h=f&&_.wg(f,3);k=_.wg(a,2);var m=a.FW();a=m?_.wg(m,1):"";const n=m?_.Oi(m,3):"";m=m?_.Oi(m,2):"";if(!g||!h||!k)throw Error("Gh");b=new Map([["q",b],["imgurl",a],["imgrefurl",h],["docid",g],["tbnid",k],["vet",1],["w",n],["h",m],["hcb","2"]]);_.B(f,10)&&b.set("itg",1);
c&&(b.set("ved",c),d&&b.set("ictx",d),e&&b.set("vet",e));f=_.Td(a_c,b)}}return f};a_c=(0,_.Sd)`/imgres`;
}catch(e){_._DumpException(e)}
try{
_.r("qKrDxc");
var npn=function(a){const b=(new _.uu).Bs(7),c=a.getId(),d=new _.Uv;_.Xv(d).oa(_.EC,a);a=_.Zv(_.dw(_.cw(new _.$v,b),c),d);_.uYc(a);_.vYc(a);return a};var opn=function(a,b,c){_.A(function*(){var d=yield a.Em();const e=_.C(d,5);var f=a.Ca(c),g=e&&_.cRa(e)||void 0;(d=_.b_c(d,_.oo(new _.fo(a.nj.getCurrentUrl()),"q")||"",e,f,g))&&(d=_.Yc(d.toString()))&&_.cd(b,d)})},ppn=class extends _.Rv{static Ra(){return{jsdata:{Dy:_.CC},service:{history:_.YC,navigation:_.FC,focus:_.FA,Hc:_.Lu}}}constructor(a){super(a.Oa);this.Da=!1;this.Ba=b=>{const c=this.getRoot();if(c.el()){var d=_.ql(this.getData("docid"));c.toggleClass("loWRed",d!==null&&b.detail.vhid===d)}};
this.oa=()=>{const b=this.getRoot();b.el()&&b.hasClass("loWRed")&&(b.removeClass("loWRed"),_.AA(this.kf,b,{preventScroll:!0}))};_.Qv(this,npn(a.jsdata.Dy));this.nj=a.service.history;this.yc=a.service.navigation;this.kf=a.service.focus;this.Xb=a.service.Hc;this.logger=null;_.UA&&(document.addEventListener("viewerUpdated",this.Ba),document.addEventListener("viewerClosed",this.oa),this.addOnDisposeCallback(()=>{document.removeEventListener("viewerUpdated",this.Ba);document.removeEventListener("viewerClosed",
this.oa)}))}Ea(a){if(this.Da)return!0;let b=a.targetElement.el();for(let c=0;c<10&&b;c++,b=b.parentElement){let d;if(((d=b)==null?void 0:d.tagName)==="A"){opn(this,b,a);this.Da=!0;break}}return!0}Vc(a){this.trigger("yu1Hm");return super.Vc(a)}Ga(a){this.Vc(a);return null}Na(a){a=a.targetElement.el();if(!a)return null;var b=a.getAttribute("href");if(!b)return null;b=_.Yc(b);if(!b)return null;this.yc.navigateTo(b);this.Xb.logEvent({Ne:_.ah(a)});return null}};_.H(ppn.prototype,"WZxsNc",function(){return this.Na});
_.H(ppn.prototype,"Esn7Cd",function(){return this.Ga});_.H(ppn.prototype,"h5M12e",function(){return this.Vc});_.H(ppn.prototype,"UI3Kjd",function(){return this.Ea});_.O(_.mpn,ppn);
_.v();
}catch(e){_._DumpException(e)}
try{
_.Wur=_.x("N8Q1ib",[]);
}catch(e){_._DumpException(e)}
try{
_.r("N8Q1ib");
var zGB=class extends _.Lg{constructor(a){super(a.Oa)}Vc(a){let b,c;(c=(b=a.event).stopPropagation)==null||c.call(b)}};_.H(zGB.prototype,"h5M12e",function(){return this.Vc});_.O(_.Wur,zGB);
_.v();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
