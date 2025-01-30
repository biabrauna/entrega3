// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (

    <header className="flex flex-row w-[100%] bg-blue-600 p-4">
      <div className="text-white flex flex-row items-left gap-2 w-[100%] p-1">
        <h1 className="text-uppercase font-weight-bold">
          Amigos Fieles
        </h1>
        <nav className="flex gap-4">
          <Link className="text-white no-underline hover:text-blue-100" href="/" passHref>
       
              Home
            
          </Link>
          <Link className="text-white no-underlin hover:text-blue-100" href="/login" passHref>
              Login
            
          </Link>
          <Link className="text-white no-underlin hover:text-blue-100" href="/register" passHref>
            
              Cadastrar
            
          </Link>
        </nav>
        </div>
      </header>
  );
}

