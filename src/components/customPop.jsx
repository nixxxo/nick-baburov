import { Popover } from '@headlessui/react'

function CustomPopover() {
  return (
    <Popover className="relative">
      <Popover.Button>Solutions</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <h2>Working on it...</h2>
        <img src="#" alt="#" />
      </Popover.Panel>
    </Popover>
  )
}