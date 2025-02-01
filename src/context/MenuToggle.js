import { createContext, useContext, useState } from "react";

const MenuToggleContext = createContext();

export const useMenuToggle = () => {
  return useContext(MenuToggleContext);
};

const MenuToggleProvider = ({ children }) => {
  const [menu, showMenu] = useState(false);

  const setMenu = () => {
    showMenu(!menu);
  };

  return (
    <MenuToggleContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuToggleContext.Provider>
  );
};

export default MenuToggleProvider;
