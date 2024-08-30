import { DetailedHTMLProps, SelectHTMLAttributes } from "react";
// ============================================================
interface SelectProps
  extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  id: string;
  label: string;
  errorMsg?: string;
  options: { title: string; value: string }[];
}
// ============================================================

export default function Select({ id, label, options, errorMsg }: SelectProps) {
  return (
    <div className="form-select-wrapper">
      <select className="form-select" id={id}>
        <option className="text-muted" value="" disabled>
          {label}
        </option>

        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>

      {errorMsg && <div className="invalid-feedback">{errorMsg}</div>}
    </div>
  );
}
