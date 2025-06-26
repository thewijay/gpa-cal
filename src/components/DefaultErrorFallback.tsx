interface DefaultErrorFallbackProps {
  error?: Error
  retry: () => void
}

export function DefaultErrorFallback({
  error,
  retry,
}: DefaultErrorFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-500">
          Something went wrong
        </h2>
        <p className="text-muted-foreground mb-6">
          {error?.message || 'An unexpected error occurred'}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={retry}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Try Again
          </button>
          <button
            onClick={() => {
              localStorage.clear()
              window.location.reload()
            }}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Reset App
          </button>
        </div>
      </div>
    </div>
  )
}
