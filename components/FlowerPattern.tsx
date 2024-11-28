export default function FlowerPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute left-0 top-0 w-[400px] h-full">
        <img src="/left.png" alt="Flower Pattern" className="w-full h-full opacity-100" />
      </div>
      <div className="absolute right-0 top-0 w-[400px] h-full">
        <img src="/right.png" alt="Flower Pattern" className="w-full h-full opacity-100" />
      </div>
    </div>
  );
}