/**
 * Custom Markdown editor for Tipe.
 */
import React from 'react'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
})

const Markdown = ({value, setValue, disabled}) => {
  const [selectedTab, setSelectedTab] = React.useState('write')

  return (
    <div>
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        childProps={{
          writeButton: {
            tabIndex: -1
          }
        }}
      />
    </div>
  )
}

export default Markdown
