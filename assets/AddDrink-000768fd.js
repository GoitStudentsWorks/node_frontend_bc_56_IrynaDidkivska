import{b as o,j as n,c as y,a as m,d as R,r as p,g as U,e as _,S as w,Q as k,f as G,h as B,L as V,i as q,F as M,k as H}from"./index-1ee1ae26.js";import{S as A,s as X,a as O,b as Q}from"./selectors-59494faa.js";import{S as j}from"./Subtitle-41908f68.js";import{s as Y,P as J,a as K,b as Z,c as ee,D as ne,d as te,e as ie,f as re}from"./defaultImgHelper-b5b8c718.js";import{T as oe}from"./Title-30f25fd7.js";import{L as ae}from"./LigthBtn-6efcbd9a.js";import"./Title.styled-422a666b.js";const se=o.input`
  display: block;
  height: 34px;
  width: 100%;
  background: transparent;
  color: ${({theme:e})=>e.colors.mainText};
  border-bottom: 1px solid ${({theme:e})=>e.colors.link};
  border-top: none;
  border-left: none;
  border-right: none;

  line-height: normal;
  letter-spacing: -0.28px;
  padding-bottom: 14px;
  outline: transparent;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    height: 41px;
    padding-bottom: 18px;
    letter-spacing: -0.32px;
  }
`,D=({placeholder:e,type:i,changeF:t})=>n.jsx(n.Fragment,{children:n.jsx(se,{placeholder:e,type:i,onChange:r=>t(r.target.value)})}),de=o.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  margin-right: 16px;
  @media screen and (min-width: 768px) {
    gap: 8px;
  }

  @media screen and (min-width: 1440px) {
  }
`,le=o.input`
  position: absolute;
  opacity: 0;
  + label {
    &:before {
      content: '';
      background: transparent;
      border-radius: 100%;
      border: 1.5px solid ${({theme:e})=>e.colors.mainText};
      color: ${({theme:e})=>e.colors.link};
      display: inline-block;
      width: 16px;
      height: 16px;
      position: relative;
      margin-right: 6px;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      transition: ${({theme:e})=>e.transition};
    }
  }
  &:checked {
    + label {
      &:before {
        background-color: ${({theme:e})=>e.colors.mainText};
        box-shadow: inset 0 0 0 1.5px ${({theme:e})=>e.background.main};
        border: 1.5px solid ${({theme:e})=>e.colors.mainText};
      }
    }
  }
  &:focus {
    + label {
      &:before {
        outline: transparent;
        border-color: ${({theme:e})=>e.colors.mainText};
      }
    }
  }
  &:disabled {
    + label {
      opacity: 0.5;
      &:before {
        box-shadow: inset 0 0 0 1.5px #0a0a11;
        border-color: ${({theme:e})=>e.colors.mainText};
        background: transparent;
      }
    }
  }
  + label {
    &:empty {
      &:before {
        margin-right: 0;
      }
    }
  }
  @media screen and (min-width: 768px) {
    + label {
      &:before {
        content: '';
        width: 20px;
        height: 20px;
        margin-right: 8px;
        border: 2px solid ${({theme:e})=>e.colors.mainText};
      }
    }
    &:checked {
      + label {
        &:before {
          box-shadow: inset 0 0 0 3px ${({theme:e})=>e.background.main};
          border: 2px solid ${({theme:e})=>e.colors.mainText};
        }
      }
    }
    &:disabled {
      + label {
        opacity: 0.5;
        &:before {
          box-shadow: inset 0 0 0 2px #0a0a11;
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
  }
`,pe=o.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: center;
  transition: ${({theme:e})=>e.transition};
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.32px;
  }

  @media screen and (min-width: 1440px) {
  }
`,T=({id:e,name:i,label:t,isDisabled:r=!1,changeF:s,value:d})=>n.jsxs(de,{children:[n.jsx(le,{id:e,type:"radio",name:i,value:d,disabled:r,defaultChecked:!0,onClick:a=>{s(a.target.value)}}),n.jsx(pe,{htmlFor:e,children:t})]}),ce=o(A)`
  .addDrink__ {
    &control {
      width: 100%;
      background: transparent;
      border-radius: 0;
      align-items: start;
      gap: 8px;
      border: none !important;
      box-shadow: none !important;
      outline: transparent !important;
      color: ${({theme:e})=>e.popUp.main};
      &:hover,
      &:focus {
        border-bottom: 1px solid ${({theme:e})=>e.colors.link};
        cursor: pointer;
      }
      &--is-focused {
        background-color: none;
        outline-color: transparent;
      }
      & svg {
        transition: ${({theme:e})=>e.transition};
      }
      &--menu-is-open {
        & svg {
          transform: rotateX(180deg);
        }
      }
      &--is-disabled {
        opacity: 0.4;
        background-color: black;
      }
    }
    &value-container {
      padding: 0;
    }
    &placeholder {
      color: ${({theme:e})=>e.colors.link};
      &:active {
        color: ${({theme:e})=>e.colors.mainPage};
      }
      @media (min-width: 768px) {
        font-size: 17px;
      }
    }
    &single-value {
      margin: 0;
      line-height: 14px; /* 100% */
      color: ${({theme:e})=>e.colors.mainText};
    }
    &indicators {
      padding: 0;
      width: 20px;
      height: 20px;
      & svg {
        width: 20px;
        height: 20px;
        fill: ${({theme:e})=>e.colors.mainPage};
      }
    }
    &input-container {
      color: ${({theme:e})=>e.colors.mainText};
      & input {
        width: 100px;
      }
      flex-grow: 0;
      flex-shrink: 1;
      padding: 0;
      margin: 0;
      line-height: 1; /* 100% */
      width: fit-content;
    }

    &indicator-separator {
      display: none;
    }
    &dropdown-indicator {
      padding: 0;
      & svg {
        width: 20px;
        height: 20px;
      }
    }
    &menu {
      margin-top: -10px;
      width: fit-content;
      background-color: ${({theme:e})=>e.switcher.color};
      border-radius: 12px;
      color: rgba(243, 243, 243, 0.4);
      white-space: nowrap;
      font-size: 12px;
      line-height: 1.33; /* 133.333% */
      right: 0;
      padding: 8px;
    }
    &menu-list {
      gap: 6px;
      display: flex;
      flex-direction: column;
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${({theme:e})=>e.background.scrollbar};
        border-radius: 20px;
      }
    }
    &option {
      height: 18px;
      text-overflow: ellipsis;
      cursor: pointer;
      color: ${({theme:e})=>e.colors.link};
      font-size: 12px;
      line-height: 1.33; /*133.333% */
      &--is-focused,
      &:active,
      &--is-selected {
        color: ${({theme:e})=>e.colors.mainText};
        background: transparent;
        background-color: none;
        &:active {
          background-color: transparent;
        }
      }
    }

    @media screen and (min-width: 768px) {
      .addDrink__ {
        &menu-list {
          gap: 8px;
        }
        &menu {
          border-radius: 20px;
          padding: 14px;
        }
      }
    }

    @media screen and (min-width: 1440px) {
      addDrink__ {
        &option {
          font-size: 14px;
          line-height: 1.28; /*133.333% */
        }
      }
    }
  }
`,xe=o.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme:e})=>e.colors.link};
  height: 34px;
  @media screen and (min-width: 768px) {
    height: 41px;
  }
