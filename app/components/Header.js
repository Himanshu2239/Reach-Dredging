
// "use client"

// import React from 'react'

// function Header() {
//   return (
// //    <header className="bg-background sticky top-0 z-20 text-foreground shadow-lg border-b">
// //       <div className="flex justify-between items-center">
// //         {/* <Image
// //           src={companylogo}
// //           alt="Company Logo"
// //           width={120}
// //           height={40}
// //           className="dark:invert pt-1 pl-2 pb-1"
// //           style={{ height: 'auto' }}
// //           priority
// //         //   onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu on logo click
// //         /> */}

// //         {/* Menu for larger screens */}
// //         {/* <div onClick={() => setIsMenuOpen(true)} className="hidden md:flex w-96 flex-row justify-between">
// //           <div onClick={() => handleRouter()} className="flex   dark:hover:bg-inherit p-1 pr-2 rounded-lg">
// //             <span>
// //               <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
// //                 <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
// //               </svg>
// //             </span>
// //             <button className="font-semibold pl-1 hover:underline text-[1.1rem]">Home</button>
// //           </div>
// //           <div className="flex   dark:hover:bg-inherit p-1 pr-2 rounded-lg" onClick={() => router.push('/OrderDetails')}>
// //             <span>
// //               <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
// //                 <path fillRule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd" />
// //               </svg>
// //             </span>
// //             <button className="font-semibold pl-1 hover:underline text-[1.1rem]">Order</button>
// //           </div>
// //           <div className="flex dark:hover:bg-inherit p-1 pr-2 rounded-lg" onClick={() => router.push('/IssueTracker')}>
// //             <span>
// //               <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
// //                 <path fillRule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clipRule="evenodd" />
// //                 <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
// //               </svg>
// //             </span>
// //             <button className="font-semibold pl-1 hover:underline text-[1.1rem]">Issues</button>
// //           </div>
// //         </div> */}

// //         {/* Mobile Menu */}
// //         {/* <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-[4.1rem] left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50`}>
// //           <div className="flex flex-col justify-start w-[60vw] rounded-br-lg bg-white dark:bg-black">
// //             <div onClick={() => handleRouter()} className="flex p-3 hover:bg-gray-200 dark:hover:bg-gray-900">
// //               <span>
// //                 <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
// //                   <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd" />
// //                 </svg>
// //               </span>
// //               <button className="font-semibold rounded-lg pl-1 hover:underline text-[1.1rem]">Home</button>
// //             </div>
// //             <div className="flex p-3 hover:bg-gray-200 dark:hover:bg-gray-900" onClick={() => router.push('/OrderDetails')}>
// //               <span>
// //                 <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
// //                   <path fillRule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd" />
// //                 </svg>
// //               </span>
// //               <button className="font-semibold pl-1 hover:underline text-[1.1rem]">Order</button>
// //             </div>
// //             <div className="flex p-3 hover:bg-gray-200 dark:hover:bg-gray-900 rounded-br-lg" onClick={() => router.push('/IssueTracker')}>
// //               <span>
// //                 <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
// //                   <path fillRule="evenodd" d="M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" clipRule="evenodd" />
// //                   <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z" />
// //                 </svg>
// //               </span>
// //               <button className="font-semibold pl-1 hover:underline text-[1.1rem]">Issues</button>
// //             </div>
// //           </div>
// //         </div> */}




// //       </div>
// //     </header>

//   )
// }

// export default Header;



// import companylogo from '../../public/logo.jpeg'
// import React from 'react';
// import Image from "next/image";
// import { useRouter } from 'next/navigation';

// function Header() {

//   const router = useRouter();
//   const handleLogout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//     localStorage.removeItem("userDetails");
//     router.push('/login');
//   }
//   return (
//     <header className='z-20'>
//       <nav className="bg-white z-20 border-gray-200 lg:px-6 dark:bg-gray-800">
//         <div className="flex flex-wrap justify-between items-center mx-auto">
//           <a className="flex items-center">
//             <Image
//                      src="/logo.jpeg"
//                      alt="User"
//                      width={200}
//                      height={20}
//                      className="mx-auto relative z-10 rounded-md"
//             />
//           </a>
//           <div className='flex font-bold'>

//           </div>
//           <div className="flex items-center lg:order-2">
//             {/* <a
//               href="#"
//               className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
//             >
//               Logout
//             </a> */}
//             <button onClick={handleLogout} className='font-bold rounded-lg p-2 text-white bg-blue-700'>Logout</button>
//             {/* <a
//               href="#"
//               className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
//             >
//               Get started
//             </a> */}
//             {/* <button
//               data-collapse-toggle="mobile-menu-2"
//               type="button"
//               className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="mobile-menu-2"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//               <svg
//                 className="hidden w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </button> */}
//           </div>
//           {/* <div
//             className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Company
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Marketplace
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Team
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div> */}
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;


// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { ChevronDown, FileText, User, Clipboard, Home } from "lucide-react";


