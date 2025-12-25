import { Image as IKImage } from "@imagekit/react";

export default function Image({ src, className, w, h, alt }) {
  const isLocal = src.startsWith("/") || src.startsWith("./");

  if (isLocal) {
    return (
      <img
        src={src}
        alt={alt}
        width={w}
        height={h}
        className={className}
        loading="lazy"
      />
    );
  }

  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
      transformation={[{ width: w, height: h }]}
    />
  );
}
