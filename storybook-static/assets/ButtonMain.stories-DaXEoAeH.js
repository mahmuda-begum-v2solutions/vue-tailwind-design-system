import{f as c,g as s,j as $,c as p,a as Or,k as qr,l as U,m as u,u as n,n as h,p as D,t as jr,q as Er}from"./vue.esm-bundler-CkGt5U3E.js";import{u as Fr}from"./useTheme-DiMTzzGZ.js";const O=(r,o)=>{const e=r.__vccOpts||r;for(const[i,l]of o)e[i]=l;return e},Ur={},Pr={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"};function Gr(r,o){return s(),c("svg",Pr,o[0]||(o[0]=[$("path",{d:"M12 20V4m-8 8l8 8 8-8",stroke:"currentColor","stroke-width":"2"},null,-1)]))}const Hr=O(Ur,[["render",Gr],["__scopeId","data-v-55602725"]]);Ur.__docgenInfo={displayName:"ArrowDown",description:"",tags:{},sourceFiles:["D:/TestProjects/VueStart/vue-tailwind-design-system/src/components/icons/outlined/ArrowDown.vue"]};const Vr=Object.freeze(Object.defineProperty({__proto__:null,default:Hr},Symbol.toStringTag,{value:"Module"})),Dr={},Zr={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"};function Jr(r,o){return s(),c("svg",Zr,o[0]||(o[0]=[$("path",{d:"M12 4v16m8-8l-8-8-8 8",stroke:"currentColor","stroke-width":"2"},null,-1)]))}const Kr=O(Dr,[["render",Jr],["__scopeId","data-v-3a270da2"]]);Dr.__docgenInfo={displayName:"ArrowUp",description:"",tags:{},sourceFiles:["D:/TestProjects/VueStart/vue-tailwind-design-system/src/components/icons/outlined/ArrowUp.vue"]};const Qr=Object.freeze(Object.defineProperty({__proto__:null,default:Kr},Symbol.toStringTag,{value:"Module"})),Lr={},Xr={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"};function Yr(r,o){return s(),c("svg",Xr,o[0]||(o[0]=[$("path",{d:"M5 13l4 4L19 7",stroke:"currentColor","stroke-width":"2",fill:"none"},null,-1)]))}const ro=O(Lr,[["render",Yr],["__scopeId","data-v-34436bfd"]]);Lr.__docgenInfo={displayName:"CheckMark",description:"",tags:{},sourceFiles:["D:/TestProjects/VueStart/vue-tailwind-design-system/src/components/icons/outlined/CheckMark.vue"]};const oo=Object.freeze(Object.defineProperty({__proto__:null,default:ro},Symbol.toStringTag,{value:"Module"})),eo=Object.assign({"../components/icons/outlined/ArrowDown.vue":Vr,"../components/icons/outlined/ArrowUp.vue":Qr,"../components/icons/outlined/CheckMark.vue":oo}),$r={};for(const[r,o]of Object.entries(eo)){const e=r.match(/([^/]+)\.vue$/);if(e){const i=e[1];$r[i]=o.default}}function L(r){return $r[r]||null}function no(r){const o=p(()=>r.icon&&!r.label?`${r.icon} button`:r.label??"Button"),e=p(()=>!!r.disabled||!!r.loading),i=p(()=>r.variant==="link"?"link":"button");return{"aria-label":o.value,"aria-disabled":e.value,role:i.value,tabIndex:e.value?-1:0}}const ao="flex items-center justify-center transition-all duration-200 focus:outline-none",to={1:"border",2:"border-2"},lo={None:"rounded-none",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",pill:"rounded-full",circle:"rounded-full"},F={xsmall:"3",small:"4",default:"5",medium:"5",large:"6",extralarge:"7",mega:"8"},io={xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl"},so={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"},po={none:"leading-none",6:"leading-6",7:"leading-7",8:"leading-8"};function co(r){if(r)try{const o=r.trim();return o.startsWith("{")?JSON.parse(o):Object.fromEntries(o.split(";").map(e=>e.trim()).filter(Boolean).map(e=>{const[i,...l]=e.split(":");return[i.trim(),l.join(":").trim()]}))}catch{console.warn("Invalid styles prop:",r);return}}function uo(r,o,e){return r==="transparent"?["bg-transparent",`text-${e??o}`,"cursor-not-allowed","opacity-50"]:[`bg-${o}-disabled`,`text-${e??"white"}`,"cursor-not-allowed"]}function bo(r,o,e){switch(r){case"transparent":return["bg-transparent",`text-${e??o}`,`hover:bg-${o}-subtle`];case"subtle":return[`bg-${o}-subtle`,`text-${e??o}`,`hover:bg-${o}-subdued`];case"subdued":return[`bg-${o}-subdued`,`text-${e??"white"}`,`hover:bg-${o}`];case"solid":default:return[`bg-${o}`,`text-${e??"white"}`,`hover:bg-${o}-hover`]}}function yo(r){const{setTheme:o}=Fr(),e=no(r);Or(()=>{r.theme&&o(r.theme)});const i=p(()=>F[r.iconSize??"default"]??F.default),l=p(()=>r.leadingIcon?L(r.leadingIcon):null),b=p(()=>r.trailingIcon?L(r.trailingIcon):null),y=p(()=>r.Icon?L(r.Icon):null),m=p(()=>co(r.styles));return{buttonClass:p(()=>{const g=r.role??"primary",C=r.backgroundColorType??"solid",T=r.borderColorType??"transparent",a=r.borderWidth??"None",j=r.buttonRadius??"md",E=r.textColor,d=[ao];return r.disabled?d.push(...uo(C,g,E)):(d.push(...bo(C,g,E)),a!=="None"&&(d.push(to[a]),d.push(T==="transparent"?"border-transparent":`border-${T}`))),d.push(lo[j]),d.push(io[r.typographySize??"base"]??"text-base"),d.push(so[r.fontWeight??"semibold"]??"font-semibold"),d.push(po[r.leading??"none"]??"leading-none"),d.push(r.classes??"px-3 py-2"),d.join(" ")}),iconSize:i,leadingIconComponent:l,trailingIconComponent:b,IconComponent:y,styleObject:m,a11yProps:e}}const mo=["disabled"],go={key:3},t=qr({__name:"ButtonMain",props:{label:{},disabled:{type:Boolean},isLoading:{type:Boolean},role:{},backgroundColorType:{},borderColorType:{},borderWidth:{},buttonRadius:{},textColor:{},classes:{},iconSize:{},leadingIcon:{},trailingIcon:{},Icon:{},styles:{},theme:{},typographySize:{},fontWeight:{},leading:{}},emits:["click"],setup(r,{emit:o}){const e=r,{buttonClass:i,iconSize:l,leadingIconComponent:b,trailingIconComponent:y,IconComponent:m,styleObject:q,a11yProps:g}=yo(e),C=o;function T(a){!e.isLoading&&!e.disabled&&(console.log("consoled yeeee"),C("click",a))}return(a,j)=>(s(),c("button",Er({class:n(i),disabled:a.disabled,style:n(q)},n(g),{onClick:T}),[n(b)&&a.leadingIcon&&!a.isLoading?(s(),U(D(n(b)),{key:0,class:h(`mr-1 w-${n(l)} h-${n(l)}`)},null,8,["class"])):u("",!0),a.isLoading?(s(),c("span",{key:1,class:h(["animate-spin border-2 border-t-transparent border-white rounded-full",[`w-${n(l)} h-${n(l)}`,a.label?"mr-2":""]])},null,2)):u("",!0),n(m)&&a.Icon&&!a.isLoading?(s(),U(D(n(m)),{key:2,class:h(`w-${n(l)} h-${n(l)}`)},null,8,["class"])):u("",!0),a.label?(s(),c("span",go,jr(a.label),1)):u("",!0),n(y)&&a.trailingIcon&&!a.isLoading?(s(),U(D(n(y)),{key:4,class:h(`ml-1 w-${n(l)} h-${n(l)}`)},null,8,["class"])):u("",!0)],16,mo))}});t.__docgenInfo={exportName:"default",displayName:"ButtonMain",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"isLoading",required:!1,type:{name:"boolean"}},{name:"role",required:!1,type:{name:"ColorRole"}},{name:"backgroundColorType",required:!1,type:{name:"BackgroundColorType"}},{name:"borderColorType",required:!1,type:{name:"BorderColorType"}},{name:"borderWidth",required:!1,type:{name:"BorderWidth"}},{name:"buttonRadius",required:!1,type:{name:"ButtonRadius"}},{name:"textColor",required:!1,type:{name:"TextColor"}},{name:"classes",required:!1,type:{name:"string"}},{name:"iconSize",required:!1,type:{name:"IconSize"}},{name:"leadingIcon",required:!1,type:{name:"IconName"}},{name:"trailingIcon",required:!1,type:{name:"IconName"}},{name:"Icon",required:!1,type:{name:"IconName"}},{name:"styles",required:!1,type:{name:"string"}},{name:"theme",required:!1,type:{name:"Theme"}},{name:"typographySize",required:!1,type:{name:"TypographySize"}},{name:"fontWeight",required:!1,type:{name:"FontWeight"}},{name:"leading",required:!1,type:{name:"Leading"}}],events:[{name:"click",type:{names:["MouseEvent"]}}],sourceFiles:["D:/TestProjects/VueStart/vue-tailwind-design-system/src/components/v1/Button/ButtonMain.vue"]};const ho={title:"DesignSystem/ButtonMain",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},disabled:{control:"boolean"},isLoading:{control:"boolean"},role:{control:"select",options:["primary","secondary","tertiary","success","warning","danger","neutral"]},backgroundColorType:{control:"select",options:["solid","transparent","subtle","subdued"]},borderColorType:{control:"select",options:["transparent","primary","secondary","tertiary","success","warning","danger","neutral"]},borderWidth:{control:"select",options:["None","1","2"]},buttonRadius:{control:"select",options:["None","sm","md","lg","pill","circle"]},textColor:{control:"select",options:["primary","secondary","tertiary","success","warning","danger","neutral","white","black"]},iconSize:{control:"select",options:["xsmall","small","default","medium","large","extralarge","mega"]},classes:{control:"text"},leadingIcon:{control:"select",options:["None","ArrowUp","ArrowDown","CheckMark"]},trailingIcon:{control:"select",options:["None","ArrowUp","ArrowDown","CheckMark"]},Icon:{control:"select",options:["None","ArrowUp","ArrowDown","CheckMark"]},styles:{control:"text"},theme:{control:"select",options:["light","dark"]},typographySize:{control:"select",options:["xs","sm","base","lg","xl","2xl"]},fontWeight:{control:"select",options:["normal","medium","semibold","bold"]},leading:{control:"select",options:["none","6","7","8"]},onClick:{action:"click"}}},B={args:{label:"Button",disabled:!1,isLoading:!1,role:"primary",backgroundColorType:"solid",borderColorType:"primary",borderWidth:"1",buttonRadius:"pill",textColor:"white",classes:"shadow-md p-3",iconSize:"default",leadingIcon:"None",trailingIcon:"Button",Icon:"None",styles:"",theme:"light",typographySize:"lg",fontWeight:"bold",leading:"6"}},f={args:{label:"Button"}},k={render:()=>({components:{ButtonMain:t},template:`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Background Color</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="solid" backgroundColorType="solid" role="primary"/>
            <ButtonMain label="transparent" backgroundColorType="transparent" role="primary" />
            <ButtonMain label="subtle" backgroundColorType="subtle" role="primary" />
            <ButtonMain label="subdued" backgroundColorType="subdued" role="primary" />
          </div>
        </div>
    `})},w={render:()=>({components:{ButtonMain:t},template:`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Background Color Type</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="primary" backgroundColorType="solid" role="primary"/>
            <ButtonMain label="secondary" backgroundColorType="solid" role="secondary" />
            <ButtonMain label="tertiary" backgroundColorType="solid" role="tertiary" />
            <ButtonMain label="success" backgroundColorType="solid" role="success" />
            <ButtonMain label="warning" backgroundColorType="solid" role="warning" />
            <ButtonMain label="danger" backgroundColorType="solid" role="danger" />
            <ButtonMain label="neutral" backgroundColorType="solid" role="neutral" />
          </div>
        </div>
    `})},v={render:()=>({components:{ButtonMain:t},template:`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Text Color</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="primary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="primary" textColor="primary"/>
            <ButtonMain label="secondary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="secondary" textColor="secondary"/>
            <ButtonMain label="tertiary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="tertiary" textColor="tertiary"/>
            <ButtonMain label="success" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="success" textColor="success"/>
            <ButtonMain label="warning" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="warning" textColor="warning"/>
            <ButtonMain label="danger" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="danger" textColor="danger"/>
            <ButtonMain label="neutral" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="neutral" textColor="neutral"/>
              <ButtonMain label="white" backgroundColorType="solid" role="neutral" borderWidth="2" borderColorType="transparent" textColor="white"/>
                <ButtonMain label="black" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="neutral" textColor="black"/>
          </div>
        </div>
    `})},M={render:()=>({components:{ButtonMain:t},template:`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Border Color</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="transparent" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="transparent"/>
            <ButtonMain label="primary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="primary"/>
            <ButtonMain label="secondary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="secondary"/>
            <ButtonMain label="tertiary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="tertiary"/>
            <ButtonMain label="success" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="success"/>
            <ButtonMain label="warning" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="warning"/>
            <ButtonMain label="danger" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="danger"/>
            <ButtonMain label="neutral" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="neutral"/>
          </div>
        </div>
    `})},x={render:()=>({components:{ButtonMain:t},template:`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Border Width</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="None" role="primary" backgroundColorType="transparent" borderColorType="transparent" borderWidth="None"/>
            <ButtonMain label="1" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="1"/>
            <ButtonMain label="2" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2"/>
             <ButtonMain label="None" role="primary" backgroundColorType="transparent" borderColorType="transparent" classes="shadow-md" borderWidth="None"/>
          </div>
        </div>
    `})},I={render:()=>({components:{ButtonMain:t},template:`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Border Radius with BackGround Color</h3>
          <div class="flex flex-wrap gap-4">
             <ButtonMain label="None" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="None"/>
            <ButtonMain label="sm" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="sm"/>
            <ButtonMain label="md" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md"/>
            <ButtonMain label="lg" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="lg"/>
            <ButtonMain label="pill (variant)" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="pill"/>
            <ButtonMain label="circle" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="circle" classes="!p-3 w-12 h-12"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">Border Radius with Only Border</h3>
          <div class="flex flex-wrap gap-4">
             <ButtonMain label="None" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="None"/>
            <ButtonMain label="sm" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="sm"/>
            <ButtonMain label="md" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"/>
            <ButtonMain label="lg" role="primary" backgroundColorType="transparent" borderColorType="primary"borderWidth="2" buttonRadius="lg"/>
            <ButtonMain label="pill (variant)" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="pill"/>
            <ButtonMain label="circle" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="circle" classes="!p-3 w-12 h-12"/>
          </div>
        </div>
    `})},W={render:()=>({components:{ButtonMain:t},template:`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Icon</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="circle" classes="!p-3 w-12 h-12" Icon="ArrowUp"/>
             <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="circle" classes="!p-3 w-12 h-12" Icon="ArrowUp"/>
             <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="None" Icon="ArrowUp"/>
              <ButtonMain role="secondary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="circle" classes="!p-3 w-12 h-12" Icon="ArrowDown"/>
             <ButtonMain role="secondary" backgroundColorType="transparent" borderColorType="secondary" borderWidth="2" buttonRadius="circle" classes="!p-3 w-12 h-12" Icon="ArrowDown"/>
             <ButtonMain role="secondary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="None" Icon="ArrowDown"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">leading Icon</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="Solid BackGround" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md" leadingIcon="ArrowUp"/>
             <ButtonMain label="Only Border" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md" leadingIcon="ArrowUp"/>
             <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp"/>
              <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" classes="shadow-md"/>
          </div>
        </div>
         <div>
          <h3 class="mb-4 font-semibold text-lg">trailing Icon</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="Solid BackGround" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md" trailingIcon="ArrowDown"/>
             <ButtonMain label="Only Border" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md" trailingIcon="ArrowDown"/>
             <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" trailingIcon="ArrowDown"/>
              <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" trailingIcon="ArrowDown" classes="shadow-md"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">both leading and trailing Icon with label</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="Solid BackGround" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
             <ButtonMain label="Only Border" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
             <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
              <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown" classes="shadow-md"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">both leading and trailing Icon</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
             <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
             <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
              <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown" classes="shadow-md"/>
          </div>
        </div>
        </div>
    `})},N={render:()=>({components:{ButtonMain:t},template:`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Icon Size</h3>
          <div class="flex flex-wrap gap-4">
             <ButtonMain label="xsmall" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="xsmall"/>
             <ButtonMain label="small" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="small"/>
             <ButtonMain label="default" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="default"/>
             <ButtonMain label="medium" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="medium"/>
             <ButtonMain label="large" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="large"/>
             <ButtonMain label="extralarge" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="extralarge"/>
             <ButtonMain label="mega" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="mega"/>
          </div>
        </div>
      </div>
    `})},R={render:()=>({components:{ButtonMain:t},template:`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Custom Class</h3>
          <div class="flex flex-wrap gap-4">
             <ButtonMain label="!px-3 !py-2 shadow-md" role="primary" backgroundColorType="transparent" borderColorType="transparent" classes="!px-3 shadow-md" borderWidth="None"/>

           <ButtonMain label="!p-3 w-18 h-18" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="circle" classes="!p-3 w-18 h-18"/>
        </div>
      </div>
      </div>
    `})},S={render:()=>({components:{ButtonMain:t},template:`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Custom Style</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="width: -webkit-fill-available;" backgroundColorType="solid" role="primary" styles="width: -webkit-fill-available;"/>
          </div>
        </div>
      </div>
    `})},A={render:()=>({components:{ButtonMain:t},template:`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Disabled</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="primary" backgroundColorType="solid" role="primary" disabled="true"/>
            <ButtonMain label="secondary" backgroundColorType="solid" role="secondary"disabled="true" />
            <ButtonMain label="tertiary" backgroundColorType="solid" role="tertiary" disabled="true"/>
            <ButtonMain label="success" backgroundColorType="solid" role="success" disabled="true"/>
            <ButtonMain label="warning" backgroundColorType="solid" role="warning" disabled="true"/>
            <ButtonMain label="danger" backgroundColorType="solid" role="danger" disabled="true"/>
            <ButtonMain label="neutral" backgroundColorType="solid" role="neutral" disabled="true"/>
          </div>
        </div>
      </div>
    `})},z={render:()=>({components:{ButtonMain:t},template:`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Loading</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="primary" backgroundColorType="solid" role="primary" isLoading="true"/>
            <ButtonMain label="secondary" backgroundColorType="solid" role="secondary" isLoading="true"/>
            <ButtonMain label="tertiary" backgroundColorType="solid" role="tertiary" isLoading="true"/>
            <ButtonMain label="success" backgroundColorType="solid" role="success" isLoading="true"/>
            <ButtonMain label="warning" backgroundColorType="solid" role="warning" isLoading="true"/>
            <ButtonMain label="danger" backgroundColorType="solid" role="danger" isLoading="true"/>
            <ButtonMain label="neutral" backgroundColorType="solid" role="neutral" isLoading="true"/>
          </div>
        </div>
      </div>
    `})},_={render:()=>({components:{ButtonMain:t},template:`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Font Typograhy - SIZE</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="xs size" backgroundColorType="solid" role="primary" typographySize="xs"/>
            <ButtonMain label="sm size" backgroundColorType="solid" role="primary" typographySize="sm"/>
            <ButtonMain label="base size" backgroundColorType="solid" role="primary" typographySize="base"/>
            <ButtonMain label="lg size" backgroundColorType="solid" role="primary" typographySize="lg"/>
            <ButtonMain label="xl size" backgroundColorType="solid" role="primary" typographySize="xl"/>
            <ButtonMain label="2xl size" backgroundColorType="solid" role="primary" typographySize="2xl"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">Font Typograhy - WEIGHT</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="normal" backgroundColorType="transparent" role="primary" fontWeight="normal"/>
             <ButtonMain label="medium" backgroundColorType="transparent" role="primary" fontWeight="medium"/>
              <ButtonMain label="semibold" backgroundColorType="transparent" role="primary" fontWeight="semibold"/>
               <ButtonMain label="bold" backgroundColorType="transparent" role="primary" fontWeight="bold"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">Font Typograhy - LINE HEIGHT</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="leading-none test" backgroundColorType="transparent" role="primary" leading="none"/>
             <ButtonMain label="leading-6 test" backgroundColorType="transparent" role="primary" leading="6"/>
              <ButtonMain label="leading-7 test" backgroundColorType="transparent" role="primary" leading="7"/>
               <ButtonMain label="leading-8 test" backgroundColorType="transparent" role="primary" leading="8"/>
          </div>
        </div>
      </div>
    `})};var P,G,H;B.parameters={...B.parameters,docs:{...(P=B.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    disabled: false,
    isLoading: false,
    role: 'primary',
    backgroundColorType: 'solid',
    borderColorType: 'primary',
    borderWidth: '1',
    buttonRadius: 'pill',
    textColor: 'white',
    classes: 'shadow-md p-3',
    iconSize: 'default',
    leadingIcon: 'None',
    trailingIcon: 'Button',
    Icon: 'None',
    styles: '',
    theme: 'light',
    typographySize: 'lg',
    fontWeight: 'bold',
    leading: '6'
  }
}`,...(H=(G=B.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var V,Z,J;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(J=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,X;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ButtonMain
    },
    template: \`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Background Color</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="solid" backgroundColorType="solid" role="primary"/>
            <ButtonMain label="transparent" backgroundColorType="transparent" role="primary" />
            <ButtonMain label="subtle" backgroundColorType="subtle" role="primary" />
            <ButtonMain label="subdued" backgroundColorType="subdued" role="primary" />
          </div>
        </div>
    \`
  })
}`,...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,rr,or;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ButtonMain
    },
    template: \`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Background Color Type</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="primary" backgroundColorType="solid" role="primary"/>
            <ButtonMain label="secondary" backgroundColorType="solid" role="secondary" />
            <ButtonMain label="tertiary" backgroundColorType="solid" role="tertiary" />
            <ButtonMain label="success" backgroundColorType="solid" role="success" />
            <ButtonMain label="warning" backgroundColorType="solid" role="warning" />
            <ButtonMain label="danger" backgroundColorType="solid" role="danger" />
            <ButtonMain label="neutral" backgroundColorType="solid" role="neutral" />
          </div>
        </div>
    \`
  })
}`,...(or=(rr=w.parameters)==null?void 0:rr.docs)==null?void 0:or.source}}};var er,nr,ar;v.parameters={...v.parameters,docs:{...(er=v.parameters)==null?void 0:er.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ButtonMain
    },
    template: \`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Text Color</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="primary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="primary" textColor="primary"/>
            <ButtonMain label="secondary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="secondary" textColor="secondary"/>
            <ButtonMain label="tertiary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="tertiary" textColor="tertiary"/>
            <ButtonMain label="success" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="success" textColor="success"/>
            <ButtonMain label="warning" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="warning" textColor="warning"/>
            <ButtonMain label="danger" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="danger" textColor="danger"/>
            <ButtonMain label="neutral" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="neutral" textColor="neutral"/>
              <ButtonMain label="white" backgroundColorType="solid" role="neutral" borderWidth="2" borderColorType="transparent" textColor="white"/>
                <ButtonMain label="black" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="neutral" textColor="black"/>
          </div>
        </div>
    \`
  })
}`,...(ar=(nr=v.parameters)==null?void 0:nr.docs)==null?void 0:ar.source}}};var tr,lr,ir;M.parameters={...M.parameters,docs:{...(tr=M.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ButtonMain
    },
    template: \`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Border Color</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="transparent" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="transparent"/>
            <ButtonMain label="primary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="primary"/>
            <ButtonMain label="secondary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="secondary"/>
            <ButtonMain label="tertiary" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="tertiary"/>
            <ButtonMain label="success" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="success"/>
            <ButtonMain label="warning" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="warning"/>
            <ButtonMain label="danger" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="danger"/>
            <ButtonMain label="neutral" backgroundColorType="transparent" role="primary" borderWidth="2" borderColorType="neutral"/>
          </div>
        </div>
    \`
  })
}`,...(ir=(lr=M.parameters)==null?void 0:lr.docs)==null?void 0:ir.source}}};var dr,sr,pr;x.parameters={...x.parameters,docs:{...(dr=x.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ButtonMain
    },
    template: \`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Border Width</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="None" role="primary" backgroundColorType="transparent" borderColorType="transparent" borderWidth="None"/>
            <ButtonMain label="1" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="1"/>
            <ButtonMain label="2" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2"/>
             <ButtonMain label="None" role="primary" backgroundColorType="transparent" borderColorType="transparent" classes="shadow-md" borderWidth="None"/>
          </div>
        </div>
    \`
  })
}`,...(pr=(sr=x.parameters)==null?void 0:sr.docs)==null?void 0:pr.source}}};var cr,ur,br;I.parameters={...I.parameters,docs:{...(cr=I.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ButtonMain
    },
    template: \`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Border Radius with BackGround Color</h3>
          <div class="flex flex-wrap gap-4">
             <ButtonMain label="None" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="None"/>
            <ButtonMain label="sm" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="sm"/>
            <ButtonMain label="md" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md"/>
            <ButtonMain label="lg" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="lg"/>
            <ButtonMain label="pill (variant)" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="pill"/>
            <ButtonMain label="circle" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="circle" classes="!p-3 w-12 h-12"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">Border Radius with Only Border</h3>
          <div class="flex flex-wrap gap-4">
             <ButtonMain label="None" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="None"/>
            <ButtonMain label="sm" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="sm"/>
            <ButtonMain label="md" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"/>
            <ButtonMain label="lg" role="primary" backgroundColorType="transparent" borderColorType="primary"borderWidth="2" buttonRadius="lg"/>
            <ButtonMain label="pill (variant)" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="pill"/>
            <ButtonMain label="circle" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="circle" classes="!p-3 w-12 h-12"/>
          </div>
        </div>
    \`
  })
}`,...(br=(ur=I.parameters)==null?void 0:ur.docs)==null?void 0:br.source}}};var yr,mr,gr;W.parameters={...W.parameters,docs:{...(yr=W.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ButtonMain
    },
    template: \`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Icon</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="circle" classes="!p-3 w-12 h-12" Icon="ArrowUp"/>
             <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="circle" classes="!p-3 w-12 h-12" Icon="ArrowUp"/>
             <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="None" Icon="ArrowUp"/>
              <ButtonMain role="secondary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="circle" classes="!p-3 w-12 h-12" Icon="ArrowDown"/>
             <ButtonMain role="secondary" backgroundColorType="transparent" borderColorType="secondary" borderWidth="2" buttonRadius="circle" classes="!p-3 w-12 h-12" Icon="ArrowDown"/>
             <ButtonMain role="secondary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="None" Icon="ArrowDown"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">leading Icon</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="Solid BackGround" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md" leadingIcon="ArrowUp"/>
             <ButtonMain label="Only Border" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md" leadingIcon="ArrowUp"/>
             <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp"/>
              <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" classes="shadow-md"/>
          </div>
        </div>
         <div>
          <h3 class="mb-4 font-semibold text-lg">trailing Icon</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="Solid BackGround" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md" trailingIcon="ArrowDown"/>
             <ButtonMain label="Only Border" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md" trailingIcon="ArrowDown"/>
             <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" trailingIcon="ArrowDown"/>
              <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" trailingIcon="ArrowDown" classes="shadow-md"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">both leading and trailing Icon with label</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="Solid BackGround" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
             <ButtonMain label="Only Border" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
             <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
              <ButtonMain label="No Background No Border" role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown" classes="shadow-md"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">both leading and trailing Icon</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
             <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
             <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown"/>
              <ButtonMain role="primary" backgroundColorType="transparent" borderColorType="transparent"  buttonRadius="md" leadingIcon="ArrowUp" trailingIcon="ArrowDown" classes="shadow-md"/>
          </div>
        </div>
        </div>
    \`
  })
}`,...(gr=(mr=W.parameters)==null?void 0:mr.docs)==null?void 0:gr.source}}};var Cr,Tr,hr;N.parameters={...N.parameters,docs:{...(Cr=N.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ButtonMain
    },
    template: \`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Icon Size</h3>
          <div class="flex flex-wrap gap-4">
             <ButtonMain label="xsmall" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="xsmall"/>
             <ButtonMain label="small" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="small"/>
             <ButtonMain label="default" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="default"/>
             <ButtonMain label="medium" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="medium"/>
             <ButtonMain label="large" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="large"/>
             <ButtonMain label="extralarge" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="extralarge"/>
             <ButtonMain label="mega" role="primary" backgroundColorType="transparent" borderColorType="primary" borderWidth="2" buttonRadius="md"  trailingIcon="ArrowUp" iconSize="mega"/>
          </div>
        </div>
      </div>
    \`
  })
}`,...(hr=(Tr=N.parameters)==null?void 0:Tr.docs)==null?void 0:hr.source}}};var Br,fr,kr;R.parameters={...R.parameters,docs:{...(Br=R.parameters)==null?void 0:Br.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ButtonMain
    },
    template: \`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Custom Class</h3>
          <div class="flex flex-wrap gap-4">
             <ButtonMain label="!px-3 !py-2 shadow-md" role="primary" backgroundColorType="transparent" borderColorType="transparent" classes="!px-3 shadow-md" borderWidth="None"/>

           <ButtonMain label="!p-3 w-18 h-18" role="primary" backgroundColorType="solid" borderColorType="transparent" borderWidth="None" buttonRadius="circle" classes="!p-3 w-18 h-18"/>
        </div>
      </div>
      </div>
    \`
  })
}`,...(kr=(fr=R.parameters)==null?void 0:fr.docs)==null?void 0:kr.source}}};var wr,vr,Mr;S.parameters={...S.parameters,docs:{...(wr=S.parameters)==null?void 0:wr.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ButtonMain
    },
    template: \`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Custom Style</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="width: -webkit-fill-available;" backgroundColorType="solid" role="primary" styles="width: -webkit-fill-available;"/>
          </div>
        </div>
      </div>
    \`
  })
}`,...(Mr=(vr=S.parameters)==null?void 0:vr.docs)==null?void 0:Mr.source}}};var xr,Ir,Wr;A.parameters={...A.parameters,docs:{...(xr=A.parameters)==null?void 0:xr.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ButtonMain
    },
    template: \`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Disabled</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="primary" backgroundColorType="solid" role="primary" disabled="true"/>
            <ButtonMain label="secondary" backgroundColorType="solid" role="secondary"disabled="true" />
            <ButtonMain label="tertiary" backgroundColorType="solid" role="tertiary" disabled="true"/>
            <ButtonMain label="success" backgroundColorType="solid" role="success" disabled="true"/>
            <ButtonMain label="warning" backgroundColorType="solid" role="warning" disabled="true"/>
            <ButtonMain label="danger" backgroundColorType="solid" role="danger" disabled="true"/>
            <ButtonMain label="neutral" backgroundColorType="solid" role="neutral" disabled="true"/>
          </div>
        </div>
      </div>
    \`
  })
}`,...(Wr=(Ir=A.parameters)==null?void 0:Ir.docs)==null?void 0:Wr.source}}};var Nr,Rr,Sr;z.parameters={...z.parameters,docs:{...(Nr=z.parameters)==null?void 0:Nr.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ButtonMain
    },
    template: \`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Loading</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="primary" backgroundColorType="solid" role="primary" isLoading="true"/>
            <ButtonMain label="secondary" backgroundColorType="solid" role="secondary" isLoading="true"/>
            <ButtonMain label="tertiary" backgroundColorType="solid" role="tertiary" isLoading="true"/>
            <ButtonMain label="success" backgroundColorType="solid" role="success" isLoading="true"/>
            <ButtonMain label="warning" backgroundColorType="solid" role="warning" isLoading="true"/>
            <ButtonMain label="danger" backgroundColorType="solid" role="danger" isLoading="true"/>
            <ButtonMain label="neutral" backgroundColorType="solid" role="neutral" isLoading="true"/>
          </div>
        </div>
      </div>
    \`
  })
}`,...(Sr=(Rr=z.parameters)==null?void 0:Rr.docs)==null?void 0:Sr.source}}};var Ar,zr,_r;_.parameters={..._.parameters,docs:{...(Ar=_.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ButtonMain
    },
    template: \`
      <div class="flex flex-col gap-10 p-6">
        <div>
          <h3 class="mb-4 font-semibold text-lg">Font Typograhy - SIZE</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="xs size" backgroundColorType="solid" role="primary" typographySize="xs"/>
            <ButtonMain label="sm size" backgroundColorType="solid" role="primary" typographySize="sm"/>
            <ButtonMain label="base size" backgroundColorType="solid" role="primary" typographySize="base"/>
            <ButtonMain label="lg size" backgroundColorType="solid" role="primary" typographySize="lg"/>
            <ButtonMain label="xl size" backgroundColorType="solid" role="primary" typographySize="xl"/>
            <ButtonMain label="2xl size" backgroundColorType="solid" role="primary" typographySize="2xl"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">Font Typograhy - WEIGHT</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="normal" backgroundColorType="transparent" role="primary" fontWeight="normal"/>
             <ButtonMain label="medium" backgroundColorType="transparent" role="primary" fontWeight="medium"/>
              <ButtonMain label="semibold" backgroundColorType="transparent" role="primary" fontWeight="semibold"/>
               <ButtonMain label="bold" backgroundColorType="transparent" role="primary" fontWeight="bold"/>
          </div>
        </div>
        <div>
          <h3 class="mb-4 font-semibold text-lg">Font Typograhy - LINE HEIGHT</h3>
          <div class="flex flex-wrap gap-4">
            <ButtonMain label="leading-none test" backgroundColorType="transparent" role="primary" leading="none"/>
             <ButtonMain label="leading-6 test" backgroundColorType="transparent" role="primary" leading="6"/>
              <ButtonMain label="leading-7 test" backgroundColorType="transparent" role="primary" leading="7"/>
               <ButtonMain label="leading-8 test" backgroundColorType="transparent" role="primary" leading="8"/>
          </div>
        </div>
      </div>
    \`
  })
}`,...(_r=(zr=_.parameters)==null?void 0:zr.docs)==null?void 0:_r.source}}};const Bo=["Playground","Label","BackgroundColor","BackgroundColorType","TextColor","BorderColor","BorderWidth","BorderRadius","IconStyles","IconSize","CustomClass","CustomStyle","Disabled","Loading","FontTypograhy"];export{k as BackgroundColor,w as BackgroundColorType,M as BorderColor,I as BorderRadius,x as BorderWidth,R as CustomClass,S as CustomStyle,A as Disabled,_ as FontTypograhy,N as IconSize,W as IconStyles,f as Label,z as Loading,B as Playground,v as TextColor,Bo as __namedExportsOrder,ho as default};
