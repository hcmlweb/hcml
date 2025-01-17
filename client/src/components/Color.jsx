import React from 'react'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import ColorModel from './ColorModel'





function Color() {

    const [colors, setColors] = useState([])
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        fetch('https://hcml-d4nk.vercel.app/api/dcolor')
            .then(res => res.json())
            .then(color => setColors(color))
    }, [])

    useEffect(() => {
        console.log('color')
    }, [colors])
    const handelOpenModal = () => {
        setVisible(true)
    }


    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <Modal isOpen={visible}>
                <ColorModel setVisible={setVisible} />
            </Modal>
            <h2 className="border-[1px] border-blue-500 py-2 px-4 rounded-md text-sm font-semibold shadow-md">Color Management</h2>
            <div className='w-full flex flex-row items-start justify-start p-4 space-x-2'>
                <button className='px-4 py-2 bg-green-600 text white text-xs text-white rounded-sm shadow-sm' onClick={handelOpenModal}>Add New Color</button>
                <button className='px-4 py-2 bg-sky-600 text white text-xs text-white rounded-sm shadow-sm'>Add Color Value</button>
            </div>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-4'>

                {colors.map(color => {
                    return (
                        <div className='col-span-1 border flex flex-col item-center justify-center border-orange-500 p-2' key={color._id}>
                            <h2>{color.colorName}</h2>
                            <div className='grid grid-cols-2'>
                                <span className="col-span-1">Available Stock</span>
                                <span className="col-span-1">{color.colorQty}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Color
