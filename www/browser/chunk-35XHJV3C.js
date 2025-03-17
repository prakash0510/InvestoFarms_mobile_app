import{Aa as x,Ca as j,Da as O,Db as K,Ea as a,Fa as S,G as A,H as nt,Ha as d,I as ot,J as T,K as C,La as u,Lb as ht,Ma as p,N as rt,Na as E,Oa as z,Pa as $,Qa as G,R as k,S as V,Sa as ut,Ta as F,Ua as l,W as H,_ as L,a as c,b as y,ca as w,cb as m,eb as g,f,ja as at,ka as Z,na as r,oa as lt,ra as v,wa as q,xa as ct,zb as U}from"./chunk-KA72SDAD.js";var b=function(i){return i[i.State=0]="State",i[i.Transition=1]="Transition",i[i.Sequence=2]="Sequence",i[i.Group=3]="Group",i[i.Animate=4]="Animate",i[i.Keyframes=5]="Keyframes",i[i.Style=6]="Style",i[i.Trigger=7]="Trigger",i[i.Reference=8]="Reference",i[i.AnimateChild=9]="AnimateChild",i[i.AnimateRef=10]="AnimateRef",i[i.Query=11]="Query",i[i.Stagger=12]="Stagger",i}(b||{});function dt(i,n){return{type:b.Trigger,name:i,definitions:n,options:{}}}function Q(i,n=null){return{type:b.Animate,styles:n,timings:i}}function N(i){return{type:b.Style,styles:i,offset:null}}function M(i,n,t){return{type:b.State,name:i,styles:n,options:t}}function Y(i,n,t=null){return{type:b.Transition,expr:i,animation:n,options:t}}var pt=["toast-component",""];function Tt(i,n){if(i&1){let t=G();u(0,"button",5),F("click",function(){k(t);let s=l();return V(s.remove())}),u(1,"span",6),m(2,"\xD7"),p()()}}function Ct(i,n){if(i&1&&(z(0),m(1),$()),i&2){let t=l(2);r(),g("[",t.duplicatesCount+1,"]")}}function bt(i,n){if(i&1&&(u(0,"div"),m(1),x(2,Ct,2,1,"ng-container",4),p()),i&2){let t=l();d(t.options.titleClass),O("aria-label",t.title),r(),g(" ",t.title," "),r(),a("ngIf",t.duplicatesCount)}}function Dt(i,n){if(i&1&&E(0,"div",7),i&2){let t=l();d(t.options.messageClass),a("innerHTML",t.message,Z)}}function It(i,n){if(i&1&&(u(0,"div",8),m(1),p()),i&2){let t=l();d(t.options.messageClass),O("aria-label",t.message),r(),g(" ",t.message," ")}}function wt(i,n){if(i&1&&(u(0,"div"),E(1,"div",9),p()),i&2){let t=l();r(),S("width",t.width()+"%")}}function xt(i,n){if(i&1){let t=G();u(0,"button",5),F("click",function(){k(t);let s=l();return V(s.remove())}),u(1,"span",6),m(2,"\xD7"),p()()}}function Ot(i,n){if(i&1&&(z(0),m(1),$()),i&2){let t=l(2);r(),g("[",t.duplicatesCount+1,"]")}}function St(i,n){if(i&1&&(u(0,"div"),m(1),x(2,Ot,2,1,"ng-container",4),p()),i&2){let t=l();d(t.options.titleClass),O("aria-label",t.title),r(),g(" ",t.title," "),r(),a("ngIf",t.duplicatesCount)}}function Et(i,n){if(i&1&&E(0,"div",7),i&2){let t=l();d(t.options.messageClass),a("innerHTML",t.message,Z)}}function Ft(i,n){if(i&1&&(u(0,"div",8),m(1),p()),i&2){let t=l();d(t.options.messageClass),O("aria-label",t.message),r(),g(" ",t.message," ")}}function Rt(i,n){if(i&1&&(u(0,"div"),E(1,"div",9),p()),i&2){let t=l();r(),S("width",t.width()+"%")}}var J=class{_attachedHost;component;viewContainerRef;injector;constructor(n,t){this.component=n,this.injector=t}attach(n,t){return this._attachedHost=n,n.attach(this,t)}detach(){let n=this._attachedHost;if(n)return this._attachedHost=void 0,n.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},W=class{_attachedPortal;_disposeFn;attach(n,t){return this._attachedPortal=n,this.attachComponentPortal(n,t)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(n){this._disposeFn=n}},X=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new f;_activate=new f;_manualClose=new f;_resetTimeout=new f;_countDuplicate=new f;constructor(n){this._overlayRef=n}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(n,t){n&&this._resetTimeout.next(),t&&this._countDuplicate.next(++this.duplicatesCount)}},D=class{toastId;config;message;title;toastType;toastRef;_onTap=new f;_onAction=new f;constructor(n,t,e,s,o,h){this.toastId=n,this.config=t,this.message=e,this.title=s,this.toastType=o,this.toastRef=h,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(n){this._onAction.next(n)}onAction(){return this._onAction.asObservable()}},mt={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},ft=new ot("ToastConfig"),tt=class extends W{_hostDomElement;_componentFactoryResolver;_appRef;constructor(n,t,e){super(),this._hostDomElement=n,this._componentFactoryResolver=t,this._appRef=e}attachComponentPortal(n,t){let e=this._componentFactoryResolver.resolveComponentFactory(n.component),s;return s=e.create(n.injector),this._appRef.attachView(s.hostView),this.setDisposeFn(()=>{this._appRef.detachView(s.hostView),s.destroy()}),t?this._hostDomElement.insertBefore(this._getComponentRootNode(s),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(s)),s}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},At=(()=>{class i{_document=C(U);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=this._document.createElement("div");t.classList.add("overlay-container"),t.setAttribute("aria-live","polite"),this._document.body.appendChild(t),this._containerElement=t}static \u0275fac=function(e){return new(e||i)};static \u0275prov=A({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),et=class{_portalHost;constructor(n){this._portalHost=n}attach(n,t=!0){return this._portalHost.attach(n,t)}detach(){return this._portalHost.detach()}},Ht=(()=>{class i{_overlayContainer=C(At);_componentFactoryResolver=C(lt);_appRef=C(j);_document=C(U);_paneElements=new Map;create(t,e){return this._createOverlayRef(this.getPaneElement(t,e))}getPaneElement(t="",e){return this._paneElements.get(e)||this._paneElements.set(e,{}),this._paneElements.get(e)[t]||(this._paneElements.get(e)[t]=this._createPaneElement(t,e)),this._paneElements.get(e)[t]}_createPaneElement(t,e){let s=this._document.createElement("div");return s.id="toast-container",s.classList.add(t),s.classList.add("toast-container"),e?e.getContainerElement().appendChild(s):this._overlayContainer.getContainerElement().appendChild(s),s}_createPortalHost(t){return new tt(t,this._componentFactoryResolver,this._appRef)}_createOverlayRef(t){return new et(this._createPortalHost(t))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=A({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),_t=(()=>{class i{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(t,e,s,o,h){this.overlay=e,this._injector=s,this.sanitizer=o,this.ngZone=h,this.toastrConfig=c(c({},t.default),t.config),t.config.iconClasses&&(this.toastrConfig.iconClasses=c(c({},t.default.iconClasses),t.config.iconClasses))}show(t,e,s={},o=""){return this._preBuildNotification(o,t,e,this.applyConfig(s))}success(t,e,s={}){let o=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(o,t,e,this.applyConfig(s))}error(t,e,s={}){let o=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(o,t,e,this.applyConfig(s))}info(t,e,s={}){let o=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(o,t,e,this.applyConfig(s))}warning(t,e,s={}){let o=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(o,t,e,this.applyConfig(s))}clear(t){for(let e of this.toasts)if(t!==void 0){if(e.toastId===t){e.toastRef.manualClose();return}}else e.toastRef.manualClose()}remove(t){let e=this._findToast(t);if(!e||(e.activeToast.toastRef.close(),this.toasts.splice(e.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let s=this.toasts[this.currentlyActive].toastRef;s.isInactive()||(this.currentlyActive=this.currentlyActive+1,s.activate())}return!0}findDuplicate(t="",e="",s,o){let{includeTitleDuplicates:h}=this.toastrConfig;for(let _ of this.toasts){let R=h&&_.title===t;if((!h||R)&&_.message===e)return _.toastRef.onDuplicate(s,o),_}return null}applyConfig(t={}){return c(c({},this.toastrConfig),t)}_findToast(t){for(let e=0;e<this.toasts.length;e++)if(this.toasts[e].toastId===t)return{index:e,activeToast:this.toasts[e]};return null}_preBuildNotification(t,e,s,o){return o.onActivateTick?this.ngZone.run(()=>this._buildNotification(t,e,s,o)):this._buildNotification(t,e,s,o)}_buildNotification(t,e,s,o){if(!o.toastComponent)throw new Error("toastComponent required");let h=this.findDuplicate(s,e,this.toastrConfig.resetTimeoutOnDuplicate&&o.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&s||e)&&this.toastrConfig.preventDuplicates&&h!==null)return h;this.previousToastMessage=e;let _=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(_=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let R=this.overlay.create(o.positionClass,this.overlayContainer);this.index=this.index+1;let it=e;e&&o.enableHtml&&(it=this.sanitizer.sanitize(at.HTML,e));let I=new X(R),P=new D(this.index,o,it,s,t,I),vt=[{provide:D,useValue:P}],gt=H.create({providers:vt,parent:this._injector}),yt=new J(o.toastComponent,gt),st=R.attach(yt,o.newestOnTop);I.componentInstance=st.instance;let B={toastId:this.index,title:s||"",message:e||"",toastRef:I,onShown:I.afterActivate(),onHidden:I.afterClosed(),onTap:P.onTap(),onAction:P.onAction(),portal:st};return _||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{B.toastRef.activate()})),this.toasts.push(B),B}static \u0275fac=function(e){return new(e||i)(T(ft),T(Ht),T(H),T(ht),T(L))};static \u0275prov=A({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),jt=(()=>{class i{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=w(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,s){this.toastrService=t,this.toastPackage=e,this.ngZone=s,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o}),this.state=w({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(t=>y(c({},t),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(s=>100-s),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(t=>y(c({},t),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(t=>y(c({},t),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(t),e)):this.timeout=setTimeout(()=>t(),e)}outsideInterval(t,e){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(t),e)):this.intervalId=setInterval(()=>t(),e)}runInsideAngular(t){this.ngZone?this.ngZone.run(()=>t()):t()}static \u0275fac=function(e){return new(e||i)(v(_t),v(D),v(L))};static \u0275cmp=q({type:i,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(e,s){e&1&&F("click",function(){return s.tapToast()})("mouseenter",function(){return s.stickAround()})("mouseleave",function(){return s.delayedHideToast()}),e&2&&(ut("@flyInOut",s._state),d(s.toastClasses),S("display",s.displayStyle))},attrs:pt,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,s){e&1&&x(0,Tt,3,0,"button",0)(1,bt,3,5,"div",1)(2,Dt,1,3,"div",2)(3,It,2,4,"div",3)(4,wt,2,2,"div",4),e&2&&(a("ngIf",s.options.closeButton),r(),a("ngIf",s.title),r(),a("ngIf",s.message&&s.options.enableHtml),r(),a("ngIf",s.message&&!s.options.enableHtml),r(),a("ngIf",s.options.progressBar))},dependencies:[K],encapsulation:2,data:{animation:[dt("flyInOut",[M("inactive",N({opacity:0})),M("active",N({opacity:1})),M("removed",N({opacity:0})),Y("inactive => active",Q("{{ easeTime }}ms {{ easing }}")),Y("active => removed",Q("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return i})(),Nt=y(c({},mt),{toastComponent:jt}),Mt=(i={})=>rt([{provide:ft,useValue:{default:Nt,config:i}}]),ee=(()=>{class i{static forRoot(t={}){return{ngModule:i,providers:[Mt(t)]}}static \u0275fac=function(e){return new(e||i)};static \u0275mod=ct({type:i});static \u0275inj=nt({})}return i})();var Pt=(()=>{class i{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=w(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=w("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(t,e,s){this.toastrService=t,this.toastPackage=e,this.appRef=s,this.message=e.message,this.title=e.title,this.options=e.config,this.originalTimeout=e.config.timeOut,this.toastClasses=`${e.toastType} ${e.config.toastClass}`,this.sub=e.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=e.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=e.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=e.toastRef.countDuplicate().subscribe(o=>{this.duplicatesCount=o})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let t=new Date().getTime(),e=this.hideTime-t;this.width.set(e/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(s=>100-s),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(e){return new(e||i)(v(_t),v(D),v(j))};static \u0275cmp=q({type:i,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(e,s){e&1&&F("click",function(){return s.tapToast()})("mouseenter",function(){return s.stickAround()})("mouseleave",function(){return s.delayedHideToast()}),e&2&&(d(s.toastClasses),S("display",s.displayStyle))},attrs:pt,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(e,s){e&1&&x(0,xt,3,0,"button",0)(1,St,3,5,"div",1)(2,Et,1,3,"div",2)(3,Ft,2,4,"div",3)(4,Rt,2,2,"div",4),e&2&&(a("ngIf",s.options.closeButton),r(),a("ngIf",s.title),r(),a("ngIf",s.message&&s.options.enableHtml),r(),a("ngIf",s.message&&!s.options.enableHtml),r(),a("ngIf",s.options.progressBar))},dependencies:[K],encapsulation:2,changeDetection:0})}return i})(),ie=y(c({},mt),{toastComponent:Pt});export{_t as a,ee as b};
