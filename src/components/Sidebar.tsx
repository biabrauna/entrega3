import Link from 'next/link';

export default function Sidebar() {

  return (
    <div className="flex flex-col bg-blue-500 rounded-b-md text-white p-4 gap-1 h-auto">
      <Link className="hover:text-blue-900" href="/" passHref>
        Página Inicial
      </Link>
      <div className="w-[100%] min-h-px bg-blue-800"></div>
      <Link className="hover:text-blue-900" href="../service-details/" passHref>
        Detalhes dos serviços
      </Link>
      <div className="w-[100%] min-h-px bg-blue-800"></div>
      <Link className="hover:text-blue-900" href="../profile/" passHref>
        Perfil 
      </Link>
    </div>
  );
};

