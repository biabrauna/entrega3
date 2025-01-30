// pages/login.tsx
import React from 'react';

export default function Login(){

  return (
    <div className="flex flex-col bg-blue-800 w-dvw h-dvh justify-start items-center">
      <form className='flex flex-col justify-center rounded-sm border-black items-center p-4 gap-3 my-4 bg-blue-800 text-white'>
      <h2>Login</h2>
          <label htmlFor="email" >E-mail</label>
          <input
            type="email"
            className="bg-blue-600 w-[80%] rounded-sm"
            id="email"
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            className="bg-blue-600 w-[80%] rounded-sm"
            id="password"
          />
        <button type="submit" className="w-[80%] h-auto bg-blue-500 :hover-bg-blue-700 text-white">Entrar</button>
      </form>
    </div>
  );
};

