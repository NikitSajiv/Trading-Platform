import "./Auth.css"
import React from "react";
import SignupForm from "./SignupForm";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import SigninForm from "./SigninForm";

const Auth = () =>{

    const navigate = useNavigate()
    const location = useLocation()

    return(
        <div className="h-screen relative authContainer">
            <div className="absolute top-0 right-0 left-0 
            bottom-0 bg-[#FFFFFF] bg-opacity-50">
                <div className="bgBlure absolute top-1/2 left-1/2 transform
                -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center 
                items-center h-[35rem] w-[30rem] rounded-md z-50 bg-gray 
                bg-opacity-80 shadow-2xl shadow-black px-10">

                    <h1 className="text-6xl font-bold pb-9"> Nikit Trading</h1>

                    
                    {location.pathname=="/signup" ? (
                        <section className="w-full">
                            <SignupForm/>
                            <div className="flex items-center justify-center">
                                <span>Have An Account?</span>
                                <Button onClick={()=>navigate("/signin")} variant="ghost">
                                    Sign In
                                </Button>

                            </div>

                        </section>
                        )
                        : location.pathname=="/forgot-password" ? (
                        <section className="w-full">
                            <ForgotPasswordForm/>

                            <div className="flex items-center justify-center mt-2">
                                <Button onClick={()=>navigate("/signin")} variant="ghost">
                                    Back To Login?
                                </Button>

                            </div>

                        </section>  
                        ) : 
                        ( 
                        <section className="w-full">
                            <SigninForm/>
                            <div className="flex items-center justify-center">
                                <span>Dont Have An Account?</span>
                                <Button onClick={()=>navigate("/signup")} variant="ghost">
                                    Sign Up
                                </Button>

                            </div>

                            <div className="flex items-center justify-center">
                                <Button className="w-full py-5" onClick={()=>navigate("/forgot-password")} 
                                variant="outline">
                                    Forgot Password
                                </Button>

                            </div>
                        </section> 
                        )
                    }


                </div>



            </div>



        </div>
    )
}

export default Auth