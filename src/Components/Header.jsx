import moment from 'moment';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-2 gap-4'>
            <div>
                <img className='w-[#300]' src={logo} />
            </div>
            <div>
                <p>Apurba-roy Without Fear or Favour</p>
            </div>
            <div>
                <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            </div>
            <div className='w-11/12 bg-gray-200 space-x-5  flex p-3 items-center'>
                <p className='text-white bg-pink-700 p-2'>Letest</p>
                <marquee>
                    <Link>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut.</Link>
                    <Link>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut.</Link>
                    <Link>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, ut.</Link>
                </marquee>
            </div>
        </div>
    );
};

export default Header;