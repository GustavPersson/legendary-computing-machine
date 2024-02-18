"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ImageProps {
  src: string | undefined;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <img
      className="w-full h-64 object-cover object-center rounded-lg"
      src={src ?? "https://picsum.photos/id/292/3852/2556"}
      alt={alt}
      onError={(event) => {
        event.currentTarget.src = "https://picsum.photos/id/292/3852/2556";
      }}
    />
  );
};

export default Image;
