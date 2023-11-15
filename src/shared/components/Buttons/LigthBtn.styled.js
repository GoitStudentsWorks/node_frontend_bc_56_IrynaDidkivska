import styled from "styled-components";

export const StyledBtn = styled.button`
  min-width: 132px;
  height: 46px;
  padding: 14px 40px;
  border-radius: 42px;
  border: none;
  outline: none;

  font-family: "Manrope-600", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28; /* 128.571% */
  text-align: center;

  color: ${({ theme }) => theme.button.dark};
  background: ${({ theme }) => theme.button.ligth};

  &:hover,
  &:focus {
    border: 1px solid rgba(243, 243, 243, 0.2);

    color: ${({ theme }) => theme.button.ligth};
    background: ${({ theme }) => theme.button.dark};
    transition: ${({ theme }) => theme.transition};
  }
  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  @media screen and (min-width: 768px) {
    min-width: 147px;
    height: 54px;
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12px; /* 112.5% */
  }
`;
