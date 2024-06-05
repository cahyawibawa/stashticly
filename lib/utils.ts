import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertAmountFromMiliUnits(amount: number) {
  return amount / 1000
}

export function convertAmountToMiliUnits(amount: number) {
  return Math.round(amount * 1000)
}

//TODO change currency to Rupiah

export function formatCurrency(value: number){
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(value)
}