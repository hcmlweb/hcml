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
                body: JSON.stringify(demands)
            })
            setVisibleDemand(false)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            {demands.map((demand, index) => (
                <div key={index} className="grid grid-cols-4 gap-8">

                    <label className="col-span-1">Select Color</label>
                    <select className="col-span-1"
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
                        name="amount"
                        placeholder="Amount"
                        value={demand.amount}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                </div>
            ))}
            <button type="button" onClick={handleAddFields}>Add More</button>
            <button type="submit">Submit</button>
        </form>
    );
}

export default DemandForm;