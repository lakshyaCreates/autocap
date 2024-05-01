import { SectionHeading } from "@/components/section-heading";
import homePage from "@/data/homePage.json";
import { projectPosts } from "#site/content";
import { formatDate, sortProjectPosts } from "@/lib/utils";
import { ProjectsPromoCard } from "@/components/projects-promo-card";

export const Projects = () => {
    const sortedPosts = sortProjectPosts(
        projectPosts.filter((post) => post.published)
    );
    const posts = sortedPosts;
    const data = homePage.projects;

    return (
        <div className="space-y-12">
            <SectionHeading>
                <span dangerouslySetInnerHTML={{ __html: data.heading }}></span>
            </SectionHeading>
            <div>
                {posts.length > 0 ? (
                    <ul className="flex px-8 md:px-0 flex-col md:grid md:grid-cols-2 lg:grid-cols-3 space-y-10 md:space-y-0 md:gap-10 max-w-6xl">
                        {posts.map((post, index) => {
                            if (index < data.displayCount) {
                                return (
                                    <li
                                        key={post.slug}
                                        className="max-w-xl text-start"
                                    >
                                        <ProjectsPromoCard
                                            title={post.title}
                                            description={post.description}
                                            date={formatDate(post.date)}
                                            slug={post.slug}
                                            thumbnail={post.thumbnail}
                                        />
                                    </li>
                                );
                            }

                            return null;
                        })}
                    </ul>
                ) : (
                    <p>Nothing to see here!</p>
                )}
            </div>
        </div>
    );
};
