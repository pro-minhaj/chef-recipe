import Header from '../../Componetes/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Componetes/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Main;