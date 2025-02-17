import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandDemo({ isSinkDemo = false }) {
  return (
    <Command className="border rounded-lg shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="w-4 h-4 mr-2" />
            <span>Calendar</span>
          </CommandItem>
          {!isSinkDemo && (
            <>
              <CommandItem>
                <Smile className="w-4 h-4 mr-2" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="w-4 h-4 mr-2" />
                <span>Calculator</span>
              </CommandItem>
            </>
          )}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="w-4 h-4 mr-2" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="w-4 h-4 mr-2" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          {!isSinkDemo && (
            <CommandItem>
              <Settings className="w-4 h-4 mr-2" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          )}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
