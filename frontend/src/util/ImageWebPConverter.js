const ImageWebPConverter = ({
  src,
  srcSmall,
  pngSmall,
  fallback,
  type = "image/webp",
  alt,
  width,
  height,
  ...delegated
}) => {
  return (
    <picture>
      <source
        srcSet={`${srcSmall} 425w, ${src} 1280w`}
        type={type}
        sizes="(max-width: 425px) 425px, 1280px"
      />
      <source
        type="image/png"
        srcSet={`${pngSmall} 425w, ${fallback} 1280w`}
        sizes="(max-width: 425px) 425px, 1280px"
      />
      <img src={fallback} alt={alt} {...delegated} width={width} height={height} />
    </picture>
  );
};

export default ImageWebPConverter;
