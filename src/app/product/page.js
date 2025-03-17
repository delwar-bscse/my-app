import React from 'react';

const Page = async({searchParams}) => {
    const {page, price} = await searchParams;
    return (
        <div>
            <h1 className='text-3xl font-semibold'>Product Page</h1>
            <p>Page: {page}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Page;