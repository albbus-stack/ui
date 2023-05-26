"use client"

import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

import { ComponentCardProps } from "../page"

interface SinkCardListProps {
  components: ComponentCardProps[]
}

const SinkCardList: React.FC<SinkCardListProps> = ({ components }) => {
  const [query, setQuery] = React.useState("")

  const filteredComponents = components.filter(
    (component) =>
      component.title.toLowerCase().includes(query.toLowerCase()) ||
      component.description.toLowerCase().includes(query.toLowerCase())
  )
  return (
    <div className="flex flex-col gap-5 py-10">
      <Input
        type="text"
        placeholder="Filter components..."
        className="w-full px-4 py-2 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
        {filteredComponents.map((component, index) => (
          <ComponentCard
            key={index}
            title={component.title}
            description={component.description}
            href={component.href}
            className={component.className}
          >
            {component.children}
          </ComponentCard>
        ))}
      </div>
    </div>
  )
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
          "min-h-[200px] flex py-10 mt-auto justify-center items-center",
          className
        )}
      >
        {children}
      </section>
      <Link
        href={href ? "/docs/components/" + href : "#"}
        className="w-full p-5 mt-auto transition-opacity bg-white rounded-lg rounded-t-none dark:bg-accent dark:hover:opacity-80 hover:opacity-70"
      >
        <h3 className="mb-3 text-xl font-bold leading-none">{title}</h3>
        <p className="text-sm text-foreground opacity-60">{description}</p>
      </Link>
    </div>
  )
}

export default SinkCardList
