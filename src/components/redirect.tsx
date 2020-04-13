import React from 'react'
import { useRouter } from 'next/router'

export interface RedirectProps {
  to: string
  as?: string
  replace?: boolean
}

export const Redirect: React.FC<RedirectProps> = ({
  to,
  as = to,
  replace = false,
}) => {
  const router = useRouter()

  React.useEffect(() => {
    if (replace) {
      router.replace(to, as)
    } else {
      router.push(to, as)
    }
  }, [])

  return null
}
