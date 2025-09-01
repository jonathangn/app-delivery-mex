
import Link from 'next/link'
import Image from "next/image";
import { CartContext } from "../context/CartContext";
import { FaClipboardList } from "react-icons/fa";
import moment from 'moment';
import 'moment/locale/es'
moment.locale('es')

const Order = ({ order, stateTx, time, setStateTx, handleUpdateOrder, status, setStatus }) => {
    const orderDate = moment(time).calendar() ?? null

    async function handleClick(e) {
        e.preventDefault();
        const newStatus = await handleUpdateOrder({ order })
        setStatus(newStatus)
    }

    return (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex flex-row items-center justify-between mx-auto p-4">
                <div className="w-auto flex justify-start item-start space-y-2 flex-col">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Detalles Orden</h1>
                    <p className="text-base font-medium leading-6 text-gray-600">{orderDate}</p>
                </div>

                <a href={`/admin`} className="gradient text-white gradient flex font-medium rounded-lg px-4 my-1 py-4 text-center mr-3"> <FaClipboardList className="fa-xl" /></a>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        {/* <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Pedido del Cliente</p> */}
                        {order && order?.cart?.map((item) => {
                            return <>
                                <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                    {/* <div className="pb-4 md:pb-8 w-full md:w-40">
                                        <Image width={138} height={138} className="w-full rounded-xl hidden md:block" src={item.image} alt={item.name} />
                                        <Image width={138} height={138} className="w-full rounded-xl md:hidden" src={item.image} alt={item.name} />
                                    </div> */}
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{item.name}</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                <p className="text-sm leading-none text-gray-800"><span className="text-gray-800 font-semibold">Picante: </span> {item.crust}</p>
                                                {/* <p className="text-sm leading-none text-gray-800"><span className="text-gray-800 font-semibold">Tamaño: </span> {item.size}</p> */}
                                            </div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            {item && item?.additionalTopping?.map((e) => {
                                                return <>
                                                    <p className="text-base xl:text-lg leading-6">{e.name}<span className="text-red-300 line-through"></span></p>
                                                </>
                                            })}
                                            <p className="text-base leading-6 text-gray-800">{item.amount}</p>
                                            <p className="text-lg font-semibold leading-6 text-gray-800">{`$ ${item.price}`}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })}
                    </div>
                    <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Resumen</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between w-full">
                                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base leading-4 text-gray-600">0</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">Descuento <span className="bg-gray-200 p-1 text-xs font-medium leading-3 text-gray-800">N/A</span></p>
                                    <p className="text-base leading-4 text-gray-600">-$0 (0%)</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base leading-4 text-gray-800">Domicilio</p>
                                    <p className="text-base leading-4 text-gray-600">$5.000</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base font-semibold leading-4 text-gray-600">{order?.total}</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
                            <h3 className="text-xl font-semibold leading-5 text-gray-800">Estado</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                    <div className="w-8 h-8">
                                        <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="text-lg leading-6 font-semibold text-gray-800">{stateTx}<br />
                                            {/* <span className="font-normal">{order?.status}</span> */}
                                        </p>
                                    </div>
                                </div>
                                {/* <p className="text-lg font-semibold leading-6 text-gray-800">$5.000</p> */}
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <button onClick={handleClick} className="gradient focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg py-5 w-96 md:w-full text-base font-medium leading-4 text-white">Cambiar Estado</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Cliente</h3>
                    <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                {/* <img src={`https://api.multiavatar.com/${order?._id}.png`} alt="avatar" /> */}
                                <Image src="https://static.vecteezy.com/system/resources/previews/000/420/940/original/avatar-icon-vector-illustration.jpg" width={56} height={56} alt="avatar" />
                                {/* <Image src={`https://api.multiavatar.com/${order?._id}.png`} width={56} height={56} alt="avatar" /> */}
                                <div className="flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base font-semibold leading-4 text-left text-gray-800">{order?.customerName}</p>
                                    {/* <p className="text-sm leading-5 text-gray-600">10 Previous Orders</p> */}
                                </div>
                            </div>
                            <div className="flex justify-center text-gray-800 md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className="cursor-pointer text-sm leading-5 ">{order?.email}</p>
                            </div>
                        </div>
                        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Dirección Entrega</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{order?.address}</p>
                                </div>
                                {/* <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Dirección Facturación</p>
                                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">{order?.address}</p>
                                </div> */}
                            </div>
                            {/* <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                <button className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Edit Detalles</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;