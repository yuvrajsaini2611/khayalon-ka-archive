import { posts } from "../data/posts";
import { Link } from 'react-router-dom'

function PostList(){
    return (
        <section className="max-w-3xl mx-auto px-8 py-12">

            <p className="font-ui text-xs tracking-widest text-gold uppercase mb-8">
                Latest Writings
            </p>

            <div className="border-t border-stone-200">
                {posts.map((post) => (
                    <Link
                        to={`/post/${post.slug}`}
                        key={post.id}
                        className="flex items-center justify-between py-5 border-b border-stone-200 group cursor-pointer no-underline"
                    >
                        {/* left - title and subtitle */}
                        <div>
                            <p className="font-heading text-lg text-ink group-hover:text-gold transition-colors duration-300 mb-1">
                                {post.title}
                            </p>
                            <p className="font-ui text-sm text-inklight">
                                {post.subtitle}
                            </p>
                        </div>

                        {/* right - date */}
                        <span className="font-ui text-xs text-gold ml-8 shrink-0">
                            {post.date}
                        </span>
                    </Link>
                ))}
            </div>

        </section>
    )
};

export default PostList;