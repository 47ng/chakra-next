import { Router, useRouter } from 'next/router'
import React from 'react'

type TransitionOptions = Parameters<Router['push']>[2]

export type RedirectProps = Partial<TransitionOptions> & {
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
  children = null,
  ...transitionOptions
}) => {
  const router = useRouter()
  React.useEffect(() => {
    if (external) {
      // Support redirection to external URLs:
      // https://err.sh/vercel/next.js/invalid-href-passed
      if (replace) {
        window.location.replace(as)
      } else {
        window.location.assign(as)
      }
    } else {
      if (replace) {
        router.replace(to, as, transitionOptions)
      } else {
        router.push(to, as, transitionOptions)
      }
    }
  }, [])
  return children as any
}
