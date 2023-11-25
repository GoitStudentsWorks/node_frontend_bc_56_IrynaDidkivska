import styled from "styled-components";
import Subtitle from "../../../../shared/components/Title/Subtitle";

const PopularContainer = styled.ul`
  width: 335px;
  /* height: 1300px; */
  /* height: 432px; */
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
`;

const PopularWrapper = styled.div`
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 60px;
  }
`;

const PopularItemContainer = styled.li`
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
`;

const PopularImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`;
const PopularContainerDiscr = styled.div`
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
`;

const PopularName = styled.h3`
  font-family: "Manrope-600", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.mainText};
  justify-content: left;
  padding-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const PopularDiskr = styled.div`
  /* border: 1px solid green; */
  font-family: "Manrope-600", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: white;
  height: 63px;
  /* max-height: 86px; */

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  /* white-space: wrap; */
  text-align: left;
  /* height: 63px; */
  color: ${({ theme }) => theme.colors.link};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const ButtonSeeMore = styled.button`
  color: rgba(243, 243, 243, 0.5);
  cursor: pointer;
`;
export {
  PopularContainer,
  PopularItemContainer,
  PopularImage,
  PopularName,
  PopularDiskr,
  ButtonSeeMore,
  PopularContainerDiscr,
  PopularWrapper,
};
