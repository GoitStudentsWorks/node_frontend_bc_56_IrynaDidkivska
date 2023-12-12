import{b as i,L as o,K as a,j as t}from"./index-1ee1ae26.js";const x=i.ul`
  width: 335px;
  gap: 24px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 28px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 284px;
    margin-top: 40px;
    margin-bottom: 136px;
  }

  @media screen and (min-width: 1440px) {
    width: 516px;
    height: 330px;
  }
`,c=i.div`
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 60px;
  }
`,m=i.li`
  width: 336px;
  height: 90px;
  gap: 14px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  cursor: pointer;
  /* border: 1px solid red; */

  @media screen and (min-width: 1440px) {
    width: 313px;
  }
`,r=i.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }
`,h=i.div`
  width: 232px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  @media screen and (min-width: 1440px) {
    width: 209px;
  }
`,f=i.h3`
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${({theme:e})=>e.colors.mainText};
  justify-content: left;
  padding-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`,g=i.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({theme:e})=>e.colors.link};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;i.button`
  color: rgba(243, 243, 243, 0.5);
  cursor: pointer;
`;const w=e=>e.drinks.popular,A=e=>e.drinks.favorite,u=e=>e.drinks.own,y=e=>e.drinks.search,b=e=>e.drinks.totalPages,E=e=>e.drinks.drinkDetails,D=e=>e.drinks.drinks,n="data:image/png;base64,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",s=i.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,v=i.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 14px;
`,B=i.h3`
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: ${({theme:e})=>e.colors.mainPage};
  justify-content: left;
  padding-top: 14px;

  // limiting the display of text with ellipses
  max-width: 241px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    max-width: 238px;
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 277px;
    font-size: 18px;
    line-height: 24px;
  }
`,j=i(o)`
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${({theme:e})=>e.colors.link};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 18px;
  }
`,R=i.li`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 768px) {
    width: calc((100% - 1 * 20px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 2 * 20px) / 3);
  }
`,p=i.img`
  margin-bottom: 18px;
  height: 360px;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`,M=i.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`,I=i.p`
  margin-bottom: 4px;
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  justify-content: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`,C=i.p`
  margin-bottom: 18px;
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${({theme:e})=>e.colors.link};
  justify-content: left;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 18px;
  }
`,k=i.p`
  margin-bottom: 18px;
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  justify-content: left;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 22px;
  }
`,z=i.div`
  display: flex;
`;i.div`
  position: relative;
`;i.div`
  width: 197px;
  height: 46px;
  display: flex;

  @media screen and (min-width: 768px) {
    .drinkCardItem-img {
      width: 224px;
      height: 54px;
    }
  }

  @media screen and (min-width: 1440px) {
    .gallary-comics-img {
      width: 224px;
      height: 54px;
    }
  }
`;const T=i.button`
  font-family: 'Manrope-600', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: ${({theme:e})=>e.popUp.main};
  background-color: ${({theme:e})=>e.popUp.secondary};
  padding: 14px 40px;
  border-radius: 42px;
  border-color: transparent;
  margin-right: 8px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 18px;
  }
`,O=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 100px;
  border-color: transparent;
  background-color: ${({theme:e})=>e.popUp.secondary};

  svg {
    stroke: ${({theme:e})=>e.popUp.main};
    background: transparent;
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 56px;
    height: 54px;
  }
`,P=i.h1`
  margin-bottom: 8px;
  font-family: 'Manrope-600', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 60px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
    line-height: 68px;
  }
`;i.div`
  /* position: relative; */
`;const Q=i.div`
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 249px;
    margin-bottom: 100px;
  }
`,V=i.p`
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 14px;
  color: ${({theme:e})=>e.colors.subtitle};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`,X=i.p`
  margin-bottom: 40px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`,L=i(a)`
  margin-bottom: 80px;

  &:hover {
    border: 2px solid transparent;
  }
  &:focus,
  &:active {
    color: ${({theme:e})=>e.button.ligth};
    background: ${({theme:e})=>e.button.dark};
    border: 2px solid transparent;
  }
  /* &:disabled {
    background: #434d67;
    color: rgba(243, 243, 243, 0.2);
    border: transparent;
    cursor: not-allowed;
  } */

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`,F=i.div`
  position: relative;
`,d=i.img`
  max-height: 400px;
  border-radius: 8px;
  object-fit: cover;

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,S=i.img`
  width: 335px;
  height: 400px;
  border-radius: 1%;
  /* object-fit: cover; */
  object-fit: contain;
  object-position: center;
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
    object-fit: cover;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
    object-fit: contain;
  }
`,W=()=>t.jsx("div",{children:t.jsx(s,{src:n,alt:"Picture of general drink",style:{position:"absolute",top:0},loading:"lazy"})}),Y=()=>t.jsx("div",{children:t.jsx(r,{src:n,alt:"Picture of general drink",style:{position:"absolute",top:0},loading:"lazy"})}),q=()=>t.jsx("div",{children:t.jsx(p,{src:n,alt:"Picture of general drink",style:{position:"absolute",top:0},loading:"lazy"})}),U=()=>t.jsx("div",{children:t.jsx(d,{src:n,alt:"Picture of general drink",style:{position:"absolute",top:0},loading:"lazy"})});export{M as A,q as B,I as C,Y as D,C as E,k as F,z as G,T as H,O as I,c as P,Q as S,F as W,x as a,m as b,r as c,h as d,f as e,g as f,y as g,b as h,E as i,P as j,V as k,X as l,L as m,S as n,U as o,A as p,D as q,s as r,w as s,W as t,v as u,B as v,j as w,u as x,R as y,p as z};
