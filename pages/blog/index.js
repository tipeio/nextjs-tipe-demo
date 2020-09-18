import React from 'react'
import {getStaticContent} from '@tipe/next'
import Link from 'next/link'
import removeSlash from '../../utils/removeSlash'
import styles from '../../styles/Blog.module.css'

const Blog = ({documents}) => {
  return (
    <div className={styles.page}>
      <h1>Blog</h1>
      <div>
        {documents.map(post => (
          <Link href={`/blog/${removeSlash(post.fields.slug)}`} key={post.fields.slug}>
            <a>
              <div className={styles.post}>
                <h3>{post.fields.title}</h3>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog
/**
 * getStaticContent is the shorthand way to query content with next.js
 * but there are many more flexible approaches. Check out /blog/[slug]
 */
export const getStaticProps = getStaticContent({query: {type: 'post'}})
