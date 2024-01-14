import * as React from "react";

export default function Checkbox({
  label,
  onChange,
  checked,
}: {
  label: string;
  onChange: (e: { target: { id: string } }) => void;
  checked: boolean;
}) {
  return (
    <div className='checkbox'>
      <input
        type='checkbox'
        id={label}
        onChange={(e) => onChange(e)}
        checked={checked}
      />
      <label htmlFor={label} className='font-bold'>
        {label}
      </label>
    </div>
  );
}
