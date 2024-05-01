import { projectPosts } from "#site/content";
import { formatDate, sortProjectPosts } from "@/lib/utils";
import { ProjectsPromoCard } from "@/components/projects-promo-card";

export default async function ProjectsPage() {
    const sortedPosts = sortProjectPosts(
        projectPosts.filter((post) => post.published)
    );

    const posts = sortedPosts;

    return (
        <div className="py-40 flex items-center justify-center">
            {posts.length > 0 ? (
                <ul className="flex px-6 flex-col lg:grid lg:grid-cols-3 space-y-10 lg:space-y-0 lg:gap-10 max-w-6xl">
                    {posts.map((post) => (
                        <li key={post.slug} className="max-w-xl">
                            <ProjectsPromoCard
                                title={post.title}
                                description={post.description}
                                date={formatDate(post.date)}
                                slug={post.slug}
                                thumbnail={post.thumbnail}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nothing to see here!</p>
            )}
        </div>
    );
}
