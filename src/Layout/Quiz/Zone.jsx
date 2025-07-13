
import playground from '../../assets/playground.png'
import swimming from '../../assets/swimming.png'
import classPhoto from '../../assets/class.png'
const Zone = () => {
    return (
        <div className='flex flex-col mt-4 bg-neutral-200 p-4'>
            <img src={playground} alt="" />
            <img src={swimming} alt="" />
            <img src={classPhoto} alt="" />
        </div>
    );
};

export default Zone;