'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import MySVGcalender from '@/assets/svg/calendar.svg';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { fetchReviewsData } from '@/app/api/blog.js';

const BlogsDetailsContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogParam = searchParams.get('blog') || '0';
  const blogIndex = Number(blogParam.split('-')[0] || 0);

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const data = await fetchReviewsData();
      if (Array.isArray(data) && data[blogIndex]) {
        setBlog(data[blogIndex]);
      }
      setLoading(false);
    };
    fetchBlog();
  }, [blogIndex]);

  const getHighlights = (blog: any) => {
    if (!blog) return [];
    const highlights = [];
    if (blog.heading1 && blog.para1) highlights.push({ title: blog.heading1, text: blog.para1 });
    if (blog.heading2 && blog.para2) highlights.push({ title: blog.heading2, text: blog.para2 });
    if (blog.heading3 && blog.para3) highlights.push({ title: blog.heading3, text: blog.para3 });
    if (blog.heading4 && blog.para4) highlights.push({ title: blog.heading4, text: blog.para4 });
    return highlights;
  };

  if (loading) {
    return (
      <div className="mx-auto w-full px-4 py-10 md:px-52">
        <div className="animate-pulse flex flex-col gap-6">
          <div className="h-80 w-full rounded-2xl bg-zinc-200 md:h-[500px]" />
          <div className="h-8 w-1/2 rounded bg-zinc-200" />
          <div className="h-4 w-1/3 rounded bg-zinc-200" />
          <div className="h-6 w-3/4 rounded bg-zinc-200" />
          <div className="h-4 w-full rounded bg-zinc-200" />
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="mx-auto w-full px-4 py-10 md:px-52">
        <div>Blog not found.</div>
      </div>
    );
  }

  const highlights = getHighlights(blog);

  return (
    <div className="mx-auto w-full px-4 py-10 md:px-52">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="text-cuptime-midnight hover:text-cuptime-red mb-6 flex cursor-pointer items-center text-lg font-bold hover:underline md:text-2xl"
      >
        <ChevronLeft className="mr-2 h-5 w-5" />
        Back
      </button>
      <div className="grid grid-cols-1 gap-8 md:gap-16">
        <motion.div
          className="group relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="overflow-hidden rounded-xl bg-white">
            <div
              style={{
                backgroundImage: `url(${blog.image})`,
              }}
              className="relative h-80 w-full rounded-2xl bg-cover bg-center md:h-[500px]"
            ></div>
            <div className="py-2 md:py-5">
              <div className="flex items-center gap-5 py-2 sm:gap-2 md:py-5">
                {(blog.tags ? blog.tags.split(',').map((tag: string) => tag.trim()) : []).map((tag: string, i: number) => (
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
                  {blog.mainPara || blog.description}
                </p>
              </div>
              {[1, 2, 3, 4, 5].map((n) => (
                <React.Fragment key={n}>
                  {blog[`heading${n}`] && (
                    <motion.h2
                      className="text-cuptime-midnight py-2 text-xl font-bold md:py-5 md:text-2xl"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      {blog[`heading${n}`]}
                    </motion.h2>
                  )}
                  {blog[`para${n}`] && (
                    <motion.p
                      className="gap-3 py-3 text-sm text-zinc-700 md:text-base"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      {blog[`para${n}`]}
                    </motion.p>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const BlogsDetails = () => {
  return (
    <Suspense fallback={
      <div className="mx-auto w-full px-4 py-10 md:px-52">
        <div className="animate-pulse flex flex-col gap-6">
          <div className="h-80 w-full rounded-2xl bg-zinc-200 md:h-[500px]" />
          <div className="h-8 w-1/2 rounded bg-zinc-200" />
          <div className="h-4 w-1/3 rounded bg-zinc-200" />
          <div className="h-6 w-3/4 rounded bg-zinc-200" />
          <div className="h-4 w-full rounded bg-zinc-200" />
        </div>
      </div>
    }>
      <BlogsDetailsContent />
    </Suspense>
  );
};

export default BlogsDetails;
