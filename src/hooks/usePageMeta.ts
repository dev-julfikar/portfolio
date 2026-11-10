import { useEffect } from 'react'
import type { PageMeta } from '../data/pages'

/** Sets the document <title> and meta description for the current page. */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
  }, [title, description])
}
