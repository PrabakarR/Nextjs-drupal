import Head from "next/head"
import { GetStaticPropsResult } from "next"

import { query } from "lib/drupal"
import { Layout } from "components/layout"
import { NodeArticleTeaser } from "components/node--article--teaser"
import { Article } from "types"

interface IndexPageProps {
  nodes: Article[]
}

export default function IndexPage({ nodes }: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
        <div className="text-center mx-auto max-w-xl">
          <h1 className="mb-4 text-5xl font-black">Exclusive Articles</h1>
          <p className="mb-4  text-2xl">Clarity gives you the blocks & components you need to create a truly professional website with the blocks.</p>
        </div>
        <div className="mt-5 mx-auto max-w-4xl">
        <div className="wrap-articles border-not-first">
          {nodes?.length ? (
            nodes.map((node) => (
              <div key={node.id}>
                <NodeArticleTeaser node={node} />
              </div>
            ))
          ) : (
            <p className="py-4">No nodes found</p>
          )}
        </div>
        </div>
   

      </div>
    </Layout>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  // Fetch the first 10 articles.
  const data = await query<{
    nodeArticles: {
      nodes: Article[]
    }
  }>({
    query: `
      query {
        nodeArticles(first: 10) {
          nodes {
            id
            title
            path
            author {
              displayName
            }
            body {
              processed
            }
            created
            image {
              url
              width
              height
             }
           }
        }
      }
    `,
  })

  return {
    props: {
      nodes: data?.nodeArticles?.nodes ?? [],
    },
  }
}
