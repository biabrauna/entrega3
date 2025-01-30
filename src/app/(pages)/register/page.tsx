// pages/login.tsx
import React from 'react';

export default function Login(){

  return (
    <div className="flex flex-col bg-blue-800 w-dvw h-dvh justify-start items-center">
      <form className='flex flex-col justify-center rounded-sm border-black items-center p-4 gap-3 my-4 bg-blue-800 text-white'>
      <h2>Cadastrar</h2>
          <label htmlFor="email" >Digite seus dados</label>
          <input
            type="email"
            className="bg-blue-600 w-[80%] rounded-sm text-white"
            id="nome"
            placeholder='Digite o seu nome completo'
          />
          <input
            type="email"
            className="bg-blue-600 w-[80%] rounded-sm text-white"
            id="cpf"
            placeholder='Digite o seu cpf'
          />
          <input
            type="email"
            className="bg-blue-600 w-[80%] rounded-sm text-white"
            id="idade"
            placeholder='Digite a idade do pet'
          />
          <input
            type="email"
            className="bg-blue-600 w-[80%] rounded-sm text-white"
            id="email"
            placeholder='E-mail'
          />
          <input
            type="password"
            className="bg-blue-600 w-[80%] rounded-sm text-white"
            id="password"
            placeholder='Senha'
          />
        <button type="submit" className="w-[80%] h-auto bg-blue-500 :hover-bg-blue-700 text-white">Entrar</button>
      </form>
    </div>
  );
};