// function Header() {
//     const router = useRouter();
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const handleLogout = () => {
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
//         localStorage.removeItem("userDetails");
//         router.push("/login");
//     };

//     return (
//         <header className="z-20 fixed w-full shadow-md bg-white dark:bg-gray-800">
//             <nav className="flex justify-between items-center">
//                 <div className="flex items-center">
//                     <Image
//                         src="/logo.jpeg"
//                         alt="User"
//                         width={200}
//                         height={20}
//                         className="mx-auto relative z-10 rounded-md"
//                     />
//                 </div>

//                 <div className="hidden md:flex space-x-16 font-semibold text-gray-800 dark:text-white">
//                 <div onClick={() => router.push('/admin')} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
//                 <Home className="w-5 h-5" />                 <span>Home</span>
//                     </div>
//                     <div onClick={() => router.push('/survey')} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
//                         <Clipboard className="w-5 h-5" />
//                         <span>Survey</span>
//                     </div>
//                     <div onClick={() => router.push('/Operator')} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
//                         <User className="w-5 h-5" />
//                         <span>Operator</span>
//                     </div>
//                     <div className="relative">
//                         <button
//                             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                             className="flex items-center space-x-1 hover:text-blue-600"
//                         >
//                             <FileText className="w-5 h-5" />
//                             <span>Report</span>
//                             <ChevronDown className="w-4 h-4" />
//                         </button>
//                         {isDropdownOpen && (
//                            <div className="absolute mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-2">
//                            <div
//                                onClick={() => router.push('/SurveyTable')}
//                                className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
//                            >
//                                Survey Report
//                            </div>
//                            <div
//                                onClick={() => router.push('/SurveyOilTable')}
//                                className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
//                            >
//                                Survey Oil Report
//                            </div>
//                            <div
//                                onClick={() => router.push('/OperatorReport')}
//                                className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
//                            >
//                                Operator Report
//                            </div>
//                        </div>

//                         )}
//                     </div>
//                 </div>

//                 <button
//                     onClick={handleLogout}
//                     className="px-4 py-2 text-white bg-blue-700 rounded-lg font-bold hover:bg-blue-800"
//                 >
//                     Logout
//                 </button>
//             </nav>
//         </header>
//     );
// }

// export default Header;





import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown, FileText, User, Clipboard, Home, Menu, X } from "lucide-react";

function Header() {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userDetails");
        router.push("/login");
    };

    return (
        <header className="z-20 fixed w-full shadow-md bg-white dark:bg-gray-800">
            <nav className="flex justify-between items-center px-4 py-3 md:px-10">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/logo.jpeg"
                        alt="User"
                        width={150}
                        height={20}
                        className="relative z-10 rounded-md"
                    />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 font-semibold text-gray-800 dark:text-white">
                    <div onClick={() => router.push('/admin')} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                        <Home className="w-5 h-5" />
                        <span>Home</span>
                    </div>
                    <div onClick={() => router.push('/survey')} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                        <Clipboard className="w-5 h-5" />
                        <span>Survey</span>
                    </div>
                    <div onClick={() => router.push('/Operator')} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                        <User className="w-5 h-5" />
                        <span>Operator</span>
                    </div>
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center space-x-1 hover:text-blue-600"
                        >
                            <FileText className="w-5 h-5" />
                            <span>Report</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-2">
                                <div onClick={() => router.push('/SurveyTable')} className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
                                    Survey Report
                                </div>
                                <div onClick={() => router.push('/SurveyOilTable')} className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
                                    Survey Oil Report
                                </div>
                                <div onClick={() => router.push('/OperatorReport')} className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
                                    Operator Report
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="hidden md:flex">
                    <button
                        onClick={handleLogout}
                        className="w-[6rem] px-4 py-2 text-white bg-blue-700 rounded-lg font-bold hover:bg-blue-800"
                    >
                        Logout
                    </button>
                </div>



                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 dark:text-white">
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 shadow-md absolute w-full left-0 top-14 p-4 space-y-4">
                    <div onClick={() => { router.push('/admin'); setIsMobileMenuOpen(false); }} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                        <Home className="w-5 h-5" />
                        <span>Home</span>
                    </div>
                    <div onClick={() => { router.push('/survey'); setIsMobileMenuOpen(false); }} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                        <Clipboard className="w-5 h-5" />
                        <span>Survey</span>
                    </div>
                    <div onClick={() => { router.push('/Operator'); setIsMobileMenuOpen(false); }} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
                        <User className="w-5 h-5" />
                        <span>Operator</span>
                    </div>
                    <div>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center space-x-1 w-full text-left hover:text-blue-600"
                        >
                            <FileText className="w-5 h-5" />
                            <span>Report</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        {isDropdownOpen && (
                            <div className="mt-2 space-y-2 pl-6">
                                <div onClick={() => { router.push('/SurveyTable'); setIsMobileMenuOpen(false); }} className="block cursor-pointer hover:text-blue-600">
                                    Survey Report
                                </div>
                                <div onClick={() => { router.push('/SurveyOilTable'); setIsMobileMenuOpen(false); }} className="block cursor-pointer hover:text-blue-600">
                                    Survey Oil Report
                                </div>
                                <div onClick={() => { router.push('/OperatorReport'); setIsMobileMenuOpen(false); }} className="block cursor-pointer hover:text-blue-600">
                                    Operator Report
                                </div>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-white bg-blue-700 rounded-lg font-bold hover:bg-blue-800"
                    >
                        Logout
                    </button>
                </div>
            )}
        </header>
    );
}

