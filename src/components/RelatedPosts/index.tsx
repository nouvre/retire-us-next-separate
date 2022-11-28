import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { convertDate } from "@/util/helpers";
import { Post } from "../../constants/variables";

interface ComponentProps {
    title: string;
    posts: Post[];
}

const RelatedPosts: React.FC<ComponentProps> = ({ title, posts }) => {
    return (
        <div className="bg-[#F7F9FC]">
            <div className="lg:max-w-[960px] xl:max-w-[1280px] mx-auto py-[60px]">
                <div className="w-[calc(100%-48px)] mx-auto lg:text-center text-[32px] leading-[36px] lg:text-[36px] lg:leading-[40px] font-bold mb-[32px] lg:mb-[60px]">
                    {title}
                </div>
                <div className="w-full hidden lg:flex flex-row justify-center gap-x-[40px] gap-y-[24px] lg:gap-y-[40px]">
                    {posts.map((post) => (
                        <div
                            key={post?.id}
                            className="flex flex-col w-[31.25%] rounded-[40px] overflow-hidden"
                        >
                            <div
                                className="w-full h-[220px] bg-no-repeat bg-center bg-cover"
                                style={{
                                    backgroundImage: `url(${post?.attributes?.cover?.data?.attributes?.url})`,
                                }}
                            />
                            <div className="bg-[#fff] px-[40px] pt-[32px] pb-[0] h-[256px] relative">
                                {post?.attributes?.date && (
                                    <div className="text-[#434A59] text-[18px] leading-[30px] mb-[24px]">
                                        {convertDate(post.attributes.date)}
                                    </div>
                                )}
                                <div className="font-bold text-[#000714] text-[23px] leading-[28px] line-clamp-3">
                                    {post?.attributes?.title}
                                </div>
                                <Link
                                    href={{
                                        pathname: `/blog/${post?.attributes?.url}`,
                                    }}
                                    className="absolute bottom-[32px] width-[calc(100%-80px)] mx-auto"
                                >
                                    <div className="flex items-center gap-[14px] transition duration-300 font-bold text-[#001F55] text-[18px] leading-[30px]">
                                        Read more
                                        <span>&#183;&#183;</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:hidden">
                    <Swiper
                        spaceBetween={12}
                        slidesPerView={1.1}
                        centeredSlides={true}
                    >
                        {posts.map((post) => (
                            <SwiperSlide key={post?.id}>
                                <div className="flex flex-col w-full rounded-[20px] overflow-hidden">
                                    <div
                                        className="w-full h-[200px] bg-no-repeat bg-center bg-cover"
                                        style={{
                                            backgroundImage: `url(${post?.attributes?.cover?.data?.attributes?.url})`,
                                        }}
                                    />
                                    <div className="bg-[#fff] p-[24px] h-[204px] relative">
                                        {post?.attributes?.date && (
                                            <div className="text-[#434A59] text-[16px] leading-[24px] mb-[16px]">
                                                {convertDate(
                                                    post.attributes.date
                                                )}
                                            </div>
                                        )}
                                        <div className="font-bold text-[#000714] text-[18px] leading-[22px] mb-[20px] line-clamp-3">
                                            {post?.attributes?.title}
                                        </div>
                                        <Link
                                            href={{
                                                pathname: `/blog/${post?.attributes?.url}`,
                                            }}
                                            className="absolute bottom-[32px] width-[calc(100%-80px)] mx-auto"
                                        >
                                            <div className="flex items-center gap-[14px] transition duration-300 font-bold text-[#001F55] text-[18px] leading-[30px]">
                                                Read more
                                                <span>&#183;&#183;</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default RelatedPosts;
