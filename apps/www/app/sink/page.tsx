import { AccordionDemo } from "@/components/examples/accordion/demo"
import { AlertDialogDemo } from "@/components/examples/alert-dialog/demo"
import { AspectRatioDemo } from "@/components/examples/aspect-ratio/demo"
import { AvatarDemo } from "@/components/examples/avatar/demo"
import { BadgeDemo } from "@/components/examples/badge/demo"
import { BadgeDestructive } from "@/components/examples/badge/destructive"
import { BadgeOutline } from "@/components/examples/badge/outline"
import { BadgeSecondary } from "@/components/examples/badge/secondary"
import { ButtonDemo } from "@/components/examples/button/demo"
import { ButtonLink } from "@/components/examples/button/link"
import { ButtonLoading } from "@/components/examples/button/loading"
import { ButtonOutline } from "@/components/examples/button/outline"
import { ButtonWithIcon } from "@/components/examples/button/with-icon"
import { CardDemo } from "@/components/examples/card/demo"
import { CheckboxDemo } from "@/components/examples/checkbox/demo"
import { CollapsibleDemo } from "@/components/examples/collapsible/demo"
import { CommandDemo } from "@/components/examples/command/demo"
import { ContextMenuDemo } from "@/components/examples/context-menu/demo"
import { DatePickerDemo } from "@/components/examples/date-picker/demo"
import { DialogDemo } from "@/components/examples/dialog/demo"
import { DropdownMenuDemo } from "@/components/examples/dropdown-menu/demo"
import { HoverCardDemo } from "@/components/examples/hover-card/demo"
import { MenubarDemo } from "@/components/examples/menubar/demo"
import { NavigationMenuDemo } from "@/components/examples/navigation-menu/demo"
import { PopoverDemo } from "@/components/examples/popover/demo"
import { ProgressDemo } from "@/components/examples/progress/demo"
import { RadioGroupDemo } from "@/components/examples/radio-group/demo"
import { ScrollAreaDemo } from "@/components/examples/scroll-area/demo"
import { SelectDemo } from "@/components/examples/select/demo"
import { SeparatorDemo } from "@/components/examples/separator/demo"
import { SheetDemo } from "@/components/examples/sheet/demo"
import { SkeletonDemo } from "@/components/examples/skeleton/demo"
import { SliderDemo } from "@/components/examples/slider/demo"
import { SwitchDemo } from "@/components/examples/switch/demo"
import { TabsDemo } from "@/components/examples/tabs/demo"
import { ToastDemo } from "@/components/examples/toast/demo"
import { ToggleDemo } from "@/components/examples/toggle/demo"
import { ToggleDisabled } from "@/components/examples/toggle/disabled"
import { ToggleOutline } from "@/components/examples/toggle/outline"
import { ToggleWithText } from "@/components/examples/toggle/with-text"
import { TooltipDemo } from "@/components/examples/tooltip/demo"

import SinkCardList from "./components/sink-card-list"

