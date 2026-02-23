import { SpecRow } from "../Atoms";

export const SpecsGrid = ({ specs }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
    {specs.map((spec, index) => (
      <SpecRow key={index} label={spec.label} value={spec.value} />
    ))}
  </div>
);