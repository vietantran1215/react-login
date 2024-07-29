import React, { useContext } from 'react';
import { Store } from '../store';
import { redirect, useNavigate } from 'react-router-dom';

interface INavBarProps {
}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  const token = localStorage.getItem('token');
  const { data, setData } = useContext(Store);
  const navigate = useNavigate();
  // const { token } = data;

  const logout = () => {
    localStorage.clear();
    setData({ token: null });
    navigate('/login');
  }

  return <>
    {token ? <>
      Hello Trieu <button onClick={logout}>Log out</button>
    </> : 'Please login'}
  </>;
};

export default NavBar;
