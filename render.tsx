import * as React from 'react'
import {Heading, Text, CodeBlock, dracula, CodeInline} from '@react-email/components'
import {PortableText, PortableTextComponents} from '@portabletext/react'
export function Render({
  document: {
    displayed: {body},
  },
}) {
  const components: PortableTextComponents = {
    types: {
      code: ({value: {code, language}}: any) => {
        return (
          <CodeBlock
            code={code}
            lineNumbers // add this so that there are line numbers beside each code line
            theme={dracula}
            language={language ?? 'typescript'}
          />
        )
      },
    },
    marks: {
      code: ({children}) => <CodeInline>{children}</CodeInline>,
    },
    block: {
      h1: ({children}) => <Heading as="h1">{children}</Heading>,
      h2: ({children}) => <Heading as="h2">{children}</Heading>,
      h3: ({children}) => <Heading as="h3">{children}</Heading>,
      h4: ({children}) => <Heading as="h4">{children}</Heading>,
      h5: ({children}) => <Heading as="h5">{children}</Heading>,
      h6: ({children}) => <Heading as="h6">{children}</Heading>,
      normal: ({children}) => <Text>{children}</Text>,
    },
  }
  console.log('displayed', body)
  return <PortableText value={body} components={components} />
}
