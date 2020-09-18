import { createTipeClient } from '@tipe/js'

const clientOptions = {
  projectId: process.env.TIPE_PROJECT_ID,
  environment: process.env.TIPE_ENVIRONMENT,
  assetHost: process.env.TIPE_ASSET_HOST || '',
  contentHost: process.env.TIPE_CONTENT_HOST || '',
  adminHost: process.env.TIPE_ADMIN_HOST || '',
  key: process.env.TIPE_API_KEY || '',
}

const tipe = createTipeClient(clientOptions)

export default async (req, res) => {
  
  if ( !req.query.slug || !req.query.id) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if( req.query.secret !== process.env.NEXT_PUBLIC_TIPE_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid secret' })
  }

  const document = await tipe.getDocument({id: req.query.id, draft: true})

  if (!document) {
    return res.status(401).json({ message: 'Invalid Document' })
  }

  res.setPreviewData({}, {
    maxAge: 30,
  })
  
  res.writeHead(307, {
    Location: req.query.slug + '?tipePreview=true'
  })
  
  res.end()
}
  