import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import './globals.css';
import Image from 'next/image'
import auau from '../../public/auau.png'
import mulherpng from '../../public/mulherpng.png'
import rate from '../../public/rate.png'
import redes from '../../public/redes.png'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-300 w-[100vw]">
      <Header />
      <main className="flex-1">
      <div className="bg-blue-300 w-[100vw] flex flex-row h-[60vh] ">
        <div className="flex-col flex-1 text-white bg-blue-300 gap-4 w-[70%] p-4 h-[50vh] justify-center items-center">
          <h2>Bem-vindo ao Amigos Fiéis,</h2>
          <p>Hotel, creche, spa ou sppiter(babá), uma variedade de serviços para o seu pet!</p>
          <Image
          src={auau}
          alt="auau principal"
          />
          <button className="bg-blue-600 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-md">
            Saiba Mais
            </button>
        </div>
        <div className="w-[30%] h-[100vh]">
        <Sidebar/>
        </div>
      </div>
      <div className="flex flex-row">
      <Image
      className='w-[100%]'
          src={redes}
          alt="redes sociais"
          />
          <div>
          <h1>Nos siga nas redes sociais e veja o feedback dos nossos clientes.</h1>
          <Link href="#">@amigos_fieis</Link>
          </div>
      </div>

      <div className="flex-row flex my-16 bg-yellow-600 w-[100vw] h-[40vh] justify-center items-left">
      <div className="flex flex-col justify-center w-[50%]">
      <Image
      className='w-[100%]'
          src={mulherpng}
          alt="auau secundario"
          />
          </div>
          <div className="w-[50%] text-white h-[100%] mr-4 flex flex-col justify-center items-center">
          <h2>Seu Pet Merece O Melhor Cuidado!</h2>
          <h2>Viaje com tranquilidade e seu pet no maior conforto.</h2>
          </div>
      </div>
      </main>
      <footer className="bottom-0 flex bg-yellow-700 flex-row items-left w-full">
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
                      className='w-[80%]'
                      src={rate}
                      alt="classificacao"
                />
            </div>
        </div>
        </footer>  
    </div>
  );
};

