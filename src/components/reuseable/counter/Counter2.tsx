import CountUp from "components/reuseable/CountUp";

// ===================================================
type Counter2Props = { amount: number; title: string };
// ===================================================

export default function Counter2({ amount, title }: Counter2Props) {
  return (
    <div className="col-6 col-lg-3">
      <h3 className="counter counter-lg text-white">
        <CountUp end={amount} />
      </h3>
      <p>{title}</p>
    </div>
  );
}
