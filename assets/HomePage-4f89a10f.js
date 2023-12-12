import{b as t,j as e,G as k,H as w,I as x,i as b,c as S,r as s,a as y,l as C,J as D}from"./index-1ee1ae26.js";import{L as m}from"./LigthBtn-6efcbd9a.js";import{S as v}from"./Title.styled-422a666b.js";import{q as P}from"./defaultImgHelper-b5b8c718.js";import{D as H}from"./DrinkCardItem-72497f3e.js";import{S as M}from"./Subtitle-41908f68.js";const T=t.img`
  flex-shrink: 0;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    width: 359px;
    height: 445px;
  }
`,E=()=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:`${k} 1x, ${w} 2x`,type:"image/webp"}),e.jsx("source",{srcSet:`${x}`,type:"image/jpeg"}),e.jsx(T,{src:x,alt:"Coctail",width:"252",height:"313",loading:"lazy"})]}),W=t.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  padding-bottom: 32px;
  padding-top: 28px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,z=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 112px;

  @media screen and (min-width: 1400px) {
    flex-direction: row;
    margin-bottom: 112px;
  }
`,A=t.ul`
  display: flex;
  gap: 10px;
  flex-direction: row;
  margin-top: 24px;
  margin-bottom: 40px;
  /* align-items: flex-start; */

  @media screen and (min-width: 768px) {
    /* flex-direction: row; */
    gap: 20px;
    margin-top: 40px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1400px) {
    /* flex-direction: row; */
    gap: 20px;
    margin-top: 40px;
    margin-bottom: 80px;
  }
`,B=t.div`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 80px;
`,q=()=>{const r=b(),a=S(),[o,I]=s.useState(1),[g,i]=s.useState(1),c=y(P),{isLargeScreen:l,isMediumScreen:p}=C(),h=Object.keys(c);s.useEffect(()=>{a(D({page:o})),i(l?3:p?2:1)},[o,a,l,p]);const f=()=>{r("/drinks")},u=()=>{r("/add")};return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:[e.jsxs("div",{children:[e.jsx(v,{children:"Craft Your Perfect Drink with Drink Master"}),e.jsx(W,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages."}),e.jsx(m,{onClick:u,type:"button",children:"Add drink"})]}),e.jsx(E,{})]}),e.jsx("ul",{children:h.map(n=>{const j=c[n];return e.jsxs("li",{children:[e.jsx(M,{Subtitle:n}),e.jsx(A,{children:j.slice(0,g).map(d=>e.jsx(H,{data:d},d._id))})]},n)})}),e.jsx(B,{children:e.jsx(m,{onClick:f,type:"button",children:"Other drinks"})})]})};export{q as default};
