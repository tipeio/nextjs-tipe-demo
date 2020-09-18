import React from 'react'
import {getTipe, EditButton} from '@tipe/next'
import removeSlash from '../../utils/removeSlash'
import Markdown from '../../components/markdownRenderer'
import Link from 'next/link'
import styles from '../../styles/Post.module.css'

const Post = ({post, editUrl}) => {
  const blogPost = post || {fields: {}}

  return (
    <div className={styles.post}>
      <Link href="/blog">
        <a className={styles.link}>
          Blog
        </a>
      </Link>
      <h1>{blogPost.fields.title}</h1>
      <div>
        <Markdown markdown={blogPost.fields.body} />
      </div>
      <EditButton editUrl={editUrl} />
    </div>
  )
}

export default Post

export async function getStaticPaths(ctx) {
  /** getStaticPaths does not show preview prop so
   * user can't preview blog posts that aren't published yet
   */
  const {tipe} = getTipe(ctx || {})
  const {documents} = await tipe.getDocuments({type: 'post'})
  return {
    paths: documents.map(post => ({
      params: {slug: removeSlash(post.fields.slug)}
    })),
    fallback: true
  }
}


export async function getStaticProps(ctx) {
  const {tipe, createEditUrl} = getTipe(ctx)
  const {documents} = await tipe.getDocuments({type: 'post'})

  /** API Filter on Document fields in progress :) */
  const post = documents.find(d => d.fields.slug.includes(ctx.params.slug))
  /** */

  const editUrl = createEditUrl(post)
  return {
    props: {
      editUrl,
      post
    }
  }
}
