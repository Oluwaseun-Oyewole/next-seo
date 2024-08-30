import { Metadata } from "next";
import { notFound } from "next/navigation";
import fetchPosts from "../actions/actions";
import fetchPostDetail from "../actions/detail";

interface IProps {
  params: {
    details: string;
  };
}

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const data = await fetchPosts();
  return data.map((post: any) => post.id);
}

export async function generateMetadata({
  params: { details },
}: IProps): Promise<Metadata> {
  const post = await fetchPostDetail(+details);
  return {
    title: post.title,
    description: post.body,
    // openGraph: {
    //   images: [{ url: post.imageUrl }],
    // },
  };
}
const PostDetails = async ({ params: { details } }: IProps) => {
  const post = await fetchPostDetail(+details);
  if (!post.title) notFound();
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default PostDetails;
