import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Helmet } from "react-helmet";
import Select from "react-select";
import Header from "@/components/Pages/Header";
import Footer from "@/components/Pages/Footer";
import { Post, blog } from "@/constants/variables";
import { convertDate } from "@/util/helpers";
import RelatedPosts from "@/components/RelatedPosts";
import BlogError from "@/components/BlogError";
import { fetchAPI } from "@/util/cms";
import { fallback } from "@/constants/fallback";
import Image from '@/components/common/Image';

const Blog: React.FC = ({ content }: any) => {
	const hero = content.blog.hero;
	const [allPosts, setAllPosts] = useState<Post[] | null>(content.posts);
	const [loading, setLoading] = useState<boolean>(true);

	const [posts, setPosts] = useState<Post[] | null>(null);
	const [postsShown, setPostsShown] = useState<number>(7);
	const [error, setError] = useState<boolean>(false);
	const [search, setSearch] = useState<string>("");
	const [filter, setFilter] = useState<string>("all");
	const [sort, setSort] = useState<string>(blog.sorts[0].value);
	const [dropdown, setDropdown] = useState<boolean>(false);
	const [topLabel, setTopLabel] = useState<any>(null);

	const selectStyles = {
		option: (styles, state) => ({
			...styles,
			fontSize: "16px",
			lineHeight: "24px",
			cursor: "pointer",
			backgroundColor: "#fff",
			color: state.isSelected ? "#A2ACBE" : "#000714",
			pointerEvents: state.isSelected ? "none" : "all",
			paddingLeft: "20px",
			paddingRight: "20px",
			transition: "300ms",
			"&:hover": {
				color: "#3F68E4",
			},
			"@media (min-width: 1024px)": {
				fontSize: "18px",
				lineHeight: "32px",
			},
		}),
		control: (styles, state) => ({
			...styles,
			height: "56px",
			paddingLeft: "68px",
			fontSize: "16px",
			lineHeight: "24px",
			borderRadius: "12px",
			cursor: "pointer",
			background:
				"url(/assets/images/blog/sort.svg) no-repeat #fff 24px center/24px",
			boxShadow: "none !important",
			border: state.isFocused ? "1px solid #3F68E4" : "1px solid #DDE3F0",
			transition: "300ms",
			"&:hover": {
				border: state.isFocused
					? "1px solid #3F68E4"
					: "1px solid #A2ACBE",
			},
			"@media (min-width: 1024px)": {
				fontSize: "20px",
				lineHeight: "32px",
			},
		}),
	};

	useEffect(() => {
		window.addEventListener("click", closeDropdown);

		return () => {
			window.removeEventListener("click", closeDropdown);
		};
	}, []);

	useEffect(() => {
		async function getCmsData() {
			const topLabel = sessionStorage.getItem("topLabel");

			if (topLabel !== "off") {
				setTopLabel(content.blog.topLabel);
				sessionStorage.setItem("topLabel", "on");
			}

			// if (content.posts) {
			// 	setAllPosts(content.posts);
			// } else {
			// 	setError(true);
			// }
		}

		getCmsData();
	}, []);

	useEffect(() => {
		if (allPosts && allPosts.length > 0) {
			setPosts(sortAndFilter(allPosts));
		}
	}, [allPosts, filter, sort]);

	useEffect(() => {
		if (allPosts && allPosts.length > 0) {
			if (search) {
				const searchPattern = new RegExp(
					search
						.split(" ")
						.map((term) => `(?=.*${term})`)
						.join(""),
					"i"
				);

				const options = allPosts.filter((option) => {
					return option.attributes.text.match(searchPattern);
				});

				setPosts(sortAndFilter(options));
			} else {
				setPosts(sortAndFilter(allPosts));
			}
		}
	}, [search]);

	const sortAndFilter = (raw: Post[]) => {
		const sortedPosts: Post[] = raw.slice().sort((a, b) => {
			return sort === blog.sorts[1].value
				? // @ts-ignore
				new Date(a.attributes.date) - new Date(b.attributes.date)
				: // @ts-ignore
				new Date(b.attributes.date) - new Date(a.attributes.date);
		});

		let filteredPosts: Post[];

		if (filter === "all") {
			filteredPosts = sortedPosts;
		} else {
			filteredPosts = sortedPosts.filter((post) => {
				if (post.attributes.category === filter) return post;
			});
		}

		setPostsShown(7);

		return filteredPosts;
	};

	const closeDropdown = () => {
		setDropdown(false);
	};

	const closeTopLabel = () => {
		setTopLabel(null);
		sessionStorage.setItem("topLabel", "off");
	};

	return (
		<div className="w-full bg-[#F7F9FC]">
			<Helmet
				title="Everything you need to know about Financial Freedom - RetireUS"
				htmlAttributes={{ lang: "en" }}
				meta={[
					{
						name: "description",
						content:
							"Expert insight and advice from industry leaders to help you navigate your path towards retirement.",
					},
					{
						name: "keywords",
						content:
							"Financial Planning, Retirement Planning, Financial Planning and Analysis, Certified Financial Planner, Financial Advisor, Tax Planning, Investment",
					},
				]}
				link={[{ rel: "canonical", href: "https://retire.us/blog" }]}
			/>

			<Header
				opacity={true}
				bgOnScroll="bg-white"
				blueOnScroll={true}
				topLabel={topLabel}
				handleCloseTopLabel={closeTopLabel}
			/>

			{hero && (
				<div
					className={`relative w-full bg-hero-texture-mobile lg:bg-blog-hero-texture bg-cover bg-bottom bg-no-repeat px-6 lg:px-[0] ${topLabel && "mt-[150px] lg:mt-[78px]"
						}`}
				>
					<div className="w-full lg:max-w-[960px] xl:max-w-[1280px] mx-auto pt-[100px] pb-[120px] lg:pt-[166px]">
						<div className="text-center">
							<h1 className="font-bold text-[46px] leading-[48px] lg:text-[54px] lg:leading-[58px] xl:text-[70px] xl:leading-[74px] text-white mb-[20px] xl:mb-[24px] lg:px-[120px]">
								{hero?.title}
							</h1>
							<div className="text-base lg:text-lg xl:text-xl text-white leading-6 xl:leading-8 lg:px-[350px]">
								<div
									dangerouslySetInnerHTML={{
										__html: hero?.text,
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			)}

			{allPosts && allPosts.length > 0 && (
				<div className="w-full bg-[#fff]">
					<div className="flex flex-col md:flex-row md:h-[78px] items-center py-[10px] lg:py-[0] gap-y-[10px] w-[calc(100%-48px)] lg:max-w-[960px] xl:max-w-[1280px] mx-auto justify-between">
						{blog.categories.map((item, index) => (
							<div
								className={`flex items-center group gap-x-[4px] text-[16px] leading-[24px] xl:text-[18px] xl:leading-[30px] relative cursor-pointer transition duration-300 hover:text-[#3F68E4] ${filter === item.value
									? "text-[#A2ACBE] pointer-events-none"
									: "text-[#434A59]"
									}`}
								key={`categories_${index}`}
								onClick={(e) => {
									e.stopPropagation();

									if (item.value) {
										setFilter(item.value);
										setDropdown(false);
									} else setDropdown(true);
								}}
							>
								{item?.label}
								{item?.subcategories && (
									<>
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className={`transition duration-300 ${dropdown
												? "rotate-180"
												: "rotate-0"
												}`}
										>
											<path
												d="M4 6L8 10L12 6"
												stroke="#434A59"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="transition duration-300 group-hover:stroke-[#3F68E4]"
											/>
										</svg>
										<div
											className={`${dropdown ? "flex" : "hidden"
												} flex-col absolute top-[40px] md:top-[60px] left-[-50%] md:left-[-100%] xl:left-[-70%] gap-y-[12px] min-w-[260px] px-[52px] py-[12px] bg-[#fff] rounded-[12px] shadow-option z-[1]`}
										>
											{item.subcategories.map(
												(item, index) => (
													<div
														key={`subcategories_${index}`}
														onClick={() => {
															if (item.value)
																setFilter(
																	item.value
																);
														}}
														className={`relative text-[16px] leading-[24px] xl:text-[18px] xl:leading-[30px] transition duration-300 hover:text-[#3F68E4] before:absolute before:left-[-28px] before:top-[0] before:bottom-[0] before:my-[auto] before:w-[8px] before:h-[8px] before:rounded-[50%] before:bg-[#A2ACBE] before:opacity-[0] before:transition before:duration-300 ${filter ===
															item.value
															? "text-[#A2ACBE] before:opacity-[1] pointer-events-none"
															: "text-[#434A59]"
															}`}
													>
														{item.label}
													</div>
												)
											)}
										</div>
									</>
								)}
							</div>
						))}
					</div>
				</div>
			)}
			<div className="w-[calc(100%-48px)] lg:max-w-[960px] xl:max-w-[1280px] mt-[24px] lg:mt-[60px] mb-[60px] lg:mb-[120px] mx-auto">
				{allPosts && allPosts.length > 0 && (
					<div className="w-full flex flex-col gap-y-[12px] md:flex-row justify-between mb-[40px] lg:mb-[60px]">
						<div className="w-full md:w-[40%]">
							<input
								type="text"
								className="w-full border-[1px] border-[#DDE3F0] hover:border-[#A2ACBE] focus:border-[#3F68E4] focus-visible:outline-none text-[16px] leading-[24px] lg:text-[20px] lg:leading-[32px] rounded-[12px] py-[15px] lg:py-[11px] pl-[68px] transition duration-300"
								style={{
									background:
										"url(/assets/images/blog/search.svg) no-repeat #fff 24px center/24px",
								}}
								onChange={(e) => setSearch(e.target.value)}
								value={search}
								placeholder="Search"
							/>
						</div>
						<div className="w-full md:w-[47%] flex flex-col gap-y-[12px] md:flex-row justify-end">
							<Select
								className="w-full md:w-[75%] lg:w-[60%] xl:w-[49%]"
								styles={selectStyles}
								options={blog.sorts}
								defaultValue={blog.sorts[0]}
								components={{
									IndicatorSeparator: () => null,
								}}
								onChange={(e: any) => {
									setSort(e.value);
								}}
							/>
						</div>
					</div>
				)}
				{posts && (
					<>
						{posts.length > 0 && (
							<div className="w-full flex flex-col lg:flex-row gap-x-[40px] flex-wrap gap-y-[24px] lg:gap-y-[40px]">
								{posts.map((post, index) => (
									<React.Fragment key={`posts_${index}`}>
										{index === 0 && (
											<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full bg-[#fff] rounded-[20px] lg:rounded-[40px] overflow-hidden">
												<div
													className="w-full lg:w-[50%] h-[200px] lg:h-[360px] bg-no-repeat bg-center bg-cover"
													style={{
														backgroundImage: `url(${post?.attributes?.cover?.data?.attributes?.url})`,
													}}
												/>
												<div className="w-full lg:w-[49%] p-[24px] lg:px-[60px] lg:py-[10px]">
													{post?.attributes?.date && (
														<div className="text-[#434A59] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[30px] mb-[24px]">
															{convertDate(
																post.attributes
																	.date
															)}
														</div>
													)}
													<div className="font-bold text-[#000714] text-[18px] leading-[22px] lg:text-[28px] lg:leading-[32px] mb-[20px] line-clamp-3">
														{
															post?.attributes
																?.title
														}
													</div>
													<div className="hidden lg:block text-[#434A59] text-[18px] leading-[30px] mb-[24px] lg:line-clamp-2">
														{
															post?.attributes
																?.description
														}
													</div>
													<Link
														href={{
															pathname: `/blog/${post?.attributes?.url}`,
														}}
														className="mt-[42px] lg:mt-[24px]"
													>
														<div className="flex items-center gap-[14px] transition duration-300 font-bold text-[#001F55] text-[18px] leading-[30px]">
															Read more
															<span>
																&#183;&#183;
															</span>
														</div>
													</Link>
												</div>
											</div>
										)}
										{index > 0 && index < postsShown && (
											<div className="flex flex-col w-full lg:w-[31.25%] rounded-[20px] lg:rounded-[40px] overflow-hidden">
												<div
													className="w-full h-[200px] lg:h-[220px] bg-no-repeat bg-center bg-cover"
													style={{
														backgroundImage: `url(${post?.attributes?.cover?.data?.attributes?.url})`,
													}}
												/>
												<div className="bg-[#fff] p-[24px] lg:px-[40px] lg:pt-[32px] lg:pb-[0] lg:h-[256px] relative">
													{post?.attributes?.date && (
														<div className="text-[#434A59] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[30px] mb-[16px] lg:mb-[24px]">
															{convertDate(
																post.attributes
																	.date
															)}
														</div>
													)}
													<div className="font-bold text-[#000714] text-[18px] leading-[22px] lg:text-[23px] lg:leading-[28px] mb-[20px] lg:mb-[0] line-clamp-3">
														{
															post?.attributes
																?.title
														}
													</div>
													<Link
														href={{
															pathname: `/blog/${post?.attributes?.url}`,
														}}
														className="lg:absolute lg:bottom-[32px] width-[calc(100%-80px)] mx-auto"
													>
														<div className="flex items-center gap-[14px] transition duration-300 font-bold text-[#001F55] text-[18px] leading-[30px]">
															Read more
															<span>
																&#183;&#183;
															</span>
														</div>
													</Link>
												</div>
											</div>
										)}
									</React.Fragment>
								))}
							</div>
						)}
						{postsShown < posts.length && (
							<div className="w-[max-content] mx-auto mt-[40px] lg:mt-[60px]">
								<button
									onClick={() => {
										setPostsShown(postsShown + 3);
									}}
									className="flex items-center transition duration-300 font-bold text-lg text-center border bg-transparent font-Lato py-3 px-6 rounded-full text-[#001F55] border-[#001F55] hover:text-white hover:bg-[#001F55] hover:border-[#001F55] group"
								>
									<div className="flex items-center gap-4">
										Load more{" "}
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className="transition duration-1000 transform group-hover:rotate-180"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M21.0195 3.84668C21.5718 3.84668 22.0195 4.29439 22.0195 4.84668V9.34668C22.0195 9.89897 21.5718 10.3467 21.0195 10.3467H16.5195C15.9672 10.3467 15.5195 9.89897 15.5195 9.34668C15.5195 8.7944 15.9672 8.34668 16.5195 8.34668H20.0195V4.84668C20.0195 4.29439 20.4672 3.84668 21.0195 3.84668Z"
												fill="#001F55"
												className="transition duration-300 group-hover:fill-[#fff]"
											/>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M13.4127 4.88974C12.0062 4.60952 10.5481 4.75275 9.22301 5.30131C7.8979 5.84987 6.76525 6.77912 5.96835 7.97151C5.17145 9.16389 4.74609 10.5658 4.74609 12C4.74609 13.4342 5.17145 14.8361 5.96835 16.0285C6.76525 17.2209 7.8979 18.1501 9.22301 18.6987C10.5481 19.2473 12.0062 19.3905 13.4127 19.1103C14.8192 18.83 16.111 18.139 17.1247 17.1244C17.5151 16.7338 18.1482 16.7335 18.5389 17.1239C18.9296 17.5142 18.9299 18.1474 18.5395 18.5381C17.2462 19.8325 15.598 20.7142 13.8035 21.0717C12.0089 21.4292 10.1487 21.2465 8.45802 20.5466C6.76736 19.8467 5.32226 18.6611 4.30552 17.1398C3.28879 15.6185 2.74609 13.8298 2.74609 12C2.74609 10.1702 3.28879 8.38151 4.30552 6.8602C5.32226 5.33888 6.76736 4.15329 8.45802 3.4534C10.1487 2.75351 12.0089 2.57077 13.8035 2.92829C15.5976 3.28575 17.2455 4.16719 18.5387 5.46116C18.539 5.46142 18.5392 5.46168 18.5395 5.46194L21.7257 8.63873C22.1168 9.02868 22.1177 9.66184 21.7278 10.0529C21.3378 10.444 20.7046 10.445 20.3135 10.055L17.126 6.8769L17.1247 6.87557C16.111 5.86105 14.8192 5.16997 13.4127 4.88974Z"
												fill="#001F55"
												className="transition duration-300 group-hover:fill-[#fff]"
											/>
										</svg>
									</div>
								</button>
							</div>
						)}
						{posts.length === 0 && (
							<div className="flex flex-col items-center gap-y-[34px] mt-[120px]">
								<Image
									className="w-[97px]"
									src="/assets/images/blog/nothing.svg"
									alt="Nothing"
								/>
								<div className="max-w-[580px] text-[18px] leading-[32px] text-[#434A59] text-center">
									We didn't find any results that match your
									search exactly. Try a different search or
									check out our most recent and relevant
									article below:
								</div>
							</div>
						)}
					</>
				)}
				{!loading && error && (
					<BlogError text="<div>Sorry for inconvenience, articles can't be loaded right now.</div><div>Please try again later.</div>" />
				)}
			</div>
			{posts && posts.length === 0 && (
				<RelatedPosts
					title="Recent articles"
					posts={
						allPosts
							?.slice()
							.sort((a, b) => b.id - a.id)
							.slice(0, 3) ?? []
					}
				/>
			)}
			<Footer />
		</div>
	);
};

export default Blog;


export async function getServerSideProps(context) {
	const [blog, posts] = await Promise.all([
		fetchAPI("/blog"),
		fetchAPI("/posts"),
	]);
	const content = {
		blog: blog?.data?.attributes ?? fallback.blog,
		posts: posts?.data ?? null,
	};

	return {
		props: {
			content,
			ssr: true,
		},
	}
}