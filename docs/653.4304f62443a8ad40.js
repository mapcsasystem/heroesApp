"use strict";(self.webpackChunkheroesApp=self.webpackChunkheroesApp||[]).push([[653],{8653:(O,_,u)=>{u.r(_),u.d(_,{AuthModule:()=>V});var g=u(3403),e=u(5879),y=u(1274);let C=(()=>{var t;class n{}return(t=n).\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-root"]],decls:3,vars:0,consts:[["color","primary"]],template:function(r,o){1&r&&(e.TgZ(0,"mat-toolbar",0),e._uU(1," Heroes App "),e.qZA(),e._UZ(2,"router-outlet"))},dependencies:[g.lC,y.Ye],encapsulation:2}),n})();var a=u(6223);let Z=(()=>{var t;class n{constructor(){this.emailPattern=/^(([^<>()\[\]\\.,;:\s@\u201d]+(\.[^<>()\[\]\\.,;:\s@\u201d]+)*)|(\u201c.+\u201d))@((\[[0\u20139]{1,3}\.[0\u20139]{1,3}\.[0\u20139]{1,3}\.[0\u20139]{1,3}])|(([a-zA-Z\-0\u20139]+\.)+[a-zA-Z]{2,}))$/}}return(t=n).\u0275fac=function(r){return new(r||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),n})();var d=u(6814),h=u(2296),s=u(5195),p=u(4170),T=u(617),A=u(2032);function v(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1," Campo requerido. "),e.qZA())}function q(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1," Correo no valido. "),e.qZA())}function F(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,v,2,0,"span",7),e.YNc(2,q,2,0,"span",7),e.qZA()),2&t){const l=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=l.getField("email"))?null:r.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=l.getField("email"))?null:o.hasError("pattern"))}}function U(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1," Campo requerido. "),e.qZA())}function N(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,U,2,0,"span",7),e.qZA()),2&t){const l=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=l.getField("password"))?null:r.hasError("required"))}}function J(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1," Campo requerido. "),e.qZA())}function P(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,J,2,0,"span",7),e.qZA()),2&t){const l=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=l.getField("fullName"))?null:r.hasError("required"))}}function x(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1," Campo requerido. "),e.qZA())}function I(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1," Correo no valido. "),e.qZA())}function b(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,x,2,0,"span",7),e.YNc(2,I,2,0,"span",7),e.qZA()),2&t){const l=e.oxw();let r,o;e.xp6(1),e.Q6J("ngIf",null==(r=l.getField("email"))?null:r.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=l.getField("email"))?null:o.hasError("pattern"))}}function R(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1," Campo requerido. "),e.qZA())}function Q(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,R,2,0,"span",7),e.qZA()),2&t){const l=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=l.getField("password"))?null:r.hasError("required"))}}function M(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1," Campo requerido. "),e.qZA())}function Y(t,n){if(1&t&&(e.TgZ(0,"mat-error"),e.YNc(1,M,2,0,"span",7),e.qZA()),2&t){const l=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=l.getField("password1"))?null:r.hasError("required"))}}const k=[{path:"",component:C,children:[{path:"login",component:(()=>{var t;class n{constructor(){this._fb=(0,e.f3M)(a.qu),this._router=(0,e.f3M)(g.F0),this._v=(0,e.f3M)(Z),this.form=this._fb.group({email:["",[a.kI.required,a.kI.pattern(this._v.emailPattern)]],password:["",[a.kI.required]]}),this.eye=!1}summit(){this._router.navigateByUrl("dashboard/heroes-list",{replaceUrl:!0}),this.form.invalid&&this.form.markAllAsTouched()}goTo(){this._router.navigateByUrl("auth/register",{replaceUrl:!0})}getField(r){return this.form.get(r)}}return(t=n).\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-login-page"]],decls:29,vars:5,consts:[[1,"flex","flex-row","justify-content-center"],[1,"w-3.5","mt-2","flex","flex-col"],["autocomplete","off",1,"w-full",3,"formGroup","ngSubmit"],[1,"w-full"],["appearance","outline",1,"w-full"],["type","text","matInput","","placeholder","Correo el\xe9ctronico","formControlName","email"],["matSuffix",""],[4,"ngIf"],["matInput","","placeholder","Contrase\xf1a","formControlName","password",3,"type"],["matSuffix","",1,"cursor-pointer",3,"click"],["type","submit","mat-flat-button","","color","primary",1,"w-full"],["type","button","mat-flat-button","",1,"w-full",3,"click"]],template:function(r,o){if(1&r&&(e.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-header",0)(3,"mat-card-title"),e._uU(4,"Login"),e.qZA()(),e.TgZ(5,"form",2),e.NdJ("ngSubmit",function(){return o.summit()}),e.TgZ(6,"mat-card-content",3)(7,"p")(8,"mat-form-field",4)(9,"mat-label"),e._uU(10,"Correo el\xe9ctronico"),e.qZA(),e._UZ(11,"input",5),e.TgZ(12,"mat-icon",6),e._uU(13,"mail"),e.qZA(),e.YNc(14,F,3,2,"mat-error",7),e.qZA()(),e.TgZ(15,"p")(16,"mat-form-field",4)(17,"mat-label"),e._uU(18,"Contrase\xf1a"),e.qZA(),e._UZ(19,"input",8),e.TgZ(20,"mat-icon",9),e.NdJ("click",function(){return o.eye=!o.eye}),e._uU(21),e.qZA(),e.YNc(22,N,2,1,"mat-error",7),e.qZA()(),e.TgZ(23,"p")(24,"button",10),e._uU(25,"Aceptar"),e.qZA()(),e.TgZ(26,"p")(27,"button",11),e.NdJ("click",function(){return o.goTo()}),e._uU(28,"\xbfRegistrarse?"),e.qZA()()()()()()),2&r){let i,m;e.xp6(5),e.Q6J("formGroup",o.form),e.xp6(9),e.Q6J("ngIf",(null==(i=o.getField("email"))?null:i.invalid)&&((null==(i=o.getField("email"))?null:i.dirty)||(null==(i=o.getField("email"))?null:i.touched))),e.xp6(5),e.Q6J("type",o.eye?"text":"password"),e.xp6(2),e.Oqu(o.eye?"visibility":"visibility_off"),e.xp6(1),e.Q6J("ngIf",(null==(m=o.getField("password"))?null:m.invalid)&&((null==(m=o.getField("password"))?null:m.dirty)||(null==(m=o.getField("password"))?null:m.touched)))}},dependencies:[d.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,h.lW,s.a8,s.dn,s.dk,s.n5,p.KE,p.hX,p.TO,p.R9,T.Hw,A.Nt],encapsulation:2}),n})()},{path:"register",component:(()=>{var t;class n{constructor(){this._fb=(0,e.f3M)(a.qu),this._router=(0,e.f3M)(g.F0),this._v=(0,e.f3M)(Z),this.form=this._fb.group({fullName:["",[a.kI.required]],email:["",[a.kI.required,a.kI.pattern(this._v.emailPattern)]],password:["",[a.kI.required]],password1:["",[a.kI.required]]}),this.eye1=!1,this.eye2=!1}summit(){this.form.invalid&&this.form.markAllAsTouched()}goTo(){this._router.navigateByUrl("auth/login",{replaceUrl:!0})}getField(r){return this.form.get(r)}}return(t=n).\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-register-page"]],decls:45,vars:9,consts:[[1,"flex","flex-row","justify-content-center"],[1,"w-3.5","mt-2","flex","flex-col"],["autocomplete","off",1,"w-full",3,"formGroup","ngSubmit"],[1,"w-full"],["appearance","outline",1,"w-full"],["type","text","matInput","","placeholder","Nombre completo","formControlName","fullName"],["matSuffix",""],[4,"ngIf"],["type","text","matInput","","placeholder","Correo el\xe9ctronico","formControlName","email"],["matInput","","placeholder","Contrase\xf1a","formControlName","password",3,"type"],["matSuffix","",1,"cursor-pointer",3,"click"],["matInput","","placeholder","Validar contrase\xf1a","formControlName","password1",3,"type"],["type","submit","mat-flat-button","","color","primary",1,"w-full"],["type","button","mat-flat-button","",1,"w-full",3,"click"]],template:function(r,o){if(1&r&&(e.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-header",0)(3,"mat-card-title"),e._uU(4,"Registrarse"),e.qZA()(),e.TgZ(5,"form",2),e.NdJ("ngSubmit",function(){return o.summit()}),e.TgZ(6,"mat-card-content",3)(7,"p")(8,"mat-form-field",4)(9,"mat-label"),e._uU(10,"Nombre completo"),e.qZA(),e._UZ(11,"input",5),e.TgZ(12,"mat-icon",6),e._uU(13,"person"),e.qZA(),e.YNc(14,P,2,1,"mat-error",7),e.qZA()(),e.TgZ(15,"p")(16,"mat-form-field",4)(17,"mat-label"),e._uU(18,"Correo el\xe9ctronico"),e.qZA(),e._UZ(19,"input",8),e.TgZ(20,"mat-icon",6),e._uU(21,"mail"),e.qZA(),e.YNc(22,b,3,2,"mat-error",7),e.qZA()(),e.TgZ(23,"p")(24,"mat-form-field",4)(25,"mat-label"),e._uU(26,"Contrase\xf1a"),e.qZA(),e._UZ(27,"input",9),e.TgZ(28,"mat-icon",10),e.NdJ("click",function(){return o.eye1=!o.eye1}),e._uU(29),e.qZA(),e.YNc(30,Q,2,1,"mat-error",7),e.qZA()(),e.TgZ(31,"p")(32,"mat-form-field",4)(33,"mat-label"),e._uU(34,"Validar contrase\xf1a"),e.qZA(),e._UZ(35,"input",11),e.TgZ(36,"mat-icon",10),e.NdJ("click",function(){return o.eye2=!o.eye2}),e._uU(37),e.qZA(),e.YNc(38,Y,2,1,"mat-error",7),e.qZA()(),e.TgZ(39,"p")(40,"button",12),e._uU(41,"Aceptar"),e.qZA()(),e.TgZ(42,"p")(43,"button",13),e.NdJ("click",function(){return o.goTo()}),e._uU(44,"\xbfIr al login?"),e.qZA()()()()()()),2&r){let i,m,c,f;e.xp6(5),e.Q6J("formGroup",o.form),e.xp6(9),e.Q6J("ngIf",(null==(i=o.getField("fullName"))?null:i.invalid)&&((null==(i=o.getField("fullName"))?null:i.dirty)||(null==(i=o.getField("fullName"))?null:i.touched))),e.xp6(8),e.Q6J("ngIf",(null==(m=o.getField("email"))?null:m.invalid)&&((null==(m=o.getField("email"))?null:m.dirty)||(null==(m=o.getField("email"))?null:m.touched))),e.xp6(5),e.Q6J("type",o.eye1?"text":"password"),e.xp6(2),e.Oqu(o.eye1?"visibility":"visibility_off"),e.xp6(1),e.Q6J("ngIf",(null==(c=o.getField("password"))?null:c.invalid)&&((null==(c=o.getField("password"))?null:c.dirty)||(null==(c=o.getField("password"))?null:c.touched))),e.xp6(5),e.Q6J("type",o.eye2?"text":"password"),e.xp6(2),e.Oqu(o.eye2?"visibility":"visibility_off"),e.xp6(1),e.Q6J("ngIf",(null==(f=o.getField("password1"))?null:f.invalid)&&((null==(f=o.getField("password1"))?null:f.dirty)||(null==(f=o.getField("password1"))?null:f.touched)))}},dependencies:[d.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,h.lW,s.a8,s.dn,s.dk,s.n5,p.KE,p.hX,p.TO,p.R9,T.Hw,A.Nt],encapsulation:2}),n})()},{path:"**",redirectTo:"login"}]}];let S=(()=>{var t;class n{}return(t=n).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(k),g.Bz]}),n})();var E=u(9862),L=u(3680),X=u(6889),B=u(2381);(0,d.qS)(B.Z,"es-MX");let V=(()=>{var t;class n{}return(t=n).\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[{provide:L.Ad,useValue:"es-MX"},{provide:e.soG,useValue:"es-MX"},{provide:e.EJc,useValue:"MXN"}],imports:[d.ez,S,a.UX,E.JF,X.q]}),n})()}}]);