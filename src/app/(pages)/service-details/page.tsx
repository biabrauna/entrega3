"use client";
import React from 'react';
import ServiceCard from "../../../components/ServiceCard";
import Header from "../../../components/Header"
import rate from "../../../../public/rate.png"
import Image from "next/image"

export default function ServiceDetails() {
  
  return (
    <div>
        <Header/>
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-blue-300 overflow-x-auto">
      
    <div className="flex flex-col bg-scroll md:flex-row justify-center items-center mx-10  mb-4 gap-4 ">  
        <h1>Encontre o serviço ideal para o seu pet aqui!</h1>
      <input className="bg-blue-200 mx-10 rounded-md text-black my-4 h-8 p-4" placeholder="Pesquise um serviço aqui..."/>
        
        <div className="flex justify-center w-[100vw] md:w-[50%] lg:w-[30%] px-4">
          <ServiceCard title="Hospedagem - Porte Médio" description="Socialize seu pet com outros amigos" price="R$ 150/dia" />
        </div>
      
        <div className="flex justify-center w-[100vw] md:w-[50%] lg:w-[30%] px-4">
          <ServiceCard title="Banho completo + tosa (10kg a 25kg)" description="Serviço completo de higiene" price="R$ 270" />
        </div>
      
        <div className="flex justify-center w-[100vw] md:w-[50%] lg:w-[30%] px-4">
          <ServiceCard title="Day Care 10kg a 25kg" description="Serviço completo de higiene" price="R$ 100" />
        </div>

        <button className="bg-blue-600 hover:bg-blue-900 text-white font-medium px-4 rounded-md">
            Ver Mais
            </button>
      </div>
    </div>
    <footer className="bottom-0 flex bg-yellow-700 flex-row justify-between items-left w-full">
      <div>
            <div className="bg-yellow-700 border-0 flex flex-col h-full w-full text-white p-4">
                <h2>Contato</h2>
                <p>Telefone: (11) 9999-9999</p>
                <p>Email: amigos_fieis@gmail.com</p>
            </div>
        </div>
        <div>
            <div className="bg-yellow-700 border-0 flex flex-col w-full h-full text-white p-4">
                <p>Endereço: Rua 95, qd 94, casa 27, Zona Sul Nova</p>
                <Image
                      className='w-[80%]'
                      src={rate}
                      alt="classificacao"
                />
            </div>
        </div>
        </footer>  
    </div>
  );
}