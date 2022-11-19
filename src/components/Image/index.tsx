import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
}

const Img: React.FC<ImgProps> = ({ src, className, ...props }) => {
    return (
        <LazyLoadImage
            src={
                src.includes("https://")
                    ? src
                    : `${process.env.NEXT_PUBLIC_ASSET_URL}/${src}`
            }
            threshold={300}
            className={className}
            {...props}
        />
    );
};

export default Img;
