import { FC } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import md from "markdown-it";
import Image from "next/image";

interface PostPageProps {
  params: {
    slug: string;
  };
}

const getPostData = async (slug: string) => {
  const filePath = path.join(process.cwd(), "src/config/blog_post", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContents);
  return { frontmatter, content };
};

const PostPage: FC<PostPageProps> = async ({ params }) => {
  const { slug } = params;
  const { frontmatter, content } = await getPostData(slug);

  return (
    <div className="pt-3">
      <div className="mx-auto w-full space-y-8 lg:space-y-16 xl:space-y-16">
        <div className="mx-auto max-w-4xl space-y-16 p-4 lg:p-8">
          <div className="relative mt-8 space-y-6">
            <div className="max-w-2xl m-auto space-y-14">
              <h2 className="text-secondary-default text-5xl">{frontmatter.title}</h2>
              <div className="flex items-center space-x-2">
                <Image src="/images/tokens/spent.svg" width={44} height={44} alt="espento" />
                <div className="text-secondary-default">
                  <h2 className="text-sm font-normal">ESPENTO</h2>
                  <p className="text-sm font-light">{frontmatter.date}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl space-y-10 text-justify">
            <Image
              alt={frontmatter.title}
              src={frontmatter.socialImage}
              className="rounded-2xl"
              width={300}
              height={300}
            />
          </div>

          <div className="blog-family prose max-w-2xl m-auto text-secondary-default">
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
