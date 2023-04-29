import React from "react";
import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import matter from "gray-matter";
import { MDXProvider } from "@mdx-js/react";
import MDX from "@mdx-js/runtime";

type PostProps = {
  mdx: string;
};

const components = {
  h1: (props) => <h1 className='fffffffffffffffff' style={{ color: "red" }}>{props.children}</h1>,
  p: (props) => <p style={{ color: "green" }}>{props.children}</p>,
}; 

const Post: React.FC<PostProps> = (props) => {
  return (
    <MDXProvider components={components}>
      <MDX components={components}>{props.mdx}</MDX>
    </MDXProvider>
  );
};
export const getStaticProps: GetStaticProps = async (props) => {
  const folderPath = path.join(process.cwd(), "content");
  const filePath = path.join(folderPath, `${props.params.post}.mdx`);
  const rawFileSource = fs.readFileSync(filePath);
  const { content, data } = matter(rawFileSource);
  return {
    props: {
      mdx: content,
      metaInformation: data,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  // CHANGE needed: the 'post' in { params: { post: "some-random-path" } } is refering to the file ie [post].tsx xxxx
  return {
    paths: [
      { params: { post: "article_1" } },
      { params: { post: "article_2" } },
      { params: { post: "article_3" } }
    ],
    fallback: false,
  };
};
export default Post;