/**
 * Custom Google Search Preview Field component for Tipe.
 * Allows users to edit a google search preview. Devs can then bind
 * values to a page using next/head
 */

import React from 'react'
import styles from '../styles/seo.module.css'

const truncate = (string = '', limit, char = '.') => {
  if (string.length > limit) {
    return `${string.slice(0, limit - 4)} ${char.repeat(3)}`
  }
  return string
}

const SEO = ({ value, setValue, disabled }) => {
  const values = Object.keys(value || {}).reduce((o, field) => {
    return {
      ...o,
      [field]: value[field].value,
    }
  }, {})

  const onTitleChange = (e) => setValue({ title: e.target.value })
  const onDescriptionChange = (e) => setValue({ description: e.target.value })
  const onLinkChange = (e) => setValue({ link: e.target.value })

  return (
    <div className={styles.container}>
      <textarea
        rows="1"
        className={styles.name}
        value={truncate(values.title, 70) }
        placeholder="Site Name"
        onChange={onTitleChange}
        disabled={disabled}
      />

      <textarea
        rows="1"
        className={styles.link}
        value={truncate(values.link, 100) }
        placeholder="https://sitelink.com"
        onChange={onLinkChange}
        disabled={disabled}
      />

      <textarea
        rows="2"
        className={styles.description}
        value={truncate(values.description, 156) }
        placeholder="site description"
        onChange={onDescriptionChange}
        disabled={disabled}
      />
    </div>
  )
}

export default SEO
