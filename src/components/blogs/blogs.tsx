'use client';

import React, { useState } from 'react';
import MySVGcalender from '@/assets/svg/calendar.svg';
import MySVGSearch from '@/assets/svg/search.svg';
import Blogs1 from '@/assets/png/Blogs-1.png';
import Blogs2 from '@/assets/png/Blogs-2.png';
import Blogs3 from '@/assets/png/Blogs-3.png';
import Blogs4 from '@/assets/png/Blogs-1.png';
import Blogs5 from '@/assets/png/Blogs-2.png';

const blogs = [
  {
    image: Blogs1,
    tags: ['Tea', 'Coffee'],
    date: 'Jan 14, 2021',
    title: 'Your Daily Brew, Made Smarter',
    description:
      'CupTime brings you fresh, flavorful coffee and tea exactly when and how you want it. With smart scheduling, customizable options, and eco-friendly practices, we make your daily beverage break seamless and sustainable — right at your doorstep.',
  },
  {
    image: Blogs2,
    tags: ['Tea', 'Coffee'],
    date: 'Feb 14, 2022',
    title: 'Fueling Productivity One Cup at a Time – The CupTime Way',
    description:
      'CupTime brings you fresh, flavorful coffee and tea exactly when and how you want it. With smart scheduling, customizable options, and eco-friendly practices, we make your daily beverage break seamless and sustainable — right at your doorstep.',
  },
  {
    image: Blogs3,
    tags: ['Tea', 'Coffee'],
    date: 'Mar 16, 2023',
    title: 'The Perfect Brew Techniques',
    description:
      'CupTime brings you fresh, flavorful coffee and tea exactly when and how you want it. With smart scheduling, customizable options, and eco-friendly practices, we make your daily beverage break seamless and sustainable — right at your doorstep.',
  },
  {
    image: Blogs4,
    tags: ['Tea', 'Coffee'],
    date: 'Apr 10, 2024',
    title: 'Fueling Productivity One Cup at a Time – The CupTime Way',
    description:
      'CupTime brings you fresh, flavorful coffee and tea exactly when and how you want it. With smart scheduling, customizable options, and eco-friendly practices, we make your daily beverage break seamless and sustainable — right at your doorstep.',
  },
  {
    image: Blogs5,
    tags: ['Tea', 'Coffee'],
    date: 'May 05, 2025',
    title: 'The Perfect Brew Techniques',
    description:
      'CupTime brings you fresh, flavorful coffee and tea exactly when and how you want it. With smart scheduling, customizable options, and eco-friendly practices, we make your daily beverage break seamless and sustainable — right at your doorstep.',
  },
];

const BlogsData = () => {
  const [search, setSearch] = useState('');

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto w-full px-4 py-10 md:px-52">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-cuptime-midnight text-xl font-semibold md:text-3xl">
          Blogs ({filteredBlogs.length})
        </h2>
        <div className="focus-within:ring-cuptime-red flex w-72 items-center gap-2 rounded-full border px-4 py-2 text-zinc-800 focus-within:ring-2 md:w-100">
          <div className="h-auto w-5 shrink-0 text-zinc-700">
            <MySVGSearch />
          </div>
          <input
            type="text"
            placeholder="Search your Contents"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      </div>
      {/* Blog List */}
      <div className="grid grid-cols-1 gap-8 md:gap-16">
        {filteredBlogs.map((blog, index) => (
          <div key={index} className="overflow-hidden rounded-xl bg-white">
            <div
              style={{
                backgroundImage: `url(${blog.image.src})`,
              }}
              className="relative h-80 w-full bg-cover rounded-2xl md:h-[500px]"
            ></div>
            <div className="py-2 md:py-5">
              <div className="flex items-center gap-5 py-2 sm:gap-2 md:py-5">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-cuptime-pink font-sm text-cuptime-red rounded-full px-2 py-1 text-base md:px-4 md:font-bold"
                  >
                    {tag}
                  </span>
                ))}
                <span className="flex items-center gap-2 px-4 text-sm text-zinc-900 md:text-base">
                  <div className="h-auto w-7 shrink-0">
                    <MySVGcalender />
                  </div>
                  {blog.date}
                </span>
              </div>
              <div>
                <h3 className="text-cuptime-midnight text-xl font-bold md:text-3xl">
                  {blog.title}
                </h3>
                <p className="py-2 text-sm text-zinc-700 md:py-5 md:text-base">
                  {blog.description}
                </p>
              </div>
              <a
                href=""
                className="mt-3 inline-block text-sm font-bold text-red-500 hover:underline md:text-lg"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsData;
