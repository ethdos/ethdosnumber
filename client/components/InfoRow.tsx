import { useState, useEffect } from 'react'

type Props = {
  name: string
  content: string | JSX.Element
  color?: string
}

export default function InfoRow({ name, content, color }: Props) {
  let className = 'font-bold '
  if (color) className = className += color

  return (
    <div>
      <span className={className}>{name}: </span>
      <span> {content} </span>
    </div>
  )
}
