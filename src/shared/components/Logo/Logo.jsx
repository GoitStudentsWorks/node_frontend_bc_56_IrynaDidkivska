import { StyledLogo, StyledLogoTitle } from './Logo.styled';

const Logo = () => {
  return (
    <StyledLogo>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.3639 0H8.63616L0 8.63614V19.3638L8.63616 28H19.3639L28 19.3638V8.63614L19.3639 0ZM10.1205 19.4988L4.58796 13.9663L10.1205 8.43373C12.212 6.34217 15.653 6.34217 17.7446 8.43373L23.2771 13.9663L17.7446 19.4988C15.653 21.5904 12.2795 21.5904 10.1205 19.4988Z"
          fill="#F3F3F3"
        />
      </svg>

      <StyledLogoTitle>Drink Master</StyledLogoTitle>
    </StyledLogo>
  );
};

export default Logo;
