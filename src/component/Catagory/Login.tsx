import React from 'react';
function MyButton ({title} : {title: String}){
    return (
        <button className='btn'>
            {title}
        </button>
    )
}
export const Login = () => {
    return (
        <div>
            
            <MyButton title='I am btn'></MyButton>
        </div>
    );
};

export default Login;