"use strict";(self.webpackChunkheroesApp=self.webpackChunkheroesApp||[]).push([[923],{6923:(R,u,s)=>{s.r(u),s.d(u,{DashboardModule:()=>B});var i=s(6814),c=s(8642),e=s(5879),g=s(1088),A=s(7398),H=s(940),d=s(9862);let x=(()=>{var t;class a{constructor(){this._http=(0,e.f3M)(d.eN),this._router=(0,e.f3M)(c.F0)}login(){this._router.navigateByUrl("dashboard")}logout(){localStorage.clear(),this._router.navigateByUrl("auth")}}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),a})();var h=s(2296),f=s(617),v=s(5665),m=s(9225),Z=s(1274);function y(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"button",9),e.NdJ("click",function(){e.CHM(o),e.oxw();const r=e.MAs(2);return e.KtG(r.toggle())}),e.TgZ(1,"mat-icon",10),e._uU(2,"menu"),e.qZA()()}}function U(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"div")(1,"a",13),e.NdJ("click",function(){e.CHM(o),e.oxw(2);const r=e.MAs(2);return e.KtG(r.toggle())}),e.TgZ(2,"div",14)(3,"mat-icon",15),e._uU(4),e.qZA(),e.TgZ(5,"div"),e._uU(6),e.qZA()()()()}if(2&t){const o=a.$implicit;e.xp6(1),e.Q6J("routerLink",o.url),e.xp6(3),e.Oqu(o.icon),e.xp6(2),e.hij(" ",o.label," ")}}function M(t,a){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,U,7,3,"div",12),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",o.menuItems)}}function P(t,a){if(1&t&&(e.TgZ(0,"div")(1,"a",16)(2,"div",14)(3,"mat-icon",15),e._uU(4),e.qZA(),e.TgZ(5,"div"),e._uU(6),e.qZA()()()()),2&t){const o=a.$implicit;e.xp6(1),e.Q6J("routerLink",o.url),e.xp6(3),e.Oqu(o.icon),e.xp6(2),e.hij(" ",o.label," ")}}function L(t,a){if(1&t&&e.YNc(0,P,7,3,"div",12),2&t){const o=e.oxw();e.Q6J("ngForOf",o.menuItems)}}function O(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(o),e.oxw();const r=e.MAs(2);return e.KtG(r.toggle())}),e.TgZ(1,"mat-icon",10),e._uU(2,"menu"),e.qZA()()}}let F=(()=>{var t;class a{constructor(){this._breakpointObserver=(0,e.f3M)(g.Yg),this._authService=(0,e.f3M)(x),this.isHandset$=this._breakpointObserver.observe(g.u3.Handset).pipe((0,A.U)(n=>n.matches),(0,H.d)()),this.menuItems=[{label:"Listado de h\xe9roes",icon:"label",url:"./heroes-list"},{label:"A\xf1adir h\xe9roe",icon:"add",url:"./hero-add"},{label:"Buscar h\xe9roe",icon:"search",url:"./hero-search"}]}logout(){this._authService.logout()}}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dashboard"]],decls:29,vars:19,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["drawer",""],[1,"spacerToolbar"],["mat-icon-button","",3,"click",4,"ngIf"],[4,"ngIf","ngIfElse"],["desktop",""],["color","primary"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click",4,"ngIf"],["mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"],[1,"container"],[4,"ngFor","ngForOf"],["mat-list-item","","routerLinkActive","active",3,"routerLink","click"],[1,"flex","flex-row","justify-content-start"],[1,"mr-2"],["mat-list-item","","routerLinkActive","active",3,"routerLink"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"]],template:function(n,r){if(1&n&&(e.TgZ(0,"mat-sidenav-container",0)(1,"mat-sidenav",1,2),e.ALo(3,"async"),e.ALo(4,"async"),e.ALo(5,"async"),e.TgZ(6,"mat-toolbar")(7,"span"),e._uU(8," Menu "),e.qZA(),e._UZ(9,"span",3),e.YNc(10,y,3,0,"button",4),e.ALo(11,"async"),e.qZA(),e.TgZ(12,"mat-nav-list"),e.YNc(13,M,2,1,"div",5),e.ALo(14,"async"),e.YNc(15,L,1,1,"ng-template",null,6,e.W1O),e.qZA()(),e.TgZ(17,"mat-sidenav-content")(18,"mat-toolbar",7),e.YNc(19,O,3,0,"button",8),e.ALo(20,"async"),e.TgZ(21,"span"),e._uU(22,"Heroes App"),e.qZA(),e._UZ(23,"span",3),e.TgZ(24,"button",9),e.NdJ("click",function(){return r.logout()}),e.TgZ(25,"mat-icon",10),e._uU(26,"logout"),e.qZA()()(),e.TgZ(27,"div",11),e._UZ(28,"router-outlet"),e.qZA()()()),2&n){const p=e.MAs(16);e.xp6(1),e.Q6J("mode",e.lcZ(4,9,r.isHandset$)?"over":"side")("opened",!1===e.lcZ(5,11,r.isHandset$)),e.uIk("role",e.lcZ(3,7,r.isHandset$)?"dialog":"navigation"),e.xp6(9),e.Q6J("ngIf",e.lcZ(11,13,r.isHandset$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(14,15,r.isHandset$))("ngIfElse",p),e.xp6(6),e.Q6J("ngIf",e.lcZ(20,17,r.isHandset$))}},dependencies:[i.sg,i.O5,c.lC,c.rH,c.Od,h.RK,f.Hw,v.Hk,v.Tg,m.JX,m.TM,m.Rh,Z.Ye,i.Ov],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:2}.active[_ngcontent-%COMP%]{background-color:#3f51b56b}"]}),a})(),_=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-hero-add-page"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1,"hero-add-page works!"),e.qZA())}}),a})(),I=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-hero-search-page"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1,"hero-search-page works!"),e.qZA())}}),a})();var C=s(6306),b=s(2096);let D=(()=>{var t;class a{constructor(){this._http=(0,e.f3M)(d.eN),this._apiUrl="http://localhost:3000"}getHeroes(){return this._http.get(`${this._apiUrl}/heroes`).pipe((0,C.K)(()=>(0,b.of)([])))}getHero(n){return this._http.get(`${this._apiUrl}/heroes/${n}`).pipe((0,C.K)(()=>(0,b.of)(null)))}}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),a})();var l=s(5195),T=s(2557);let k=(()=>{var t;class a{transform(n){return n.id||n.alt_img?n.alt_img?n.alt_img:`assets/heroes/${n.id}.jpg`:"assets/no-image.png"}}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275pipe=e.Yjl({name:"heroImage",type:t,pure:!0}),a})();function S(t,a){if(1&t&&(e.TgZ(0,"mat-chip"),e._uU(1),e.qZA()),2&t){const o=a.$implicit;e.xp6(1),e.hij(" ",o," ")}}const N=function(t){return["/dashboard/edit-hero",t]},$=function(t){return["/dashboard",t]};function q(t,a){if(1&t&&(e.TgZ(0,"div")(1,"mat-card",2)(2,"mat-card-header")(3,"mat-card-title",3),e._uU(4),e.qZA(),e.TgZ(5,"mat-card-subtitle"),e._uU(6),e.qZA()(),e._UZ(7,"img",4),e.ALo(8,"heroImage"),e.TgZ(9,"mat-card-content")(10,"mat-chip-listbox"),e.YNc(11,S,2,1,"mat-chip",5),e.ALo(12,"slice"),e.qZA()(),e.TgZ(13,"mat-card-actions")(14,"a",6)(15,"mat-icon"),e._uU(16,"edit"),e.qZA(),e._uU(17," Editar h\xe9roe "),e.qZA(),e._UZ(18,"span",7),e.TgZ(19,"a",8)(20,"mat-icon"),e._uU(21,"more_horiz"),e.qZA(),e._uU(22," mas "),e.qZA()()()()),2&t){const o=e.oxw();e.xp6(4),e.Oqu(o.hero.superhero),e.xp6(2),e.Oqu(o.hero.alter_ego),e.xp6(1),e.Q6J("src",e.lcZ(8,7,o.hero),e.LSH)("alt",o.hero.id),e.xp6(4),e.Q6J("ngForOf",e.Dn7(12,9,o.hero.characters.split(","),0,3)),e.xp6(3),e.Q6J("routerLink",e.VKq(13,N,o.hero.id)),e.xp6(5),e.Q6J("routerLink",e.VKq(15,$,o.hero.id))}}function Y(t,a){1&t&&(e.TgZ(0,"mat-card",2),e._uU(1," No hay H\xe9roes "),e.qZA())}let Q=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["hero-card"]],inputs:{hero:"hero"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noHero",""],[1,"mat-elevation-z8"],[1,"flex","flex-row"],["mat-card-image","",3,"src","alt"],[4,"ngFor","ngForOf"],["mat-button","","color","primary",3,"routerLink"],[1,"spacerToolbar"],["mat-button","",3,"routerLink"]],template:function(n,r){if(1&n&&(e.YNc(0,q,23,17,"div",0),e.YNc(1,Y,2,0,"ng-template",null,1,e.W1O)),2&n){const p=e.MAs(2);e.Q6J("ngIf",r.hero)("ngIfElse",p)}},dependencies:[i.sg,i.O5,c.rH,h.zs,l.a8,l.hq,l.dn,l.dk,l.G2,l.$j,l.n5,f.Hw,T.HS,T.z2,i.OU,k]}),a})();function E(t,a){if(1&t&&(e.TgZ(0,"div",2),e._UZ(1,"hero-card",3),e.qZA()),2&t){const o=a.$implicit;e.xp6(1),e.Q6J("hero",o)}}const X=[{path:"",component:F,children:[{path:"hero-add",component:_},{path:"hero-search",component:I},{path:"edit-hero/:id",component:_},{path:"heroes-list",component:(()=>{var t;class a{constructor(){this._heroesSercice=(0,e.f3M)(D),this.heroes=[]}ngOnInit(){this._heroesSercice.getHeroes().subscribe(n=>{console.log(n),this.heroes=n})}}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-heroes-list-page"]],decls:4,vars:1,consts:[[1,"grid","m-1"],["class","col-12 sm:col-4 md:col-3 xl:col-3",4,"ngFor","ngForOf"],[1,"col-12","sm:col-4","md:col-3","xl:col-3"],[3,"hero"]],template:function(n,r){1&n&&(e.TgZ(0,"mat-toolbar"),e._uU(1," Listado de H\xe9roes\n"),e.qZA(),e.TgZ(2,"div",0),e.YNc(3,E,2,1,"div",1),e.qZA()),2&n&&(e.xp6(3),e.Q6J("ngForOf",r.heroes))},dependencies:[i.sg,Z.Ye,Q]}),a})()},{path:":id",component:(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-hero-page"]],decls:2,vars:0,template:function(n,r){1&n&&(e.TgZ(0,"p"),e._uU(1,"hero-page works!"),e.qZA())}}),a})()},{path:"**",redirectTo:"heroes-list"}]}];let z=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(X),c.Bz]}),a})();var j=s(3680),w=s(6889),K=s(2381);(0,i.qS)(K.Z,"es-MX");let B=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[{provide:j.Ad,useValue:"es-MX"},{provide:e.soG,useValue:"es-MX"},{provide:e.EJc,useValue:"MXN"}],imports:[i.ez,z,d.JF,w.q]}),a})()}}]);