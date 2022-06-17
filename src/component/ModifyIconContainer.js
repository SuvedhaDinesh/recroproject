import { IconContext } from "../IconContext";
import styled from "styled-components";
import { AVAILABLE_ICONS } from "../helper/data";
import { useContext } from "react";

const StyledIconContainer = styled.div`
  display: flex;
  border: 1px solid;
  flex-wrap: wrap;
  max-width: 350px;
`;

const StyledDiv = styled.div`
  display: flex;
  padding: 10px;
  font-size: 20px;
`;

const StyledIconComponent = styled.span``;

const StyledIconName = styled.span`
  cursor: pointer;
  padding-left: 5px;
`;

const ModifyIconContainer = () => {
  const iconNames = Object.keys(AVAILABLE_ICONS);
  const { icons, setIcons } = useContext(IconContext);

  const handleClick = (e) => {
    const iconName = e.target.getAttribute("data-attr");
    console.log("logging", iconName, AVAILABLE_ICONS[iconName]);
    if (!iconName) return;
    if (iconName in icons) {
      setIcons((prevIcons) => {
        if (Object.keys(prevIcons).length === 1) return prevIcons;
        const updatedIcons = { ...prevIcons };
        delete updatedIcons[iconName];
        return updatedIcons;
      });
    } else {
      setIcons((prevIcons) => {
        return {
          ...prevIcons,
          [iconName]: AVAILABLE_ICONS[iconName]
        };
      });
    }
  };
  return (
    <>
      <h2>Click to add or remove below icons:</h2>
      <StyledIconContainer onClick={handleClick}>
        {iconNames.map((iconName) => {
          const iconComponent = AVAILABLE_ICONS[iconName]["component"];
          return (
            <StyledDiv>
              <StyledIconComponent>{iconComponent}</StyledIconComponent>
              <StyledIconName data-attr={iconName}> {iconName}</StyledIconName>
            </StyledDiv>
          );
        })}
      </StyledIconContainer>
    </>
  );
};

export default ModifyIconContainer;
