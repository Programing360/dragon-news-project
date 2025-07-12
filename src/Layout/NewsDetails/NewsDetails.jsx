
import Home from '../../Router/Home';
import Login from '../Login/Login';
import FindUs from '../FindUs/FindUs';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {

    const { data } = useLoaderData()
    console.log(data)



    return (
        <>
            <Home></Home>
            <div className='w-11/12 container mx-auto grid grid-cols-12 gap-4 my-8'>
                <section className='col-span-9'>
                    {
                        data.map((data,i) => <div key={i} className="card bg-base-100  shadow-sm">
                            <figure className="px-10 pt-10">
                                <img
                                    src={data.image_url}
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">{data.title}</h2>
                                <p>{data.details}</p>
                                <div className="card-actions">
                                    <Link to='/category/01' className="btn btn-neutral">Back To Home</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </section>
                <aside className='col-span-3'>
                    <Login></Login>
                    <FindUs></FindUs>
                </aside>
            </div>
        </>
    );
};

export default NewsDetails;