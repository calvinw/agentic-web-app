import { useState } from 'react'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">shadcn + Vite + React</h1>
      <p className="text-2xl">Count: {count}</p>
      <div className="flex gap-2">
        <Button onClick={() => setCount(c => c - 1)}>Decrement</Button>
        <Button onClick={() => setCount(c => c + 1)}>Increment</Button>
      </div>
    </div>
  )
}

export default App
