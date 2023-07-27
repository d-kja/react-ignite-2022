import clsx from "clsx"
import Image, { ImageProps } from "next/image"

interface AvatarProps extends ImageProps {
  w?: number | undefined
  h?: number | undefined
  variant?: "default" | "no-border"
}

export const Avatar = ({
  src,
  alt = "",
  h = undefined,
  w = undefined,
  variant = "default",
  className,
  ...props
}: AvatarProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={h}
      width={w}
      className={clsx(
        "rounded-lg ring-green-500  ring-offset-gray-800",
        { "ring-2 ring-offset-4": variant === "default" },
        className
      )}
      {...props}
    />
  )
}
