import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

import Image from "next/image";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(path.join("blogs", slug + ".mdx"), "utf-8");

  const { data: fontMatter, content } = matter(markdownFile);

  return {
    fontMatter,
    slug,
    content,
  };
}

export default function Page({ params }: any) {
  const props = getPost(params);

  return (
    <div className="mx-auto max-w-4xl items-center justify-between space-y-10 py-8 px-4 sm:px-8 md:px-8 lg:py-24 lg:px-8 xl:py-24 xl:px-8">
      <div className="flex items-center space-x-3">
        <h3 className="bg-primary-default rounded-full leading-none px-2 py-1.5 font-light text-xs text-secondary-default">
          {props.fontMatter.category}
        </h3>
        <h2 className="text-sm text-secondary-default font-light">{props.fontMatter.date}</h2>
      </div>

      <h1 className="text-secondary-default text-5xl">{props.fontMatter.title}</h1>

      <div className="flex items-center space-x-4">
        <div className="">
          <Image src="/images/tokens/spent.svg" width={50} height={50} alt="espento" />
        </div>
        <div className="">
          <h2 className="text-secondary-default font-light">
            <span className="text-secondary-default text-opacity-70">by</span> Espento Team
          </h2>
          <p className="text-secondary-default text-opacity-70 font-light">{props.fontMatter.date}</p>
        </div>
      </div>

      <div className="">
        <Image
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*qTgdAeqFQ5z4Oho5JtUzAg.png"
          width={1320}
          height={550}
          alt="espento"
          className="rounded-lg"
        />
      </div>

      <div className="blog-family text-secondary-default">
        <MDXRemote source={props.content}></MDXRemote>
      </div>
    </div>
  );
}
