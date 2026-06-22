"use client"

import React from "react"
import { cn } from "@/lib/utils"

type Size = "sm" | "default" | "lg" | "xl"
type Variant = "light" | "dark"

const sizeClasses: Record<Size, string> = {
  sm:      "h-8 px-4 text-xs gap-1.5",
  default: "h-9 px-5 text-sm gap-2",
  lg:      "h-10 px-7 text-sm gap-2",
  xl:      "h-12 px-8 text-sm gap-2",
}

interface LiquidButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: React.MouseEventHandler
  size?: Size
  variant?: Variant
  glassBg?: string
  className?: string
}

export function LiquidButton({
  children,
  href,
  onClick,
  size = "default",
  variant = "light",
  glassBg,
  className,
}: LiquidButtonProps) {
  const lightShadow = "0 0 6px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3px rgba(0,0,0,0.9), inset -3px -3px 0.5px -3px rgba(0,0,0,0.85), inset 1px 1px 1px -0.5px rgba(0,0,0,0.6), inset -1px -1px 1px -0.5px rgba(0,0,0,0.6), inset 0 0 6px 6px rgba(0,0,0,0.12), inset 0 0 2px 2px rgba(0,0,0,0.06), 0 0 12px rgba(255,255,255,0.15)"
  const darkShadow  = "0 0 8px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3.5px rgba(255,255,255,0.09), inset -3px -3px 0.5px -3.5px rgba(255,255,255,0.85), inset 1px 1px 1px -0.5px rgba(255,255,255,0.6), inset -1px -1px 1px -0.5px rgba(255,255,255,0.6), inset 0 0 6px 6px rgba(255,255,255,0.12), inset 0 0 2px 2px rgba(255,255,255,0.06), 0 0 12px rgba(0,0,0,0.15)"

  const sharedClassName = cn(
    "relative inline-flex items-center justify-center cursor-pointer rounded-full font-medium whitespace-nowrap",
    "transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]",
    variant === "dark" ? "text-white" : "text-[#1A1A1A]",
    sizeClasses[size],
    className
  )

  const inner = (
    <>
      <div
        className="absolute inset-0 rounded-full transition-all"
        style={{ boxShadow: variant === "dark" ? darkShadow : lightShadow, backgroundColor: glassBg }}
      />
      <div
        className="absolute inset-0 isolate rounded-full overflow-hidden"
        style={{ backdropFilter: 'url("#liquid-glass-filter")' } as React.CSSProperties}
      />
      <span className="relative z-10 pointer-events-none inline-flex items-center gap-1.5">
        {children}
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className={sharedClassName}>
        {inner}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={sharedClassName}>
      {inner}
    </button>
  )
}
