import React from 'react'
import { useState } from 'react'
import logo from './logocatchaswell.png';
import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';
import boards from './boardsmore.jpg';
import velho from './velho.jpg';

function Navbarcode({ user }) {
    console.log(user && true);

    return (
        <>
            <header className="sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
                <nav className="max-w-screen-l mx-auto h-24 bg-[#5BB6AE] px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                    <div className="flex items-center justify-between">
                        <Link to="/home">
                            <img src={logo} className="h-20" alt="Catchaswell Logo" />
                        </ Link>

                        <div className="sm:hidden">
                            {/* menu responsivo */}
                            <button
                                type="button"
                                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                data-hs-collapse="#navbar-collapse-with-animation"
                                aria-controls="navbar-collapse-with-animation"
                                aria-label="Toggle navigation"
                                id="menu-button"
                            >
                                <svg
                                    className="hs-collapse-open:hidden w-4 h-4"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                    />
                                </svg>
                                <svg
                                    className="hs-collapse-open:block hidden w-4 h-4"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </button>
                            {/* menu responsivo */}
                        </div>
                    </div>

                    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-7 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">

                            <Link to="/test" className="flex items-center px-2 font-medium text-[#EFEFEF] hover:text-gray-500 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-500">
                                Metereologia
                            </Link>

                            <Link to="/test" className="flex items-center px-5 font-medium text-[#EFEFEF] hover:text-gray-500 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-500">
                                Preçário
                            </Link>

                            <div className="flex">
                                <Dropdown label="Aulas" class="font-medium text-[#EFEFEF] w-full hover:text-gray-500">
                                    <Dropdown label="Surf" placement="right" class="font-medium text-gray-500 w-full hover:text-gray-500" >
                                        <Link to="/horario">
                                            <Dropdown.Item class="text-gray-500 font-medium pl-4 pb-2 pt-2 pr-4 hover:bg-gray-100">
                                                Individual
                                            </Dropdown.Item>
                                        </Link>
                                        <Link to="/horarioGrupo">
                                            <Dropdown.Item class="text-gray-500 font-medium pl-4 pb-2 pt-2 pr-4 hover:bg-gray-100">
                                                Grupo
                                            </Dropdown.Item>
                                        </Link>
                                    </Dropdown>
                                    <Dropdown label="Bodyboard" placement="right" class="font-medium text-gray-500 w-full hover:text-gray-500" >
                                        <Link to="/horarioGrupo">
                                            <Dropdown.Item class="text-gray-500 font-medium pl-4 pb-2 pt-2 pr-4 hover:bg-gray-100">
                                                Individual
                                            </Dropdown.Item>
                                        </Link>
                                        <Link to="/test">
                                            <Dropdown.Item class="text-gray-500 font-medium pl-4 pb-2 pt-2 pr-4 hover:bg-gray-100">
                                                Grupo
                                            </Dropdown.Item>
                                        </Link>
                                    </Dropdown>
                                </Dropdown>
                            </div>

                            <Link to="/material" className="flex items-center px-5 font-medium text-[#EFEFEF] hover:text-gray-500 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-500">
                                Material
                            </Link>

                            {/* <div className="flex">
                                <Dropdown label="Material" class="font-medium text-[#EFEFEF] w-full hover:text-gray-500">
                                    <Link to="/material">
                                        <Dropdown.Item class="text-gray-500 font-medium pl-4 pb-2 pt-2 hover:bg-gray-100">
                                            Surf
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/test">
                                        <Dropdown.Item class="text-gray-500 font-medium pl-4 pb-2 pt-2 pr-4 hover:bg-gray-100">
                                            Bodyboard
                                        </Dropdown.Item>
                                    </Link>
                                </Dropdown>
                            </div> */}

                            {!user && <Link to="/login" className="flex items-center gap-x-2 font-medium text-[#EFEFEF] hover:text-gray-500 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-500">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                Entrar
                            </Link>}

                            {!user && <Link to="/signup" className="flex items-center gap-x-2 font-medium text-[#EFEFEF] hover:text-gray-500 sm:border-l sm:border-gray-500 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-500">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                Inscrever
                            </Link>}

                            {user &&
                                (
                                    (user.cargo === "professor" || user.cargo === "Professor")
                                        ? <Link to="/personalarea2" className="flex items-center gap-x-2 space-x-4 font-medium text-[#EFEFEF] hover:text-gray-500 sm:border-l sm:border-gray-500 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-500">Hi {user["fname"]} {user["lname"]}! <img src={velho} alt='user' className="w-12 h-12 rounded-full flex items-center justify-center"></img></Link>
                                        : <Link to="/personalarea" className="flex items-center gap-x-2 space-x-4 font-medium text-[#EFEFEF] hover:text-gray-500 sm:border-l sm:border-gray-500 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-500">Hi {user["fname"]} {user["lname"]}! <img src={boards} alt='user' className="w-12 h-12 rounded-full flex items-center justify-center"></img></Link>
                                    // (
                                    //   (document.getElementById("cargo").value === "aluno") || (document.getElementById("cargo").value === "Aluno")
                                    // )
                                    // ? window.location.replace("http://localhost:5173/personalarea")
                                    // : window.location.replace("http://localhost:5173/login")
                                )
                                // <Link to="/personalarea" className="flex items-center gap-x-2 space-x-4 font-medium text-[#EFEFEF] hover:text-gray-500 sm:border-l sm:border-gray-500 sm:my-6 sm:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-gray-500">Hi {user["fname"]} {user["lname"]}! <img src={boards} alt='user' className="w-12 h-12 rounded-full flex items-center justify-center"></img></Link>
                            }
                        </div>
                    </div>
                </nav>
            </header >
        </>
    )
}

