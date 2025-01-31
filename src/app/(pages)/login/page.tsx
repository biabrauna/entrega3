import Link from "next/link"
import Image from "next/image"
import pata from "../../../../public/pata.png"

export default function Login(){

  return (
    <div className="bg-blue-200 flex flex-col w-[100vw] h-[100vh] justify-center items-center">
      <div className=" border-blue-950 border-2 bg-blue-900 w-[70%] h-[60%] rounded-2xl flex justify-center items-center">
        <div className=" bg-blue-900 text-white font-medium w-[90%] h-[90%] flex flex-col justify-center items-center">
        <div className="flex flex-1 flex-row h-[10%] w-[50%] justify-center items-center gap-4">
        <Image
          src={pata}
          className="w-10 h-auto"
          alt="Cachorro Home"
          layout="responsive" 
          objectFit="cover" 
          /><h2  className="font-bold">Login</h2><Image
          src={pata}
          className="w-10 h-auto"
          alt="Cachorro Home"
          layout="responsive" 
          objectFit="cover" 
          />
              </div>
          <form className='flex flex-col border-2 border-blue-900 justify-center rounded-md items-center p-4 gap-3 my-4 bg-blue-800 text-white'>
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
          <div className="flex flex-row justify-center items-center gap-2">
          <input type="checkbox" name="salvar" value="sim"/> <label htmlFor="salvar" className="text-left">Lembrar de mim</label>
          </div>
          <p className="underline text-sm text-left">Esqueceu a senha?</p>
            <button type="submit" className="w-[100%] h-auto p-1 bg-yellow-600 hover:bg-yellow-500 text-white rounded-md"><Link href="../../">Entrar</Link></button>
          <p className="text-base text-center">Ainda não possui uma conta? <span className="text-yellow-500 underline hover:text-white"><Link href="../../register">Cadastre-se</Link> </span></p>
          </form>
            </div>
        </div>
    </div>
  );
};

