import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";

export default async function BlogDetailsPage({
    params,
}: {
    params: { blogId: string; };
}) {

    console.log(params.blogId);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${params.blogId}`, {
        cache: "no-store",
    });

    const blog = await res.json();
    // console.log(blog);

    return (
        <div className="py-30 px-4 max-w-7xl mx-auto">
            <BlogDetailsCard blog={blog} />
        </div>
    );
}
