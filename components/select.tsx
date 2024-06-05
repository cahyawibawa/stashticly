"use client"

import { useMemo } from "react"
import { type SingleValue } from "react-select"
import CreateteableSelect from "react-select/creatable"


type Props = {
  onChange: (value?: string) => void;
  onCreate?: (value: string) => void;
  options?: {label: string, value: string}[]
  value?: string | null | undefined
  disabled?: boolean
  placeholder?: string
}

export const Select = ({
  onChange,
  onCreate,
  options = [],
  value,
  disabled,
  placeholder
}: Props) => {
  const onSelect = (
    option: SingleValue<{
      label: string,
      value: string}>

  ) => {
    onChange(option?.value)
  }

  const formattedValue = useMemo(() => {
    return options.find((option) => option.value === value)
  }, [options, value])

  return (
    <CreateteableSelect
    placeholder={placeholder}
    styles={{
      control: (base) => ({
        ...base,
        borderColor: "#E2E8F0",
        ":hover": {
          borderColor: "#E2E8F0",
        }
      })
    }}
    value={formattedValue}
    options={options}
    onChange={onSelect}
    onCreateOption={onCreate}
    isDisabled={disabled}
    />
  )
}