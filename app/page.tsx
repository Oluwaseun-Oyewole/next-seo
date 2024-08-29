import Link from "next/link";
import fetchPosts from "./actions/actions";

export default async function Home() {
  const data = await fetchPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-base lg:flex">
        <div>
          {data?.map((post: any) => {
            return (
              <div key={post.id} className="hover:text-blue-500">
                <Link href={`${post.id}`}> {post.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
