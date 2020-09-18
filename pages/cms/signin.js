
  /** @jsx jsx */
  import { jsx } from 'theme-ui'
  import React from 'react'
  import Head from 'next/head'
  import { SigninPage, WithTipePage, typography } from '@tipe/react-editor'
  import Link from 'next/link'
  import Router from 'next/router'
  import { createTipeClient } from '@tipe/js'
  import { TypographyStyle } from 'react-typography'
  let schema = require('../../tipe/schema')
  let customFields = require('../../tipe/fields')

  if (customFields.default) {
    customFields = customFields.default
  }

  if (schema.default) {
    schema = schema.default
  }
  
  const client = createTipeClient({
    environment: 'Production',
    projectId: '5f65087914da03002ce741bc',
    key: process.env.TIPE_API_KEY,
    adminHost: 'https://api.admin.tipe.io',
    contentHost: 'https://content.tipe.io',
    assetHost: 'https://upload.tipe.io'
  })
  
  const Page = WithTipePage(SigninPage, {
    client,
    schema,
    customFields,
    mountPath: 'cms',
    project: '5f65087914da03002ce741bc',
    previewSecret: process.env.NEXT_PUBLIC_TIPE_PREVIEW_SECRET,
    contentHost: client.__config.contentHost,
    assetHost: client.__config.assetHost,
    adminHost: client.__config.adminHost,
    Link: ({ to, children, styles }) => (
      <Link href={to} passHref>
        <a sx={styles}>{children}</a>
      </Link>
    ),
    onNavigate: (to) => {
      let path = to
      if (path[0] !== '/') {
        path = '/' + path
      }
      Router.push(path)
    },
  })

  export default () => {
    return (
      <div>
        <TypographyStyle typography={typography} />
        <Page />
      </div>
    )
  }