`,he=o.div`
  line-height: normal;
  letter-spacing: -0.28px;
  margin-bottom: 31px;
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    letter-spacing: -0.32px;
    font-size: 16px;
  }
`,z=({label:e,options:i=[],changeF:t})=>{const r=e==="Category"?"Cocktail":e==="Glass"?"Glass":"";return n.jsx(n.Fragment,{children:n.jsxs(xe,{children:[n.jsx(he,{htmlFor:e,children:e}),n.jsx(ce,{id:e,classNamePrefix:"addDrink",placeholder:r,options:i,onChange:s=>t(s.label)})]})})},I=o.div`
  padding: 40px 0;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,ge=o(I)`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: start;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`,me=o.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`,ue=o.div`
  background-image: ${e=>e.$bgImg?`url('${e.$bgImg}')`:"none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 335px;
  height: 320px;
  margin: 0 auto;
  background-color: ${({theme:e})=>e.background.dropdown};
  border-radius: 8px;
  margin-bottom: 40px;
  & label,
  span {
    display: ${e=>e.$bgImg?"none":"flex"};
  }
  &:hover {
    & label,
    span {
      display: flex;
    }
  }

  @media screen and (min-width: 768px) {
    width: 320px;
    height: 320px;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,be=o.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  background-color: ${({theme:e})=>e.popUp.main};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  & svg {
    width: 28px;
    height: 28px;
    stroke: ${({theme:e})=>e.popUp.secondary};
  }
`,fe=o.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme:e})=>e.popUp.main};
  font-family: 'Manrope-500';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25; /* 125% */
  cursor: default;
`,we=o.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  @media screen and (min-width: 768px) {
    width: 352px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
    width: 393px;
  }
`,ke=({setValues:e})=>{const{setDrinkPhoto:i,setDrink:t,setDescription:r,setGlass:s,setAlcoholic:d,setCategory:a}=e,l=y(),c=m(X),v=m(O),$=m(R),[h,u]=p.useState(null);p.useEffect(()=>{l(U()),l(_())},[l]);const S=x=>{if(x){const g=new FileReader;g.onloadend=()=>{u(g.result)},g.readAsDataURL(x)}else u(null);i(x)},b=x=>{S(x.target.files[0])};return n.jsx(n.Fragment,{children:n.jsxs(ge,{children:[n.jsxs(ue,{$bgImg:h,children:[n.jsxs(be,{htmlFor:"addImg",children:[n.jsx(me,{type:"file",accept:"image/png, image/jpeg",id:"addImg",onChange:b}),n.jsx(w,{name:h?"reload-img":"plus"})]}),n.jsx(fe,{children:h?"Change image":"Add image"})]}),n.jsxs(we,{children:[n.jsx(D,{placeholder:"Enter item title",type:"text",changeF:t}),n.jsx(D,{placeholder:"Enter about recipe",type:"text",changeF:r}),n.jsx(z,{label:"Category",options:c,changeF:a}),n.jsx(z,{label:"Glass",options:v,changeF:s}),n.jsxs("div",{children:[n.jsx(T,{id:"alcoholic",name:"isAlcohol",label:"Alcoholic",value:"Alcoholic",changeF:d,isDisabled:!$}),n.jsx(T,{changeF:d,id:"un-alcoholic",name:"isAlcohol",label:"Non-alcoholic",value:"Non alcoholic"})]})]})]})})};let f=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((i,t)=>(t&=63,t<36?i+=t.toString(36):t<62?i+=(t-26).toString(36).toUpperCase():t>62?i+="-":i+="_",i),"");const ye=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  border-radius: 200px;
  border: 1px solid ${({theme:e})=>e.colors.link};
  @media screen and (min-width: 768px) {
    height: 44px;
  }
`,F=o.button`
  display: flex;
  font-size: 16px;
  align-items: center;
  padding: 11px 16px;
  background: transparent;
  border-radius: 0 200px 200px 0;
  border: none;
  & svg {
    width: 16px;
    height: 16px;
    stroke: ${({theme:e})=>e.colors.mainText};
    pointer-events: none;
  }
  &:disabled {
    opacity: 0.3;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 18px;
  }
`,je=o(F)`
  border-radius: 200px 0 0 200px;
`,ve=o.div`
  min-width: 25px;
  text-align: center;
  line-height: 1.28; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56; /* 26.52px */
  }
`,$e=({ingredientsList:e=[],setIngredients:i})=>{const t=[...e],r=()=>{if(t.length===10)return k.warn("Whoah whoah! You can add a maximum of 10 ingredients!");t.push({id:f(),title:"",ingredientId:"",measure:"1 cl"})},s=()=>{if(t[t.length-1].title||t[t.length-1].ingredientId)return k.error("Whoah whoah! This ingredient is not empty!");t.pop()},d=a=>{const{name:l}=a.target;l==="dec"?s():r(),i(t)};return n.jsxs(ye,{children:[n.jsx(je,{name:"dec",type:"button",disabled:t.length<=3,onClick:d,children:n.jsx(w,{name:"minus"})}),n.jsx(ve,{children:t.length}),n.jsx(F,{name:"inc",type:"button",disabled:!1,onClick:d,children:n.jsx(w,{name:"plus"})})]})},Se=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`,Ie=o(A)`
  .ingredientSelect__ {
    &control {
      align-content: center;
      width: 200px;
      height: 50px;
      background: transparent;
      border-radius: 200px;
      padding: 16px 18px;
      color: ${({theme:e})=>e.popUp.main};
      border: 1px solid ${({theme:e})=>e.colors.link};
      box-shadow: none !important;
      outline: transparent !important;
      &:hover,
      &:focus {
        border: 1px solid ${({theme:e})=>e.colors.link};
        cursor: pointer;
      }
      &--is-focused {
      }
      & svg {
        transition: ${({theme:e})=>e.transition};
        stroke: ${({theme:e})=>e.popUp.main};
      }
      &--menu-is-open {
        & svg {
          transform: rotateX(180deg);
        }
      }
      &--is-disabled {
        opacity: 0.4;
        background-color: transparent;
      }
    }
    &value-container {
      padding: 0;
    }
    &placeholder {
      color: ${({theme:e})=>e.colors.link};
      &:active {
        color: ${({theme:e})=>e.colors.mainPage};
      }
      @media (min-width: 768px) {
        font-size: 17px;
      }
    }
    &single-value {
      color: ${({theme:e})=>e.colors.mainText};
      margin: 0;
      line-height: 1; /* 100% */
    }
    &indicators {
      padding: 0;
      width: 18px;
      height: 100%;
      & svg {
        width: 18px;
        height: 18px;
        fill: ${({theme:e})=>e.colors.mainPage};
      }
    }
    &input-container {
      & input {
        width: 100px;
      }
      flex-grow: 0;
      flex-shrink: 1;
      padding: 0;
      margin: 0;
      color: ${({theme:e})=>e.colors.mainText};
      line-height: 1; /* 100% */
      width: fit-content;
    }

    &indicator-separator {
      display: none;
    }
    &dropdown-indicator {
      padding: 0;
      & svg {
        width: 18px;
        height: 18px;
      }
    }
    &menu {
      margin-top: 0;
      width: fit-content;
      border-radius: 12px;
      white-space: nowrap;

      font-size: 12px;

      line-height: 1.33; /* 133.333% */
      padding: 8px;
      background-color: ${({theme:e})=>e.switcher.color};
    }
    &menu-list {
      text-overflow: ellipsis;
      gap: 6px;
      display: flex;
      flex-direction: column;
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${({theme:e})=>e.background.scrollbar};
        border-radius: 20px;
        border: 8px solid transparent;
      }
    }
    &option {
      height: 18px;
      text-overflow: ellipsis;
      cursor: pointer;
      color: ${({theme:e})=>e.colors.link};

      font-size: 12px;

      line-height: 1.33; /*133.333% */
      &--is-focused,
      &:active,
      &--is-selected {
        color: ${({theme:e})=>e.colors.mainText};
        background: transparent;
        background-color: none;

        &.active {
          background-color: transparent;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .ingredientSelect__ {
      &control {
        width: 332px;
        height: 56px;
        padding: 14px 24px;
      }

      &single-value {
        font-size: 17px;
        line-height: 1.56; /* 100% */
      }
      &dropdown-indicator {
        & svg {
          width: 20px;
          height: 20px;
        }
      }
      &menu {
        border-radius: 20px;
        padding: 14px;
      }
      &menu-list {
        gap: 8px;
      }
      &option {
        font-size: 17px;
        line-height: 156%; /* 26.52px */
      }
    }
  }

  @media screen and (min-width: 1440px) {
  }
`,Ce=o.input`
  background: transparent;
  padding: 16px 18px;
  width: 101px;
  height: 50px;
  border-radius: 200px;
  color: ${({theme:e})=>e.colors.mainText};
  border: 1px solid ${({theme:e})=>e.colors.link};
  opacity: 0.8;
  outline: transparent;
  line-height: 1.28; /* 128.571% */

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56; /* 26.52px */
  }
  @media screen and (min-width: 1440px) {
    width: 150px;
    height: 56px;
  }
`,Pe=o.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 18px;
  height: 18px;
  border: none;
  background-color: transparent;
  & svg {
    display: block;
    width: 18px;
    height: 18px;
    stroke: ${({theme:e})=>e.colors.mainText};
  }
  @media screen and (min-width: 768px) {
    margin-left: 0px;
    width: 20px;
    height: 20px;
    & svg {
      width: 20px;
      height: 20px;
    }
  }
`,De=({removeIngredient:e,ingredientData:i,changeIngredient:t})=>{const{id:r,measure:s}=i,d=m(Q);return n.jsxs(Se,{children:[n.jsx(Ie,{classNamePrefix:"ingredientSelect",options:d,placeholder:"Select ingredient",onChange:a=>{t({id:r,title:a.label,ingredientId:a.value})}}),n.jsx(Ce,{type:"text",value:s,onChange:a=>{const l=a.target.value.trim();t({id:r,measure:l})}}),n.jsx(Pe,{type:"button",onClick:()=>{e(r)},children:n.jsx(w,{name:"remove-ingredient"})})]})},Te=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 34px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`,ze=o.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`,Ae=o(I)`
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,Fe=({setIngredientsGeneral:e})=>{const i=y(),[t,r]=p.useState([{id:f(),title:"",ingredientId:"",measure:"1 cl"},{id:f(),title:"",ingredientId:"",measure:"1 cl"},{id:f(),title:"",ingredientId:"",measure:"1 cl"}]);p.useEffect(()=>{e(t)},[t]),p.useEffect(()=>{i(G({page:0,limit:0}))},[i]);const s=a=>{t.length>=3&&r(t.filter(l=>l.id!==a))},d=a=>{const l=t.map(c=>c.id===a.id?{...c,...a}:c);r(l)};return n.jsxs(Ae,{children:[n.jsxs(Te,{children:[n.jsx(j,{Subtitle:"Ingredients"}),n.jsx($e,{ingredientsList:t,setIngredients:r})]}),n.jsx(ze,{children:t.map(a=>n.jsx(De,{removeIngredient:s,changeIngredient:d,ingredientData:a},a.id))})]})},Le=o.textarea`
  width: 100%;
  height: 184px;
  padding: 16px 18px;
  color: ${({theme:e})=>e.colors.mainText};
  border: 1px solid ${({theme:e})=>e.colors.link};
  border-radius: 14px;
  outline: transparent;
  background: transparent;
  resize: none;
  overflow-x: hidden;
  margin-top: 40px;

  line-height: 1.28; /* 128.571% */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #434d67;
    border-radius: 20px;
    border: 8px solid transparent;
  }

  @media screen and (min-width: 768px) {
    border-radius: 20px;
    width: 480px;
    height: 184px;
    font-size: 17px;
    line-height: 156%; /* 26.52px */
  }

  @media screen and (min-width: 1440px) {
    padding: 14px 24px;
  }
`,We=o(j)`
  margin: 0 0 40px 0;
`,Ne=({setInstructions:e})=>n.jsxs(I,{children:[n.jsx(We,{Subtitle:"Recipe Preparation"}),n.jsx(Le,{name:"preparation",id:"Preparation",onChange:i=>{e(i.target.value)},placeholder:"Enter the recipe",width:"335",height:"184"})]});function Ee(){const[e,i]=p.useState(!1),t=y(),r=m(Y).slice(0,4);return p.useEffect(()=>{t(B())},[t]),n.jsxs(J,{children:[n.jsx(j,{Subtitle:"Popular drinks"}),n.jsx(K,{children:r==null?void 0:r.map(({description:s,drinkThumb:d,drink:a,_id:l})=>n.jsx(V,{to:`/drinks/${l}`,style:{position:"relative"},children:n.jsxs(Z,{children:[n.jsx(ee,{src:d,alt:" ",onLoad:()=>i(!0),onError:()=>i(!1)}),!e&&n.jsx(ne,{}),n.jsxs(te,{children:[n.jsx(ie,{children:a}),n.jsx(re,{children:s})]})]},a)},l))})]})}const Re=e=>e.reduce((i,t)=>{if(!t.title||!t.measure)return i;const{title:r,ingredientId:s,measure:d}=t;return[...i,{title:r,ingredientId:s,measure:d+" cl"}]},[]),Ue=e=>{for(let i in e)if(!e[i])return!0;return!1},_e=e=>{const i=new FormData;for(let t of Object.keys(e))t==="ingredients"?e[t].forEach((r,s)=>{i.append(`ingredients[${s}][title]`,r.title),i.append(`ingredients[${s}][ingredientId]`,r.ingredientId),i.append(`ingredients[${s}][measure]`,r.measure)}):i.append(t,e[t]);return i},Ge=o.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-bottom: 40px;
  }
`,Be=o.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-top: 80px;
  @media screen and (min-width: 1440px) {
    margin-left: 60px;
  }
`,Ye=()=>{const e=q(),i=y(),[t,r]=p.useState(null),[s,d]=p.useState(null),[a,l]=p.useState(null),[c,v]=p.useState(null),[$,h]=p.useState(null),[u,S]=p.useState("Non alcoholic"),[b,x]=p.useState(),[g,L]=p.useState(),W=()=>{const C=Re(b);if(b.length!==C.length)return k.error("Please fill in all ingredient fields or delete blank ones.");const P={drinkPhoto:t,drink:s,description:a,category:c,glass:$,alcoholic:u,ingredients:C,instructions:g};if(Ue(P))return k.error("Please fill in all fields");const N=_e(P);i(H(N)).unwrap().then(()=>e("/my")).catch(E=>E.message)};return n.jsxs(n.Fragment,{children:[n.jsx(oe,{Title:"Add drink"}),n.jsxs(Ge,{children:[n.jsxs("div",{children:[n.jsx(ke,{setValues:{setDrinkPhoto:r,setDrink:d,setDescription:l,setGlass:h,setAlcoholic:S,setCategory:v}}),n.jsx(Fe,{setIngredientsGeneral:x}),n.jsx(Ne,{setInstructions:L}),n.jsx(ae,{onClick:W,type:"button",children:"Add"})]}),n.jsxs("div",{children:[n.jsxs(Be,{children:[n.jsx(j,{Subtitle:"Follow us"}),n.jsx(M,{isfooter:!1})]}),n.jsx(Ee,{})]})]})]})};export{Ye as default};
