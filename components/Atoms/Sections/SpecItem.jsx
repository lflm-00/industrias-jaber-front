export default function SpecItem({ label, value }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-[#e8e4e0] dark:border-[#3a2f24]">
      <span className="text-[#635548] dark:text-[#a8998a] font-medium">
        {label}
      </span>
      <span className="font-bold">{value}</span>
    </div>
  );
}