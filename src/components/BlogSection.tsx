import React from 'react';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/travelData';
import { BlogPost } from '../types/travel';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
  onViewAll: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost, onViewAll }) => {
  return (
    <section id="blog" className="py-16 sm:py-24 px-5 sm:px-8 bg-[#FAF9F5] border-t border-[#E5E2D8]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3.5 mb-12 sm:mb-16 max-w-2xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#666666] font-['Epilogue']">
            Travel Blog & Editorial Guides
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] tracking-tight font-['Epilogue'] leading-tight text-balance">
            Explore articles to inspire and plan your next adventure
          </h2>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
            Stay inspired with our travel guides, tips, and personal stories curated by our seasoned destination experts.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E5E2D8] shadow-xs hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-black/30 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Article Cover Image with Date Badge */}
                <div className="h-52 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full font-['Epilogue']">
                      {post.date}
                    </span>
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#666666] mb-2.5 font-medium">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg sm:text-xl text-[#111111] mb-2.5 font-['Epilogue'] leading-snug group-hover:text-neutral-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-1 flex items-center text-xs font-semibold text-black font-['Epilogue'] group-hover:translate-x-1 transition-transform">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </div>
            </article>
          ))}
        </div>

        {/* View All Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-black text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-[#222222] active:scale-95 transition shadow-sm cursor-pointer"
          >
            <span>View All Stories & Articles</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};
