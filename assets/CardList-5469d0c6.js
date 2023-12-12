import{b as s,j as e,G as u,H as f,I as d,u as j,O as p,P as a,i as k,c as y,r as C,S as w,z as v,Q as c,T as D}from"./index-1ee1ae26.js";import{y as I,z as F,A as S,B as b,C as N,E as P,F as T,G as _,H as L,I as z}from"./defaultImgHelper-b5b8c718.js";const E=s.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  p {
    width: 205px;
    font-size: 14px;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    p {
      width: 236px;
      font-size: 16px;
    }
  }
  @media screen and (min-width: 1440px) {
    background-position: 56% 57%;
    span {
    }
  }
`,$=s.img`
  width: 198px;
  height: 247px;
  margin-top: 91px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    width: 261px;
    height: 326px;
    margin-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 67px;
  }
`,G=()=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:`${u} 1x, ${f} 2x`,type:"image/webp"}),e.jsx("source",{srcSet:`${d}`,type:"image/jpeg"}),e.jsx($,{src:d,alt:"Coctail",width:"198",height:"247",loading:"lazy"})]}),Y=()=>{const i=j(),n=p(i.pathname);return e.jsxs(E,{children:[e.jsx(G,{}),n.my&&e.jsx("p",{children:"So far, you haven't made any drinks of your own"}),n.favorites&&e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]})},x=({data:i})=>{const n=k(),t=y(),[m,r]=C.useState(!1),l=p(location.pathname),o=g=>{n(`/drinks/${g}`)},h=()=>{l.favorites?(t(v(i._id)),c.success("You removed drink from your favorite")):(t(D(i._id)),c.success("You removed drink from your own"))};return e.jsxs(I,{children:[e.jsx(F,{src:i.drinkThumb,alt:i.drink,onLoad:()=>r(!0),onError:()=>r(!1),onClick:()=>o(i._id)}),e.jsxs(S,{children:[e.jsxs("div",{children:[!m&&e.jsx(b,{}),e.jsx(N,{children:i.drink}),e.jsx(P,{children:i.alcoholic})]}),e.jsx(T,{children:i.shortDescription})]}),e.jsxs(_,{children:[e.jsx(L,{onClick:()=>o(i._id),type:"button",children:"See more"}),e.jsx(z,{type:"button",onClick:h,children:e.jsx(w,{name:"trash"})})]})]})};x.propTypes={data:a.shape({drinkThumb:a.string,drink:a.string,alcoholic:a.string,shortDescription:a.string,_id:a.string}).isRequired};const A=s.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 80px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-start;
    margin-top: 62px;
  }
`,H=({data:i})=>e.jsx(A,{children:i.map((n,t)=>e.jsx(x,{data:n},n._id?n._id:`card-${t}`))});export{H as C,Y as N};