export default Header;


// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { ChevronDown, FileText, User, Clipboard, Home, Menu, X } from "lucide-react";

// function Header() {
//     const router = useRouter();
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const handleLogout = () => {
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
//         localStorage.removeItem("userDetails");
//         router.push("/login");
//     };

//     return (
//         <header className="z-20 fixed w-full shadow-md bg-white dark:bg-gray-800">
//             <nav className="flex justify-between items-center px-4 py-3 md:px-10">
//                 {/* Logo */}
//                 <div className="flex items-center">
//                     <Image
//                         src="/logo.jpeg"
//                         alt="Logo"
//                         width={150}
//                         height={20}
//                         className="relative z-10 rounded-md"
//                     />
//                 </div>

//                 {/* Desktop Navigation */}
//                 <div className="hidden md:flex items-center space-x-8 font-semibold text-gray-800 dark:text-white">
//                     <div onClick={() => router.push('/admin')} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
//                         <Home className="w-5 h-5" />
//                         <span>Home</span>
//                     </div>
//                     <div onClick={() => router.push('/survey')} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
//                         <Clipboard className="w-5 h-5" />
//                         <span>Survey</span>
//                     </div>
//                     <div onClick={() => router.push('/Operator')} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
//                         <User className="w-5 h-5" />
//                         <span>Operator</span>
//                     </div>
//                     <div className="relative">
//                         <button
//                             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                             className="flex items-center space-x-1 hover:text-blue-600"
//                         >
//                             <FileText className="w-5 h-5" />
//                             <span>Report</span>
//                             <ChevronDown className="w-4 h-4" />
//                         </button>
//                         {isDropdownOpen && (
//                             <div className="absolute mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-2">
//                                 <div onClick={() => router.push('/SurveyTable')} className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
//                                     Survey Report
//                                 </div>
//                                 <div onClick={() => router.push('/SurveyOilTable')} className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
//                                     Survey Oil Report
//                                 </div>
//                                 <div onClick={() => router.push('/OperatorReport')} className="block px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
//                                     Operator Report
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     {/* Logout Button for Desktop */}
//                     <button
//                         onClick={handleLogout}
//                         className="px-4 py-2 text-white bg-blue-700 rounded-lg font-bold hover:bg-blue-800"
//                     >
//                         Logout
//                     </button>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <div className="md:hidden flex items-center">
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 dark:text-white">
//                         {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                     </button>
//                 </div>
//             </nav>

//             {/* Mobile Dropdown Menu */}
//             {isMobileMenuOpen && (
//                 <div className="md:hidden bg-white dark:bg-gray-800 shadow-md absolute w-full left-0 top-14 p-4 space-y-4">
//                     <div onClick={() => { router.push('/admin'); setIsMobileMenuOpen(false); }} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
//                         <Home className="w-5 h-5" />
//                         <span>Home</span>
//                     </div>
//                     <div onClick={() => { router.push('/survey'); setIsMobileMenuOpen(false); }} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
//                         <Clipboard className="w-5 h-5" />
//                         <span>Survey</span>
//                     </div>
//                     <div onClick={() => { router.push('/Operator'); setIsMobileMenuOpen(false); }} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
//                         <User className="w-5 h-5" />
//                         <span>Operator</span>
//                     </div>
//                     <div>
//                         <button
//                             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                             className="flex items-center space-x-1 w-full text-left hover:text-blue-600"
//                         >
//                             <FileText className="w-5 h-5" />
//                             <span>Report</span>
//                             <ChevronDown className="w-4 h-4" />
//                         </button>
//                         {isDropdownOpen && (
//                             <div className="mt-2 space-y-2 pl-6">
//                                 <div onClick={() => { router.push('/SurveyTable'); setIsMobileMenuOpen(false); }} className="block cursor-pointer hover:text-blue-600">
//                                     Survey Report
//                                 </div>
//                                 <div onClick={() => { router.push('/SurveyOilTable'); setIsMobileMenuOpen(false); }} className="block cursor-pointer hover:text-blue-600">
//                                     Survey Oil Report
//                                 </div>
//                                 <div onClick={() => { router.push('/OperatorReport'); setIsMobileMenuOpen(false); }} className="block cursor-pointer hover:text-blue-600">
//                                     Operator Report
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                     <button
//                         onClick={handleLogout}
//                         className="w-full px-4 py-2 text-white bg-blue-700 rounded-lg font-bold hover:bg-blue-800"
//                     >
//                         Logout
//                     </button>
//                 </div>
//             )}
//         </header>
//     );
// }

// export default Header;





