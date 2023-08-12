'use client'
import { FormEvent, useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { redirect, useRouter } from "next/navigation";
import { signIn } from 'next-auth/react'

function Login() {

    const router = useRouter()
    const [error, setError] = useState()
    const { handleLogin, isAdmin } = useContext(CartContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    // const onSubmit = (d) => handleLogin(d);

    const onSubmit = async (d) => {
        // const formData = new FormData(e.currentTarget)
        const resSignApi = await signIn('credentials', {
            mail: d.mail,
            pass: d.pass,
            redirect: false
        })

        if (resSignApi?.error) return setError(resSignApi.error)
        if (resSignApi?.ok) return router.push('/admin')
    }

    if (isAdmin) {
        redirect("/admin")
        // router.push("/")
    } else {
        return (
            <div className="flex flex-col mt-8 items-center justify-center px-6 py-8 mx-auto">
                {error ? <div>{error}</div> : <></>}
                <div className="w-full bg-white rounded-lg shadow dark:border max-w-sm dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                            Iniciar sesión
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo</label>
                                <input {...register("mail", { required: false })} type="email" name="mail" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                <input {...register("pass", { required: false })} type="password" name="pass" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Recordar</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Olvidé mi contraseña</a>
                            </div>
                            <button type="submit" className="w-full gradient text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Acceder</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                ¿No tienes una cuenta? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Regístrate</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login;