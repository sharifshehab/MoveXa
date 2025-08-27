import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {

    const blogs = [
        {
            id: "post-1",
            title:
                "Building Modern UIs: A Deep Dive into Shadcn and React Components",
            summary:
                "Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques.",
            label: "Web Design",
            author: "Sarah Chen",
            published: "15 Feb 2024",
            url: "https://shadcnblocks.com",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
            tags: ["Web Design", "UI Development"],
        },
        {
            id: "post-2",
            title: "Mastering Tailwind CSS: From Basics to Advanced Techniques",
            summary:
                "Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.",
            label: "Web Design",
            author: "Michael Park",
            published: "22 Feb 2024",
            url: "https://shadcnblocks.com",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
            tags: ["Web Design", "CSS"],
        },
    ]
    return (
        <section className="py-32">
            <div className="container flex-center flex-col gap-16">
                <div className="text-center">
                    <h2 className="mx-auto mb-6 text-3xl font-semibold text-pretty md:text-4xl lg:max-w-3xl">
                        Blog Posts
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                        Discover the latest insights and tutorials about modern web devel
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                    {blogs.map((post) => (
                        <Card
                            key={post.id}
                            className="order-last border-0 bg-transparent shadow-none sm:order-first "
                        >
                            <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                                <div className="sm:col-span-5 space-y-3">
                                    <h3 className="heading text-2xl line-clamp-2">
                                        <a
                                            href={post.url}
                                            target="_blank"
                                            className="hover:underline"
                                        >
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="line-clamp-3 text dark:text-white">
                                        {post.summary}
                                    </p>
                                    <div className="flex items-center space-x-4 text-sm">
                                        <span className="text-muted-foreground">{post.author}</span>
                                        <span className="text-muted-foreground">•</span>
                                        <span className="text-muted-foreground">
                                            {post.published}
                                        </span>
                                    </div>
                                    <div className="lex items-center space-x-2">
                                        <a
                                            href={post.url}
                                            target="_blank"
                                            className="inline-flex items-center font-semibold hover:underline md:text-base"
                                        >
                                            <span className="text-primary">Read more</span>
                                            <ArrowRight className="text-primary ml-2 size-4 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                                <div className="order-first sm:order-last sm:col-span-5">
                                    <a href={post.url} target="_blank" className="block">
                                        <div className="aspect-16/9 overflow-clip rounded-lg border border-border">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;