import Link from "next/link";
import POSTS from "@/json/posts.json";

export default function PostsPage() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-10">
      <p className="font-mono font-semibold text-3xl text-teal-500">Posts</p>
      <article className="mt-8">
        <ol className="flex flex-col space-y-4 max-w-xl">
          {POSTS.map((post) => {
            return (
              <li
                key={post.idx}
                className="border-b border-gray-200 pb-4 cursor-pointer"
              >
                <Link href={`/posts/${post.idx}`} className="block">
                  <h4 className="text-4xl font-semibold transition-colors duration-200 ">
                    {post.title}
                  </h4>
                  <p className="my-3 text-xl text-slate-800 transition-colors duration-200 ">
                    {post.content}
                  </p>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </article>
    </div>
  );
}
