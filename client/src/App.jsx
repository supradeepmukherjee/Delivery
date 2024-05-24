import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Track from './pages/Track';
const Orders = lazy(() => import('./pages/Orders'))

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route exact path='/' element={<Orders />} />
          <Route exact path='/track/:id' element={<Track />} />
        </Routes>
      </Suspense>
    </Router >
  )
}

export default App