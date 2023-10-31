import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
// This line imports the twMerge function from the "tailwind-merge" library. 
//twMerge is used to merge multiple class names together using Tailwind CSS syntax.
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
