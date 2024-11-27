export default function FlowerPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute left-0 top-0 w-[400px] h-full">
        <svg viewBox="0 0 400 800" className="w-full h-full opacity-20">
          <defs>
            <pattern id="flowerPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <g transform="translate(100, 100)">
                {/* Main flower */}
                <path
                  d="M0,-50 C30,-30 50,0 30,30 C0,50 -30,30 -50,0 C-30,-30 0,-50 0,-50 Z"
                  fill="#E88D7C"
                  transform="rotate(0)"
                />
                <path
                  d="M0,-50 C30,-30 50,0 30,30 C0,50 -30,30 -50,0 C-30,-30 0,-50 0,-50 Z"
                  fill="#E88D7C"
                  transform="rotate(72)"
                />
                <path
                  d="M0,-50 C30,-30 50,0 30,30 C0,50 -30,30 -50,0 C-30,-30 0,-50 0,-50 Z"
                  fill="#E88D7C"
                  transform="rotate(144)"
                />
                <path
                  d="M0,-50 C30,-30 50,0 30,30 C0,50 -30,30 -50,0 C-30,-30 0,-50 0,-50 Z"
                  fill="#E88D7C"
                  transform="rotate(216)"
                />
                <path
                  d="M0,-50 C30,-30 50,0 30,30 C0,50 -30,30 -50,0 C-30,-30 0,-50 0,-50 Z"
                  fill="#E88D7C"
                  transform="rotate(288)"
                />
                {/* Center circle */}
                <circle r="15" fill="#E88D7C" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#flowerPattern)" />
        </svg>
      </div>
      <div className="absolute right-0 top-0 w-[400px] h-full">
        <svg viewBox="0 0 400 800" className="w-full h-full opacity-20">
          <rect width="100%" height="100%" fill="url(#flowerPattern)" />
        </svg>
      </div>
    </div>
  );
}