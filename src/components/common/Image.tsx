import React from 'react'
import Image, { ImageProps as NextImageProps } from 'next/image'

const NextImage: React.FC<NextImageProps> = (props) => {
  const myLoader = (props: any) => {
    return props.src
  }

  return (
    <Image
      {...props}
      loader={myLoader}
      className={props.className || ''}
      width={-1}
      height={-1}
    />
  )
}

export default NextImage
