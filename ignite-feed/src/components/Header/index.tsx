import Image from "next/image"
import Link from "next/link"

import IgniteLogo from "@/assets/ignite-logo.svg"

export const Header = () => {
  return (
    <header className="py-5 bg-gray-800">
      <Link
        href={"/"}
        className="text-gray-200 flex items-center justify-center gap-2 no-focus outline-none"
      >
        <Image src={IgniteLogo} alt="Ignite" className="w-auto max-h-8" />
        <strong>Ignite Feed</strong>
      </Link>
    </header>
  )
}
