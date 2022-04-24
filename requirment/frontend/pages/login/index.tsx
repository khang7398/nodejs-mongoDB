import Link from 'next/link';
import React, { useState } from 'react';
import { useStore } from './store';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const fetch = useStore((state) => state.fetch);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUSer: any = {
      username: username,
      password: password,
    };
    fetch(newUSer);
  };
  return (
    <>
      <section className="login-container">
        <div className="login-title">Login</div>
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter user name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter Pass word"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Continue</button>
        </form>
        <div className="login-register"> Donnt have an account yet</div>
        {/* <Link href="/register"></Link> */}
      </section>
    </>
  );
}
