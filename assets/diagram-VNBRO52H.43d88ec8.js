var F=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(t,e,a)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))z.call(e,a)&&C(t,a,e[a]);if(x)for(var a of x(e))P.call(e,a)&&C(t,a,e[a]);return t};import{p as W}from"./chunk-4BMEZGHF.4c830671.js";import{F as T,s as D,g as E,o as _,p as A,b as N,c as L,_ as s,l as $,G as y,H as Y,v as G,aE as H,k as I}from"./index.ca5ae86b.js";import{p as M}from"./mermaid-parser.core.97ddb86b.js";import"./_basePickBy.36c6cb08.js";import"./_baseUniq.c385a8a6.js";import"./clone.36ab6824.js";var w={packet:[]},v=structuredClone(w),O=T.packet,K=s(()=>{const t=y(m(m({},O),Y().packet));return t.showBits&&(t.paddingY+=10),t},"getConfig"),R=s(()=>v.packet,"getPacket"),U=s(t=>{t.length>0&&v.packet.push(t)},"pushWord"),X=s(()=>{G(),v=structuredClone(w)},"clear"),h={pushWord:U,getPacket:R,getConfig:K,clear:X,setAccTitle:D,getAccTitle:E,setDiagramTitle:_,getDiagramTitle:A,getAccDescription:N,setAccDescription:L},j=1e4,q=s(t=>{W(t,h);let e=-1,a=[],n=1;const{bitsPerRow:i}=h.getConfig();for(let{start:o,end:r,label:p}of t.blocks){if(r&&r<o)throw new Error(`Packet block ${o} - ${r} is invalid. End must be greater than start.`);if(o!==e+1)throw new Error(`Packet block ${o} - ${r!=null?r:o} is not contiguous. It should start from ${e+1}.`);for(e=r!=null?r:o,$.debug(`Packet block ${o} - ${e} with label ${p}`);a.length<=i+1&&h.getPacket().length<j;){const[b,c]=J({start:o,end:r,label:p},n,i);if(a.push(b),b.end+1===n*i&&(h.pushWord(a),a=[],n++),!c)break;({start:o,end:r,label:p}=c)}}h.pushWord(a)},"populate"),J=s((t,e,a)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]},"getNextFittingBlock"),Q={parse:s(async t=>{const e=await M("packet",t);$.debug(e),q(e)},"parse")},V=s((t,e,a,n)=>{const i=n.db,o=i.getConfig(),{rowHeight:r,paddingY:p,bitWidth:b,bitsPerRow:c}=o,u=i.getPacket(),l=i.getDiagramTitle(),g=r+p,d=g*(u.length+1)-(l?0:r),k=b*c+2,f=H(e);f.attr("viewbox",`0 0 ${k} ${d}`),I(f,d,k,o.useMaxWidth);for(const[B,S]of u.entries())Z(f,S,B,o);f.append("text").text(l).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),Z=s((t,e,a,{rowHeight:n,paddingX:i,paddingY:o,bitWidth:r,bitsPerRow:p,showBits:b})=>{const c=t.append("g"),u=a*(n+o)+o;for(const l of e){const g=l.start%p*r+1,d=(l.end-l.start+1)*r-i;if(c.append("rect").attr("x",g).attr("y",u).attr("width",d).attr("height",n).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",u+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!b)continue;const k=l.end===l.start,f=u-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(l.start),k||c.append("text").attr("x",g+d).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),tt={draw:V},et={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},at=s(({packet:t}={})=>{const e=y(et,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),dt={parser:Q,db:h,renderer:tt,styles:at};export{dt as diagram};
