import { useEffect, useState } from "react";



const DemandForm = ({ setVisibleDemand }) => {

    const [data, setData] = useState([])

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
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch('https://hcml-d4nk.vercel.app/api/demand', {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({demands})
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
