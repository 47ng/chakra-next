import React from 'react'
import { useRouter } from 'next/router'

export interface RedirectProps {
  to: string
  as?: string
  replace?: boolean
  external?: boolean
}

export const Redirect: React.FC<RedirectProps> = ({
  to,
  as = to,
  replace = false,
  external = false,
}) => {
  const router = useRouter()

  React.useEffect(() => {
    if (external) {
      // Support redirection to external URLs:
      // https://err.sh/zeit/next.js/invalid-href-passed
      if (replace) {
        window.location.replace(as)
      } else {
        window.location.assign(as)
      }
    } else {
      if (replace) {
        router.replace(to, as)
      } else {
        router.push(to, as)
      }
    }
  }, [])

  return null
}
