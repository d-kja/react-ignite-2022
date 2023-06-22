import Image from 'next/image'
import styled from 'windstitch'

export const CardContainer = styled('main', {
  className:
    'grid grid-cols-1 lg:grid-cols-2 items-stretch gap-16 max-w-base mx-auto w-full mb-5',
})
export const CardImageContainer = styled('div', {
  className:
    'w-full max-w-[576px] bg-gradient-to-b from-[#1ea483] to-[#7465d4] rounded-lg p-1 flex items-center justify-center mx-auto',
})
export const CardImage = styled(Image, {
  className: 'object-cover h-[calc(656px-0.5rem)]',
})
export const CardDetails = styled('div', {
  className: 'flex flex-col',
})
export const CardButton = styled('button', {
  className:
    'mt-auto bg-green-500 [&:not(:disabled):hover]:brightness-75 hover:transition-[filter] text-white rounded-lg p-5 font-bold text-lg disabled:cursor-wait disabled:opacity-60 mt-6 lg:mt-auto',
})
