import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const PartyForm = () => {
    const [partyName, setPartyName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [msg, setMsg] = useState('')

    const handelParty = async (e) => {
        setIsLoading(true)
        e.preventDefault()
        await fetch('http://localhost:4000/api/party', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ partyName })
        })

        setPartyName('')
        setMsg('Party Added Success Fully')
        setIsLoading(false)
        setTimeout(() => {
            setMsg('')
        }, 5000)

    }

    return (
        <>
            {isLoading ? <Spinner /> :
                <div className="w-full flex flex-col item-center justify-center p-8 text-xs font-semibold">
                    <h2 className="w-full text-center uppercase text-xs font-semibold bg-blue-500 text-white py-2">Create New Party</h2>
                    <div className="w-full border-[1px] border-gray-400 p-4 grid grid-cols-2">
                        <label>Enter A Party Name</label>
                        <input type="text" className="px-4 py-1 border-[1px] border-gray-500 focus:outline-none" onChange={(e) => { setPartyName(e.target.value) }} />
                    </div>
                    <button className="bg-green-600 text-white py-2 text-xs font-semibold mb-4" onClick={handelParty}>Save New Party</button>
                    <span className={`${!msg ? "hidden" : "flex w-full text-center text-green-500 text-lg"}`}>{msg}</span>
                    <Link to='/lot' className="border-[2px] border-green-600 text-green-600 font-semibold text-xs py-2 px-4 text-center transition-all duration-500 hover:bg-green-600 hover:text-white" >Back to Lot page</Link>
                </div>}
        </>
    );
}

export default PartyForm;