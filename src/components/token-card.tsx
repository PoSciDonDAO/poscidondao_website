interface TokenCardProps {
  name: string
  description: string
  features: string[]
  isPrimary: boolean
}

export function TokenCard({ name, description, features, isPrimary }: TokenCardProps) {
  return (
    <div
      className={`rounded-xl p-6 h-full flex flex-col ${isPrimary ? "bg-gradient-to-br from-white/20 to-white/5" : "bg-white/10"}`}
    >
      <div className="mb-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${isPrimary ? "bg-white/30" : "bg-white/20"}`}
        >
          {isPrimary ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m8 14 2.5-2.5 2.5 2.5 4-4"></path>
              <path d="M14 10v4h-4"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M7 7h.01"></path>
              <path d="M17 7h.01"></path>
              <path d="M7 17h.01"></path>
              <path d="M17 17h.01"></path>
            </svg>
          )}
        </div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      </div>

      <p className="text-white/70 mb-6">{description}</p>

      <div className="mt-auto">
        <h4 className="font-medium text-white mb-2">Features:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/70 mr-2 mt-1"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-white/70">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
