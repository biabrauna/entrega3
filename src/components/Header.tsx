import Link from 'next/link';
import Image from "next/image"
import patatiny from "../../public/patatiny.png"

export default function Header() {
  return (

    <div className="flex flex-row w-[100%] border-b-2 border-blue-300 bg-blue-200 p-3">
      <div className="text-blue-900 flex flex-row justify-between items-left w-[100%] p-2 md:p-4 lg:p-8">
        <div className="flex flex-row">
          <Image
          src={patatiny}
          className="h-10"
          alt="Cachorro Home"
          layout="responsive" 
          objectFit="cover" 
          />
          <h1 className="size-6 font-bold">
          Amigos Fiéis
        </h1>
          </div>
        <nav className="flex gap-2 justify-center items-center">
          <Link className="text-blue-800 no-underline hover:text-zinc-950 houver:underline" href="/" passHref>
       
              Home
            
          </Link>
          <Link className="text-blue-800 no-underlin hover:text-zinc-950 houver:underline" href="../login/" passHref>
              Login
            
          </Link>
          <Link className="text-blue-800 no-underlin hover:text-zinc-950 hover:underline" href="../register/" passHref>
            
              Cadastrar
            
          </Link>
        </nav>
        </div>
      </div>
  );
}

