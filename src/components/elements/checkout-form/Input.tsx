import { DetailedHTMLProps, InputHTMLAttributes } from "react";

// ============================================================
interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  label: string;
  errorMsg?: string;
}
// ============================================================

export default function Input({ label, errorMsg, id, ...props }: InputProps) {
  return (
    <div className="form-floating">
      <input required id={id} className="form-control" {...props} />

      <label htmlFor={id} className="form-label">
        {label}
      </label>

      {errorMsg && (
        <div className="invalid-feedback">{errorMsg || "Valid first name is required."}</div>
      )}
    </div>
  );
}
