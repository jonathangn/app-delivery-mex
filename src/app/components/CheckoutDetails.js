import Image from "next/image";
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";


const CheckoutDetails = ({ setModal }) => {
  const { cart, setCart, cartTotal, handleCreateOrder, successMsg, setSuccessMsg, setBanner, banner } = useContext(CartContext)
  const [count, setCount] = useState(5)

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1)
        }
      }, 1000);
      return () => clearTimeout(timer)
    }
  })

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1)
        }
        setSuccessMsg(false)
        setCart([])
        setModal(false)
        setBanner(true)
      }, 5000);
      return () => clearTimeout(timer)
    }
  })

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (d) => handleCreateOrder(d);

  return (
    <div>
      {successMsg ?
        <div className="flex flex-col justify-center items-center h-[100vh] lg:h-[600px] px-6">
          <h2 className="text-2xl font-semibold text-center ">Gracias! Tu pedido ha sido registrado</h2>
          <Image src={'/success-1.gif'} width={150} height={150} alt="" />
          <div className="">
            Este panel se cerrará en <span>{count}</span> segundos
          </div>
        </div>
        : <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:gap-x-8 h-full lg:px-12 lg:py-8">

            <h2 className="mb-6 text-[20px] uppercase font-extrabold text-center lg:text-left pt-6 lg:pt-0">Detalles de Entrega</h2>
            <div className="h-[86vh] lg:h-[47.5vh] flex flex-col lg:flex-row lg:gap-x-4">
              <div className="flex-1 h-full overflow-y-auto lg:overflow-visible py-4 px-8 lg:py-0 lg:px-0 overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-white-500">
                <div className="flex flex-col gap-4 h-full">
                  <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4 ">
                    <input {...register("customerName", { required: true })} type="text" className="w-full input" placeholder="Nombre" />
                    <input {...register("customerLastname", { required: true })} type="text" className="w-full input" placeholder="Apellido" />
                  </div>

                  <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4 ">
                    <input {...register("phone", { required: true })} type="text" className="w-full input" placeholder="Teléfono" />
                    <input {...register("email")} type="text" className="w-full input" placeholder="Email (Opcional)" />
                  </div>

                  <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:gap-x-4 ">
                    <input {...register("address", { required: true })} type="text" className="w-full input" placeholder="Dirección" />
                    <input {...register("details")} type="text" className="w-full input" placeholder="Apt / Off (Opcional)" />
                  </div>
                  <div className="flex-1 h-full">
                    <textarea {...register("comments")} className="textarea w-full h-full" placeholder="Comentarios (Optional)" />
                  </div>
                </div>
              </div>
              <div className="flex-1 h-full lg:max-w-[40%] flex flex-col justify-between pt-3 px-8 lg:p-0">
                <div className="border rounded-lg flex flex-col mb-4 p-4 h-full">
                  <h3 className="text-base font-extrabold uppercase mb-4 border-b pb-4 ">Tu Orden</h3>
                  <div className="overflow-y-scroll overflow-hidden scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-white-500 font-semibold flex flex-col gap-y-4 h-[240px] py-2 ">
                    {cart.map((pizza, index) => {
                      return (
                        <div className="flex justify-between text-[15px]" key={index}>
                          <div className="flex gap-x-2">
                            <div className="capitalize">{pizza.name}</div>
                            <div>{pizza.amount > 1 && `x ${pizza.amount}`}</div>
                          </div>
                          <div>{parseFloat(pizza.price * pizza.amount).toFixed(2)}</div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex items-center justify-between mb-2 text-lg font-semibold font-robotoCondensed">
                    <div>Total:</div>
                    <div>$ {parseFloat(cartTotal).toFixed(2)}</div>
                  </div>
                </div>
                <button type="submit" className="btn btn-lg gradient w-full">
                  Realizar pedido
                </button>
              </div>
            </div>
          </div>
        </form>
      }
    </div>
  );
};

export default CheckoutDetails;
