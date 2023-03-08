import React, { useState } from 'react';
import { Routes } from '../api/routes_api';
import { IUserData } from '../models/UserModel';
import { API_URL } from '../utils/api_url';
import { getToken } from '../utils/token';

const useUserDataHook = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState<IUserData>(
        {
            "id": 0,
            "name": "",
            "lastname": "",
            "avatar": "",
            "email": "",
            "number": "",
            "businessName": "",
            "bank": 0
        }
    );

    const token = localStorage.getItem('token') || getToken();

    // quitar las comillas del token
    const tokenWithoutQuotes = token?.replace(/['"]+/g, '');


    const getUserData = async (email: string) => {
        try {
            const response = await fetch(`${API_URL}${Routes.viewprofile}?email=${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${tokenWithoutQuotes}`
                },
            });
    
            const data = await response.json();
             if(response.ok){
                setUserData(data);
                setIsLoading(false);
             }
            
        } catch (error) {
            console.log(error);
        }
        
    }

  return {
    getUserData,
    userData,
    isLoading,
  }
}

export default useUserDataHook;