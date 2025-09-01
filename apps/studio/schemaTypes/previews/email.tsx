import {useCallback, useEffect, useState} from 'react'
import {StripeWelcomeEmail} from 'email'
import {render} from '@react-email/render'

export const EmailPreview = ({document}: {document: any}) => {
  const [bodyHtml, setBodyHtml] = useState('')

  useEffect(() => {
    const renderHtml = async () => {
      const yes = await render(<StripeWelcomeEmail {...document?.displayed} />)
      setBodyHtml(yes)
    }
    renderHtml()
  }, [document.displayed])
  return <div dangerouslySetInnerHTML={{__html: bodyHtml}} />
}
