import {useCallback, useEffect, useRef, useState} from 'react'
import {StripeWelcomeEmail} from 'email'
import {render} from '@react-email/render'

export const EmailPreview = ({document}: {document: any}) => {
  const [bodyHtml, setBodyHtml] = useState('')
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      const renderHtml = async () => {
        const yes = await render(<StripeWelcomeEmail {...document?.displayed} />)
        setBodyHtml(yes)
      }
      renderHtml()
    }, 300) // 300ms debounce
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [document.displayed])

  return <div dangerouslySetInnerHTML={{__html: bodyHtml}} />
}
