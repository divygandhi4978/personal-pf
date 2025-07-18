const skills = [
  {
    name: "NumPy",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <defs>
          <linearGradient id="numpy-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4DABCF" />
            <stop offset="100%" stopColor="#2E5F8A" />
          </linearGradient>
        </defs>
        {/* Top face */}
        <path
          fill="#5CBAD8"
          d="M12 2L4 6.5L12 11L20 6.5L12 2Z"
        />
        {/* Left face */}
        <path
          fill="url(#numpy-blue)"
          d="M4 6.5V17.5L12 22V11L4 6.5Z"
        />
        {/* Right face */}
        <path
          fill="#2E5F8A"
          d="M12 11V22L20 17.5V6.5L12 11Z"
        />
        {/* N letter on front face */}
        <path
          fill="#FFFFFF"
          d="M7 9V19H9V14L13 19H15V9H13V14L9 9H7Z"
        />
      </svg>
    ),
  },
  {
    name: "Pandas",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect x="4" y="4" width="3" height="8" fill="#150458" rx="1" />
        <rect x="10" y="2" width="3" height="12" fill="#150458" rx="1" />
        <rect x="16" y="6" width="3" height="6" fill="#150458" rx="1" />
        <rect x="4" y="14" width="3" height="6" fill="#E70488" rx="1" />
        <rect x="10" y="16" width="3" height="6" fill="#E70488" rx="1" />
        <rect x="16" y="14" width="3" height="8" fill="#E70488" rx="1" />
      </svg>
    ),
  },
  {
    name: "Matplotlib",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" fill="#FFFFFF" stroke="#333333" strokeWidth="0.5" />
        {/* Grid lines */}
        <g stroke="#E0E0E0" strokeWidth="0.5">
          <circle cx="12" cy="12" r="3" fill="none" />
          <circle cx="12" cy="12" r="6" fill="none" />
          <circle cx="12" cy="12" r="9" fill="none" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="6.88" y1="6.88" x2="17.12" y2="17.12" />
          <line x1="17.12" y1="6.88" x2="6.88" y2="17.12" />
        </g>
        {/* Colored segments */}
        <path fill="#FF6B35" d="M12 12 L17.5 8.5 A6 6 0 0 0 15 5.5 Z" />
        <path fill="#F7931E" d="M12 12 L15 5.5 A6 6 0 0 0 9 5.5 Z" />
        <path fill="#FFD23F" d="M12 12 L9 5.5 A6 6 0 0 0 6.5 8.5 Z" />
        <path fill="#06D6A0" d="M12 12 L6.5 8.5 A6 6 0 0 0 5.5 15 Z" />
        <path fill="#118AB2" d="M12 12 L5.5 15 A6 6 0 0 0 8.5 17.5 Z" />
        <path fill="#073B4C" d="M12 12 L8.5 17.5 A6 6 0 0 0 17.5 8.5 Z" />
      </svg>
    ),
  },
];

export default skills;