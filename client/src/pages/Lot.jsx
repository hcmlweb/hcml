import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";


const Lot = () => {
    const [data, setData] = useState([])
    const [lot, setLot] = useState([])
    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {
        setIsLoading(true)
        fetch(`https://hcml-d4nk.vercel.app/api/lot`)
            .then(res => { return res.json() })
            .then(data => { setLot(data) })
        setIsLoading(false)
    }, [])
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://hcml-d4nk.vercel.app/api/fabric`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
        setIsLoading(false)
    }, [isLoading])

    return (
        <>
            <div className="w-full flex flex-col items-center justify-between px-1 py-4 md:p-4">
                <div className="uppercase">
                    <h2 className="border-[1px] border-blue-500 py-2 px-4 rounded-md text-sm font-semibold shadow-md">Lot Management</h2>
                </div>
                <div className="w-full">
                    <div className="w-full flex flex-row items-start justify-start divide-x-[1px]">
                        <NavLink to="alllot" className={`active:bg-gray-400 px-4 py-1 bg-gray-300`}>All Lots</NavLink>
                        
                        <NavLink to="deliverylots" className=" active:bg-gray-400 px-4 py-1 bg-gray-300">Delivery Lots</NavLink>
                        <NavLink to="closelots" className=" active:bg-gray-400 px-4 py-1 bg-gray-300">Close Lots</NavLink>
                    </div>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}

export default Lot;