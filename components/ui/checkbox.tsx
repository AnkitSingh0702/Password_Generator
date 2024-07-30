import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Label } from "./label"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-5 w-5 inline-flex items-center justify-center shrink-0 rounded-sm border-2 border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <CheckIcon className="h-5 w-5 stroke-current stroke-[0.5px]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

interface CheckBoxCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  id: string
  defaultChecked?: boolean
  onCheckedChange: (checked: boolean) => void
}

const CheckBoxCard = (({ label,className, id, defaultChecked, onCheckedChange, ...props }: CheckBoxCardProps) => (
  <div
    className={cn("flex items-center justify-between gap-4 px-4 py-2", className)}
    {...props}
  >
    <Label className="cursor-pointer" htmlFor={id}>{label}</Label>
    <Checkbox id={id} onCheckedChange={onCheckedChange} defaultChecked={defaultChecked}>{label}</Checkbox>
  </div>
))

export { Checkbox, CheckBoxCard }