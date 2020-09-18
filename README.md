This is a [Next.js](https://nextjs.org/) project with a [Tipe](https://tipe.io) integration


## Editing Content
1. Visit the **[live site](https://nextjs-demo-ashen.vercel.app)**
2. Click the edit button on the landing page
3. Signin with google, *(use the provided credentials)*
4. You will now see the editor for the home page. Edit any field.
5. Hit the preview button and preview your changes on the home page.


## Tour
Tipe has a 2 part integration with framekworks:
1. Mounting of the actual content editing app to your app.
2. Fetching content inside your pages and components.

### Configuration
Using the Tipe CLI with a Next.js project, the first integration is **automatically
configured**. The CLI generates a few things:
1. `/tipe` folder that contains the content schema and index file for any custom field components
2. `/pages/{editorPath}` which is where Tipe will mount the actual editor app. This path is customizable and the entire directory can be git ignored and generated at build time or in a CI
3. `/pages/api/preview.js` which is for automatically configuring preview mode with next.js. This can be gitignored as well.
4. `.env.local` contains needed envs for Tipe to work properly in dev mode
