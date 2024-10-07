import React from 'react'

type Props = {
  className?: string
  src: string
  alt?: string
  width?: string | number
  onClick?: (data?: unknown) => void
}

export const Img: React.FC<Props> = ({ className, src, alt, width, onClick }) => {
  return (
    <img className={className} src={`/images/${src}`} alt={alt} width={width} onClick={onClick} />
  )
}
