import { useEffect, useState } from "react";
import LigthBtn from "../../shared/components/Buttons/LigthBtn";
import { useDispatch, useSelector } from "react-redux";
import { StyledTitle } from "../../shared/components/Title/Title.styled";
import {
  BtnWrapper,
  HomeImage,
  HomeWrapper,
  MainText,
  WrapperCategory,
} from "./HomePage.styled";
import Image from "./img/Found.png";
import { useNavigate } from "react-router-dom";
import { selectMainCatalog } from "../../redux/Drinks/selectors";
import { getAllDrinksThunk } from "../../redux/Drinks/operations";
import DrinkCardItem from "../../shared/components/DrinkCardItem/DrinkCardItem";
import { List } from "../../shared/components/DrinkList/DrinkList.styled";
import { StyledSubitle } from "../../shared/components/Title/StyledSubitle.styled";
import Subtitle from "../../shared/components/Title/Subtitle";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [drinksToShow, setDrinksToShow] = useState(1);
  const allCatalog = useSelector(selectMainCatalog);
  // ==============================================
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1400px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1399px)",
  });
  // ===============================================
  const categ = Object.keys(allCatalog);
  useEffect(() => {
    dispatch(getAllDrinksThunk({ page: currentPage }));
    if (isLargeScreen) {
      setDrinksToShow(3);
    } else if (isMediumScreen) {
      setDrinksToShow(2);
    } else {
      setDrinksToShow(1);
    }
  }, [currentPage, dispatch, isLargeScreen, isMediumScreen]);

  const handleOtherDrinks = () => {
    navigate("/drinks");
  };
  const handleAddDrinkClick = () => {
    navigate("/add");
  };

  return (
    <>
      <HomeWrapper>
        <div>
          <StyledTitle>
            {"Craft Your Perfect Drink with Drink Master"}
          </StyledTitle>
          <MainText>
            Unlock your inner mixologist with Drink Master, your one-stop
            destination for exploring, crafting, and mastering the world&apos;s
            finest beverages.
          </MainText>
          <LigthBtn onClick={handleAddDrinkClick}>Add drink</LigthBtn>
        </div>

        <HomeImage src={Image} alt="Coctail's name" />
      </HomeWrapper>
      <>
        {categ.map((category) => {
          const foreCoctails = allCatalog[category];
          return (
            <>
              <Subtitle key={category} Subtitle={category}></Subtitle>
              <WrapperCategory>
                {foreCoctails.slice(0, drinksToShow).map((drink) => (
                  <DrinkCardItem key={drink._id} data={drink} />
                ))}
              </WrapperCategory>
            </>
          );
        })}
      </>
      {/* {categ.map((category) => {
        const foreCoctails = allCatalog[category];
        return (
          <>
            <Subtitle Subtitle={category}></Subtitle>
            <WrapperCategory>
              {foreCoctails.slice(0, drinksToShow).map((drink) => (
                <DrinkCardItem key={drink._id} data={drink} />
              ))}
            </WrapperCategory>
          </>
        );
      })} */}
      <BtnWrapper>
        <LigthBtn onClick={handleOtherDrinks}>Other drinks</LigthBtn>
      </BtnWrapper>
    </>
  );
};

export default HomePage;
