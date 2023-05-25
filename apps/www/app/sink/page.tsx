import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { AccordionDemo } from "@/components/examples/accordion/demo"
import { AlertDialogDemo } from "@/components/examples/alert-dialog/demo"
import { AspectRatioDemo } from "@/components/examples/aspect-ratio/demo"
import { AvatarDemo } from "@/components/examples/avatar/demo"
import { BadgeDemo } from "@/components/examples/badge/demo"
import { BadgeDestructive } from "@/components/examples/badge/destructive"
import { BadgeOutline } from "@/components/examples/badge/outline"
import { BadgeSecondary } from "@/components/examples/badge/secondary"
import { ButtonDemo } from "@/components/examples/button/demo"
import { ButtonDestructive } from "@/components/examples/button/destructive"
import { ButtonGhost } from "@/components/examples/button/ghost"
import { ButtonLink } from "@/components/examples/button/link"
import { ButtonLoading } from "@/components/examples/button/loading"
import { ButtonOutline } from "@/components/examples/button/outline"
import { ButtonSecondary } from "@/components/examples/button/secondary"
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

export default function KitchenSinkPage() {
  return (
    <div className="container">
      <div className="grid gap-4 py-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
          <ComponentCard title="Card" description="A simple card component">
            <CardDemo className="w-[80%]" />
          </ComponentCard>
          <ComponentCard
            title="Slider"
            description="A slider component"
            className="mix-blend-multiply dark:mix-blend-screen"
          >
            <SliderDemo className="w-[80%]" />
          </ComponentCard>
          <ComponentCard title="Checkbox" description="A checkbox component">
            <CheckboxDemo />
          </ComponentCard>
          <ComponentCard
            title="Hover Card"
            description="An hover card component"
          >
            <HoverCardDemo />
          </ComponentCard>
          <ComponentCard
            title="Tabs"
            description="A tabs component"
            className="[&>div]:w-[80%]"
          >
            <TabsDemo />
          </ComponentCard>
          <ComponentCard title="Menubar" description="A menubar component">
            <MenubarDemo />
          </ComponentCard>
          <ComponentCard title="Avatar" description="An avatar component">
            <AvatarDemo />
          </ComponentCard>
          <ComponentCard
            title="Button"
            description="Some button components"
            className="flex-col gap-4 py-10 mix-blend-multiply dark:mix-blend-screen"
          >
            <div className="flex space-x-2">
              <ButtonDemo />
              <ButtonSecondary />
              <ButtonDestructive />
            </div>
            <div className="flex space-x-2">
              <ButtonOutline />
              <ButtonLink />
              <ButtonGhost />
            </div>
            <div className="flex space-x-2">
              <ButtonWithIcon />
              <ButtonLoading />
            </div>
          </ComponentCard>

          <ComponentCard
            title="Date Picker"
            description="A date picker component"
          >
            <DatePickerDemo />
          </ComponentCard>

          <ComponentCard
            title="Accordion"
            description="An accordion component"
            className="mx-auto w-[80%] py-10"
          >
            <AccordionDemo />
          </ComponentCard>

          <ComponentCard
            title="Navigation Menu"
            description="A navigation menu component"
            className="[&_ul>li:last-child]:hidden"
          >
            <NavigationMenuDemo />
          </ComponentCard>

          <ComponentCard title="Switch" description="A switch component">
            <SwitchDemo />
          </ComponentCard>
          <ComponentCard title="Select" description="A select component">
            <SelectDemo />
          </ComponentCard>
          <ComponentCard title="Separator" description="A separator component">
            <SeparatorDemo />
          </ComponentCard>
          <ComponentCard
            title="Aspect Ratio"
            description="An aspect ratio component"
            className="w-[80%] mx-auto"
          >
            <AspectRatioDemo />
          </ComponentCard>
          <ComponentCard title="Popover" description="A popover component">
            <PopoverDemo />
          </ComponentCard>
          <ComponentCard title="Toast" description="A toast component">
            <ToastDemo />
          </ComponentCard>
          <ComponentCard title="Tooltip" description="A tooltip component">
            <TooltipDemo />
          </ComponentCard>
          <ComponentCard title="Sheet" description="A sheet component">
            <SheetDemo />
          </ComponentCard>
          <ComponentCard
            title="Progress"
            description="A progress component"
            className="mix-blend-multiply dark:mix-blend-screen"
          >
            <ProgressDemo />
          </ComponentCard>
          <ComponentCard
            title="Command"
            description="A command component"
            className="w-[80%] mx-auto"
          >
            <CommandDemo />
          </ComponentCard>
          <ComponentCard
            title="Radio"
            description="A radio component"
            className="[&>span]:h-[80px] [&>span]:w-[200px]"
          >
            <RadioGroupDemo />
          </ComponentCard>
          <ComponentCard
            title="Context Menu"
            description="A context menu component"
            className="[&>span]:h-[80px] [&>span]:w-[200px]"
          >
            <ContextMenuDemo />
          </ComponentCard>
          <ComponentCard title="Dropdown" description="A dropdown component">
            <DropdownMenuDemo />
          </ComponentCard>
          <ComponentCard
            title="Alert Dialog"
            description="An alert dialog component"
          >
            <AlertDialogDemo />
          </ComponentCard>
          <ComponentCard title="Dialog" description="A dialog component">
            <DialogDemo />
          </ComponentCard>
          <ComponentCard title="Badge" description="A badge component">
            <BadgeDemo />
            <BadgeSecondary />
            <BadgeDestructive />
            <BadgeOutline />
          </ComponentCard>

          <ComponentCard
            title="Skeleton"
            description="A skeleton component"
            className="w-[80%] mx-auto mix-blend-multiply dark:mix-blend-screen"
          >
            <SkeletonDemo />
          </ComponentCard>

          <ComponentCard
            title="Collapsible"
            description="A collapsible component"
            className="[&>div]:w-[80%]"
          >
            <CollapsibleDemo />
          </ComponentCard>

          <ComponentCard title="Toggle" description="A toggle component">
            <div className="flex space-x-2">
              <ToggleDemo />
              <ToggleOutline />
              <ToggleDisabled />
              <ToggleWithText />
            </div>
          </ComponentCard>

          <ComponentCard
            title="Scroll Area"
            description="A scroll area component"
          >
            <ScrollAreaDemo />
          </ComponentCard>
        </div>
      </div>
    </div>
  )
}

interface ComponentCardProps {
  title: string
  description: string
  children: React.ReactNode
  href?: string
  className?: string
}

function ComponentCard({
  title,
  description,
  children,
  className,
  href,
}: ComponentCardProps) {
  return (
    <div className="flex flex-col transition-transform border rounded-lg bg-secondary text-secondary-foreground">
      <section
        className={cn(
          "min-h-[150px] flex py-10 mt-auto justify-center items-center",
          className
        )}
      >
        {children}
      </section>
      <Link
        href={href ?? "#"}
        className="w-full p-5 mt-auto transition-opacity bg-white rounded-lg rounded-t-none dark:bg-accent hover:opacity-[.85]"
      >
        <h3 className="mb-3 text-xl font-bold leading-none">{title}</h3>
        <p className="text-sm text-foreground opacity-60">{description}</p>
      </Link>
    </div>
  )
}
