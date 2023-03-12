"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[668],{668:(Wt,Q,a)=>{a.r(Q),a.d(Q,{NotesModule:()=>Gt});var J=a(2510),C=a(4859),A=a(6709),d=a(5412),f=a(9549),N=a(7392),Z=a(4144),T=a(5655),w=a(3238),k=a(3267),O=a(8288),t=a(4650),M=a(4880),_=a(6895);function S(n,s){1&n&&t.GkF(0)}const Y=function(n){return{$implicit:n}};let H=(()=>{class n{constructor(e){this._fuseMediaWatcherService=e,this.items=[],this.distributedColumns=[]}ngOnChanges(e){"columns"in e&&this._distributeItems(),"items"in e&&this._distributeItems()}ngAfterViewInit(){this._distributeItems()}_distributeItems(){if(0!==this.items.length){this.distributedColumns=Array.from(Array(this.columns),e=>({items:[]}));for(let e=0;e<this.items.length;e++)this.distributedColumns[e%this.columns].items.push(this.items[e])}else this.distributedColumns=[]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(M.T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["fuse-masonry"]],inputs:{columnsTemplate:"columnsTemplate",columns:"columns",items:"items"},exportAs:["fuseMasonry"],features:[t.TTD],decls:2,vars:4,consts:[[1,"flex"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,S,1,0,"ng-container",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngTemplateOutlet",o.columnsTemplate)("ngTemplateOutletContext",t.VKq(2,Y,o.distributedColumns)))},dependencies:[_.tP],encapsulation:2,data:{animation:O.L}}),n})(),q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[_.ez]}),n})();var E=a(4466);let K=(()=>{class n{constructor(){this.likes=parseInt(localStorage.getItem("likes"))||0,this.dislikes=parseInt(localStorage.getItem("dislikes"))||0}like(){this.likes++,localStorage.setItem("likes",this.likes.toString())}dislike(){this.dislikes--,localStorage.setItem("dislikes",this.dislikes.toString())}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["notes"]],decls:2,vars:0,consts:[[1,"w-full","h-15","flex","absolute","bg-neutral-100","dark:bg-neutral-800","z-10"]],template:function(e,o){1&e&&t._UZ(0,"div",0)(1,"router-outlet")},dependencies:[J.lC],encapsulation:2,changeDetection:0}),n})();var h=a(1135),b=a(7579),y=a(2722),G=a(9841),j=a(1884),v=a(4004),L=a(9646),F=a(8372),g=a(3900),p=a(7323),m=a(9306),B=a(7495),x=a(8505),R=a(5698),W=a(2843),D=a(5840),z=a(529);let I=(()=>{class n{constructor(e){this._httpClient=e,this._labels=new h.X(null),this._note=new h.X(null),this._notes=new h.X(null)}get labels$(){return this._labels.asObservable()}get notes$(){return this._notes.asObservable()}get Archiveds$(){return this._notes.asObservable()}get note$(){return this._note.asObservable()}getLabels(){return this._httpClient.get("api/apps/notes/labels").pipe((0,x.b)(e=>{this._labels.next(e)}))}addLabel(e){return this._httpClient.post("api/apps/notes/labels",{title:e}).pipe((0,x.b)(o=>{this._labels.next(o)}))}updateLabel(e){return this._httpClient.patch("api/apps/notes/labels",{label:e}).pipe((0,x.b)(o=>{this.getNotes().subscribe(),this._labels.next(o)}))}deleteLabel(e){return this._httpClient.delete("api/apps/notes/labels",{params:{id:e}}).pipe((0,x.b)(o=>{this.getNotes().subscribe(),this._labels.next(o)}))}getNotes(){return this._httpClient.get("api/apps/notes/all").pipe((0,x.b)(e=>{this._notes.next(e)}))}getNoteById(e){return this._notes.pipe((0,R.q)(1),(0,v.U)(o=>{const i=o.find(c=>c.id===e)||null;return this._note.next(i),i}),(0,g.w)(o=>o?(0,L.of)(o):(0,W._)("Could not found the note with id of "+e+"!")))}addTask(e,o){return this._httpClient.post("api/apps/notes/tasks",{note:e,task:o}).pipe((0,g.w)(()=>this.getNotes().pipe((0,g.w)(()=>this.getNoteById(e.id)))))}createNote(e){return this._httpClient.post("api/apps/notes",{note:e}).pipe((0,g.w)(o=>this.getNotes().pipe((0,g.w)(()=>this.getNoteById(o.id).pipe((0,v.U)(()=>o))))))}updateNote(e){const o=(0,D.Z)(e);return o.labels.length&&(o.labels=o.labels.map(i=>i.id)),this._httpClient.patch("api/apps/notes",{updatedNote:o}).pipe((0,x.b)(i=>{this.getNotes().subscribe()}))}deleteNote(e){return this._httpClient.delete("api/apps/notes",{params:{id:e.id}}).pipe((0,v.U)(o=>(this.getNotes().subscribe(),o)))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(z.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=a(4006);function P(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",9),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2).ngIf,c=t.oxw();return t.KtG(c.removeImage(i))}),t._UZ(2,"mat-icon",10),t.qZA(),t.BQk()}2&n&&(t.xp6(2),t.Q6J("svgIcon","heroicons_outline:trash"))}function X(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",6)(2,"div",7),t.YNc(3,P,3,1,"ng-container",1),t.qZA(),t._UZ(4,"img",8),t.qZA(),t.BQk()),2&n){const e=t.oxw().ngIf;t.xp6(3),t.Q6J("ngIf",!e.archived),t.xp6(1),t.Q6J("src",e.image,t.LSH)}}const V=function(n){return{"text-secondary line-through":n}};function tt(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",17)(2,"mat-checkbox",18),t.NdJ("ngModelChange",function(i){const r=t.CHM(e).$implicit;return t.KtG(r.completed=i)})("change",function(){const c=t.CHM(e).$implicit,r=t.oxw(2).ngIf,l=t.oxw();return t.KtG(l.updateTaskOnNote(r,c))}),t.qZA(),t.TgZ(3,"input",19),t.NdJ("ngModelChange",function(i){const r=t.CHM(e).$implicit;return t.KtG(r.content=i)})("input",function(){const c=t.CHM(e).$implicit,r=t.oxw(2).ngIf,l=t.oxw();return t.KtG(l.updateTaskOnNote(r,c))}),t.qZA(),t.TgZ(4,"mat-icon",20),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw(2).ngIf,l=t.oxw();return t.KtG(l.removeTaskFromNote(r,c))}),t.qZA()(),t.BQk()}if(2&n){const e=s.$implicit;t.xp6(2),t.Q6J("color","primary")("ngModel",e.completed),t.xp6(1),t.Q6J("ngClass",t.VKq(6,V,e.completed))("placeholder","Task")("ngModel",e.content),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x")}}function et(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",11),t.YNc(2,tt,5,8,"ng-container",12),t.TgZ(3,"div",13),t._UZ(4,"mat-icon",14),t.TgZ(5,"input",15,16),t.NdJ("keydown.enter",function(){t.CHM(e);const i=t.MAs(6),c=t.oxw().ngIf;return t.oxw().addTaskToNote(c,i.value),t.KtG(i.value="")}),t.qZA()()(),t.BQk()}if(2&n){const e=t.oxw().ngIf,o=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.tasks)("ngForTrackBy",o.trackByFn),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:plus"),t.xp6(1),t.Q6J("placeholder","Add task")}}function nt(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",21)(2,"button",22),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.like())}),t._UZ(3,"mat-icon",23),t.qZA(),t.TgZ(4,"span",24),t._uU(5),t.qZA(),t.TgZ(6,"button",25),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.dislike())}),t._UZ(7,"mat-icon",23),t.qZA(),t.TgZ(8,"span",26),t._uU(9),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw().ngIf;t.xp6(3),t.Q6J("svgIcon","heroicons_outline:thumb-up"),t.xp6(2),t.Oqu(e.likes||0),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:thumb-down"),t.xp6(2),t.Oqu(e.dislikes||0)}}function ot(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",28)(2,"div"),t._uU(3),t.qZA(),t.TgZ(4,"mat-icon",29),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw(2).ngIf,l=t.oxw();return t.KtG(l.toggleLabelOnNote(r,c))}),t.qZA()(),t.BQk()}if(2&n){const e=s.$implicit;t.xp6(3),t.hij(" ",e.title," "),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x-circle")}}function it(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",27),t.YNc(2,ot,5,2,"ng-container",12),t.qZA(),t.BQk()),2&n){const e=t.oxw().ngIf,o=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.labels)("ngForTrackBy",o.trackByFn)}}function st(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",30)(2,"div",31),t._uU(3),t.TgZ(4,"div",32),t._UZ(5,"img",33)(6,"img",34),t.qZA()()(),t.BQk()),2&n){const e=t.oxw().ngIf;t.xp6(3),t.hij(" ",e.price," ")}}function ct(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",35)(2,"button",36),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().ngIf,c=t.oxw();return t.KtG(c.createNote(i))}),t._uU(3," Save "),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw().ngIf;t.xp6(2),t.Q6J("color","primary")("disabled",!e.title&&!e.content)}}function rt(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div")(2,"input",41,42),t.NdJ("change",function(){t.CHM(e);const i=t.MAs(3),c=t.oxw(2).ngIf,r=t.oxw();return t.KtG(r.uploadImage(c,i.files))}),t.qZA(),t.TgZ(4,"label",43),t._UZ(5,"mat-icon",23),t.qZA()(),t.BQk()}2&n&&(t.xp6(2),t.Q6J("multiple",!1)("accept","image/jpeg, image/png"),t.xp6(3),t.Q6J("svgIcon","heroicons_outline:photograph"))}function at(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",47),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw(4).ngIf,l=t.oxw();return t.KtG(l.toggleLabelOnNote(r,c))}),t.TgZ(2,"span",13),t._UZ(3,"mat-checkbox",48),t.TgZ(4,"span",49),t._uU(5),t.qZA()()(),t.BQk()}if(2&n){const e=s.$implicit,o=t.oxw(4).ngIf,i=t.oxw();t.xp6(3),t.Q6J("color","primary")("checked",i.isNoteHasLabel(o,e)),t.xp6(2),t.Oqu(e.title)}}function lt(n,s){if(1&n&&(t.ynx(0),t.YNc(1,at,6,3,"ng-container",46),t.BQk()),2&n){const e=s.ngIf;t.xp6(1),t.Q6J("ngForOf",e)}}function _t(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"button",44),t._UZ(2,"mat-icon",23),t.qZA(),t.TgZ(3,"mat-menu",null,45),t.YNc(5,lt,2,1,"ng-container",1),t.ALo(6,"async"),t.qZA(),t.BQk()),2&n){const e=t.MAs(4),o=t.oxw(3);t.xp6(1),t.Q6J("matMenuTriggerFor",e),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:tag"),t.xp6(3),t.Q6J("ngIf",t.lcZ(6,3,o.labels$))}}function gt(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",9),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2).ngIf,c=t.oxw();return t.KtG(c.deleteNote(i))}),t._UZ(2,"mat-icon",23),t.qZA(),t.BQk()}2&n&&(t.xp6(2),t.Q6J("svgIcon","heroicons_outline:trash"))}function pt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"a",50)(2,"button"),t._UZ(3,"mat-icon",23),t.qZA()(),t.BQk()),2&n){const e=t.oxw(2).ngIf;t.xp6(1),t.s9C("href",e.image,t.LSH),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:download")}}function mt(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"input",51),t.NdJ("ngModelChange",function(i){t.CHM(e);const c=t.oxw(2).ngIf;return t.KtG(c.price=i)})("ngModelChange",function(){t.CHM(e);const i=t.oxw(3);return t.KtG(i.updatePrice())})("input",function(){t.CHM(e);const i=t.oxw(2).ngIf,c=t.oxw();return t.KtG(c.updateNoteDetails(i))}),t.qZA(),t.BQk()}if(2&n){const e=t.oxw(2).ngIf;t.xp6(1),t.Q6J("placeholder","Price")("ngModel",e.price)}}function ut(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",52),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2).ngIf,c=t.oxw();return c.toggleArchiveOnNote(i),t.KtG(c.updatePfp())}),t._uU(2," Sell "),t.qZA(),t.BQk()}}function dt(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",53),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2).ngIf,c=t.oxw();return c.toggleArchiveOnNote(i),t.KtG(c.subtractNotePriceFromUserCoins(i.id))}),t._uU(2," Buy "),t.qZA(),t.BQk()}}function ft(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",37)(2,"div",38),t.YNc(3,rt,6,3,"ng-container",1),t.YNc(4,_t,7,5,"ng-container",1),t.YNc(5,gt,3,1,"ng-container",1),t.YNc(6,pt,4,2,"ng-container",1),t.qZA(),t.YNc(7,mt,2,2,"ng-container",1),t.YNc(8,ut,3,0,"ng-container",1),t._UZ(9,"div",39),t.YNc(10,dt,3,0,"ng-container",1),t.TgZ(11,"button",40),t._uU(12,"Close"),t.qZA()(),t.BQk()),2&n){const e=t.oxw().ngIf;t.xp6(3),t.Q6J("ngIf",!e.archived),t.xp6(1),t.Q6J("ngIf",!e.archived),t.xp6(1),t.Q6J("ngIf",!e.archived),t.xp6(1),t.Q6J("ngIf",!e.archived),t.xp6(1),t.Q6J("ngIf",!e.archived),t.xp6(1),t.Q6J("ngIf",!e.archived),t.xp6(2),t.Q6J("ngIf",e.archived)}}function xt(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.YNc(1,X,5,2,"ng-container",1),t.TgZ(2,"div",2)(3,"div")(4,"input",3),t.NdJ("ngModelChange",function(i){const r=t.CHM(e).ngIf;return t.KtG(r.title=i)})("input",function(){const c=t.CHM(e).ngIf,r=t.oxw();return t.KtG(r.updateNoteDetails(c))}),t.qZA()(),t.TgZ(5,"div",4)(6,"textarea",5),t.NdJ("ngModelChange",function(i){const r=t.CHM(e).ngIf;return t.KtG(r.content=i)})("input",function(){const c=t.CHM(e).ngIf,r=t.oxw();return t.KtG(r.updateNoteDetails(c))}),t.qZA()(),t.YNc(7,et,7,4,"ng-container",1),t.YNc(8,nt,10,4,"ng-container",1),t.YNc(9,it,3,2,"ng-container",1),t.YNc(10,st,7,1,"ng-container",1),t.YNc(11,ct,4,2,"ng-container",1),t.YNc(12,ft,13,7,"ng-container",1),t.qZA(),t.BQk()}if(2&n){const e=s.ngIf;t.xp6(1),t.Q6J("ngIf",e.image),t.xp6(3),t.Q6J("placeholder","Title")("ngModel",e.title),t.xp6(2),t.Q6J("placeholder","Note")("ngModel",e.content),t.xp6(1),t.Q6J("ngIf",e.tasks),t.xp6(1),t.Q6J("ngIf",e.archived),t.xp6(1),t.Q6J("ngIf",e.labels&&e.labels.length),t.xp6(1),t.Q6J("ngIf",e.archived),t.xp6(1),t.Q6J("ngIf",!e.id),t.xp6(1),t.Q6J("ngIf",e.id)}}let U=(()=>{class n{constructor(e,o,i,c,r){this._changeDetectorRef=e,this.userService=o,this._data=i,this._notesService=c,this._matDialogRef=r,this._labels=p.p,this._notes=p.$,this.noteChanged=new b.x,this._unsubscribeAll=new b.x,this.likes=0,this.dislikes=0,this.note=i.note,this.userService.user$.subscribe(l=>{this.user=l,this.handleCoinUpdate()})}like(){this.likes++}dislike(){this.dislikes--}ngOnInit(){this._data.note.id?(this._notesService.getNoteById(this._data.note.id).subscribe(),this.note$=this._notesService.note$):this.note$=(0,L.of)({id:null,title:"",content:"",value:" ",tasks:null,image:null,reminder:null,labels:[],archived:!1,user_view:!1,createdAt:null,updatedAt:null}),this.labels$=this._notesService.labels$,this.noteChanged.pipe((0,y.R)(this._unsubscribeAll),(0,F.b)(500),(0,g.w)(e=>this._notesService.updateNote(e))).subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}createNote(e){this._notesService.createNote(e).pipe((0,v.U)(()=>{this.note$=this._notesService.note$})).subscribe()}uploadImage(e,o){if(!o.length)return;const c=o[0];!["image/jpeg","image/png"].includes(c.type)||this._readAsDataURL(c).then(r=>{e.image=r,this.noteChanged.next(e)})}removeImage(e){e.image=null,this.noteChanged.next(e)}addTasksToNote(e){e.tasks||(e.tasks=[])}addTaskToNote(e,o){""!==o.trim()&&this._notesService.addTask(e,o).subscribe()}removeTaskFromNote(e,o){e.tasks=e.tasks.filter(i=>i.id!==o.id),this.noteChanged.next(e)}updateTaskOnNote(e,o){o.id&&this.noteChanged.next(e)}isNoteHasLabel(e,o){return!!e.labels.find(i=>i.id===o.id)}toggleLabelOnNote(e,o){this.isNoteHasLabel(e,o)?e.labels=e.labels.filter(i=>i.id!==o.id):e.labels.push(o),this.noteChanged.next(e)}updatePfp(){this.user.pfp=this.note.archived?m.E.avatar:"assets/images/avatars/male-15.jpg"}toggleArchiveOnNote(e){e.archived=!e.archived,e.user_view=!0,this.noteChanged.next(e),this._matDialogRef.close()}updateNoteDetails(e){this.noteChanged.next(e)}deleteNote(e){this._notesService.deleteNote(e).subscribe(o=>{!o||this._matDialogRef.close()})}trackByFn(e,o){return o.id||e}_readAsDataURL(e){return new Promise((o,i)=>{const c=new FileReader;c.onload=()=>{o(c.result)},c.onerror=r=>{i(r)},c.readAsDataURL(e)})}createCopy(e){const o=p.$.find(l=>l.id===e),i=e.split("-");i[3]="copy";const c={...o,id:i.join("-"),archived:!1},r=p.$.findIndex(l=>l.id===e);return p.$.splice(r+1,0,c),console.log(p.$),o}subtractNotePriceFromUserCoins(e){const o=p.$.find(c=>c.id===e);let i=parseInt(o.price);i<=m.E.coins?(m.E.coins-=i,document.getElementById("coins").innerHTML=m.E.coins.toString(),document.getElementById("coinss").innerHTML=m.E.coins.toString(),m.E.coins-i==0&&document.getElementById("coinsk").classList.add("blur-sm")):console.log(`User's balance is not sufficient to buy the note. Note price: ${i}. User's balance: ${m.E.coins}`)}handleCoinUpdate(){if(0===this.user.coins){const e=document.getElementById("pixel");e&&e.classList.add("blur-sm")}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(B.K),t.Y36(d.WI),t.Y36(I),t.Y36(d.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["notes-details"]],decls:3,vars:3,consts:[[1,"flex","flex-col","flex-auto","md:w-160","md:min-w-160","md:h-200","md:max-h-300","h-140","-m-6"],[4,"ngIf"],[1,"m-4"],[1,"w-full","p-2","text-2xl",3,"placeholder","ngModel","ngModelChange","input"],[1,"flex","w-full","py-5","px-2"],["matTextareaAutosize","",1,"w-full",3,"placeholder","ngModel","ngModelChange","input"],["oncontextmenu","return false","id","pixel",1,"relative","w-full"],[1,"absolute","right-0","bottom-0","p-4"],[1,"w-full","object-cover",3,"src"],["mat-icon-button","",3,"click"],[1,"text-white",3,"svgIcon"],[1,"mx-2","mt-4","space-y-1.5"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","items-center"],[1,"-ml-0.5","icon-size-5","text-hint",3,"svgIcon"],[1,"w-full","ml-1.5","px-1","py-0.5",3,"placeholder","keydown.enter"],["newTaskInput",""],[1,"group","flex","items-center"],[1,"flex","items-center",3,"color","ngModel","ngModelChange","change"],[1,"w-full","px-1","py-0.5",3,"ngClass","placeholder","ngModel","ngModelChange","input"],[1,"hidden","group-hover:flex","ml-auto","icon-size-5","cursor-pointer",3,"svgIcon","click"],[1,"flex","items-center","relative","ml-2"],[1,"text-green-500","mr-2",3,"click"],[3,"svgIcon"],[1,"text-xl","text-green-600","mr-2"],[1,"text-red-500","mr-2",3,"click"],[1,"text-xl","text-red-600","mr-2"],[1,"flex","flex-wrap","items-center","mx-1","mt-6"],[1,"flex","items-center","m-1","py-0.5","px-3","rounded-full","text-sm","font-medium","text-gray-500","bg-gray-100","dark:text-gray-300","dark:bg-gray-700"],[1,"ml-1","icon-size-4","cursor-pointer",3,"svgIcon","click"],[1,"flex","items-end","grid","flex-wrap","relative"],[1,"text-black","dark:text-white","mr-10","place-self-end","grid","flex","self-end","items-end","justify-self-end","justify-end","place-items-end","place-content-end","content-end","text-3xl","font-semibold"],[1,"flex","grid","absolute","-mr-7","mb-1.5"],["src","/assets/images/logo/coinsoran.svg","alt","",1,"w-6","h-6","dark:hidden","block"],["src","/assets/images/logo/coinsoran.svg","alt","",1,"w-6","h-6","dark:block","hidden"],[1,"flex","items-center","justify-end","mt-4"],["mat-flat-button","",3,"color","disabled","click"],[1,"flex","items-center","justify-between","mt-4"],[1,"flex","items-center","space-x-2"],[1,"h-10","mt-10","flex"],["mat-flat-button","","matDialogClose",""],["id","image-file-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["imageFileInput",""],["for","image-file-input","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-gray-400","hover:bg-opacity-20","dark:hover:bg-black","dark:hover:bg-opacity-5"],["mat-icon-button","",3,"matMenuTriggerFor"],["labelsMenu","matMenu"],[4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"],["disableRipple","",1,"flex","items-center","pointer-events-none",3,"color","checked"],[1,"ml-1","leading-5"],["download","",3,"href"],[1,"p-2","text-purple-600","xl:w-40","lg:w-40","md:w-30","sm:w-20","w-20","h-10","font-semibold","text-xl","bg-purple-200","xl:ml-20","lg:ml-20","md:ml-10","sm:ml-10","ml-4","rounded-full",3,"placeholder","ngModel","ngModelChange","input"],[1,"bg-blue-200","font-medium","text-black","w-15","h-10","rounded-full",3,"click"],[1,"bg-purple-200","dark:text-black","text-black","font-medium","hover:bg-purple-100","hover:ease-in","duration-300","w-18","h-10","xl:ml-100","lg:ml-100","md:ml-100","sm:ml-60","ml-40","rounded-full",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.YNc(1,xt,13,11,"ng-container",1),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,o.note$)))},dependencies:[C.lW,A.oG,d.ZT,N.Hw,T.VK,T.OP,T.p6,w.wG,_.mk,_.sg,_.O5,u.Fj,u.JJ,u.On,_.Ov],encapsulation:2,changeDetection:0}),n})();var ht=a(9300);function bt(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"mat-form-field",13)(2,"button",14),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw(2);return t.KtG(r.deleteLabel(c.id))}),t._UZ(3,"mat-icon",9),t.qZA(),t.TgZ(4,"input",15),t.NdJ("ngModelChange",function(i){const r=t.CHM(e).$implicit;return t.KtG(r.title=i)})("input",function(){const c=t.CHM(e).$implicit,r=t.oxw(2);return t.KtG(r.updateLabel(c))}),t.qZA()(),t.BQk()}if(2&n){const e=s.$implicit;t.xp6(3),t.Q6J("svgIcon","heroicons_solid:trash"),t.xp6(1),t.Q6J("autocomplete","off")("ngModel",e.title)}}function vt(n,s){if(1&n&&(t.ynx(0),t.YNc(1,bt,5,3,"ng-container",12),t.BQk()),2&n){const e=s.ngIf,o=t.oxw();t.xp6(1),t.Q6J("ngForOf",e)("ngForTrackBy",o.trackByFn)}}let Ct=(()=>{class n{constructor(e,o){this._changeDetectorRef=e,this._notesService=o,this.labelChanged=new b.x,this._unsubscribeAll=new b.x}ngOnInit(){this.labels$=this._notesService.labels$,this.labelChanged.pipe((0,y.R)(this._unsubscribeAll),(0,F.b)(500),(0,ht.h)(e=>""!==e.title.trim()),(0,g.w)(e=>this._notesService.updateLabel(e))).subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addLabel(e){this._notesService.addLabel(e).subscribe()}updateLabel(e){this.labelChanged.next(e)}deleteLabel(e){this._notesService.deleteLabel(e).subscribe(()=>{this._changeDetectorRef.markForCheck()})}trackByFn(e,o){return o.id||e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(I))},n.\u0275cmp=t.Xpm({type:n,selectors:[["notes-labels"]],decls:14,vars:10,consts:[[1,"flex","flex-col","flex-auto","w-80","min-w-80","p-2","md:p-4"],[1,"flex","items-center","justify-between"],[1,"text-2xl","font-semibold"],["matDialogClose","","mat-icon-button",""],[3,"svgIcon"],[1,"fuse-mat-dense","w-full","mt-8",3,"floatLabel"],["name","new-label","matInput","",3,"autocomplete","placeholder"],["newLabelInput",""],["mat-icon-button","","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],[1,"flex","flex-col","mt-4"],[4,"ngIf"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"fuse-mat-dense","w-full"],["mat-icon-button","","matPrefix","",3,"click"],["required","","matInput","",3,"autocomplete","ngModel","ngModelChange","input"]],template:function(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Edit labels"),t.qZA(),t.TgZ(4,"button",3),t._UZ(5,"mat-icon",4),t.qZA()(),t.TgZ(6,"mat-form-field",5),t._UZ(7,"input",6,7),t.TgZ(9,"button",8),t.NdJ("click",function(){t.CHM(i);const r=t.MAs(8);return o.addLabel(r.value),t.KtG(r.value="")}),t._UZ(10,"mat-icon",9),t.qZA()(),t.TgZ(11,"div",10),t.YNc(12,vt,2,2,"ng-container",11),t.ALo(13,"async"),t.qZA()()}if(2&e){const i=t.MAs(8);t.xp6(5),t.Q6J("svgIcon","heroicons_outline:x"),t.xp6(1),t.Q6J("floatLabel","always"),t.xp6(1),t.Q6J("autocomplete","off")("placeholder","Create new label"),t.xp6(2),t.ekj("invisible",""===i.value.trim()),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"),t.xp6(2),t.Q6J("ngIf",t.lcZ(13,8,o.labels$))}},dependencies:[C.lW,d.ZT,f.KE,f.qo,f.R9,N.Hw,Z.Nt,_.sg,_.O5,u.Fj,u.JJ,u.Q7,u.On,_.Ov],encapsulation:2,changeDetection:0}),n})();const $=function(n,s){return{"bg-gray-200 dark:bg-gray-700 text-primary dark:text-primary-400":n,"text-hint hover:bg-hover":s}};function Nt(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",9),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw(2);return t.KtG(r.filterByLabel(c.id))}),t._UZ(2,"mat-icon",30),t.TgZ(3,"div",31),t._uU(4),t.qZA()(),t.BQk()}if(2&n){const e=s.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("ngClass",t.WLB(4,$,"label:"+e.id===o.filterStatus,"label:"+e.id!==o.filterStatus))("matRippleDisabled","label:"+e.id===o.filterStatus),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:tag"),t.xp6(2),t.hij(" ",e.title," ")}}function Tt(n,s){if(1&n&&(t.ynx(0),t.YNc(1,Nt,5,7,"ng-container",29),t.BQk()),2&n){const e=s.ngIf,o=t.oxw();t.xp6(1),t.Q6J("ngForOf",e)("ngForTrackBy",o.trackByFn)}}function kt(n,s){if(1&n&&(t.ynx(0),t._UZ(1,"img",43),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",e.image,t.LSH)}}function yt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",44),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.title," ")}}function Zt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.ekj("text-xl",e.content.length<70),t.xp6(1),t.hij(" ",e.content," ")}}function wt(n,s){1&n&&(t.ynx(0),t.TgZ(1,"div",47),t._UZ(2,"div",48),t.qZA(),t.BQk())}function It(n,s){1&n&&(t.ynx(0),t._UZ(1,"mat-icon",49),t.BQk()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:check-circle"))}const Qt=function(n){return{"text-secondary line-through":n}};function Jt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",15),t.YNc(2,wt,3,0,"ng-container",12),t.YNc(3,It,2,1,"ng-container",12),t.TgZ(4,"div",46),t._uU(5),t.qZA()(),t.BQk()),2&n){const e=s.$implicit;t.xp6(2),t.Q6J("ngIf",!e.completed),t.xp6(1),t.Q6J("ngIf",e.completed),t.xp6(1),t.Q6J("ngClass",t.VKq(4,Qt,e.completed)),t.xp6(1),t.hij(" ",e.content," ")}}function At(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",45),t.YNc(2,Jt,6,6,"ng-container",29),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,o=t.oxw(5);t.xp6(2),t.Q6J("ngForOf",e.tasks)("ngForTrackBy",o.trackByFn)}}function Mt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",50),t._uU(2),t.qZA(),t.BQk()),2&n){const e=s.$implicit;t.xp6(2),t.hij(" ",e.title," ")}}function Lt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",51),t._UZ(2,"mat-icon",18),t.TgZ(3,"span",52),t._uU(4),t.qZA(),t._UZ(5,"mat-icon",18),t.TgZ(6,"span",53),t._uU(7),t.qZA()(),t.BQk()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("svgIcon","heroicons_outline:thumb-up"),t.xp6(2),t.Oqu(e.likes||0),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:thumb-down"),t.xp6(2),t.Oqu(e.dislikes||0)}}function Ft(n,s){if(1&n&&t._UZ(0,"img",57),2&n){const e=t.oxw(2).$implicit;t.Q6J("src",e.pfp,t.LSH)}}function Bt(n,s){if(1&n&&t._UZ(0,"img",58),2&n){const e=t.oxw(7);t.Q6J("src",e.user.avatar,t.LSH)}}function Dt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",54),t.YNc(2,Ft,1,1,"img",55),t.YNc(3,Bt,1,1,"ng-template",null,56,t.W1O),t.qZA(),t.BQk()),2&n){const e=t.MAs(4),o=t.oxw().$implicit;t.xp6(2),t.Q6J("ngIf",o.pfp)("ngIfElse",e)}}function Ut(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",54),t._UZ(2,"img",58),t.qZA(),t.BQk()),2&n){const e=t.oxw(6);t.xp6(2),t.Q6J("src",e.user.avatar,t.LSH)}}function $t(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",35),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw(5);return t.KtG(r.openNoteDialog(c))}),t.YNc(2,kt,2,1,"ng-container",12),t.TgZ(3,"div",36),t.YNc(4,yt,3,1,"ng-container",12),t.YNc(5,Zt,3,3,"ng-container",12),t.YNc(6,At,3,2,"ng-container",12),t.ynx(7),t.TgZ(8,"div",37),t.YNc(9,Mt,3,1,"ng-container",29),t.qZA(),t.BQk(),t.YNc(10,Lt,8,4,"ng-container",12),t.ynx(11),t.TgZ(12,"div",38)(13,"div",39),t._uU(14),t.TgZ(15,"div",40),t._UZ(16,"img",41)(17,"img",42),t.qZA()()(),t.BQk(),t.YNc(18,Dt,5,2,"ng-container",12),t.YNc(19,Ut,3,1,"ng-container",12),t.qZA()(),t.BQk()}if(2&n){const e=s.$implicit,o=t.oxw(5);t.xp6(2),t.Q6J("ngIf",e.image),t.xp6(2),t.Q6J("ngIf",e.title),t.xp6(1),t.Q6J("ngIf",e.content),t.xp6(1),t.Q6J("ngIf",e.tasks),t.xp6(3),t.Q6J("ngForOf",e.labels)("ngForTrackBy",o.trackByFn),t.xp6(1),t.Q6J("ngIf",e.archived),t.xp6(4),t.hij(" ",e.price," "),t.xp6(4),t.Q6J("ngIf",e.archived),t.xp6(1),t.Q6J("ngIf",!e.archived)}}function Ot(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",34),t.YNc(2,$t,20,10,"ng-container",29),t.qZA(),t.BQk()),2&n){const e=s.$implicit,o=t.oxw(4);t.xp6(2),t.Q6J("ngForOf",e.items)("ngForTrackBy",o.trackByFn)}}function St(n,s){if(1&n&&t.YNc(0,Ot,3,2,"ng-container",29),2&n){const e=s.$implicit,o=t.oxw(3);t.Q6J("ngForOf",e)("ngForTrackBy",o.trackByFn)}}function Yt(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"fuse-masonry",32),t.YNc(2,St,1,2,"ng-template",null,33,t.W1O),t.qZA(),t.BQk()),2&n){const e=t.MAs(3),o=t.oxw().ngIf,i=t.oxw();t.xp6(1),t.Q6J("items",o)("columns",i.masonryColumns)("columnsTemplate",e)}}function Ht(n,s){if(1&n&&(t.ynx(0),t.YNc(1,Yt,4,3,"ng-container",26),t.BQk()),2&n){const e=s.ngIf;t.oxw();const o=t.MAs(35);t.xp6(1),t.Q6J("ngIf",e.length)("ngIfElse",o)}}function qt(n,s){1&n&&(t.TgZ(0,"div",59)(1,"div",60),t._uU(2," Loading... "),t.qZA()())}function Et(n,s){1&n&&(t.TgZ(0,"div",61),t._UZ(1,"mat-icon",62),t.TgZ(2,"div",60),t._uU(3," There are no notes! "),t.qZA()()),2&n&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:document"))}const Kt=[{path:"",component:K,children:[{path:"",component:(()=>{class n{constructor(e,o,i,c,r){this._changeDetectorRef=e,this._fuseMediaWatcherService=o,this._matDialog=i,this._notesService=c,this._userService=r,this.drawerMode="side",this.drawerOpened=!0,this.filter$=new h.X("archived"),this.searchQuery$=new h.X(null),this.masonryColumns=4,this._unsubscribeAll=new b.x}get filterStatus(){return this.filter$.value}ngOnInit(){this._userService.user$.pipe((0,y.R)(this._unsubscribeAll)).subscribe(e=>{this.user=e}),this._notesService.getLabels().subscribe(),this._notesService.getNotes().subscribe(),this.labels$=this._notesService.labels$,this.notes$=(0,G.a)([this._notesService.notes$,this.filter$,this.searchQuery$]).pipe((0,j.x)(),(0,v.U)(([e,o,i])=>{if(!e||!e.length)return;let c=e;i&&(i=i.trim().toLowerCase(),c=c.filter(l=>l.title.toLowerCase().includes(i)||l.content.toLowerCase().includes(i)));const r="archived"===o;if(c=c.filter(l=>l.archived===r),o.startsWith("label:")){const l=o.split(":")[1];c=c.filter(jt=>!!jt.labels.find(Rt=>Rt.id===l))}return c})),this._fuseMediaWatcherService.onMediaChange$.pipe((0,y.R)(this._unsubscribeAll)).subscribe(({matchingAliases:e})=>{e.includes("lg")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1),this.masonryColumns=e.includes("xl")?5:e.includes("lg")?4:e.includes("md")?3:e.includes("sm")?2:1,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}addNewNote(){this._matDialog.open(U,{autoFocus:!1,data:{note:{}}})}openEditLabelsDialog(){this._matDialog.open(Ct,{autoFocus:!1})}openNoteDialog(e){this._matDialog.open(U,{autoFocus:!1,data:{note:(0,D.Z)(e)}})}filterByArchived(){this.filter$.next("archived")}filterByLabel(e){this.filter$.next(`label:${e}`)}filterByQuery(e){this.searchQuery$.next(e)}resetFilter(){this.filter$.next("notes")}trackByFn(e,o){return o.id||e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(M.T),t.Y36(d.uw),t.Y36(I),t.Y36(B.K))},n.\u0275cmp=t.Xpm({type:n,selectors:[["notes-list"]],decls:36,vars:23,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full","bg-card","bg-transparent","dark:bg-transparent"],[1,"w-2/3","sm:w-72","lg:w-56","border-r-0","pt-32","xl:bg-transparent","xl:dark:bg-transparent","lg:bg-transparent","lg:dark:bg-transparent","md:bg-white","md:dark:bg-neurtal-800","sm:bg-white","sm:dark:bg-neutral-800","bg-white","dark:bg-neutral-800",3,"mode","opened"],["drawer",""],[1,"p-6","lg:py-8","lg:pl-4","lg:pr-0"],[1,"space-y-2"],["matRipple","",1,"relative","flex","items-center","py-2","px-4","font-medium","rounded-xl","cursor-pointer","'bg-slate-900/30","text-primary","dark:text-primary-400':","filterStatus","===","'notes',","'text-hint","hover:bg-hover':","filterStatus","!==","'notes'","}",3,"matRippleDisabled","click"],[1,"text-purple-600",3,"svgIcon"],[1,"ml-3","leading-5","select-none","font-semibold","text-purple-600"],["matRipple","",1,"relative","flex","items-center","py-2","px-4","font-medium","rounded-xl","cursor-pointer",3,"ngClass","matRippleDisabled","click"],[1,"text-blue-600",3,"svgIcon"],[1,"ml-3","leading-5","select-none","font-semibold","text-blue-600"],[4,"ngIf"],[1,"flex","flex-col","dark:bg-transparent","bg-transparent"],[1,"flex","flex-col","flex-auto","p-6","sm:mt-10","md:mt-10","xl:mt-10","lg:mt-10","mt-18","md:p-8"],[1,"flex","items-center"],[1,"flex","items-center","flex-auto"],["mat-icon-button","",1,"flex","lg:hidden","-ml-2",3,"click"],[3,"svgIcon"],[1,"fuse-mat-rounded","fuse-mat-dense","fuse-mat-no-subscript","flex-auto","ml-4","lg:ml-0","sm:pr-0","md:pr-0","lg:pr-40","xl:pr-40","pr-0"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder","input"],["searchInput",""],["mat-flat-button","",1,"ml-4","px-1","sm:px-4","min-w-10",3,"color","click"],[1,"icon-size-5",3,"svgIcon"],[1,"hidden","sm:inline-block","ml-2"],[4,"ngIf","ngIfElse"],["loading",""],["noNotes",""],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"text-current",3,"svgIcon"],[1,"ml-3","leading-5","select-none","text-default"],[1,"-mx-2","mt-8",3,"items","columns","columnsTemplate"],["columnsTemplate",""],[1,"flex-1","px-2","space-y-4"],[1,"flex","flex-col","rounded-2xl","overflow-hidden","cursor-pointer","dark:bg-neutral-900","bg-white",3,"click"],[1,"flex","flex-auto","flex-col","p-6","space-y-4"],[1,"flex","flex-wrap","items-center","-m-1"],[1,"flex","items-end","flex-wrap","relative"],[1,"text-black","dark:text-white","place-self-end","ml-[8px]","flex","self-end","items-end","justify-self-end","justify-end","place-items-end","place-content-end","content-end","text-xl","font-semibold"],[1,"flex","relative","mb-1","ml-1"],["src","/assets/images/logo/coinsoran.svg","alt","",1,"w-5","h-5","dark:hidden","block"],["src","/assets/images/logo/coinsoran.svg","alt","",1,"w-5","h-5","dark:block","hidden"],["oncontextmenu","return false","id","pixell",1,"w-max-200","object-cover","max-h-100",3,"src"],[1,"font-semibold","line-clamp-3"],[1,"space-y-1.5"],[1,"ml-1.5","leading-5",3,"ngClass"],[1,"flex","items-center","justify-center","w-5","h-5"],[1,"w-4","h-4","rounded-xl","border-2"],[1,"text-hint","icon-size-5",3,"svgIcon"],[1,"m-1","py-0.5","px-3","rounded-xl","text-sm","font-medium","text-gray-500","bg-slate-100","dark:text-gray-300","dark:bg-gray-700"],[1,"flex","items-center","relative","ml-2"],[1,"text-xl","text-green-600","mr-2"],[1,"text-xl","text-red-600","mr-2"],[1,"w-20","h-20","grid","place-items-end","absolute","flex","items-center","self-end"],["class","w-1/2 h-1/2 rounded-full -mt-40","alt","User pfp",3,"src",4,"ngIf","ngIfElse"],["showAvatar",""],["alt","User pfp",1,"w-1/2","h-1/2","rounded-full","-mt-40",3,"src"],["alt","User avatar",1,"w-1/2","h-1/2","rounded-full","-mt-40",3,"src"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","bg-transparent","dark:bg-transparent"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-transparent","dark:bg-transparent"],[1,"icon-size-24",3,"svgIcon"]],template:function(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"div",0)(1,"mat-drawer-container",1)(2,"mat-drawer",2,3)(4,"div",4)(5,"div",5)(6,"div",6),t.NdJ("click",function(){return o.resetFilter()}),t._UZ(7,"mat-icon",7),t.TgZ(8,"div",8),t._uU(9," MyNotes "),t.qZA()(),t.TgZ(10,"div",9),t.NdJ("click",function(){return o.filterByArchived()}),t._UZ(11,"mat-icon",10),t.TgZ(12,"div",11),t._uU(13," Notes "),t.qZA()(),t.YNc(14,Tt,2,2,"ng-container",12),t.ALo(15,"async"),t.qZA()()(),t.TgZ(16,"mat-drawer-content",13)(17,"div",14)(18,"div",15)(19,"div",16)(20,"button",17),t.NdJ("click",function(){t.CHM(i);const r=t.MAs(3);return t.KtG(r.toggle())}),t._UZ(21,"mat-icon",18),t.qZA(),t.TgZ(22,"mat-form-field",19),t._UZ(23,"mat-icon",20),t.TgZ(24,"input",21,22),t.NdJ("input",function(){t.CHM(i);const r=t.MAs(25);return t.KtG(o.filterByQuery(r.value))}),t.qZA()()(),t.TgZ(26,"button",23),t.NdJ("click",function(){return o.addNewNote()}),t._UZ(27,"mat-icon",24),t.TgZ(28,"span",25),t._uU(29,"New note"),t.qZA()()(),t.YNc(30,Ht,2,2,"ng-container",26),t.ALo(31,"async"),t.YNc(32,qt,3,0,"ng-template",null,27,t.W1O),t.YNc(34,Et,4,1,"ng-template",null,28,t.W1O),t.qZA()()()()}if(2&e){const i=t.MAs(33);t.xp6(2),t.Q6J("mode",o.drawerMode)("opened",o.drawerOpened),t.xp6(4),t.Q6J("matRippleDisabled","notes"===o.filterStatus),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:pencil-alt"),t.xp6(3),t.Q6J("ngClass",t.WLB(20,$,"archived"===o.filterStatus,"archived"!==o.filterStatus))("matRippleDisabled","archived"===o.filterStatus),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:pencil-alt"),t.xp6(3),t.Q6J("ngIf",t.lcZ(15,16,o.labels$)),t.xp6(7),t.Q6J("svgIcon","heroicons_outline:menu"),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(1),t.Q6J("autocomplete","off")("placeholder","Search notes"),t.xp6(2),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus-circle"),t.xp6(3),t.Q6J("ngIf",t.lcZ(31,18,o.notes$))("ngIfElse",i)}},dependencies:[C.lW,f.KE,f.qo,N.Hw,Z.Nt,w.wG,k.jA,k.kh,k.LW,H,_.mk,_.sg,_.O5,_.Ov],encapsulation:2,changeDetection:0}),n})()}]}];let Gt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[J.Bz.forChild(Kt),C.ot,A.p9,d.Is,f.lN,N.Ps,Z.c,T.Tx,w.si,k.SJ,q,E.m]}),n})()}}]);