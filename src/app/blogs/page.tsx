import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Home() {
  const blogDir = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return (
    <>
      <div className="mx-auto max-w-7xl items-center justify-between space-y-20 py-8 px-4 sm:px-8 md:px-8 lg:py-24 lg:px-8 xl:py-24 xl:px-8">
        <div className="grid grid-cols-4">
          {blogs.map((blog) => (
            <Link
              href={"/blogs/" + blog.slug}
              passHref
              key={blog.slug}
              className="bg-slate-800 p-4 rounded-md"
            >
              <div>
                <Image
                  src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*qTgdAeqFQ5z4Oho5JtUzAg.png"
                  width={300}
                  height={400}
                  alt="Espento Blog"
                  className="rounded-md"
                />
              </div>
              <div className="flex items-center justify-between py-3">
                <h2 className="text-sm text-secondary-default font-light">{blog.meta.date}</h2>
                <h3 className="bg-primary-default rounded-full leading-none px-1.5 py-1 font-light text-xs text-secondary-default">
                  {blog.meta.category}
                </h3>
              </div>

              <div className="space-y-1.5">
                <h2 className="text-secondary-default font-normal text-sm">{blog.meta.title}</h2>
                <p className="text-secondary-default text-opacity-65 font-light text-xs">
                  {blog.meta.description}
                </p>
              </div>

              <div className="">by espento</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
