import Link from "next/link"
import Image from "next/image"
import pata from "../../../../public/pata.png"
export default function Login(){

  return (
    <div className="bg-blue-200 flex flex-col w-[100vw] h-[100vh] justify-center items-center">
      <div className=" border-blue-950 border-2 bg-blue-900 w-[70%] h-[80%] rounded-2xl flex justify-center items-center">
        <div className=" bg-blue-900 text-white font-medium w-[90%] h-[90%] flex flex-col justify-center items-center">
        <div className="flex flex-row h-[10%] w-[50%] justify-center items-center gap-4">
        <Image
          src={pata}
          className="w-auto h-6"
          alt="Cachorro Home"
          layout="responsive" 
          objectFit="cover" 
          /><h2 className="font-bold">Cadastro</h2><Image
          src={pata}
          className="w-auto h-6"
          alt="Cachorro Home"
          layout="responsive" 
          objectFit="cover" 
          />
              </div>
          <form className='flex flex-col border-2 rounded-md border-blue-900 justify-center items-center p-4 gap-3 my-4 bg-blue-800 text-white'>
          <div>
              <label htmlFor="email" >Nome completo</label>
              <input
                type="nome"
                className="bg-blue-500 p-1 text-white w-[100%] rounded-md"
                id="email"
                placeholder="Digite seu nome..."
                />
          </div>
          <div>
              <label htmlFor="email" >CPF</label>
              <input
                type="text"
                className="bg-blue-500 p-1 text-white w-[100%] rounded-md"
                id="cpf"
                placeholder="Digite seu cpf..."
                />
          </div>
          <div>
              <label htmlFor="email" >E-mail</label>
              <input
                type="email"
                className="bg-blue-500 p-1 text-white w-[100%] rounded-md"
                id="email"
                placeholder="Digite seu e-mail..."
                />
          </div>
          <div>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                className="bg-blue-500 w-[100%] p-1 text-white rounded-md"
                id="password"
                placeholder="Digite sua senha..."
                />
          </div>
          
            <button type="submit" className="w-[100%] h-auto p-1 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md"><Link href="../../login">Cadastrar</Link></button>
          <p className="font-base text-center">Já possui uma conta? <span className="text-yellow-500 underline hover:text-white"><Link href="../../login">Entre</Link> </span></p>
          </form>
            </div>
        </div>
       
    </div>

  );
}