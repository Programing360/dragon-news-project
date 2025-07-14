
import Home from './Home';
import NavBar from '../NavBar/NavBar';
import AllCatagory from '../Layout/AllCatagory/AllCatagory';
import News from '../Layout/News/News';
import Login from '../Layout/Login/Login';
import { Outlet } from 'react-router-dom';

const Root = () => {
    
    return (
        <div>
           <Home></Home>
           <NavBar></NavBar>
           <section className='container grid lg:grid-cols-12 md:grid-cols-12 w-11/12 mx-auto py-3'>
                <aside className='lg:col-span-3 md:col-span-3'>
                    <AllCatagory></AllCatagory>
                </aside>
                <section className='lg:col-span-6 md:col-span-6 space-y-3 mx-3'>
                    <News></News>
                    <Outlet></Outlet>
                </section>
                <aside className='lg:col-span-3 md:col-span-3 '>
                    <Login></Login>
                </aside>
           </section>
        </div>
    );
};

export default Root;