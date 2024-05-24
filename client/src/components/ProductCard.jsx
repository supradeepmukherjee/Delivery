import Laptop from '/images/cover.jfif'
import { Link } from 'react-router-dom'

const ProductCard = ({ title, desc, price, trackingNumber }) => (
    <div className='bg-white shadow-md rounded-md p-4 flex justify-around'>
        <img src={Laptop} alt="" width='81px' />
        <div className="">
            <h2 className="text-lg font-semibold">
                {title}
            </h2>
            <h2 className="text-lg font-semibold">
                {desc}
            </h2>
        </div>
        <p className="text-gray-500">
            Rs. {price}
        </p>
        <Link to={`/track/${trackingNumber}`} className='mt-4 text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-md px-3 py-2'>
            Track Order
        </Link>
    </div>
)

export default ProductCard