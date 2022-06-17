import { useContext, useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { GiShare } from "react-icons/gi";
import { IconContext } from "../IconContext";

const StyledIconSpan = styled.span`
  cursor: pointer;
`;

const Icons = () => {
  const [collapse, setCollapse] = useState(false);

  const { icons } = useContext(IconContext);

  const handleCollapseClick = () => {
    setCollapse((prevCollapse) => !prevCollapse);
  };

  const handleIconClick = (e) => {
    const iconName = e.currentTarget.getAttribute("data-attr");
    if (!iconName) return;
    window.open(icons[iconName].link);
    alert(`Event triggered for ${iconName}`);
  };

  const iconComponents = Object.entries(icons);
  const [firstIconName, firstIconVal] = iconComponents[0];
  return (
    <div>
      <StyledIconSpan data-attr={firstIconName} onClick={handleIconClick}>
        {firstIconVal.component}
      </StyledIconSpan>

      {!collapse &&
        iconComponents.slice(1).map(([key, val]) => {
          return (
            <StyledIconSpan data-attr={key} onClick={handleIconClick}>
              {val.component}
            </StyledIconSpan>
          );
        })}
      <div onClick={handleCollapseClick} style={{ cursor: "pointer" }}>
        {collapse ? <GiShare /> : <MdClose />}
      </div>
    </div>
  );
};
export default Icons;
