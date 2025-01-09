import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Lot = () => {
    const [data, setData] = useState([])
    const [lot, setLot] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://hcml-d4nk.vercel.app/api/lot')
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
        console.log('hello')
        setIsLoading(false)
    }, [isLoading])

    return (
        <>
            <div className="w-full flex flex-col items-center justify-between p-4">
                <div className="uppercase">
                    <h2 className="border-[1px] border-blue-500 py-2 px-4 rounded-md text-sm font-semibold shadow-md">Lot Management</h2>
                </div>
                <div className="w-full">
                    <div className="w-full flex flex-col">
                        <div className="pt-4 flex flex-row items-start justify-start space-x-2">
                            <Link to='/newlot' className="bg-green-600 text-white px-4 py-1 rounded-sm shadow-md hover:bg-green-800 transition-all duration-300">Add New Lot</Link>
                            <Link to='/party' className="bg-blue-600 text-white px-4 py-1 rounded-sm shadow-md hover:bg-blue-800 transition-all duration-300">Add New Party</Link>
                        </div>
                       
                        <div className="w-full grid grid-cols-2 mt-4">
                            <div className="col-span-1 w-full">
                                <h2 className="w-full bg-blue-500 text-white text-xs uppercase py-[2px] text-center font-semibold shadow-md">Todays Griege In</h2>
                                <ul className="w-full grid grid-cols-4 items-center justify-center text-center">
                                    <li className="col-span-1 border-[1px] border-gray-800">Lot Number</li>
                                    <li className="col-span-1 border-[1px] border-gray-800">Party Name</li>
                                    <li className="col-span-1 border-[1px] border-gray-800">Gaiege Amount</li>
                                    <li className="col-span-1 border-[1px] border-gray-800">Than Qty</li>
                                </ul>
                                {lot.map(item => {
                                    return (
                                        <Link to={`/lot/${item._id}`} className="w-full">
                                            <ul  className="w-full grid grid-cols-4 items-center justify-center text-center">
                                                <li className="col-span-1 border-[1px] border-gray-800">{item.lotNumber}</li>
                                                <li className="col-span-1 border-[1px] border-gray-800">{item.partyName}</li>
                                                <li className="col-span-1 border-[1px] border-gray-800">{item.fabrics.reduce((total, fabric) => total + fabric.fabricAmount, 0)}</li>
                                                <li className="col-span-1 border-[1px] border-gray-800">{item.fabrics.map(fabric => fabric.thanQty)}</li>
                                            </ul>
                                        </Link>
                                        
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lot;