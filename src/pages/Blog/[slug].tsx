import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Spin, Space } from "antd";
import Header from "@/components/Pages/Header";
import Footer from "@/components/Pages/Footer";
import { Post, blog } from "@/constants/variables";
import { convertDate } from "@/util/helpers";
import RelatedPosts from "@/components/RelatedPosts";
import Banner from "@/components/Banner";
import BlogError from "@/components/BlogError";
import { fetchAPI } from "@/util/cms";
import { fallback } from "@/constants/fallback";
import Image from '@/components/common/Image';

const Post: React.FC = (props) => {
    const router = useRouter()
    const { slug } = router.query
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [post, setPost] = useState<Post | undefined | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<Post[] | null>(null);
    const [topLabel, setTopLabel] = useState<any>(null);

    const getCategoryLabel = (tag: string) => {
        let label;

        blog.categories.forEach((cat) => {
            if (tag === cat.value) {
                label = cat.label;
                return;
            }

            if (cat.subcategories) {
                cat.subcategories.forEach((subcat) => {
                    if (tag === subcat.value) {
                        label = subcat.label;
                        return;
                    }
                });
            }
        });

        return label;
    };

    useEffect(() => {
        async function getCmsData() {
            const [blog, posts] = await Promise.all([
                fetchAPI("/blog"),
                fetchAPI("/posts"),
            ]);
            const content = {
                blog: blog?.data?.attributes ?? fallback.blog,
                posts: posts?.data ?? null,
            };

            setLoading(false);

            const topLabel = sessionStorage.getItem("topLabel");

            if (topLabel !== "off") {
                setTopLabel(content.blog.topLabel);
                sessionStorage.setItem("topLabel", "on");
            }

            if (!content.posts) {
                setError(true);
            } else {
                const exactPost = content.posts.find((item: Post) => {
                    if (slug === item.attributes.url) return item;
                });

                if (!exactPost) {
                    setPost(undefined);
                    return;
                }

                setPost(exactPost);

                const sameCategoryPosts: Post[] = content.posts.filter(
                    (item: Post) => {
                        if (
                            exactPost.attributes.category ===
                            item.attributes.category &&
                            exactPost.id !== item.id
                        ) {
                            return item;
                        }
                    }
                );
                const fallbackPosts: Post[] = content.posts
                    .slice()
                    .filter((item) => {
                        if (exactPost.id !== item.id) return item;
                    })
                    .sort((a, b) => {
                        return b.id - a.id;
                    });

                if (sameCategoryPosts.length > 0 || fallbackPosts.length > 0) {
                    const suggestedPosts: Post[] = [];
                    const suggestedPostsQuantity =
                        sameCategoryPosts.length + fallbackPosts.length >= 3
                            ? 3
                            : sameCategoryPosts.length + fallbackPosts.length;

                    for (let i = 0; i < suggestedPostsQuantity; i++) {
                        suggestedPosts.push(
                            sameCategoryPosts[i] ?? fallbackPosts[i]
                        );
                    }

                    setRelatedPosts(suggestedPosts);
                }
            }
        }

        getCmsData();
    }, [slug]);

    useEffect(() => {
        if (post) {
            const links = document.querySelectorAll(".blog-article a");

            links.forEach((link) => {
                link.setAttribute("target", "_blank");
            });
        }
    }, [post]);

    const closeTopLabel = () => {
        setTopLabel(null);
        sessionStorage.setItem("topLabel", "off");
    };

    return (
        <div className="w-full">
            <Header
                opacity={false}
                bgOnScroll="bg-white"
                blueOnScroll={true}
                {...props}
                topLabel={topLabel}
                handleCloseTopLabel={closeTopLabel}
            />

            <div
                className={`bg-[#fff] pt-[80px] pb-[60px] lg:py-[120px] ${topLabel && "mt-[150px] lg:mt-[78px]"
                    }`}
            >
                {loading && (
                    <div className="text-center">
                        <Space size="middle">
                            <Spin size="large" />
                        </Space>
                    </div>
                )}
                {post && (
                    <>
                        <div className="w-[calc(100%-48px)] lg:max-w-[840px] mx-auto">
                            <div
                                style={{
                                    backgroundImage: `url(${post.attributes?.cover?.data?.attributes?.url})`,
                                }}
                                className="w-full h-[220px] lg:h-[50vh] max-h-[440px] bg-no-repeat bg-center bg-cover"
                            />
                            <div className="flex justify-between pt-[24px] lg:pt-[26px] pb-[16px] lg:pb-[12px] border-b-[1px] border-[#DDE3F0]">
                                <Link
                                    href={{
                                        pathname: "/blog",
                                    }}
                                    style={{
                                        background:
                                            "url(/assets/images/blog/left.svg) no-repeat left center/24px",
                                    }}
                                    className="flex items-center pl-[36px] text-[18px] leading-[30px] text-[#001F55] font-bold"
                                >
                                    Back to all articles
                                </Link>
                                <div className="rounded-[12px] bg-[#EEF1F8] py-[8px] px-[16px] text-[16px] leading-[24px] text-[#000714]">
                                    {getCategoryLabel(
                                        post.attributes?.category
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row justify-between pt-[12px]">
                                <div className="flex justify-between md:justify-start items-center gap-x-[12px]">
                                    {post.attributes?.author?.data?.attributes
                                        ?.photo?.data?.attributes?.url && (
                                            <div>
                                                <Image
                                                    className="w-[48px]"
                                                    src={
                                                        post.attributes.author.data
                                                            .attributes.photo.data
                                                            .attributes.url
                                                    }
                                                    alt={
                                                        post.attributes.author.data
                                                            .attributes.name
                                                    }
                                                />
                                            </div>
                                        )}
                                    <div className="flex flex-col md:flex-row md:items-center gap-x-[12px] mr-[28px]">
                                        {post.attributes?.author?.data
                                            ?.attributes?.name && (
                                                <div className="text-[16px] leading-[24px] lg:text-[18px] lg:leading-[30px] text-[#000714]">
                                                    {
                                                        post.attributes.author.data
                                                            .attributes.name
                                                    }
                                                </div>
                                            )}
                                        {post.attributes?.author?.data
                                            ?.attributes?.role && (
                                                <div className="text-[14px] leading-[16px] lg:text-[16px] lg:leading-[24px] text-[#A2ACBE]">
                                                    {
                                                        post.attributes.author.data
                                                            .attributes.role
                                                    }
                                                </div>
                                            )}
                                    </div>
                                    <div
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(90deg, #3F68E4 0%, #5EC4F7 146.04%)",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                        className="text-[14px] leading-[16px] bg-clip-text"
                                    >
                                        {post.attributes?.date &&
                                            convertDate(post.attributes.date)}
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-[24px] lg:gap-x-[20px] mt-[12px] pt-[12px] border-t-[1px] border-[#DDE3F0] md:mt-[0] md:pt-[0] md:border-t-[0px]">
                                    <div className="text-[14px] leading-[16px] lg:text-[16px] lg:leading-[24px] text-[#434A59]">
                                        Share:
                                    </div>
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=https://retire.us/blog/${slug}&text=${post.attributes?.description}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            className="w-[12px] lg:w-[16px]"
                                            src="/assets/images/blog/twitter.svg"
                                            alt="Twitter"
                                        />
                                    </a>
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://retire.us/blog/${slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            className="w-[12px] lg:w-[16px]"
                                            src="/assets/images/blog/linkedin.svg"
                                            alt="LinkedIn"
                                        />
                                    </a>
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=https://retire.us/blog/${slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            className="w-[12px] lg:w-[16px]"
                                            src="/assets/images/blog/facebook.svg"
                                            alt="Facebook"
                                        />
                                    </a>
                                </div>
                            </div>
                            <h1 className="mt-[42px] mb-[32px] lg:mt-[60px] lg:mb-[40px] text-[32px] leading-[36px] lg:text-[56px] lg:leading-[60px] text-[#000714] font-bold">
                                {post.attributes?.title}
                            </h1>
                            <div
                                className="blog-article"
                                dangerouslySetInnerHTML={{
                                    __html: post.attributes?.text,
                                }}
                            />
                            <div className="flex items-center justify-between mt-[80px] pt-[16px] border-t-[1px] border-[#DDE3F0]">
                                <Link
                                    href={{
                                        pathname: "/blog",
                                    }}
                                    style={{
                                        background:
                                            "url(/assets/images/blog/left.svg) no-repeat left center/24px",
                                    }}
                                    className="flex items-center pl-[36px] text-[18px] leading-[30px] text-[#001F55] font-bold"
                                >
                                    Back to all articles
                                </Link>
                                <div
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(90deg, #3F68E4 0%, #5EC4F7 146.04%)",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                    className="text-[14px] leading-[16px] lg:text-[16px] lg:leading-[24px] bg-clip-text"
                                >
                                    {post.attributes?.date &&
                                        convertDate(post.attributes.date)}
                                </div>
                            </div>
                        </div>
                        {post.attributes?.banner && (
                            <div className="pt-[40px] xl:pt-[80px]">
                                <Banner
                                    title={post.attributes.banner.title}
                                    text={post.attributes.banner.text}
                                    cta={post.attributes.banner.cta}
                                />
                            </div>
                        )}
                    </>
                )}
                {post === undefined && (
                    <BlogError text="Sorry, the post doesn't exist." />
                )}
                {error && (
                    <BlogError text="<div>Sorry for inconvenience, articles can't be loaded right now.</div><div>Please try again later.</div>" />
                )}
            </div>
            {relatedPosts && relatedPosts.length > 0 && (
                <RelatedPosts title="Related posts" posts={relatedPosts} />
            )}
            <Footer />
        </div>
    );
};

export default Post;
