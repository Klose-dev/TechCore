import SectionPageTitle from "@/components/sections/section-page-title";
import PostList from "@/components/posts/post-list";
import {Helmet} from "react-helmet"

const Blog = () => (
	<>
		<Helmet>
			<title>Blog</title>
		</Helmet>
		<main className="relative">
		<SectionPageTitle id="about">Blog</SectionPageTitle>
		<section id="posts" className="border-b py-24">
				<div className="container">
					<PostList limit={6} showPagination={true} />
				</div>
			</section>
		</main>
	</>
)

export default Blog