"use client"
import axios from "axios"
import ApiError from "@/interfaces/apiError";
import ErrorMessage from "./errorMessage";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {

    const [errorHidden, setErrorHidden] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const router = useRouter();
    

    async function logout() {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {}, {withCredentials: true}).then((res) => {
            router.push("/login");
        }).catch((e) => {
            if (e.response) {
                if ((e.response.data as Object).hasOwnProperty("error")) {  
                    const res = e.response.data as ApiError;
                    setErrorHidden(false);
                    setErrorMessage(res.message);
                } else {
                    setErrorHidden(false);
                    setErrorMessage("");
                }
            } else {
                setErrorHidden(false);
                setErrorMessage("");
            }
        });
    }


    function errorOkButtonClicked(v: boolean) {
        router.push("/login");
    }


    return (
        <div>
            <button className="bg-red-500 rounded-lg px-5 py-3 text-slate-100" onClick={logout}>Uitloggen </button>
            <ErrorMessage hidden={errorHidden} setHiddenCallback={errorOkButtonClicked} title="Uitloggen mislukt!" desc={errorMessage} />
        </div>
    )
}