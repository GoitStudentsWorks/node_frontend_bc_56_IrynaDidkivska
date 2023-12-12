import{b as p,c as f,r as s,a as l,g as v,f as k,j as t,S as y,l as S,p as j,m as $}from"./index-1ee1ae26.js";import{S as P,s as T,b as z}from"./selectors-59494faa.js";import{g as C,h as D}from"./defaultImgHelper-b5b8c718.js";import{D as F}from"./DrinkCardItem-72497f3e.js";import{P as E}from"./Pagination-ade443f8.js";import{T as I}from"./Title-30f25fd7.js";import"./Title.styled-422a666b.js";const q=p("form")`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
  margin-top: 40px;
  margin-bottom: 40px;

  input {
    width: 100%;
    padding: 18px 24px;

    line-height: 1.28; /* 128.571% */

    background: transparent;
    border-radius: 200px;
    border: 1px solid ${({theme:e})=>e.colors.link};
    outline: transparent;
    opacity: 0.8;
    color: ${({theme:e})=>e.colors.mainPage};

    &::placeholder {
      color: ${({theme:e})=>e.colors.mainPage};

      line-height: 1.28; /* 128.571% */
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 8px;
    margin-top: 60px;
    input {
      width: 264px;
      padding: 14px 24px;
      font-size: 17px;
      line-height: 1.56;
      &::placeholder {
        font-size: 17px;
        line-height: 1.56;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 680px;
    margin-top: 80px;
  }
`,A=p("div")`
  position: relative;
  width: 100%;

  button {
    position: absolute;
    top: 17px;
    right: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;

    cursor: pointer;

    transition: ${({theme:e})=>e.transition};
    &:hover,
    &:focus {
    }
    svg {
      width: 20px;
      height: 20px;
      transition: ${({theme:e})=>e.transition};
      stroke: ${({theme:e})=>e.colors.mainText};
      fill: transparent;
      &:hover,
      &:focus {
        scale: 1.3;
      }
    }
  }
`,u=p(P)`
  width: 100%;
  .customSelect__ {
    &control {
      color: ${({theme:e})=>e.colors.mainText}; //#F3F3F3
      line-height: 1.28;
      border-radius: 200px;
      background-color: ${({theme:e})=>e.popUp.secondary}; //#161F37
      border: none !important;
      box-shadow: none !important;
      outline: transparent !important;

      &:hover,
      &:focus {
        border: none;
        cursor: pointer;
      }
      &--is-focused {
        background-color: none;
        border: none;
        outline: transparent;
        outline-color: transparent;
      }
      & svg {
        transition: ${({theme:e})=>e.transition};
        stroke: ${({theme:e})=>e.popUp.main};
      }
      &--menu-is-open {
        & svg {
        }
      }
      &--is-disabled {
        opacity: 0.4;
        background-color: black;
      }
      @media (min-width: 768px) {
        width: 199px;
        font-size: 17px;
        line-height: 1.56;
      }
    }
    &option {
      padding: 0;
      text-overflow: ellipsis;
    }

    &value-container {
      padding: 18px 24px;
      padding-right: 0;
      @media (min-width: 768px) {
        padding: 14px 24px;
        padding-right: 0;
      }
    }
    &placeholder {
      color: ${({theme:e})=>e.popUp.main};

      @media (min-width: 768px) {
        font-size: 17px;
      }
    }
    &single-value {
      color: ${({theme:e})=>e.colors.mainText};
      padding: 0;
    }
    &indicators {
      & svg {
        width: 24px;
        height: 24px;
        fill: ${({theme:e})=>e.popUp.main};
      }
    }
    &input-container {
      color: ${({theme:e})=>e.colors.mainText};
      margin: 0;
      padding: 0;
    }
    &indicator-separator {
      display: none;
    }
    &dropdown-indicator {
      padding: 0;
      padding-right: 17px;
      & svg {
        width: 24px;
        height: 24px;
      }
    }
    &menu {
      margin-top: 4px;
      border-radius: 12px;
      color: ${({theme:e})=>e.colors.mainText};
      background-color: ${({theme:e})=>e.switcher.color};
      line-height: 128%;
      padding: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      @media (min-width: 768px) {
        width: 199px;
        font-size: 17px;
        line-height: 1.56;
        border-radius: 20px;
      }
    }
    &menu-list {
      text-overflow: ellipsis;
      overflow-x: hidden;
      gap: 8px;
      display: flex;
      flex-direction: column;
      padding: 10px;
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
      @media (min-width: 768px) {
        padding: 6px 16px;
      }
    }
    &option {
      text-overflow: ellipsis;
      cursor: pointer;
      color: ${({theme:e})=>e.colors.mainPage};
      background: none;
      &--is-focused,
      &:active,
      &--is-selected {
        background-color: none;

        color: ${({theme:e})=>e.colors.mainText};
        &:active {
          background-color: transparent;
        }
      }
    }
    &input {
      color: red;
    }
  }
`;p.button`
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: rgba(243, 243, 243, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 18px;
  }
`;const N=({setSearchParams:e})=>{const n=f(),[d,c]=s.useState("");let g=l(T),x=l(z);s.useEffect(()=>{n(v()),n(k())},[n]);const h=i=>{i.preventDefault(),e(o=>({...o,query:d,page:1}))},a=(i,o)=>{if(o==="ing"&&e(r=>({...r,ingredient:i.value,page:1})),o==="cat"){if(i.label==="All categories"){e(r=>({...r,category:i.value,page:1}));return}e(r=>({...r,category:i.label,page:1}))}};return t.jsx(t.Fragment,{children:t.jsxs(q,{onSubmit:h,children:[t.jsxs(A,{children:[t.jsx("input",{type:"text",placeholder:"Enter the text",value:d,onChange:i=>c(i.target.value)}),t.jsx("button",{type:"submit",children:t.jsx(y,{name:"search"})})]}),t.jsx(u,{classNamePrefix:"customSelect",placeholder:"All categories",options:[{label:"All categories",value:""},...g],onChange:i=>a(i,"cat")}),t.jsx(u,{classNamePrefix:"customSelect",placeholder:"Ingredients",options:[{label:"All ingregients",value:""},...x],onChange:i=>a(i,"ing")})]})})},U=p.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding-bottom: 80px;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 80px 20px;
    align-items: start;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1240px;
    height: 100%;
    justify-content: flex-start;
  }
`,M=()=>{const e=l(C);return t.jsx(U,{children:e.map(n=>t.jsx(F,{data:n},n._id))})},V=()=>{const{isSmallScreen:e}=S(),n=l(m=>m.drinks.prevPage),[d,c]=s.useState({query:"",category:"",ingredient:"",page:n}),{query:g,category:x,ingredient:h,page:a}=d,i=l(D),o=f(),r=s.useMemo(()=>e?10:9,[e]);s.useEffect(()=>{o(j({query:g,category:x,ingredient:h,limit:r,page:a}))},[x,o,h,r,a,g]);const b=m=>{c(w=>({...w,page:m.selected+1})),o($(m.selected+1)),window.scrollTo(0,100)};return t.jsxs(t.Fragment,{children:[t.jsx(I,{Title:"Drinks"}),t.jsx(N,{setSearchParams:c}),t.jsx(M,{}),t.jsx(E,{handlePageClick:b,totalPages:i,defaultPage:a})]})};export{V as default};
