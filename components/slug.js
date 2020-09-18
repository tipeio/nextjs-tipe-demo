/**
 * Custom Slug component for tipe. Its read only and computes its value
 * from the title field on a document. Useful for blog posts.
 */

import React, { useEffect, useState } from 'react'
import slugify from 'slugify'
import styles from '../styles/Slug.module.css'

const Slug = ({document, setValue, disabled}) => {
  const slug = slugify(document.fields.title || '', {lower: true, remove: /[*+~.()'"!:@]/g})

  useEffect(() => {
    setValue(slug)
  }, [document.fields.title])

  return (
    <input className={styles.input} value={slug} readOnly disabled={disabled} />
  )
}

export default Slug
