// src/app/blog/page.tsx

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import RootLayout from "../layout";
import routes from "@/config/routes";

const fetchPosts = () => {
  const files = fs.readdirSync("src/config/blog_post");
  const posts = files.map((fileName: any) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`src/config/blog_post/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });
  return posts;
};

const Blog = async () => {
  const posts = fetchPosts();
  const SORTED_POSTS = posts.sort(
    (first: any, second: any) => second.frontmatter.blog_id - first.frontmatter.blog_id
  );
  const LATEST_POST = [SORTED_POSTS[0]];

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-5 py-4 bg-transparent z-50 relative">
      {/* Heading Start */}
      <div className="space-y-4">
        <h2>Blogs</h2>
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center space-x-6 overflow-x-auto p-2 md:w-3/4 md:p-0 lg:w-3/4 lg:p-0 xl:w-3/4 xl:p-0">
            <h2>All</h2>
            <h2>Ecosystem</h2>
            <h2>Developer</h2>
            <h2>Education</h2>
            <h2>Engineering</h2>
          </div>
        </div>
      </div>
      {/* Heading Start */}

      {/* Latest Blog Start */}
      <div className="">
        {LATEST_POST.map((latest: any) => (
          <Link key={latest.slug} href={`${routes.blog}/${latest.slug}`} passHref>
            <div className="hidden cursor-pointer grid-cols-1 rounded-lg bg-[#222531] border border-[#353743] text-justify shadow-lg lg:grid lg:grid-cols-2 xl:grid">
              <div className="flex">
                <img
                  alt="Espento"
                  src={latest.frontmatter.socialImage}
                  className="rounded-lg lg:rounded-l-lg xl:rounded-l-lg"
                />
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h2 className="text-secondary-default text-sm text-opacity-60">Latest</h2>
                  <div className="flex items-center space-x-3">
                    <h2 className="text-secondary-default"> {latest.frontmatter.category.Date}</h2>
                    <h2 className="text-secondary-default">{latest.frontmatter.category.blogCategory}</h2>
                  </div>
                  <div className="">
                    <div className="mb-2 h-40 space-y-3">
                      <h2 className="text-secondary-default text-2xl">{latest.frontmatter.title}</h2>
                      <h2 className="text-secondary-default text-lg font-light">
                        {latest.frontmatter.description}
                      </h2>
                    </div>
                    <div className="mt-8 flex items-center text-secondary-default">
                      <UserCircleIcon className="mr-2 h-5 w-5" />
                      <h2>By {latest.frontmatter.authorName}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Latest Blog End */}

      {/* Blog Start */}
      <div className="mx-auto mt-12 grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-3">
        {posts.map(({ slug, frontmatter }: any) => {
          return (
            <div key={slug} className="rounded-xl shadow-lg bg-[#222531] border border-[#353743]">
              <Link href={`${routes.blog}/${slug}`} passHref className="cursor-pointer">
                <div className="flex flex-col overflow-hidden">
                  <div className="relative flex h-full md:h-52 lg:h-52 xl:h-52">
                    <img alt={frontmatter.title} src={frontmatter.socialImage} className="rounded-lg" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between space-y-5 p-6 text-justify">
                    <div className="flex-1 space-y-4">
                      <div className="space-y-3">
                        <h2 className="text-secondary-default text-sm text-opacity-60">{frontmatter.date}</h2>
                        <h2 className="text-secondary-default text-xl">{frontmatter.title}</h2>
                        <h2 className="text-secondary-default text-base font-light text-pretty">
                          {frontmatter.description}
                        </h2>
                        <div className="bg-[#45536d] text-[#b9e6fe] text-xs w-fit px-2 py-1 rounded-full">
                          {frontmatter.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {/* Blog End */}
    </div>
  );
};

export default Blog;
