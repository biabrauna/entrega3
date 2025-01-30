import Header from '@/components/Header';
import ServiceCard from '@/components/ServiceCard';
import Sidebar from '@/components/Sidebar';
import './globals.css';

export default function Home() {
  return (
    <div className="flex flex-col bg-blue-200 w-[100%] h-[100%]">
      <Header />
      <div className="bg-blue-200 flex flex-row ">
        <main className="flex-col flex-1 gap-4 justify-center m-10 items-center bg-blue-200">
          <h2>Bem-vindo ao Amigos Fieis!</h2>
          <p>O melhor hotel para seu pet.</p>
          <input className="bg-blue-300 rounded-md text-black my-4 " placeholder="Pesquise um serviço aqui..."/>
          <div className="bg-blue-200 flex flex-col gap-3">
            <div className="bg-blue-200 rounded-md">
              <ServiceCard title="Suíte VIP" description="Acomode seu pet em um espaço luxuoso" price="R$ 100/dia" />
            </div>
            <div className="bg-blue-200 rounded-md">
              <ServiceCard title="Área Coletiva" description="Socialize seu pet com outros amigos" price="R$ 50/dia" />
            </div>
            <div className="bg-blue-200 rounded-md">
              <ServiceCard title="Banho e Tosa" description="Serviço completo de higiene" price="R$ 30" />
            </div>
          </div>
        </main>
        <Sidebar/>
      </div>
    </div>
  );
};

