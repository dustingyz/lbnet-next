

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { dummyData } from "@/lib/utils";

interface Props {
  params: Promise<{
    post_id: string;
  }>;
}

const PostPage = async ({ params }: Props) => {
  const { post_id } = await params;
  const postContent = await dummyData(post_id);

  return (
    <div className="typeset">
      <div className="typeset-docs">
        {/* <div>{post_id}</div> */}
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
            // code: () => {

            // }
        }}>{postContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PostPage;
