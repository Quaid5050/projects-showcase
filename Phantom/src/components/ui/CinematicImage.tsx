import Image, { type ImageProps } from "next/image";
import { resolvePlaceholderSrc } from "@/lib/placeholder-images";

type Props = Omit<ImageProps, "src"> & {
  /** Logical /public path from content — resolved to remote placeholder until local file exists */
  src: string;
};

export function CinematicImage({ src, alt, ...rest }: Props) {
  const resolved = resolvePlaceholderSrc(src);
  return <Image src={resolved} alt={alt} {...rest} />;
}
