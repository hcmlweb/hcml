import { useEffect, useState } from "react";



const DemandForm = ({ setVisibleDemand }) => {

    const [data, setData] = useState([])
    const [lot, setLot] = useState([])
    const [lotNumber, setLotNumber] = useState('')
    const [memoNumber, setMemoNumber] = useState('')
    const [partyName, setPartyName] = useState('')
    const [availableGriege, setAvailableGriege] = useState('')
    const [dayingAmout, setDayingAmout] = useState('')
    const [disignName, setDisignName] = useState('')
    const [disignColor, setDisignColor] = useState('')
    const [masterName, setMasterName] = useState('')


    const [demands, setDemands] = useState([{
        colorName: '',
        colorQty: ''
    }])


    const handleInputChange = (index, event) => {
        const values = [...demands]
        values[index][event.target.name] = event.target.value;
        setDemands(values)
    }

    const handleAddFields = () => {
        setDemands([...demands, { colorName: '', colorQty: '' }])
    }
    useEffect(() => {
        fetch('https://hcml-d4nk.vercel.app/api/dcolor')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    useEffect(() => {
        fetch('https://hcml-d4nk.vercel.app/api/lot')
            .then(res => res.json())
            .then(lot => setLot(lot))
    }, [])

    useEffect(() => {
        lot.map(item => {
            if (item.lotNumber == lotNumber) {
                setAvailableGriege(item.totalFabrics)
                setPartyName(item.partyName)
            }
        })
    }, [lotNumber])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch('https://hcml-d4nk.vercel.app/api/demand', {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ demands, memoNumber, lotNumber, partyName, availableGriege, dayingAmout, disignName, disignColor, masterName })
            })
            setVisibleDemand(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center py-4">
                <h2 className="px-4 py-2 text-sm border-[1px] rounded-md shadow-md border-orange-600">Dying Demand Form</h2>
            </div>
            <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-2  item-center justify-center p-4 border-b-[4px] border-black border-double">
                <div className="w-full grid grid-cols-2 col-span-1">
                    <label htmlFor="prtyname" className="col-span-1">Enter Memo Number</label>
                    <input type="text" id="prtyname" className="border-[1px] border-gray-800 px-1 col-span-1" onChange={(e) => { setMemoNumber(e.target.value) }} />
                </div>

                <div className="grid grid-cols-2 col-span-1">
                    <label htmlFor="prtyname" className="col-span-1">Select Lot Number</label>
                    <select id="prtyname" className="border-[1px] border-gray-800 px-1 col-span-1" onChange={(e) => { setLotNumber(e.target.value) }}>
                        <option>--Select Lot--</option>
                        {lot.map(item => {
                            return (
                                <option key={item._id}>{item.lotNumber}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="grid grid-cols-2 col-span-1">
                    <label htmlFor="prtyname" className="col-span-1">Party Name</label>
                    <p id="prtyname" className="col-span-1 px-4 py-2 border-[1px] border-blue-500 shadow-md">{lot.map(item => {
                        if (item.lotNumber == lotNumber) {
                            return item.partyName
                        }
                    })}</p>

                </div>
                <div className="grid grid-cols-2 col-span-1">
                    <label htmlFor="prtyname" className="col-span-1">AvailAble Griege For Dying</label>
                    <p id="prtyname" className="col-span-1 px-4 py-2 border-[1px] border-blue-500 shadow-md" onChange={(e) => { console.log(e.target.value, "hello") }} >{availableGriege}</p>

                </div>
                <div className="w-full grid grid-cols-2 col-span-1">
                    <label htmlFor="prtyname" className="col-span-1">Enter Amount For Daying</label>
                    <input type="text" id="prtyname" className="border-[1px] border-gray-800 px-1 col-span-1" onChange={(e) => { setDayingAmout(e.target.value) }} />
                </div>
                <div className="w-full grid grid-cols-2 col-span-1">
                    <label htmlFor="prtyname" className="col-span-1">Enter A Design</label>
                    <input type="text" id="prtyname" className="border-[1px] border-gray-800 px-1 col-span-1" onChange={(e) => { setDisignName(e.target.value) }} />
                </div>
                <div className="grid grid-cols-2 col-span-1">
                    <label htmlFor="prtyname" className="col-span-1">Select Color for Dying</label>
                    <select id="prtyname" className="border-[1px] border-gray-800 px-1 col-span-1" onChange={(e) => { setDisignColor(e.target.value) }}>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Green</option>
                    </select>
                </div>
                <div className="grid grid-cols-2 col-span-1">
                    <label htmlFor="prtyname" className="col-span-1">Select Master</label>
                    <select id="prtyname" className="border-[1px] border-gray-800 px-1 col-span-1 uppercase" onChange={(e) => { setMasterName(e.target.value || "Monayem") }}>
                        <option>--Select Master--</option>
                        <option>Monayem</option>
                        <option>Munna</option>
                        <option>Hakim</option>
                    </select>
                </div>

            </div>
            {demands.map((demand, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-4 sm:gap-8 px-2 sm:px-8">

                    <label className="col-span-1 py-2 ">Color{` ${index + 1}`}</label>
                    <select className="col-span-1  border-[1px] border-gray-800 my-1"
                        name="colorName"
                        placeholder="Color Name"
                        value={demand.colorName}
                        onChange={(event) => handleInputChange(index, event)}
                    >
                        <option>--Select One--</option>
                        {data.map(item => {
                            return (<option key={item._id}>{item.colorName}</option>)

                        })}
                    </select>
                    <label className="col-span-1">Enter Amount </label>
                    <input
                        className="col-span-1 border-[1px] border-gray-800 my-1 px-4"
                        name="colorQty"
                        placeholder="Amount"
                        value={demand.colorQty}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                </div>
            ))}
            <div className="flex flex-row items-start justify-start space-x-2 py-4">
                <button type="button" onClick={handleAddFields} className="px-4 py-2 bg-blue-500 text-white shadow-md font-semibold text-sm rounded-md hover:bg-blue-600">Add More</button>
                <button type="submit" className="px-4 py-2 bg-orange-500 text-white shadow-md font-semibold text-sm rounded-md hover:bg-orange-600">Submit</button>
            </div>
        </form>
    );
}

export default DemandForm;
