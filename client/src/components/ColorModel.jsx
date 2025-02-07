import { useState, useEffect } from "react"
import Spinner from "./Spinner"

const ColorModel = ({ setVisible }) => {
    const [colorName, setColorName] = useState('');
    const [colorQty, setColorQty] = useState('');
    const [colorCodeFind, setColorCodeFind] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('https://hcml-d4nk.vercel.app/api/dcolor')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error('Error fetching colors:', err));
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            setColorCodeFind(data.map(color => color.colorCode));
        }
    }, [data]);

    const colorCode = colorCodeFind.length > 0 ? Math.max(...colorCodeFind) + 1 : 1;

    const handelCloseModal = () => {
        setVisible(false);
    }

    const handeAddColor = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await fetch('https://hcml-d4nk.vercel.app/api/dcolor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ colorName, colorQty, colorCode })
            });

            setColorName('');
            setColorQty('');
            handelCloseModal();
        } catch (error) {
            console.error('Error adding color:', error);
        }

        setIsLoading(false);
    }

    return (
        <>
            {isLoading ? (
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-opacity-30 bg-sky-500">
                    <Spinner />
                </div>
            ) : (
                <form className="w-full flex flex-col space-y-2 items-center justify-center" onSubmit={handeAddColor}>
                    <h2 className="border-[1px] border-blue-500 py-2 px-4 rounded-md text-sm font-semibold shadow-md">
                        Add New Color
                    </h2>
                    <div className="w-full grid gris-cols-1 space-y-2">
                        <div className="grid grid-cols-3">
                            <h2 className="col-span-1"> Color Code: {colorCode}</h2>
                            <h2 className="col-span-1">Color Name</h2>
                            <input 
                                type="text" 
                                value={colorName} 
                                className="col-span-2 focus:outline-none border-[2px] border-gray-800" 
                                onChange={(e) => setColorName(e.target.value)} 
                            />
                        </div>
                        <div className="grid grid-cols-3">
                            <h2 className="col-span-1">Color Quantity</h2>
                            <input 
                                type="number" 
                                value={colorQty} 
                                className="col-span-2 focus:outline-none border-[2px] border-gray-800" 
                                onChange={(e) => setColorQty(e.target.value)} 
                            />
                        </div>
                        <button className="px-4 py-2 text-white bg-rose-700 text-sm rounded-sm shadow-md">
                            Add Color
                        </button>
                    </div>
                </form>
            )}
        </>
    );
}

export default ColorModel;
