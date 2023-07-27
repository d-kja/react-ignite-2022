import Link from "next/link"
import { PencilSimpleLine } from "phosphor-react"
import { Button } from "../Primitives/Button"
import { Avatar } from "../User/Avatar"

export const Sidebar = () => {
  return (
    <aside className="rounded-lg overflow-hidden bg-gray-800">
      <picture>
        <img
          className="w-full h-[4.5rem] object-cover object-top"
          src="https://raw.githubusercontent.com/Nyyu/Nyyu/main/img/wallhaven-8393gy.jpg"
          alt="Banner picture"
        />
      </picture>

      <div className="flex flex-col items-center -mt-6 gap-4">
        <Avatar
          alt="user avatar"
          src="https://github.com/nyyu.png"
          h={50}
          w={50}
        />
        <div className="flex flex-col items-center">
          <strong className="font-bold text-base">Ny</strong>
          <span className="font-normal text-sm text-gray-400">
            Web Developer
          </span>
        </div>
      </div>

      <footer className="border-t border-gray-600 mt-6 pt-6 pb-8 px-8">
        <Button
          variant="outline"
          asChild
          className="no-underline bg-transparent"
        >
          <Link href="#">
            <PencilSimpleLine size={20} />
            Edit profile
          </Link>
        </Button>
      </footer>
    </aside>
  )
}
