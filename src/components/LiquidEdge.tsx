export const LiquidEdge = ({ className = '' }: { className?: string }) => (
  <span
    aria-hidden="true"
    className={`liquid-edge liquid-edge--flat pointer-events-none absolute z-[40] ${className}`}
  />
);

export default LiquidEdge;
