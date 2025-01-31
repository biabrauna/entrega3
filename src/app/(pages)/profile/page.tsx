import Header from '../../../components/Header';
import Image from 'next/image';
import rate from '../../../../public/rate.png';
import perfil from '../../../../public/perfil.png';
import pet1 from '../../../../public/auau.png'
export default function Profile(){
    return(
        <div className="flex flex-col min-h-screen bg-blue-300 w-[100vw] items-center">
            <Header/>
            <main className="bg-blue-300 px-4 flex flex-col w-[80%] gap-4 my-10 h-[100%] items-center justify-center">
                    <div className="flex flex-row border-2 border-yellow-800 gap-2 text-white p-2 bg-yellow-600 rounded-md justify-center items-center">
                        <Image
                        className='w-[40%] md:w-[50%]'
                        alt="Foto de perfil"
                        src={perfil}
                        />
                        <div>
                            <div className="flex flex-col gap-2">
                                <h3>Nome: Fulano de Tal</h3>
                                <p>Idade: 20 anos</p>
                                <p>Telefone: (11) 9999-9999</p>
                                <p>Email: fulano@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row border-2 border-blue-800 p-2 text-white bg-blue-700 rounded-md justify-center items-center">
                        <Image
                        className='w-[40%] md:w-[50%]'
                        alt="Foto de perfil"
                        src={pet1}
                        />
                        <div>
                            <div className="flex flex-col gap-2">

                        <p>Pet 1</p>
                                <h3>Nome: Clemildo</h3>
                                <p>Idade: 20 anos</p>
                                <p>Raça: Golden Retriever</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row border-2 border-blue-800 p-2 text-white bg-blue-700 rounded-md justify-center items-center">
                        <Image
                        className='w-[40%] md:w-[50%]'
                        alt="Foto de perfil"
                        src={pet1}
                        />
                        <div>
                            <div className="flex flex-col gap-2">
                        <p>Pet 2</p>

                                <h3>Nome: Mel</h3>
                                <p>Idade: 10 anos</p>
                                <p>Raça: Vira-Lata</p>
                               
                            </div>
                        </div>
                    </div>
            </main>
            <footer className="bottom-0 flex bg-yellow-700 justify-between flex-row items-center w-full">
      <div>
            <div className="bg-yellow-700 border-0 flex-grow flex-col h-full w-full text-white p-4">
                <h2>Contato</h2>
                <p>Telefone: (11) 9999-9999</p>
                <p>Email: amigos_fieis@gmail.com</p>
            </div>
        </div>
        <div>
            <div className="bg-yellow-700 border-0 flex flex-col w-full h-full text-white p-4">
                <p>Endereço: Rua 95, qd 94, casa 27, Zona Sul Nova</p>
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
}