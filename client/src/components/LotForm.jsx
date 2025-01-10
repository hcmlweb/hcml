import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const LotForm = () => {
    const [partyName, setPartyName] = useState('')
    const [lotNumber, setLotNumber] = useState(0)
    const [date, setDate] = useState('')
    const [data, setData] = useState([])
    const [msg, setMsg] = useState('')
    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {
        setIsLoading(true)
        fetch(`https://hcml-d4nk.vercel.app/api/party`)
            .then(res => { return res.json() })
            .then(data => { setData(data) })
        setIsLoading(false)
    }, [])


    const handelClick = async (e) => {
        setIsLoading(true)
        e.preventDefault()

        await fetch(`${BASE_API}/lot`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                partyName,
                lotNumber,
                date
            })
        });
        setMsg('Add success fully')
        setDate('')
        setLotNumber(0)
        setPartyName('')
        setIsLoading(false)
        setTimeout(() => {
            setMsg('')
        }, 3000)
    }



    return (
        <>
            {isLoading ? <Spinner /> :
                <div className="w-full flex flex-col item-center justify-center p-8 text-xs font-semibold">
                    <h2 className="w-full text-center uppercase text-xs font-semibold bg-blue-500 text-white py-2">Create New Lot</h2>
                    <div className="w-full border-[1px] border-gray-400 p-4 grid grid-cols-2">
                        <label>Select A Party</label>
                        <select onChange={(e) => { setPartyName(e.target.value) }}>
                            <option>--Select One--</option>
                            {data.map(party => { return (<option key={party._id}>{party.partyName}</option>) })}
                        </select>
                    </div>
                    <div className="w-full border-[1px] border-gray-400 p-4 grid grid-cols-2">
                        <label>Enter A Lot Number</label>
                        <input type="number" className="px-4 py-1 border-[1px] border-gray-500 focus:outline-none" onChange={(e) => { setLotNumber(e.target.value) }} />
                    </div>
                    <div className="w-full border-[1px] border-gray-400 p-4 grid grid-cols-2">
                        <label htmlFor="pickDate">Pick A Date</label>
                        <input type="date" id="pickDate" className="px-4 py-1 border-[1px] border-gray-500 focus:outline-none" onChange={(e) => { setDate(e.target.value) }} />
                        <span className={`${!msg ? "hidden" : "text-green text-lg font-semibold text-green-600"}`}>{msg}</span>
                    </div>
                    <button className="bg-green-600 text-white py-2 text-xs font-semibold mb-4" onClick={handelClick}>Save Lot</button>
                    <Link to='/lot' className="border-[2px] border-green-600 text-green-600 font-semibold text-xs py-2 px-4 text-center transition-all duration-500 hover:bg-green-600 hover:text-white" >Back to Lot page</Link>
                </div>}
        </>
    );
}

export default LotForm;