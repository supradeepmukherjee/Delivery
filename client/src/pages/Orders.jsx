import ProductCard from '../components/ProductCard'

const Orders = () => (
    <main className='mx-6 lg:mx-48 my-10 grid grid-cols-1 gap-6'>
        <h1 className="text-white font-bold text-3xl">

        </h1>
        {[
            {
                title: 'Asus 212 Laptop',
                desc: 'This is a sample Description',
                price: 100,
                trackingNumber: '31265612376515837621'
            },
            {
                title: 'Dell N201 Laptop',
                desc: 'This is a sample Description',
                price: 150,
                trackingNumber: '31265612376515837621'
            },
            {
                title: 'Acer H212 Laptop',
                desc: 'This is a sample Description',
                price: 120,
                trackingNumber: '31265612376515837621'
            },
            {
                title: 'HP 212HA Laptop',
                desc: 'This is a sample Description',
                price: 154,
                trackingNumber: '31265612376515837621'
            },
            {
                title: 'Apple 69 Laptop',
                desc: 'This is a sample Description',
                price: 10,
                trackingNumber: '31265612376515837621'
            },
            {
                title: 'Lenovo 2R2 Laptop',
                desc: 'This is a sample Description',
                price: 80,
                trackingNumber: '31265612376515837621'
            },
        ].map(({ title, desc, price, trackingNumber }, i) => <ProductCard desc={desc} key={i} price={price} title={title} trackingNumber={trackingNumber} />)}
    </main>
)

export default Orders