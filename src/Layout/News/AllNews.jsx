
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const AllNews = () => {
    const {data} = useLoaderData()
    
    // console.log(data)
    return (
        <div className=''>
            {
                data.map(newsData => <NewsCard key={newsData._id} news={newsData}></NewsCard>)
            }
        </div>
    );
};

export default AllNews;