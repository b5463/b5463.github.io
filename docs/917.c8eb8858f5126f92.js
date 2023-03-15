"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[917],{2917:(q,u,n)=>{n.r(u),n.d(u,{AuthSignInModule:()=>L});var l=n(2510),g=n(4859),f=n(6709),a=n(9549),c=n(7392),p=n(4144),h=n(1572),Z=n(5804),x=n(7775),v=n(4466),r=n(4006),I=n(8288),t=n(4650),A=n(8951),w=n(2494),b=n(6895);const H=["signInNgForm"];function y(e,i){if(1&e&&(t.TgZ(0,"fuse-alert",49),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),t.xp6(1),t.hij(" ",o.alert.message," ")}}function T(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Email address is required "),t.qZA())}function U(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function F(e,i){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function M(e,i){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function J(e,i){1&e&&(t.TgZ(0,"span",50),t._uU(1," Sign in "),t.qZA())}function S(e,i){1&e&&t._UZ(0,"mat-progress-spinner",51),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const Q=function(){return["/sign-up"]},V=function(){return["/forgot-password"]},N=[{path:"",component:(()=>{class e{constructor(o,s,m,C){this._activatedRoute=o,this._authService=s,this._formBuilder=m,this._router=C,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signInForm=this._formBuilder.group({email:["samuel.zima@company.com",[r.kI.required,r.kI.email]],password:["admin",r.kI.required],rememberMe:[""]})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this._authService.signIn(this.signInForm.value).subscribe(()=>{const o=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(o)},o=>{this.signInForm.enable(),this.signInNgForm.resetForm(),this.alert={type:"error",message:"Wrong email or password"},this.showAlert=!0}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.gz),t.Y36(A.e),t.Y36(r.QS),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-in"]],viewQuery:function(o,s){if(1&o&&t.Gf(H,5),2&o){let m;t.iGM(m=t.CRH())&&(s.signInNgForm=m.first)}},decls:75,vars:21,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","bg-pattern-img","dark:bg-bpattern-img","flex-auto","min-w-0","h-screen"],["width","100","height","31","viewBox","0 0 514 150","fill","none","xmlns","http://www.w3.org/2000/svg",1,"dark:visible","invisible","absolute","xl:mt-10","xl:ml-12","mt-4","ml-0","md:ml-12","md:mt-10","sm:ml-0","sm:-mt-140"],["d","M155.091 30.9091H179.364L205 93.4545H206.091L231.727 30.9091H256V124H236.909V63.4091H236.136L212.045 123.545H199.045L174.955 63.1818H174.182V124H155.091V30.9091ZM357.761 77.4545C357.761 87.6061 355.837 96.2424 351.989 103.364C348.17 110.485 342.958 115.924 336.352 119.682C329.777 123.409 322.383 125.273 314.17 125.273C305.898 125.273 298.473 123.394 291.898 119.636C285.322 115.879 280.125 110.439 276.307 103.318C272.489 96.197 270.58 87.5758 270.58 77.4545C270.58 67.303 272.489 58.6667 276.307 51.5455C280.125 44.4242 285.322 39 291.898 35.2727C298.473 31.5151 305.898 29.6364 314.17 29.6364C322.383 29.6364 329.777 31.5151 336.352 35.2727C342.958 39 348.17 44.4242 351.989 51.5455C355.837 58.6667 357.761 67.303 357.761 77.4545ZM337.807 77.4545C337.807 70.8788 336.822 65.3333 334.852 60.8182C332.913 56.303 330.17 52.8788 326.625 50.5455C323.08 48.2121 318.928 47.0455 314.17 47.0455C309.413 47.0455 305.261 48.2121 301.716 50.5455C298.17 52.8788 295.413 56.303 293.443 60.8182C291.504 65.3333 290.534 70.8788 290.534 77.4545C290.534 84.0303 291.504 89.5758 293.443 94.0909C295.413 98.6061 298.17 102.03 301.716 104.364C305.261 106.697 309.413 107.864 314.17 107.864C318.928 107.864 323.08 106.697 326.625 104.364C330.17 102.03 332.913 98.6061 334.852 94.0909C336.822 89.5758 337.807 84.0303 337.807 77.4545ZM422.841 57.6818C422.477 54.0151 420.917 51.1667 418.159 49.1364C415.402 47.1061 411.659 46.0909 406.932 46.0909C403.72 46.0909 401.008 46.5455 398.795 47.4545C396.583 48.3333 394.886 49.5606 393.705 51.1364C392.553 52.7121 391.977 54.5 391.977 56.5C391.917 58.1667 392.265 59.6212 393.023 60.8636C393.811 62.1061 394.886 63.1818 396.25 64.0909C397.614 64.9697 399.189 65.7424 400.977 66.4091C402.765 67.0455 404.674 67.5909 406.705 68.0455L415.068 70.0455C419.129 70.9545 422.856 72.1667 426.25 73.6818C429.644 75.197 432.583 77.0606 435.068 79.2727C437.553 81.4848 439.477 84.0909 440.841 87.0909C442.235 90.0909 442.947 93.5303 442.977 97.4091C442.947 103.106 441.492 108.045 438.614 112.227C435.765 116.379 431.644 119.606 426.25 121.909C420.886 124.182 414.417 125.318 406.841 125.318C399.326 125.318 392.78 124.167 387.205 121.864C381.659 119.561 377.326 116.152 374.205 111.636C371.114 107.091 369.492 101.47 369.341 94.7727H388.386C388.598 97.8939 389.492 100.5 391.068 102.591C392.674 104.652 394.811 106.212 397.477 107.273C400.174 108.303 403.22 108.818 406.614 108.818C409.947 108.818 412.841 108.333 415.295 107.364C417.78 106.394 419.705 105.045 421.068 103.318C422.432 101.591 423.114 99.6061 423.114 97.3636C423.114 95.2727 422.492 93.5152 421.25 92.0909C420.038 90.6667 418.25 89.4545 415.886 88.4545C413.553 87.4545 410.689 86.5455 407.295 85.7273L397.159 83.1818C389.311 81.2727 383.114 78.2879 378.568 74.2273C374.023 70.1667 371.765 64.697 371.795 57.8182C371.765 52.1818 373.265 47.2576 376.295 43.0455C379.356 38.8333 383.553 35.5455 388.886 33.1818C394.22 30.8182 400.28 29.6364 407.068 29.6364C413.977 29.6364 420.008 30.8182 425.159 33.1818C430.341 35.5455 434.371 38.8333 437.25 43.0455C440.129 47.2576 441.614 52.1364 441.705 57.6818H422.841Z","fill","white"],["d","M70.5 27.18C100.815 27.18 125.49 51.33 125.49 81C125.49 110.67 100.815 134.82 70.5 134.82C40.185 134.82 15.51 110.67 15.51 81C15.51 51.33 40.185 27.18 70.5 27.18ZM70.5 12C31.5699 12 0 42.8982 0 81C0 119.102 31.5699 150 70.5 150C109.43 150 141 119.102 141 81C141 42.8982 109.43 12 70.5 12Z","fill","#376DED"],["d","M102.3 53H88.7C87.7611 53 87 53.6207 87 54.3864V112.614C87 113.379 87.7611 114 88.7 114H102.3C103.239 114 104 113.379 104 112.614V54.3864C104 53.6207 103.239 53 102.3 53Z","fill","white"],["d","M52.3 53H38.7C37.7611 53 37 53.6207 37 54.3864V112.614C37 113.379 37.7611 114 38.7 114H52.3C53.2389 114 54 113.379 54 112.614V54.3864C54 53.6207 53.2389 53 52.3 53Z","fill","white"],["d","M87.5769 39H53.4231C52.6371 39 52 39.7163 52 40.6V53.4C52 54.2837 52.6371 55 53.4231 55H87.5769C88.3629 55 89 54.2837 89 53.4V40.6C89 39.7163 88.3629 39 87.5769 39Z","fill","white"],["d","M87.5769 77H53.4231C52.6371 77 52 77.7163 52 78.6V91.4C52 92.2837 52.6371 93 53.4231 93H87.5769C88.3629 93 89 92.2837 89 91.4V78.6C89 77.7163 88.3629 77 87.5769 77Z","fill","white"],["width","120","height","41","viewBox","0 0 514 150","fill","none","xmlns","http://www.w3.org/2000/svg",1,"visible","dark:invisible","absolute","xl:mt-10","xl:ml-12","mt-4","ml-0","md:ml-12","md:mt-10","sm:ml-0","sm:-mt-140"],["d","M155.091 30.9091H179.364L205 93.4545H206.091L231.727 30.9091H256V124H236.909V63.4091H236.136L212.045 123.545H199.045L174.955 63.1818H174.182V124H155.091V30.9091ZM357.761 77.4545C357.761 87.6061 355.837 96.2424 351.989 103.364C348.17 110.485 342.958 115.924 336.352 119.682C329.777 123.409 322.383 125.273 314.17 125.273C305.898 125.273 298.473 123.394 291.898 119.636C285.322 115.879 280.125 110.439 276.307 103.318C272.489 96.197 270.58 87.5758 270.58 77.4545C270.58 67.303 272.489 58.6667 276.307 51.5455C280.125 44.4242 285.322 39 291.898 35.2727C298.473 31.5151 305.898 29.6364 314.17 29.6364C322.383 29.6364 329.777 31.5151 336.352 35.2727C342.958 39 348.17 44.4242 351.989 51.5455C355.837 58.6667 357.761 67.303 357.761 77.4545ZM337.807 77.4545C337.807 70.8788 336.822 65.3333 334.852 60.8182C332.913 56.303 330.17 52.8788 326.625 50.5455C323.08 48.2121 318.928 47.0455 314.17 47.0455C309.413 47.0455 305.261 48.2121 301.716 50.5455C298.17 52.8788 295.413 56.303 293.443 60.8182C291.504 65.3333 290.534 70.8788 290.534 77.4545C290.534 84.0303 291.504 89.5758 293.443 94.0909C295.413 98.6061 298.17 102.03 301.716 104.364C305.261 106.697 309.413 107.864 314.17 107.864C318.928 107.864 323.08 106.697 326.625 104.364C330.17 102.03 332.913 98.6061 334.852 94.0909C336.822 89.5758 337.807 84.0303 337.807 77.4545ZM422.841 57.6818C422.477 54.0151 420.917 51.1667 418.159 49.1364C415.402 47.1061 411.659 46.0909 406.932 46.0909C403.72 46.0909 401.008 46.5455 398.795 47.4545C396.583 48.3333 394.886 49.5606 393.705 51.1364C392.553 52.7121 391.977 54.5 391.977 56.5C391.917 58.1667 392.265 59.6212 393.023 60.8636C393.811 62.1061 394.886 63.1818 396.25 64.0909C397.614 64.9697 399.189 65.7424 400.977 66.4091C402.765 67.0455 404.674 67.5909 406.705 68.0455L415.068 70.0455C419.129 70.9545 422.856 72.1667 426.25 73.6818C429.644 75.197 432.583 77.0606 435.068 79.2727C437.553 81.4848 439.477 84.0909 440.841 87.0909C442.235 90.0909 442.947 93.5303 442.977 97.4091C442.947 103.106 441.492 108.045 438.614 112.227C435.765 116.379 431.644 119.606 426.25 121.909C420.886 124.182 414.417 125.318 406.841 125.318C399.326 125.318 392.78 124.167 387.205 121.864C381.659 119.561 377.326 116.152 374.205 111.636C371.114 107.091 369.492 101.47 369.341 94.7727H388.386C388.598 97.8939 389.492 100.5 391.068 102.591C392.674 104.652 394.811 106.212 397.477 107.273C400.174 108.303 403.22 108.818 406.614 108.818C409.947 108.818 412.841 108.333 415.295 107.364C417.78 106.394 419.705 105.045 421.068 103.318C422.432 101.591 423.114 99.6061 423.114 97.3636C423.114 95.2727 422.492 93.5152 421.25 92.0909C420.038 90.6667 418.25 89.4545 415.886 88.4545C413.553 87.4545 410.689 86.5455 407.295 85.7273L397.159 83.1818C389.311 81.2727 383.114 78.2879 378.568 74.2273C374.023 70.1667 371.765 64.697 371.795 57.8182C371.765 52.1818 373.265 47.2576 376.295 43.0455C379.356 38.8333 383.553 35.5455 388.886 33.1818C394.22 30.8182 400.28 29.6364 407.068 29.6364C413.977 29.6364 420.008 30.8182 425.159 33.1818C430.341 35.5455 434.371 38.8333 437.25 43.0455C440.129 47.2576 441.614 52.1364 441.705 57.6818H422.841Z","fill","#0F172A"],["d","M102.3 53H88.7C87.7611 53 87 53.6207 87 54.3864V112.614C87 113.379 87.7611 114 88.7 114H102.3C103.239 114 104 113.379 104 112.614V54.3864C104 53.6207 103.239 53 102.3 53Z","fill","#0F172A"],["d","M52.3 53H38.7C37.7611 53 37 53.6207 37 54.3864V112.614C37 113.379 37.7611 114 38.7 114H52.3C53.2389 114 54 113.379 54 112.614V54.3864C54 53.6207 53.2389 53 52.3 53Z","fill","#0F172A"],["d","M87.5769 39H53.4231C52.6371 39 52 39.7163 52 40.6V53.4C52 54.2837 52.6371 55 53.4231 55H87.5769C88.3629 55 89 54.2837 89 53.4V40.6C89 39.7163 88.3629 39 87.5769 39Z","fill","#0F172A"],["d","M87.5769 77H53.4231C52.6371 77 52 77.7163 52 78.6V91.4C52 92.2837 52.6371 93 53.4231 93H87.5769C88.3629 93 89 92.2837 89 91.4V78.6C89 77.7163 88.3629 77 87.5769 77Z","fill","#0F172A"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src",""],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-[#376DED]","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-end","justify-between","w-full","mt-1.5"],[3,"color","formControlName"],[1,"text-md","font-medium","text-[#376DED]","hover:underline",3,"routerLink"],["mat-flat-button","",1,"fuse-mat-button-large","rounded-xl","w-full","mt-6","bg-[#376DED]",3,"color","disabled","click"],["class","text-white font-semibold",4,"ngIf"],[3,"diameter","mode",4,"ngIf"],[1,"flex","items-center","mt-8"],[1,"flex-auto","mt-px","border-t"],[1,"mx-2","text-secondary"],[1,"flex","items-center","mt-8","space-x-4"],["type","button","mat-stroked-button","",1,"flex-auto"],[1,"icon-size-5",3,"svgIcon"],[1,"relative","hidden","md:flex","z-10","bottom-0","flex-auto","items-center","justify-center","h-full","p-0","overflow-hidden","bg-white","dark:bg-neutral-900"],["src","/assets/images/logo/logg.svg",1,"ml-[360px]","mx-auto","flex","justify-end","grid","place-items-end","items-end","w-full","h-full","object-cover"],[1,"absolute","flex","bottom-20","dark:text-white","text-[#362B6E]"],[1,"p-12","text-2xl","leading-none"],[1,"h-full","font-bold"],[1,"text-xl","mt-2","font-semibold","italic","leading-none"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"text-white","font-semibold"],[3,"diameter","mode"]],template:function(o,s){if(1&o){const m=t.EpF();t.TgZ(0,"div",0),t.O4$(),t.TgZ(1,"svg",1),t._UZ(2,"path",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"path",6)(7,"path",7),t.qZA(),t.TgZ(8,"svg",8),t._UZ(9,"path",9)(10,"path",3)(11,"path",10)(12,"path",11)(13,"path",12)(14,"path",13),t.qZA(),t.kcU(),t.TgZ(15,"div",14)(16,"div",15)(17,"div",16),t._UZ(18,"img",17),t.qZA(),t.TgZ(19,"div",18),t._uU(20," Sign in "),t.qZA(),t.TgZ(21,"div",19)(22,"div"),t._uU(23,"Don't have an account?"),t.qZA(),t.TgZ(24,"a",20),t._uU(25,"Sign up "),t.qZA()(),t.YNc(26,y,2,5,"fuse-alert",21),t.TgZ(27,"form",22,23)(29,"mat-form-field",24)(30,"mat-label"),t._uU(31,"Email address"),t.qZA(),t._UZ(32,"input",25),t.YNc(33,T,2,0,"mat-error",26),t.YNc(34,U,2,0,"mat-error",26),t.qZA(),t.TgZ(35,"mat-form-field",24)(36,"mat-label"),t._uU(37,"Password"),t.qZA(),t._UZ(38,"input",27,28),t.TgZ(40,"button",29),t.NdJ("click",function(){t.CHM(m);const d=t.MAs(39);return t.KtG(d.type="password"===d.type?"text":"password")}),t.YNc(41,F,1,1,"mat-icon",30),t.YNc(42,M,1,1,"mat-icon",30),t.qZA(),t.TgZ(43,"mat-error"),t._uU(44," Password is required "),t.qZA()(),t.TgZ(45,"div",31)(46,"mat-checkbox",32),t._uU(47," Remember me "),t.qZA(),t.TgZ(48,"a",33),t._uU(49,"Forgot password? "),t.qZA()(),t.TgZ(50,"button",34),t.NdJ("click",function(){return s.signIn()}),t.YNc(51,J,2,0,"span",35),t.YNc(52,S,1,2,"mat-progress-spinner",36),t.qZA(),t.TgZ(53,"div",37),t._UZ(54,"div",38),t.TgZ(55,"div",39),t._uU(56,"Or continue with"),t.qZA(),t._UZ(57,"div",38),t.qZA(),t.TgZ(58,"div",40)(59,"button",41),t._UZ(60,"mat-icon",42),t.qZA(),t.TgZ(61,"button",41),t._UZ(62,"mat-icon",42),t.qZA(),t.TgZ(63,"button",41),t._UZ(64,"mat-icon",42),t.qZA()()()()(),t.TgZ(65,"div",43),t._UZ(66,"img",44),t.TgZ(67,"div",45)(68,"div",46)(69,"div",47),t._uU(70,' "H\u013eadajme sp\xf4sob, aby u\u010ditelia menej u\u010dili '),t._UZ(71,"br"),t._uU(72," a \u017eiaci viac pochopili.\u201c "),t.qZA(),t.TgZ(73,"div",48),t._uU(74," - Jan Amos Komensk\xfd "),t.qZA()()()()()}if(2&o){const m=t.MAs(39);t.xp6(24),t.Q6J("routerLink",t.DdM(19,Q)),t.xp6(2),t.Q6J("ngIf",s.showAlert),t.xp6(1),t.Q6J("formGroup",s.signInForm),t.xp6(5),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",s.signInForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",s.signInForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===m.type),t.xp6(1),t.Q6J("ngIf","text"===m.type),t.xp6(4),t.Q6J("color","primary")("formControlName","rememberMe"),t.xp6(2),t.Q6J("routerLink",t.DdM(20,V)),t.xp6(2),t.Q6J("color","Primary")("disabled",s.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",!s.signInForm.disabled),t.xp6(1),t.Q6J("ngIf",s.signInForm.disabled),t.xp6(8),t.Q6J("svgIcon","feather:facebook"),t.xp6(2),t.Q6J("svgIcon","feather:twitter"),t.xp6(2),t.Q6J("svgIcon","feather:github")}},dependencies:[l.yS,g.lW,f.oG,a.TO,a.KE,a.hX,a.R9,c.Hw,p.Nt,h.Ou,w.W,b.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],encapsulation:2,data:{animation:I.L}}),e})()}];let L=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(N),g.ot,f.p9,a.lN,c.Ps,p.c,h.Cq,Z.J,x.fC,v.m]}),e})()}}]);