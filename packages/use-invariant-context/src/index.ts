import React from 'react'

export function useInvariantContext<T>(
  context: React.Context<T>,
  message = 'Context not found',
) {
  const ctx = React.useContext(context)
  if (!ctx) throw new Error(message)
  return ctx
}
