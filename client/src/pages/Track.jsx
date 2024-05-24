import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Track = () => {
    const { id } = useParams()
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getDetails = async () => {
            try {
                const { data } = await axios.post('http://localhost:6300/api/track', { id })
                setOrders(data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        getDetails()
    }, [id])
    return (
        <div className='m-10'>
            <div className="flex flex-col items-center mb-10">
                svg
                <p className="text-white font-semibold mt-3">
                    Tracking Number: {id}
                </p>
            </div>
            {loading ? <>Loading...</> :
                <div className="flex flex-col items-center">
                    <ol className="relative text-gray-50">
                        {orders.map(({ desc, city }, i) => (
                            <li key={i} className='mb-10 ms-6'>
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700 -start-4">
                                    svg
                                </span>
                                <h3 className='font-medium ml-2 leading-tight'>
                                    {desc}
                                </h3>
                                <p className="text-sm ml-3">
                                    Shipment scanned at {city}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>}
        </div>
    )
}

export default Track