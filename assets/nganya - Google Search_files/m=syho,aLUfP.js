this._s=this._s||{};(function(_){var window=this;
try{
_.pyb=class{constructor(a){this.Qj=a}};
}catch(e){_._DumpException(e)}
try{
_.r("aLUfP");
var ryb;_.qyb=!1;ryb=function(){return _.ta()&&_.me.tI()&&!navigator.userAgent.includes("GSA")};
_.So(_.TUa,class extends _.Qo{static Ra(){return{service:{window:_.Ro}}}constructor(a){super();this.window=a.service.window.get();this.Ba=this.Qj();this.Aa=window.orientation;this.oa=()=>{const b=this.Qj();var c=this.mQb()&&Math.abs(window.orientation)===90&&this.Aa===-1*window.orientation;this.Aa=window.orientation;if(b!==this.Ba||c){this.Ba=b;for(const d of this.listeners){c=new _.pyb(b);try{d(c)}catch(e){_.ea(e)}}}};this.listeners=new Set;this.window.addEventListener("resize",this.oa);this.mQb()&&
this.window.addEventListener("orientationchange",this.oa)}addListener(a){this.listeners.add(a)}removeListener(a){this.listeners.delete(a)}Qj(){if(ryb()){var a=_.cm(this.window);a=new _.Ll(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.Fc()||(_.ta()?ryb():this.window.visualViewport)?_.cm(this.window):new _.Ll(this.window.innerWidth,this.window.innerHeight);return a.height<a.width}destroy(){this.window.removeEventListener("resize",this.oa);this.window.removeEventListener("orientationchange",
this.oa)}Fc(){return _.qyb}mQb(){return"orientation"in window}});
_.qyb=!0;
_.v();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
