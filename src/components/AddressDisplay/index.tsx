type AddressDisplayProps = {
  address: string;
  className?: string;
}

export default function AddressDisplay({ address, className = '' }: AddressDisplayProps) {
  const truncateAddress = (addr: string): string => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-1.5 border border-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 9a3 3 0 11-6 0 3 3 0 016 0zm6 8a3 3 0 11-6 0 3 3 0 016 0zM9 17a3 3 0 11-6 0 3 3 0 016 0zM9 4.5v15M15 7.5v15"
          />
        </svg>
        <span className="font-mono text-sm text-gray-900">
          {truncateAddress(address)}
        </span>
      </div>
    </div>
  );
}
