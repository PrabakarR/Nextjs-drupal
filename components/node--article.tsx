import Image from "next/image"

import { formatDate } from "lib/utils"
import { Article } from "types"

interface NodeArticleProps {
  node: Article
}

export function NodeArticle({ node, ...props }: NodeArticleProps) {
  const imageURL = node.mediaImage.mediaImage.url
  return (
    <div className="mx-auto max-w-4xl">
 <article {...props}>
      <h1 className="mb-4 text-5xl font-black leading-tight">{node.title}</h1>
      <div className="mb-4 text-gray-600">
        {node.author?.displayName ? (
          <span>
            Posted by{" "}
            <span className="font-semibold">{node.author.displayName}</span>
          </span>
        ) : null}
        <span> - {formatDate(node.created)}</span>
      </div>
      {node.mediaImage && (
        <figure className="my-4 overflow-hidden rounded-md">
          <Image
            src={imageURL}
            width={568}
            className="w-full"
            height={480}
            alt={node.title}
          />
        </figure>
      )}
      {node.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body.processed }}
          className="mt-6 font-serif text-xl leading-loose prose"
        />
      )}
    </article>
    </div>
   
  )
}
