/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <h2>opp's error <br /></h2>
            <button className='font-bold underline' ><Link to='/'>go to Home page</Link></button>
            <img className='w-8/12 mx-auto' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIu9qKqs0_VMp5627wBcrrcE1Ks3vZilRmQ&s' alt="" />
        </div>
    );
};

export default Error;