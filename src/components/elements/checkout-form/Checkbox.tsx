import { DetailedHTMLProps, InputHTMLAttributes } from "react";

// ============================================================
interface CheckboxProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  label: string;
}
// ============================================================

export default function Checkbox({ id, label, ...props }: CheckboxProps) {
  return (
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id={id} {...props} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
