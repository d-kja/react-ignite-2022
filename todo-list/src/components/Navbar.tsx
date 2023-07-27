import Image from "next/image"

import Logo from "@/assets/logo.svg"

export const Navbar = () => {
  return (
    <nav className="flex justify-center items-center bg-gray-700 h-[12.5rem]">
      <Image src={Logo} alt="Todo logo" />
    </nav>
  )
}
