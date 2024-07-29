import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import userService from '../services/user.service';
import { useNavigate } from 'react-router-dom';
import { Store } from '../store';

interface ILoginProps {
}

export interface LoginPayload {
  username: string;
  password: string;
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
  const navigate = useNavigate();
  const { setData } = useContext(Store);
  const [loginPayload, setLoginPayload] = useState<LoginPayload>({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Computed Property Name
    setLoginPayload((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { token } = await userService.login(loginPayload);
      setData({ token });
      localStorage.setItem('token', token);
      navigate('/');
    } catch (e) {
      alert('Incorrect');
    }
  }

  return <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <div>
          <input id='username' name='username' type="text" value={loginPayload.username} onChange={handleChange} />
        </div>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <div>
          <input id='password' name='password' type="password" value={loginPayload.password} onChange={handleChange} />
        </div>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  </>;
};

export default Login;
