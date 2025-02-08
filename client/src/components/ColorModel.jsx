import { useEffect, useState } from "react";

const DemandForm = ({ setVisibleDemand }) => {
    const [data, setData] = useState([]);
    const [lot, setLot] = useState([]);
    const [lotNumber, setLotNumber] = useState('');
    const [memoNumber, setMemoNumber] = useState('');
    const [partyName, setPartyName] = useState('');
    const [availableGriege, setAvailableGriege] = useState('');
    const [dayingAmount, setDayingAmount] = useState('');
    const [designName, setDesignName] = useState('');
    const [designColor, setDesignColor] = useState('');
    const [masterName, setMasterName] = useState('');

    const [demands, setDemands] = useState([
        {
            colorName: '',
            colorCode: '',  
            colorQty: ''
        }
    ]);

    useEffect(() => {
        fetch('https://hcml-d4nk.vercel.app/api/dcolor')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    useEffect(() => {
        fetch('https://hcml-d4nk.vercel.app/api/lot')
            .then(res => res.json())
            .then(lot => setLot(lot));
    }, []);

    useEffect(() => {
        const selectedLot = lot.find(item => item.lotNumber === lotNumber);
        if (selectedLot) {
            setAvailableGriege(selectedLot.totalFabrics);
            setPartyName(selectedLot.partyName);
        }
    }, [lotNumber, lot]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const values = [...demands];

        if (name === "colorName") {
            const selectedColor = data.find(item => item.colorName === value);
            values[index] = {
                ...values[index],
                colorName: value,
                colorCode: selectedColor ? selectedColor.colorCode : '' // কালার কোড সেট করা
            };
        } else {
            values[index][name] = value;
        }

        setDemands(values);
    };

    const handleAddFields = () => {
        setDemands([...demands, { colorName: '', colorCode: '', colorQty: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('https://hcml-d4nk.vercel.app/api/demand', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    demands,
                    memoNumber,
                    lotNumber,
                    partyName,
                    dayingAmount,
                    designName,
                    designColor,
                    masterName
                })
            });
            setVisibleDemand(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center py-4">
                <h2 className="px-4 py-2 text-sm border-[1px] rounded-md shadow-md border-orange-600">Dying Demand Form</h2>
            </div>
            <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 p-4 border-b-[4px] border-black border-double">
                <div className="w-full grid grid-cols-2">
                    <label>Enter Memo Number</label>
                    <input type="text" className="border-[1px] border-gray-800 px-1"
                        onChange={(e) => setMemoNumber(e.target.value)} />
                </div>
                <div className="grid grid-cols-2">
                    <label>Select Lot Number</label>
                    <select className="border-[1px] border-gray-800 px-1" onChange={(e) => setLotNumber(e.target.value)}>
                        <option>--Select Lot--</option>
                        {lot.map(item => (
                            <option key={item._id}>{item.lotNumber}</option>
                        ))}
                    </select>
                </div>
                <div className="grid grid-cols-2">
                    <label>Party Name</label>
                    <p className="border-[1px] border-blue-500 shadow-md">{partyName}</p>
                </div>
                <div className="grid grid-cols-2">
                    <label>Available Griege For Dying</label>
                    <p className="border-[1px] border-blue-500 shadow-md">{availableGriege}</p>
                </div>
            </div>
            {demands.map((demand, index) => (
                <div key={index} className="grid grid-cols-1 sm:grid-cols-4 sm:gap-8 px-2 sm:px-8">
                    <label className="col-span-1 py-2">Color {index + 1}</label>
                    <select className="col-span-1 border-[1px] border-gray-800 my-1"
                        name="colorName"
                        value={demand.colorName}
                        onChange={(event) => handleInputChange(index, event)}
                    >
                        <option value="">--Select One--</option>
                        {data.map(item => (
                            <option key={item._id} value={item.colorName}>
                                {item.colorName} ({item.colorCode})
                            </option>
                        ))}
                    </select>
                    <label className="col-span-1">Selected Color Code</label>
                    <p className="col-span-1 border-[1px] border-gray-800 px-4 py-2">{demand.colorCode || "N/A"}</p>
                    <label className="col-span-1">Enter Amount</label>
                    <input className="col-span-1 border-[1px] border-gray-800 my-1 px-4"
                        name="colorQty"
                        placeholder="Amount"
                        value={demand.colorQty}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                </div>
            ))}
            <div className="flex flex-row items-start justify-start space-x-2 py-4">
                <button type="button" onClick={handleAddFields} className="px-4 py-2 bg-blue-500 text-white shadow-md rounded-md hover:bg-blue-600">Add More</button>
                <button type="submit" className="px-4 py-2 bg-orange-500 text-white shadow-md rounded-md hover:bg-orange-600">Submit</button>
            </div>
        </form>
    );
};

export default DemandForm;
