import React from 'react'
import MarkdownView from 'react-showdown'

const Markdown = ({markdown}) => {
  return (
    <MarkdownView
        markdown={markdown || ''}
        options={{
          tables: true,
          simplifiedAutoLink: true,
          strikethrough: true,
          tasklists: true
        }}
      />
  )
}

export default Markdown
