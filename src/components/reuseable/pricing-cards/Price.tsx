// ======================================
interface PriceProps {
  value: number;
  classes?: string;
  duration: string;
  currency?: string;
}
// ======================================

export default function Price(props: PriceProps) {
  const { value, duration, classes, currency = "$" } = props;

  return (
    <div className={`price justify-content-start ${classes}`}>
      <span className="price-currency">{currency}</span>
      <span className="price-value">{value}</span>
      <span className="price-duration">{duration}</span>
    </div>
  );
}