const components: ComponentCardProps[] = [
  {
    title: "Card",
    description: "A simple card component",
    href: "card",
    children: <CardDemo className="w-[80%]" isSinkDemo />,
  },
  {
    title: "Slider",
    description: "A slider component",
    href: "slider",
    className: "mix-blend-multiply dark:mix-blend-screen",
    children: <SliderDemo className="w-[80%]" />,
  },
  {
    title: "Checkbox",
    description: "A checkbox component",
    href: "checkbox",
    children: <CheckboxDemo />,
  },
  {
    title: "Hover Card",
    description: "An hover card component",
    href: "hover-card",
    children: <HoverCardDemo />,
  },
  {
    title: "Tabs",
    description: "A tabs component",
    href: "tabs",
    className: "[&>div]:w-[80%]",
    children: <TabsDemo isSinkDemo />,
  },
  {
    title: "Menubar",
    description: "A menubar component",
    href: "menubar",
    children: <MenubarDemo />,
  },
  {
    title: "Avatar",
    description: "An avatar component",
    href: "avatar",
    children: (
      <div className="scale-[2]">
        <AvatarDemo />
      </div>
    ),
  },
  {
    title: "Button",
    description: "Some button components",
    href: "button",
    className: "flex-col gap-4 py-14 mix-blend-multiply dark:mix-blend-screen",
    children: (
      <>
        <div className="flex mb-2 space-x-2">
          <ButtonDemo />
          <ButtonOutline />
          <ButtonLink />
        </div>
        <div className="flex space-x-2">
          <ButtonWithIcon />
          <ButtonLoading />
        </div>
      </>
    ),
  },
  {
    title: "Date Picker",
    description: "A date picker component",
    href: "date-picker",
    children: <DatePickerDemo />,
  },
  {
    title: "Accordion",
    description: "An accordion component",
    href: "accordion",
    className: "mx-auto w-[80%] py-10",
    children: <AccordionDemo />,
  },
  {
    title: "Navigation Menu",
    description: "A navigation menu component",
    href: "navigation-menu",
    className: "[&_ul>li:last-child]:hidden",
    children: <NavigationMenuDemo />,
  },
  {
    title: "Switch",
    description: "A switch component",
    href: "switch",
    children: <SwitchDemo />,
  },
  {
    title: "Select",
    description: "A select component",
    href: "select",
    children: <SelectDemo />,
  },
  {
    title: "Separator",
    description: "A separator component",
    href: "separator",
    children: <SeparatorDemo />,
  },
  {
    title: "Aspect Ratio",
    description: "An aspect ratio component",
    href: "aspect-ratio",
    className: "w-[80%] mx-auto",
    children: <AspectRatioDemo />,
  },
  {
    title: "Popover",
    description: "A popover component",
    href: "popover",
    children: (
      <div className="scale-150">
        <PopoverDemo />
      </div>
    ),
  },
  {
    title: "Toast",
    description: "A toast component",
    href: "toast",
    children: <ToastDemo />,
  },
  {
    title: "Tooltip",
    description: "A tooltip component",
    href: "tooltip",
    children: (
      <div className="scale-150">
        <TooltipDemo />
      </div>
    ),
  },
  {
    title: "Sheet",
    description: "A sheet component",
    href: "sheet",
    children: <SheetDemo />,
  },
  {
    title: "Progress",
    description: "A progress component",
    href: "progress",
    className: "mix-blend-multiply dark:mix-blend-screen",
    children: <ProgressDemo />,
  },
  {
    title: "Command",
    description: "A command component",
    href: "command",
    className: "w-[80%] mx-auto",
    children: <CommandDemo isSinkDemo />,
  },
  {
    title: "Radio",
    description: "A radio component",
    href: "radio",
    className: "[&>span]:h-[80px] [&>span]:w-[200px]",
    children: <RadioGroupDemo />,
  },
  {
    title: "Context Menu",
    description: "A context menu component",
    href: "context-menu",
    className: "[&>span]:h-[80px] [&>span]:w-[200px]",
    children: <ContextMenuDemo />,
  },
  {
    title: "Dropdown",
    description: "A dropdown component",
    href: "dropdown",
    children: <DropdownMenuDemo />,
  },
  {
    title: "Alert Dialog",
    description: "An alert dialog component",
    href: "alert-dialog",
    children: <AlertDialogDemo />,
  },
  {
    title: "Dialog",
    description: "A dialog component",
    href: "dialog",
    children: <DialogDemo />,
  },
  {
    title: "Badge",
    description: "A badge component",
    href: "badge",
    children: (
      <>
        <BadgeDemo />
        <BadgeSecondary />
        <BadgeDestructive />
        <BadgeOutline />
      </>
    ),
  },
  {
    title: "Skeleton",
    description: "A skeleton component",
    href: "skeleton",
    className: "w-[80%] mx-auto mix-blend-multiply dark:mix-blend-screen",
    children: <SkeletonDemo />,
  },
  {
    title: "Collapsible",
    description: "A collapsible component",
    href: "collapsible",
    className: "[&>div]:w-[80%]",
    children: <CollapsibleDemo />,
  },
  {
    title: "Toggle",
    description: "A toggle component",
    href: "toggle",
    children: (
      <div className="flex space-x-2">
        <ToggleDemo />
        <ToggleOutline />
        <ToggleDisabled />
        <ToggleWithText />
      </div>
    ),
  },
  {
    title: "Scroll Area",
    description: "A scroll area component",
    href: "scroll-area",
    children: <ScrollAreaDemo isSinkDemo />,
  },
]

export default function KitchenSinkPage() {
  return (
    <div className="container">
      <SinkCardList components={components} />
    </div>
  )
}

export interface ComponentCardProps {
  title: string
  description: string
  children: React.ReactNode
  href?: string
  className?: string
}
