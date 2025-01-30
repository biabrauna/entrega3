// components/Sidebar.tsx
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-blue-600 text-white p-4 h-auto">
      <h5>Menu</h5>
      <Link href="/" passHref>
        Página Inicial
      </Link>
      <Link href="/service-details" passHref>
        Detalhes dos serviços
      </Link>
      <Link href="/profile" passHref>
        Perfil do Usuário
      </Link>
    </div>
  );
};

