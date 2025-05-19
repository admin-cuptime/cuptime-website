'use client';

import React, { useState, useEffect } from 'react';
import MySVGcalender from '@/assets/svg/calendar.svg';
import MySVGSearch from '@/assets/svg/search.svg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fetchReviewsData } from '@/app/api/blog.js';

// Skeleton loader for blog card
const BlogCardSkeleton = () => (
  <div className="flex flex-col gap-3 overflow-hidden rounded-xl bg-white animate-pulse">
    <div className="relative h-80 w-full rounded-2xl bg-zinc-200 md:h-[500px]" />
    <div className="flex flex-col gap-2 px-2 py-2">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="h-6 w-16 rounded-full bg-zinc-200" />
          <span className="h-6 w-16 rounded-full bg-zinc-200" />
        </div>
        <span className="flex items-center gap-1 text-sm font-semibold text-zinc-600 md:text-base">
          <div className="h-auto w-5 shrink-0">
            <MySVGcalender />
          </div>
          <span className="h-4 w-20 rounded bg-zinc-200 inline-block" />
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="h-8 w-3/4 rounded bg-zinc-200" />
        <div className="h-4 w-full rounded bg-zinc-200" />
        <div className="h-4 w-5/6 rounded bg-zinc-200" />
        <div className="h-10 w-24 rounded bg-zinc-200" />
      </div>
    </div>
  </div>
);

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const BlogsData = () => {
  const [search, setSearch] = useState('');
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchReviewsData();
      setBlogs(Array.isArray(data) ? data : []);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto w-full px-4 py-10 md:px-52">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-cuptime-midnight text-xl font-semibold md:text-3xl md:font-bold">
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
      </motion.div>
      {/* Blog List */}
      <div className="grid grid-cols-1 gap-8 md:gap-16">
        {loading ? (
          <BlogCardSkeleton />
        ) : (
          filteredBlogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col gap-3 overflow-hidden rounded-xl bg-white">
                <div
                  style={{
                    backgroundImage: `url(${blog.image})`,
                  }}
                  className="relative h-80 w-full rounded-2xl bg-cover bg-center md:h-[500px]"
                ></div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-6">
                    <div className='flex items-center gap-2'>
                      {(blog.tags ? blog.tags.split(',').map((tag: string) => tag.trim()) : []).map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="bg-cuptime-pink font-sm text-cuptime-red rounded-full px-2 py-1 text-base md:px-4 md:font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-zinc-600 md:text-base">
                      <div className="h-auto w-5 shrink-0">
                        <MySVGcalender />
                      </div>
                      {blog.date}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-cuptime-midnight text-xl font-bold md:text-3xl">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-zinc-700 md:text-base">
                      {blog.description}
                    </p>
                    <Link
                      href={`/blogs-details?blog=${index}-${slugify(blog.title || '')}`}
                      className="inline-block text-sm font-bold text-red-500 hover:underline md:text-lg"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogsData;
