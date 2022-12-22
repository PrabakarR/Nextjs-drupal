import Image from "next/image"
import Link from "next/link"

import { formatDate } from "lib/utils"
import { Article } from "types"

interface NodeArticleTeaserProps {
  node: Partial<Article>
}

export function NodeArticleTeaser({ node, ...props }: NodeArticleTeaserProps) {
  const imageURL = node.mediaImage.mediaImage.url
  return (
    <article className="flex items-center grow" {...props}>
      {/* <Link href={node.path} className="no-underline hover:text-blue-600">
        <h2 className="mb-4 text-4xl font-bold">{node.title}</h2>
      </Link> */}
      <Link href={node.path} className="flex shrink-0 overflow-hidden rounded-md">
      {node.mediaImage && (
          <Image
            src={imageURL}
            width={150}
            height={150}
            alt={node.title}
          />
      )}
      </Link> 
      <div className="flex-1 ml-4 text-gray-600">
        <h3 className="h3">{node.title}</h3>
       <span>{formatDate(node.created)}</span>
      </div>
    
      <Link
        href={node.path}
        className="inline-flex items-center px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-100"
      >
        Read article
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 ml-2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  )
}
