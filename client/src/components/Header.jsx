import { Link } from 'react-router-dom'

const Header = () => (
  <header className='bg-gray-800 text-white py-4 px-6'>
    <Link to={'/'} className='text-2xl font-bold'>
      GharKart
    </Link>
  </header>
)

export default Header