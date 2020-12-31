import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import React from "react";
import { ChakraParagraph } from "../components/ChakraParagraph";

const components = { p: ChakraParagraph };

export default function TestPage({ source }) {
  const content = hydrate(source, { components });
  return <div className="wrapper">{content}</div>;
}

export async function getStaticProps() {
  const source = "Some **mdx** text, with a component";
  const mdxSource = await renderToString(source, { components });
  return { props: { source: mdxSource } };
}
