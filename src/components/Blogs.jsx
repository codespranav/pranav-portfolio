import React from 'react';
import { LuMoveUpRight } from "react-icons/lu";

const Blogs = () => {
    const blogContent = [
        {thumbnail: "https://imgs.search.brave.com/MB7lr8cIZO6PNpfZZd340nyWaVM1wl2oQaxQEaQqR1A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/OTU2OTc5MS9waG90/by9zZW5pb3ItbWFu/LXdvcmtpbmctYXQt/bGFwdG9wLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1rMFZ4/NHgxWTktdVptMURq/ZXlaemVITzREb3I4/eFdxeXV1c3c0M041/RzhRPQ", title: "How to host a Next.js app in Production on an Ubuntu VPS", description: "Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, PM2, and configure your Next.js app for seamless hosting." },
        {thumbnail: "https://imgs.search.brave.com/MB7lr8cIZO6PNpfZZd340nyWaVM1wl2oQaxQEaQqR1A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/OTU2OTc5MS9waG90/by9zZW5pb3ItbWFu/LXdvcmtpbmctYXQt/bGFwdG9wLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1rMFZ4/NHgxWTktdVptMURq/ZXlaemVITzREb3I4/eFdxeXV1c3c0M041/RzhRPQ", title: "How Algorithmic Trading Systems Work", description: "In today's interconnected world, the desire for cutting-edge tech gadgets, unique international products, and exclusive US deals has reached an unprecedented level. However, many consumers face the challenge of obtaining products not readily available in their home country." },
        {thumbnail: "https://imgs.search.brave.com/MB7lr8cIZO6PNpfZZd340nyWaVM1wl2oQaxQEaQqR1A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/OTU2OTc5MS9waG90/by9zZW5pb3ItbWFu/LXdvcmtpbmctYXQt/bGFwdG9wLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1rMFZ4/NHgxWTktdVptMURq/ZXlaemVITzREb3I4/eFdxeXV1c3c0M041/RzhRPQ", title: "Build an Email Validator with HTML, CSS, and JavaScript", description: "Learn how to create a responsive Email Validator using HTML, CSS, and JavaScript. This step-by-step guide walks you through integrating the Email Validation API to validate email addresses effectively. Perfect for beginners and experts alike!" },
    ];

    return (
        <div className='border-b border-neutral-900 pb-20'>
            <h1 className='my-10 text-center text-4xl'>Recent Blogs</h1>
            <div className="cards flex flex-wrap gap-4 mx-auto justify-around">
                {blogContent.map((item, index) => (
                    <div key={index} className='card max-w-sm bg-neutral-900 rounded-md shadow-md overflow-hidden'>
                        <img src={item.thumbnail} alt={item.title} className='w-full h-56 object-cover' />
                        <div className='p-4'>
                            <h1 className='text-lg font-bold text-purple-500'>{item.title}</h1>
                            <p className='font-normal text-sm mt-3 leading-[1.6]'>{item.description}</p>
                            <div className='cursor-pointer border-[1px] p-2 w-fit text-sm font-light border-slate-500 flex justify-center items-center rounded-md mt-3 hover:bg-white hover:text-slate-900 transition-all'>Read <span className='text-md ml-2'><LuMoveUpRight/></span></div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
