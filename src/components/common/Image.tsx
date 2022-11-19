import React from 'react'
import Image, { ImageProps } from 'next/image'

const CustomImage: React.FC<ImageProps> = (props) => {
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

export default CustomImage
