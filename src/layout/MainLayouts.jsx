
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
const MainLayouts = () => {
    return (
        <div>
            <div className="relative z-10 flex min-h-screen flex-col">

                <Navbar />
                <main className="flex flex-1 flex-col">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayouts