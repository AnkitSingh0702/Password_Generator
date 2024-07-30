import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="">
        <input
        type={type}
        className={cn(
          "flex  h-9 w-[17rem] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "read-only:border-transparent read-only:bg-[#f5f5f5] text-black",
          className
        )}
        ref={ref}
        {...props}
      />
      </div>
      
    )
  }
)
Input.displayName = "Input"

export { Input }