'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {schema} from './schemaTypes'
import {resolve} from './presentation/resolve'
import {structure, defaultDocumentNode} from './structure'
import {codeInput} from '@sanity/code-input'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore', 'unpublish'])

// Define the singleton document types
const singletonTypes = new Set(['settings'])

// environment variables
const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET!
const origin = process.env.SANITY_STUDIO_PREVIEW_ORIGIN!

export default defineConfig({
  title: 'Schema UI',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: schema.types,
    // Filter out singleton types from the global "New document" menu options
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    structureTool({structure, defaultDocumentNode}),
    presentationTool({
      previewUrl: {
        origin,
        preview: '/',
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      resolve,
    }),
    codeInput(),
  ],
})
