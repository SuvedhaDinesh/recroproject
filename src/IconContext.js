import { createContext, useState } from "react";
import { AVAILABLE_ICONS } from "./helper/data";

export const IconContext = createContext();

const IconContextProvider = ({ children }) => {
  const { whatsapp, twitter } = AVAILABLE_ICONS;
  const [icons, setIcons] = useState({ whatsapp, twitter });

  return (
    <IconContext.Provider
      value={{
        icons,
        setIcons
      }}
    >
      {children}
    </IconContext.Provider>
  );
};

export default IconContextProvider;
