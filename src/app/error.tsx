"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="text-muted mb-4">{error.message}</p>
        <button onClick={reset} className="bg-primary text-white px-6 py-2 rounded-full">Try again</button>
      </div>
    </div>
  );
}
