// ==================================================================

interface Option {
  id: number | string;
  title: string;
  value: string;
}

type SelectProps = { options: Option[] };
// ==================================================================

export default function Select({ options }: SelectProps) {
  return (
    <div className="form-select-wrapper">
      <select className="form-select">
        {options.map(({ value, id, title }) => (
          <option value={value} key={id}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
}
