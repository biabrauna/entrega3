'use client';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import './globals.css';
import Image from 'next/image';
import auau from '../../public/auau.png';
import mulherpng from '../../public/mulherpng.png';
import rate from '../../public/rate.png';
import redes from '../../public/redes.png';
import Link from 'next/link';
import React, { useState } from 'react';
import brinquedo from '../../public/brinquedo.jpg'
import brinquedo2 from '../../public/brinquedo2.jpg'

import cinema from '../../public/cinema.webp'
import camanormal from '../../public/camanormal.jpg'
import comendo from '../../public/comendo.webp'

export default function Home() {

  const imageArray = [
    brinquedo, // Caminhos das imagens
    brinquedo2,
    cinema,
    comendo,
    camanormal
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-300 w-[100vw]">
      <Header />
      <main className="flex-1">
      <div className="bg-blue-300 w-[100vw] flex flex-row h-[60vh] ">
        <div className="flex-col flex-1 text-blue-900 bg-blue-300 gap-4 pt-8 w-[70%] px-4 h-[100%] justify-center items-center">
          <h2>Bem-vindo ao Amigos Fiéis,</h2>
          <p>Hotel, creche, spa ou sppiter(babá), uma variedade de serviços para o seu pet!</p>
          <Image
          className="w-[80%] md:w-[40%] lg:w-[40%]"
          src={auau}
          alt="auau principal"
          />
          <button className="bg-blue-600 hover:bg-blue-900 text-white font-medium px-4 rounded-md">
            <Link href="./service-details/">Saiba Mais</Link>
            </button>
        </div>
        <div className="w-[30%] h-[100vh]">
        <Sidebar/>
        </div>
      </div>

      <div className="flex-row flex bg-yellow-600 w-[100vw] h-[30vh] justify-center items-left">
      <div className="flex flex-col justify-center w-[50%]">
      <Image
      className='w-[100%] md:w-[50%] lg:w-[30%]'
      src={mulherpng}
      alt="auau secundario"
      />
          </div>
          <div className="w-[50%] text-white h-[100%] mr-4 flex flex-col justify-center items-center">
          <h2>Seu Pet Merece O Melhor Cuidado!</h2>
          <h2>Viaje com tranquilidade e seu pet no maior conforto.</h2>
          </div>
      </div>
      <div className="flex flex-col items-center justify-center h-[50vh]"> {/* Ajuste a altura conforme necessário */}
          <h1>Fotos do Hotel</h1>
          <Image
            className='w-[50%] h-[auto] object-contain md:w-[30%] lg:w-[20%]' // Ajuste largura e altura conforme necessário
            src={imageArray[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            width={500} // Defina largura e altura para evitar warnings
            height={300}
          />
          <div className="flex mt-4">
            <button onClick={handlePrevImage} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              Anterior
            </button>
            <button onClick={handleNextImage} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
              Próxima
            </button>
          </div>
        </div>

      <div className="flex flex-row items-center justify-center">
      <Image
      className='w-[40%] md:w-[20%] lg:w-[10%]'
          src={redes}
          alt="redes sociais"
          />
          <div className="text-blue-900 flex flex-col">
          <h1>Nos siga nas redes sociais e veja o feedback dos nossos clientes.</h1>
          <Link href="/"><span className="text-yellow-700">@amigos_fieis</span></Link>
          </div>
      </div>
      </main>
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
                <p>Endereço: loremisdsdsd</p>
                <Image
                      className='w-[50%] md:w-[20%] lg:w-[10%]'
                      src={rate}
                      alt="classificacao"
                />
            </div>
        </div>
        </footer>  
    </div>
  );
};

