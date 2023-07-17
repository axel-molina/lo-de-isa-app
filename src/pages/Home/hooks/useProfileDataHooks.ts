import { useState } from "react";
import { Routes } from "../../../api/routes_api";
import { API_URL } from "../../../utils/api_url";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { setUser } from "../../../features/userData/userDataSlice";

const useProfileDataHooks = () => {
  const dispatch = useAppDispatch();
  const [isLoadingProfileData, setIsLoadingProfileData] = useState(false);
  const idUser = useAppSelector((state) => state.userData.id);
  const token = localStorage.getItem("token");

  // Agregar Bearer al token y quitarle las comillas
  const tokenBearer = `Bearer ${token?.slice(1, -1)}`;

  const getProfileData = async () => {
    setIsLoadingProfileData(true);
    try {
      const response = await fetch(`${API_URL + Routes.user}/${idUser}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenBearer
        }
      }
      );
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(setUser(data));
        setIsLoadingProfileData(false);
      }
    } catch (error) {
      setIsLoadingProfileData(false);
    }
  };

  return {
    getProfileData,
    isLoadingProfileData,
  };
};

export default useProfileDataHooks;
