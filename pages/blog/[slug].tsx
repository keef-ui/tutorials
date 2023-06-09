
import Link from "next/link";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import rehypeSlug from "rehype-slug";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import { serialize } from "next-mdx-remote/serialize";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import {
  getAllArticles,
  getSlug,
  getArticleFromSlug,
} from "../../lib/mdxHelper";

const Test= ()=> <>This is my TEST Componnet 12345678 </>

export default function Blog({ post: { source, frontmatter }  } : {post:any}) {
 console.log(frontmatter.publishedAt);
  return (
    <React.Fragment>
      <Head>
        <title>{frontmatter.title} | My blog</title>
      </Head>
      <div className="article-container">
        <h1 className="article-title">{frontmatter.title}</h1>
        <p className="publish-date">
          {/* {dayjs(frontmatter.publishedAt).format("MMMM D, YYYY")} &mdash;{" "} */}
          {frontmatter.readingTime}
        </p>
        <div className="content">
          <MDXRemote {...source} components={{Test }} />
        </div>
      </div>
    </React.Fragment>
  );
}

export async function getStaticProps({ params } : {params : any}) {
  //fetch the particular file based on the slug
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  };
}

function dayjs(publishedAt: any) {
  throw new Error("Function not implemented.");
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug : any) => ({ params: { slug } }))

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  }
}