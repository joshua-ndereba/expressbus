"use strict";loaded_1_23(function(_){var window=this;
_.p("MMTTmd");
var Kzf=function(){_.Ip.call(this);this.oa=[];this.Aa=new Map};_.F(Kzf,_.Dh);Kzf.Ka=_.Dh.Ka;var Lzf=function(a){var b=a.oa[0];return b===void 0?"default":_.Zb(a.Aa.get(b)).A5a};Kzf.prototype.Ea=function(a){var b=this,c=Symbol();this.Aa.set(c,a);var d=!1;return{dispose:function(){Mzf(b,c);b.Aa.delete(c);d=!0},isDisposed:function(){return d},enable:function(){return void Nzf(b,c)},disable:function(){return void Mzf(b,c)}}};
var Nzf=function(a,b){Ozf(a,function(){if(!a.oa.includes(b))if(a.oa.length>0){for(var c=0,d=a.Aa.get(b).priority;c<a.oa.length&&a.Aa.get(a.oa[c]).priority>d;)c++;a.oa.splice(c,0,b)}else a.oa.push(b)})},Mzf=function(a,b){Ozf(a,function(){a.oa.includes(b)&&a.oa.splice(a.oa.indexOf(b),1)})},Ozf=function(a,b){var c=Lzf(a);b();b=Lzf(a);b!==c&&a.notify("ABrhTe",b)};Kzf.prototype.Ga=function(a){this.notify("jBk1Xb",a)};_.yu(_.Yib,Kzf);
_.q();
});
// Google Inc.
