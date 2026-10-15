
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
const MainLayouts = () => {
    return (
        <div>
            <div className="relative z-10 flex min-h-screen flex-col bg-[#121316] bg-[radial-gradient(ellipse_80%_450px_at_15%_0%,_#6b0f4e_0%,_#181254_45%,_transparent_100%)]">
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