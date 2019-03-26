import React, { useMemo } from 'react'

function Child1 ({ a }) {
  return (
    <div>props: {a}</div>
  )
}

function Child2 ({ b }) {
  return (
    <div>props: {b}</div>
  )
}

export function Parent ({ a, b }) {
  // Only re-rendered if `a` changes:
  const child1 = useMemo(() => <Child1 a={a} />, [a]);
  // Only re-rendered if `b` changes:
  const child2 = useMemo(() => <Child2 b={b} />, [b]);
  return (
    <>
      {child1}
      {child2}
    </>
  )
}
