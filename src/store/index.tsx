import { createContext, FC, useState } from "react";

export const Store = createContext<any>(null);

interface IProviderProps {
  children: React.ReactNode
}

export const Provider: FC<IProviderProps> = (props) => {
  const [data, setData] = useState({
    token: localStorage.getItem('token')
  });
  return <Store.Provider value={{ data, setData }}>
    {props.children}
  </Store.Provider>
}

