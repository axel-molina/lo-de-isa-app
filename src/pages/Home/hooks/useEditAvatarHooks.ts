/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { message } from "antd";
import { API_URL } from "../../../utils/api_url";
import { Routes } from "../../../api/routes_api";
import { setUser } from "../../../features/userData/userDataSlice";

const useEditAvatarHooks = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const idUser = useAppSelector((state) => state.userData.id);
  const token = localStorage.getItem("token");

  // Agregar Bearer al token y quitarle las comillas
  const tokenBearer = `Bearer ${token?.slice(1, -1)}`;

  const editAvatar = async (body: any) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL + Routes.user}/${idUser}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: tokenBearer,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        message.error("Error al editar el avatar");
        setIsLoading(false);
        return;
      }

      if (response.status === 200) {
        message.success("Avatar editado con éxito");
      }

      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  return {
    editAvatar,
    isLoading,
  };
};

export default useEditAvatarHooks;
