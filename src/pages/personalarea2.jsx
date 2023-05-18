import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import assets from '../assets/assets';
import user from './velho.jpg'

const PersonalArea2 = () => {
  const [seguidores, setSeguidores] = useState(100);
  const [seguindo, setSeguindo] = useState(50);
  const [seguindoUsuario, setSeguindoUsuario] = useState(false);

  const handleSeguir = () => {
    if (!seguindoUsuario) {
      setSeguidores(seguidores + 1);
      setSeguindoUsuario(true);
    } else {
      setSeguidores(seguidores - 1);
      setSeguindoUsuario(false);
    }
  };




  return (

    <div className="container  mt-20 ml-40">

      <div>
        <div className="max-w text-left">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Olá,Abel Costa!</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Você não pode colocar um limite para nada. Quanto mais você sonha, mais longe você pode chegar.
          </p>
          <table className="p-1  mt-14">
            <tr>
              <th className="relative w-60 h-60 ml-6 mb-5 mr-10 overflow-hidden rounded-lg ">
                <img className="absolute top-0 left-0 w-full h-full " src={user} alt="User" />
              </th>
              <th>
                <div className='ml-14 '>
                  <p className="text-3xl text-left ml-0 mt-0 " >Sobre mim:</p>
                  <p className="text-left mt-5 text-gray-800 text-left fonttext-xl" >Nome: Abel</p>
                  <p className="text-left mt-5 text-gray-800 text-left fonttext-xl" >Apelido: Costa</p>
                  <p className="text-left mt-5 text-gray-800 text-left fonttext-xl"  >email:  abelcosta@gmail.com</p>
                  <p className="text-left mt-5 text-gray-800 text-left fonttext-xl" >Contacto: 977666333</p>
                </div>
              </th>
            </tr>
          </table>
          {/* <div className='flex justify-end mr-20'>
            <button
              type="button"
              className="rounded-md bg-[#5BB6AE] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#037971] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#037971]">
              Oficializar Inscrição
            </button>
          </div> */}
        </div>

        < div className="flex flex-col w-full md:h-1/2">
          {/* Coluna direita    */}
          {/* flex justify-center w-2/3 */}
          <div className="flex flex-col w-full md:h-1/2">
            {/* Coluna direita    */}
            {/* flex justify-center w-2/3 */}
            <div className="max-w text-left mt-10">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">As minhas aulas:</h2>
            </div>

          </div>
          <div>
            <div className="mt-7">
              <div className="flex flex-wrap -mx-2 ">
                <div className="w-full md:w-1/4 px-2 mb-8 ">
                  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="block rounded-lg bg-[#5BB6AE] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">

                      <div className="relative overflow-hidden bg-cover text-center">
                        {/* <img className="scale-100" src="https://img.bertrand.pt/images/1984-george-orwell/NDV8MjQ1NzU3Njd8MjA2ODY4MDB8MTYxMDYzNjYzNDAwMA==/258x300" alt="" /> */}
                        <a href="#!">
                          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                        <p className="text-3xl  ml-0 mt-10" >Aula1</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl"  >Dia: Segunda</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl"  >Horas: 09:00 - 11:00</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl" >Nº Alunos: 6</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl"  > Material necessário:  Sim</p>
                      </div>

                      <div className="p-2">

                        <div className="flex justify-between items-center px-8">



                          {/* <span className="inline-block text-2xl" role="img" aria-label="heart">❤️</span> */}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/4 px-2 mb-8 ">
                  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="block rounded-lg bg-[#5BB6AE] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">

                      <div className="relative overflow-hidden bg-cover text-center">
                        {/* <img className="scale-100" src="https://img.bertrand.pt/images/1984-george-orwell/NDV8MjQ1NzU3Njd8MjA2ODY4MDB8MTYxMDYzNjYzNDAwMA==/258x300" alt="" /> */}
                        <a href="#!">
                          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                        <p className="text-3xl  ml-0 mt-10" >Aula 2</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl"  >Dia: Segunda</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl"  >Horas: 11:00 - 13:00</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl" >Nº Alunos: 6</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl"  > Material necessário:  Sim</p>
                      </div>

                      <div className="p-2">

                        <div className="flex justify-between items-center px-8">
                          {/* 
                          <h5 className="mb-2 text-xl font-medium leading-center text-center dark:text-neutral-10 mx-auto">
                            1984
                          </h5> */}


                          {/* <span className="inline-block text-2xl" role="img" aria-label="heart">❤️</span> */}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/4 px-2 mb-8 ">
                  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="block rounded-lg bg-[#5BB6AE] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">

                      <div className="relative overflow-hidden bg-cover text-center">
                        {/* <img className="scale-100" src="https://img.bertrand.pt/images/1984-george-orwell/NDV8MjQ1NzU3Njd8MjA2ODY4MDB8MTYxMDYzNjYzNDAwMA==/258x300" alt="" /> */}
                        <a href="#!">
                          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                        <p className="text-3xl  ml-0 mt-10" >Aula 3</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl"  >Dia: Segunda</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl"  >Horas: 16:00 - 18:00</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl" >Nº Alunos: 5 </p>
                        <p className=" mt-5 text-gray-800  fonttext-xl"  > Material necessário:  Sim</p>
                      </div>

                      <div className="p-2">

                        <div className="flex justify-between items-center px-8">
                          {/* 
                          <h5 className="mb-2 text-xl font-medium leading-center text-center dark:text-neutral-10 mx-auto">
                            1984
                          </h5> */}


                          {/* <span className="inline-block text-2xl" role="img" aria-label="heart">❤️</span> */}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/4 px-2 mb-8 ">
                  <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="block rounded-lg bg-[#5BB6AE] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 ">

                      <div className="relative overflow-hidden bg-cover text-center">
                        {/* <img className="scale-100" src="https://img.bertrand.pt/images/1984-george-orwell/NDV8MjQ1NzU3Njd8MjA2ODY4MDB8MTYxMDYzNjYzNDAwMA==/258x300" alt="" /> */}
                        <a href="#!">
                          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                        <p className="text-3xl  ml-0 mt-10" >Aula 4</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl"  >Dia: Terça</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl"  >Horas: 09:00 - 11:00</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl" >Nº Alunos: 6</p>
                        <p className=" mt-5 text-gray-800  fonttext-xl"  > Material necessário:  Sim</p>
                      </div>

                      <div className="p-2">

                        <div className="flex justify-between items-center px-8">
                          {/* 
                          <h5 className="mb-2 text-xl font-medium leading-center text-center dark:text-neutral-10 mx-auto">
                            1984
                          </h5> */}


                          {/* <span className="inline-block text-2xl" role="img" aria-label="heart">❤️</span> */}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>


        </div>
      </div>
      <div className='flex justify-end mr-20 mt-2'>
        <Link to="/home">
          <button
            type="button"
            className="rounded-md bg-[#5BB6AE] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#037971] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#037971]"
          // onClick={handleSeguir}
          >
            {/* {seguindoUsuario ? "Terminar Sessão" : "Disable"} */}
            Terminar sessão
          </button>
        </Link>
      </div>
      <footer className="mt-20 w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center">
          <div>
            <a className="flex-none text-xl font-medium text-[#5BB6AE] dark:text-white">catch.a.swell@gmail.com</a>
            <p className="text-gray-900">Contacto telefónico: (+351) 233 011 236</p>
          </div>
          <div className="mt-3">
            <p className="text-gray-500">Nós fazemos parte da família <Link to="/home" className="text-[#5BB6AE]">Catch a swell.</Link></p>
            <p className="text-gray-500">Localização: Avenida dos Pescadores nº10, Praia da Cova Gala 3090-667 Figueira da Foz, Portugal</p>
            <p className="text-gray-500">© CatchASwell. 2015. All rights reserved.</p>
          </div>
        </div>
      </footer>




    </div >



  );
}

export default PersonalArea2;