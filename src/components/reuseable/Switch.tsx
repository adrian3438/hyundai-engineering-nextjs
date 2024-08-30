import { SetStateAction } from "react";

// ==================================================
interface SwitchProps {
  value: boolean;
  onChange: (value: SetStateAction<boolean>) => void;
}
// ==================================================

export default function Switch({ value, onChange }: SwitchProps) {
  return (
    <div className="form-check form-switch">
      <input
        role="switch"
        type="checkbox"
        checked={value}
        className="form-check-input"
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  );
}
