// 'use client'

// import { useEffect } from "react";
// import { usePathname, useRouter, } from "next/navigation";
// import { jwtDecode } from "jwt-decode";
 

// const checkAuth = () => { 
//   if (typeof window === "undefined") return false;  
//     const token = localStorage.getItem("accessToken");

//     if (!token) {
//       return false;
//     }
//     try {
//       const decodedToken = jwtDecode(token);
//       const currentTime = Date.now() / 1000;

//       return decodedToken.exp > currentTime; // Returns true if token is valid
//     } catch (error) {
//       return false;
//     }
// };

// const ProtectedRoute = ({ children }) => {
//   const router = useRouter();
//   const pathName = usePathname();
//   let isAuthenticated
//   if(pathName !== '/login')
//   isAuthenticated = checkAuth();
//   else 
//   isAuthenticated = true;
//   console.log("isAuthenticated", isAuthenticated)
  

//   useEffect(() => {

//     if (!isAuthenticated) {
//       router.push("/login");
//     }
//   }, [isAuthenticated, router]);

//   // Prevents rendering children until authentication is verified
//   if (!isAuthenticated) {
//     return <p>Loading...</p>;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;



"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const checkAuth = () => {
  if (typeof window === "undefined") return false; // Ensure this runs only on the client

  const token = localStorage.getItem("accessToken");

  if (!token) return false;

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime; // Returns true if token is valid
  } catch (error) {
    return false;
  }
};

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const pathName = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pathName !== "/login") {
      setIsAuthenticated(checkAuth());
    } else {
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, [pathName]);

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
