"use client";
import React from 'react';
import ServiceCard from "../../../components/ServiceCard";
import Header from "../../../components/Header"
export default function ServiceDetails() {
  
  return (
    <div>
        <Header/>
    <div className="flex justify-center items-center w-[100vw] h-[100vh]  bg-blue-200 overflow-x-auto">
      
    <div className="flex flex-col md:flex-row justify-center items-center mx-10 gap-4 ">  
        <h1>Encontre o serviço ideal para o seu pet aqui!</h1>
      <input className="bg-blue-300 mx-10 rounded-md text-black my-4 h-8 p-4" placeholder="Pesquise um serviço aqui..."/>
        <div className="flex w-[100vw] justify-center md:w-[50%] lg:w-[30%] px-4">
          <ServiceCard title="Suíte VIP" description="Acomode seu pet em um espaço luxuoso" price="R$ 100/dia" />
        </div>
        <div className="flex justify-center w-[100vw] md:w-[50%] lg:w-[30%] px-4">
          <ServiceCard title="Área Coletiva" description="Socialize seu pet com outros amigos" price="R$ 50/dia" />
        </div>
        <div className="flex justify-center w-[100vw] md:w-[50%] lg:w-[30%] px-4">
          <ServiceCard title="Banho e Tosa" description="Serviço completo de higiene" price="R$ 30" />
        </div>
      </div>
    </div>
    </div>
  );
}