export default Navbarcode





















{/* <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                                <button type="button" className="flex items-center w-full text-[#EFEFEF] hover:text-gray-500 font-medium dark:text-gray-400 dark:hover:text-gray-500" data-hs-dropdown>
                                    Aulas
                                    <svg className="ml-2 w-2.5 h-2.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                    </svg>
                                </button>
                                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">

                                    <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                        <button type="button" className="w-full flex justify-between w-full items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                            Surf
                                            <svg className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                            </svg>
                                        </button>

                                        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                Individual
                                            </a>
                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                Grupo
                                            </a>
                                        </div>
                                    </div>

                                    <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                        <button type="button" className="w-full flex justify-between w-full items-center text-sm text-gray-800 rounded-md py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                                            Bodyboard
                                            <svg className="sm:-rotate-90 ml-2 w-2.5 h-2.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                            </svg>
                                        </button>

                                        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute sm:border before:-right-5 before:top-0 before:h-full before:w-5 top-0 right-full !mx-[10px]">
                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                Individual
                                            </a>
                                            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                                Grupo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
{/* <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                                <button type="button" className="flex items-center w-full text-[#EFEFEF] hover:text-gray-500 font-medium dark:text-gray-400 dark:hover:text-gray-500">
                                    Material
                                    <svg className="ml-2 w-2.5 h-2.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                                    </svg>
                                </button>
                                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
                                    <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            Surf
                                        </a>
                                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                                            Bodyboard
                                        </a>
                                    </div>
                                </div>
                            </div> */}











// document.addEventListener('DOMContentLoaded', function () {
//     var dropdownButton = document.getElementById('dropdown-button');
//     var isDropdownOpen = false;

//     dropdownButton.addEventListener('click', function () {
//         isDropdownOpen = !isDropdownOpen;
//         var openIcon = document.querySelector('.hs-collapse-open');
//         var closedIcon = document.querySelector('.hs-collapse-open:hidden');

//         if (isDropdownOpen) {
//             openIcon.classList.remove('hidden');
//             closedIcon.classList.add('hidden');
//             // Add code to show the dropdown content here
//         } else {
//             openIcon.classList.add('hidden');
//             closedIcon.classList.remove('hidden');
//             // Add code to hide the dropdown content here
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     var menuButton = document.getElementById('menu-button');
//     var isMenuOpen = false;

//     menuButton.addEventListener('click', function () {
//         isMenuOpen = !isMenuOpen;
//         var openIcon = document.querySelector('.hs-collapse-open');
//         var closedIcon = document.querySelector('.hs-collapse-open:hidden');

//         if (isMenuOpen) {
//             openIcon.classList.remove('hidden');
//             closedIcon.classList.add('hidden');
//             // Add code to show the menu or trigger any desired action here
//         } else {
//             openIcon.classList.add('hidden');
//             closedIcon.classList.remove('hidden');
//             // Add code to hide the menu or trigger any desired action here
//         }
//     });
// });