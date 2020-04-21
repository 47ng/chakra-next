import React from 'react'

export interface NoSSRProps {
  fallback?: React.ReactElement | string | null
  children?: React.ReactElement | React.ReactElement[] | string | null
}

export const NoSSR: React.FC<NoSSRProps> = ({
  fallback = null,
  children = null,
}) => {
  const [clientRendered, setClientRendered] = React.useState(false)

  React.useEffect(() => {
    setClientRendered(true)
  }, [])

  if (!clientRendered) {
    if (typeof fallback === 'string') {
      return <>{fallback}</>
    }
    return fallback
  }

  if (typeof children === 'string') {
    return <>{children}</>
  }
  if (Array.isArray(children)) {
    return <>{children}</>
  }
  return children
}
