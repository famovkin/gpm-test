(function(){"use strict";var e={8497:function(e,t,s){var r=s(9963),n=s(6252);function o(e,t){const s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(s)}var a=s(3744);const i={},l=(0,a.Z)(i,[["render",o]]);var u=l;const d={class:"button"};function p(e,t,s,r,o,a){return(0,n.wg)(),(0,n.iD)("button",d,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])}var c={name:"my-button"};const m=(0,a.Z)(c,[["render",p],["__scopeId","data-v-443da915"]]);var h=m,f=s(3577);const v={class:"filter"},g=["onClick","onKeydown"];function _(e,t,s,o,a,i){return(0,n.wg)(),(0,n.iD)("ul",v,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.options,(e=>((0,n.wg)(),(0,n.iD)("li",{class:(0,f.C_)(["filter__item",{filter__item_active:s.selectedFilter===e.value}]),tabindex:"0",onClick:t=>i.onClickFilter(e),onKeydown:(0,r.D2)((t=>i.onClickFilter(e)),["enter"]),key:e.id},(0,f.zw)(e.name),43,g)))),128))])}var y={name:"my-filter",props:{options:{type:Array,default:()=>[]},selectedFilter:{type:String,default:"All"}},methods:{onClickFilter(e){this.$emit("change",e.value)}}};const w=(0,a.Z)(y,[["render",_],["__scopeId","data-v-638f05a9"]]);var U=w;const b={class:"preloader"},k=(0,n._)("div",{class:"preloader__content"},[(0,n._)("div"),(0,n._)("div"),(0,n._)("div"),(0,n._)("div")],-1),D=[k];function C(e,t,s,r,o,a){return(0,n.wg)(),(0,n.iD)("div",b,D)}var V={name:"my-preloader"};const $=(0,a.Z)(V,[["render",C]]);var j=$;function x(e,t,s,o,a,i){return e.show?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"popup",onClick:t[1]||(t[1]=(...t)=>e.closePopup&&e.closePopup(...t)),onKeydown:t[2]||(t[2]=(0,r.D2)(((...t)=>e.closePopup&&e.closePopup(...t)),["esc"]))},[(0,n._)("div",{class:"popup__content",onClick:t[0]||(t[0]=(0,r.iM)((()=>{}),["stop"]))},[(0,n.WI)(e.$slots,"default",{},void 0,!0)])],32)):(0,n.kq)("",!0)}var F={props:{show:{type:Boolean,default:!1}},methods:{closePopup(){this.$emit("update:show",!1)}}},O={name:"my-popup",mixins:[F]};const L=(0,a.Z)(O,[["render",x],["__scopeId","data-v-54055d0e"]]);var P=L;const W=["for"],A=["id","type","pattern","placeholder","minlength","maxlength","value"];function N(e,t,s,r,o,a){return(0,n.wg)(),(0,n.iD)("label",{class:"input",for:s.inputName},[(0,n.Uk)((0,f.zw)(s.inputName)+" ",1),(0,n._)("input",{class:"input__field",id:s.inputName,type:s.inputType,pattern:s.pattern,placeholder:s.placeholder,minlength:s.min,maxlength:s.max,value:s.modelValue,onInput:t[0]||(t[0]=(...e)=>a.updateInput&&a.updateInput(...e)),required:""},null,40,A)],8,W)}var S={name:"my-input",props:{modelValue:[String,Number],inputName:String,inputType:String,pattern:String,placeholder:String,min:String,max:String},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const z=(0,a.Z)(S,[["render",N],["__scopeId","data-v-1d88aff6"]]);var E=z,I=[h,U,j,P,E],T={mounted(e){e.focus()},name:"focus"},R={mounted(e,t){const s={rootMargin:"0px",threshold:1},r=e=>{e[0].isIntersecting&&"All"===t.value.selectedFilter&&t.value.cb()},n=new IntersectionObserver(r,s);n.observe(e)},name:"intersection"},Z=[T,R],q=s(2119);const M={key:0,class:"profile"},H={class:"profile__content"},J=(0,n._)("div",{class:"profile__background"},null,-1),K=["src","alt"],B={class:"profile__texts"},Y={class:"profile__title"},Q={class:"profile__subtitle"},G={class:"profile__info"},X=(0,n._)("strong",null,"Joining Date: ",-1),ee={class:"profile__info"},te=(0,n._)("strong",null,"Phone number: ",-1),se={class:"profile__info"},re=(0,n._)("strong",null,"Email: ",-1),ne={class:"profile__info"},oe=(0,n._)("strong",null,"About: ",-1),ae={class:"profile__buttons"},ie=(0,n.Uk)(" Back "),le=(0,n.Uk)(" Delete ");function ue(e,t,s,r,o,a){const i=(0,n.up)("my-button"),l=(0,n.up)("my-preloader");return o.isUserLoading?((0,n.wg)(),(0,n.j4)(l,{key:1})):((0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("div",H,[J,(0,n._)("img",{class:"profile__avatar",src:o.user.avatar,alt:o.user.name},null,8,K),(0,n._)("div",B,[(0,n._)("h1",Y,(0,f.zw)(o.user.name),1),(0,n._)("p",Q,(0,f.zw)(o.user.designation),1),(0,n._)("p",G,[X,(0,n.Uk)((0,f.zw)(o.user.joiningDate),1)]),(0,n._)("p",ee,[te,(0,n.Uk)((0,f.zw)(o.user.phone),1)]),(0,n._)("p",se,[re,(0,n.Uk)((0,f.zw)(o.user.email),1)]),(0,n._)("p",ne,[oe,(0,n.Uk)((0,f.zw)(o.user.about),1)]),(0,n._)("div",ae,[(0,n.Wm)(i,{class:"profile__button",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},{default:(0,n.w5)((()=>[ie])),_:1}),(0,n.Wm)(i,{class:"profile__button",onClick:a.removeUser},{default:(0,n.w5)((()=>[le])),_:1},8,["onClick"])])])])]))}s(1703);class de{constructor({baseUrl:e,headers:t}){this.baseUrl=e,this.headers=t}static checkServerResponse(e){if(e.ok)return e.json();throw new Error("Что-то пошло не так. Обратитесь к разработчику")}getUsers(e,t){return fetch(`${this.baseUrl}?page=${e}&limit=${t}`,{headers:this.headers}).then((e=>de.checkServerResponse(e)))}getUser(e){return fetch(`${this.baseUrl}/${e}`,{headers:this.headers}).then((e=>de.checkServerResponse(e)))}createUser(e){return fetch(`${this.baseUrl}`,{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then((e=>de.checkServerResponse(e)))}deleteUser(e){return fetch(`${this.baseUrl}/${e}`,{method:"DELETE",headers:this.headers}).then((e=>de.checkServerResponse(e)))}}const pe=new de({baseUrl:"https://627e5e6e271f386ceff6c423.mockapi.io/users",headers:{"Content-Type":"application/json"}});var ce=pe,me={data(){return{user:()=>{},isUserLoading:!1}},methods:{fetchUser(){this.isUserLoading=!0,ce.getUser(this.$route.params.id).then((e=>{this.user=e})).catch((e=>console.log("Ошибка. Запрос не выполнен:",e))).finally((()=>{this.isUserLoading=!1}))},removeUser(){ce.deleteUser(this.$route.params.id).then((()=>{this.$router.go(-1)})).catch((e=>console.log("Ошибка. Запрос не выполнен:",e)))}},mounted(){this.fetchUser()}};const he=(0,a.Z)(me,[["render",ue]]);var fe=he;const ve={class:"app"},ge={class:"header"},_e=(0,n._)("h1",null,"Dashboard",-1),ye=(0,n.Uk)(" + Add employee "),we={key:0,class:"observer",ref:"observer"};function Ue(e,t,s,r,o,a){const i=(0,n.up)("my-button"),l=(0,n.up)("my-filter"),u=(0,n.up)("users-list"),d=(0,n.up)("my-preloader"),p=(0,n.up)("user-form"),c=(0,n.up)("my-popup"),m=(0,n.Q2)("intersection");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",ve,[(0,n._)("div",ge,[_e,(0,n.Wm)(i,{onClick:a.openPopup},{default:(0,n.w5)((()=>[ye])),_:1},8,["onClick"])]),(0,n.Wm)(l,{options:o.filterOptions,selectedFilter:r.selectedFilter,onChange:a.changeFilter},null,8,["options","selectedFilter","onChange"]),r.isUsersLoading?((0,n.wg)(),(0,n.j4)(d,{key:1})):((0,n.wg)(),(0,n.j4)(u,{key:0,users:r.filteredUsers,onRemove:a.removeUser},null,8,["users","onRemove"]))]),r.isUsersLoading||o.isUsersEnd?(0,n.kq)("",!0):(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",we,null,512)),[[m,{cb:a.loadMoreUsers,usersCount:this.users.length,selectedFilter:this.selectedFilter}]]),(0,n.Wm)(c,{show:o.isPopupOpen,"onUpdate:show":t[0]||(t[0]=e=>o.isPopupOpen=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{onAdd:a.addUser,isLoading:o.isReqLoading},null,8,["onAdd","isLoading"])])),_:1},8,["show"])],64)}const be={key:0,class:"users-list"},ke={key:1,class:"users-list__title"};function De(e,t,s,o,a,i){const l=(0,n.up)("user-card");return s.users.length>0?((0,n.wg)(),(0,n.iD)("ul",be,[(0,n.Wm)(r.W3,{name:"users"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.users,(t=>((0,n.wg)(),(0,n.j4)(l,{key:t.id,user:t,onRemove:s=>e.$emit("remove",t)},null,8,["user","onRemove"])))),128))])),_:1})])):((0,n.wg)(),(0,n.iD)("h2",ke," Список пользователей пуст "))}const Ce={class:"user-card"},Ve={class:"user-card__number"},$e={class:"user-card__basic-info"},je=["src","alt"],xe={class:"user-card__wrapper"},Fe={class:"user-card__name"},Oe={class:"user-card__email"},Le={class:"user-card__code"},Pe={class:"user-card__designation"},We={class:"user-card__phone"},Ae={class:"user-card__date"},Ne=(0,n.Uk)("Remove");function Se(e,t,s,o,a,i){const l=(0,n.up)("my-button");return(0,n.wg)(),(0,n.iD)("li",Ce,[(0,n._)("p",Ve,(0,f.zw)(s.user.id),1),(0,n._)("div",$e,[(0,n._)("img",{class:"user-card__avatar",tabindex:"0",onClick:t[0]||(t[0]=t=>e.$router.push(`/${s.user.id}`)),onKeydown:t[1]||(t[1]=(0,r.D2)((t=>e.$router.push(`/${s.user.id}`)),["enter"])),src:s.user.avatar,alt:s.user.name},null,40,je),(0,n._)("div",xe,[(0,n._)("p",Fe,(0,f.zw)(s.user.name),1),(0,n._)("p",Oe,(0,f.zw)(s.user.email),1)])]),(0,n._)("p",Le,(0,f.zw)(s.user.employeeCode),1),(0,n._)("p",Pe,(0,f.zw)(s.user.designation),1),(0,n._)("p",We,(0,f.zw)(i.formatPhone(s.user.phone)),1),(0,n._)("p",Ae,(0,f.zw)(i.formatDate(s.user.joiningDate)),1),(0,n.Wm)(l,{onClick:t[2]||(t[2]=t=>e.$emit("remove",s.user))},{default:(0,n.w5)((()=>[Ne])),_:1})])}s(6699);var ze={props:{user:{type:Object,required:!0}},methods:{formatDate(e){const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],[s,r,n]=e.slice(0,10).split("-");return`${n} ${t[Number(r)-1]}, ${s}`},formatPhone(e){return e.split("-").filter((e=>"1"!==e)).join("-").split(".").join("-").split(" ").filter((e=>!e.includes("x"))).join("-").split(" ").map((e=>e.split("").filter((e=>"("!==e&&")"!==e)).join(""))).join("-")}}};const Ee=(0,a.Z)(ze,[["render",Se],["__scopeId","data-v-20dc77d6"]]);var Ie=Ee,Te={components:{UserCard:Ie},props:{users:{type:Array,required:!0}}};const Re=(0,a.Z)(Te,[["render",De],["__scopeId","data-v-6268e9ba"]]);var Ze=Re;const qe=e=>((0,n.dD)("data-v-6e19c244"),e=e(),(0,n.Cn)(),e),Me=qe((()=>(0,n._)("h2",{class:"form__title"},"Adding a new employee",-1)));function He(e,t,s,o,a,i){const l=(0,n.up)("my-input"),u=(0,n.up)("my-button"),d=(0,n.Q2)("focus");return(0,n.wg)(),(0,n.iD)("form",{class:"form",onSubmit:t[8]||(t[8]=(0,r.iM)(((...e)=>i.addUser&&i.addUser(...e)),["prevent"]))},[Me,(0,n.wy)((0,n.Wm)(l,{inputName:"Name",inputType:"text",placeholder:"First and last name",modelValue:a.user.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.user.name=e)},null,8,["modelValue"]),[[d]]),(0,n.Wm)(l,{inputName:"Email",inputType:"email",max:"32",placeholder:"example@gmail.com",modelValue:a.user.email,"onUpdate:modelValue":t[1]||(t[1]=e=>a.user.email=e)},null,8,["modelValue"]),(0,n.Wm)(l,{inputName:"Avatar link",inputType:"text",placeholder:"https://unsplash.com/photo-example",modelValue:a.user.avatar,"onUpdate:modelValue":t[2]||(t[2]=e=>a.user.avatar=e)},null,8,["modelValue"]),(0,n.Wm)(l,{inputName:"Employee code",inputType:"text",max:"5",min:"5",placeholder:"5 characters field",modelValue:a.user.employeeCode,"onUpdate:modelValue":t[3]||(t[3]=e=>a.user.employeeCode=e)},null,8,["modelValue"]),(0,n.Wm)(l,{inputName:"Designation",inputType:"text",max:"32",placeholder:"E.g. Developer",modelValue:a.user.designation,"onUpdate:modelValue":t[4]||(t[4]=e=>a.user.designation=e)},null,8,["modelValue"]),(0,n.Wm)(l,{inputName:"Phone",inputType:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",placeholder:"Format: 123-456-7890",modelValue:a.user.phone,"onUpdate:modelValue":t[5]||(t[5]=e=>a.user.phone=e)},null,8,["modelValue"]),(0,n.Wm)(l,{inputName:"About",inputType:"text",placeholder:"Few words about yourself",modelValue:a.user.about,"onUpdate:modelValue":t[6]||(t[6]=e=>a.user.about=e)},null,8,["modelValue"]),(0,n.Wm)(l,{inputName:"Joining date",inputType:"date",modelValue:a.user.joiningDate,"onUpdate:modelValue":t[7]||(t[7]=e=>a.user.joiningDate=e)},null,8,["modelValue"]),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,f.zw)(s.isLoading?"Loading...":"Add"),1)])),_:1})],32)}var Je={data(){return{user:{name:"",email:"",avatar:"",employeeCode:"",designation:"",phone:"",joiningDate:"",about:""}}},props:{isLoading:{type:Boolean,default:!1}},methods:{addUser(){this.$emit("add",this.user),this.name="",this.email="",this.avatar="",this.employeeCode="",this.designation="",this.phone="",this.joiningDate="",this.about=""}}};const Ke=(0,a.Z)(Je,[["render",He],["__scopeId","data-v-6e19c244"]]);var Be=Ke,Ye=s(2262);const Qe=()=>{const e=(0,Ye.iH)([]),t=(0,Ye.iH)(1),s=(0,Ye.iH)(10),r=(0,Ye.iH)(!1),o=()=>{r.value=!0,ce.getUsers(t.value,s.value).then((t=>{e.value=t})).catch((e=>console.log("Ошибка. Запрос не выполнен:",e))).finally((()=>{r.value=!1}))};return(0,n.bv)(o),{users:e,page:t,limit:s,isUsersLoading:r}};var Ge=Qe;const Xe=e=>{const t=(0,Ye.iH)("All"),s=(0,n.Fl)((()=>"All"===t.value?e.value:[...e.value].filter((e=>e.designation===t.value))));return{selectedFilter:t,filteredUsers:s}};var et=Xe,tt={name:"dash-board",components:{UsersList:Ze,UserForm:Be},setup(){const{users:e,page:t,limit:s,isUsersLoading:r}=Ge(),{selectedFilter:n,filteredUsers:o}=et(e);return{users:e,page:t,limit:s,isUsersLoading:r,selectedFilter:n,filteredUsers:o}},data(){return{filterOptions:[{id:1,name:"Employees List",value:"All"},{id:2,name:"Management",value:"Manager"},{id:3,name:"Development",value:"Developer"},{id:4,name:"Architecture",value:"Architect"}],isPopupOpen:!1,isReqLoading:!1,totalPages:0,isUsersEnd:!1}},methods:{openPopup(){this.isPopupOpen=!0},addUser(e){this.isReqLoading=!0,ce.createUser(e).then((e=>{this.users.length+1<=this.page*this.limit&&this.users.push(e)})).catch((e=>console.log("Ошибка. Запрос не выполнен:",e))).finally((()=>{this.isReqLoading=!1,this.isPopupOpen=!1}))},removeUser(e){ce.deleteUser(e.id).then((e=>{this.users=this.users.filter((t=>t.id!==e.id))})).catch((e=>console.log("Ошибка. Запрос не выполнен:",e)))},changeFilter(e){this.selectedFilter=e},loadMoreUsers(){this.page+=1;const e=this.users.length;ce.getUsers(this.page,this.limit).then((t=>{this.users=[...this.users,...t],e===this.users.length&&(this.isUsersEnd=!0)})).catch((e=>console.log("Ошибка. Запрос не выполнен: ",e)))}}};const st=(0,a.Z)(tt,[["render",Ue]]);var rt=st;const nt=[{path:"/",component:rt},{path:"/:id",component:fe}],ot=(0,q.p7)({routes:nt,history:(0,q.r5)()});var at=ot;const it=(0,r.ri)(u);I.forEach((e=>it.component(e.name,e))),Z.forEach((e=>it.directive(e.name,e))),it.use(at).mount("#app")}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,r,n,o){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],o=e[d][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||a>=o)&&Object.keys(s.O).every((function(e){return s.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<a&&(a=o));if(i){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,a=r[0],i=r[1],l=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(l)var d=l(s)}for(t&&t(r);u<a.length;u++)o=a[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},r=self["webpackChunkgpm_test"]=self["webpackChunkgpm_test"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(8497)}));r=s.O(r)})();
//# sourceMappingURL=app.2ed9695e.js.map