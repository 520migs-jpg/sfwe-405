"use client" // This allows the alert function to work

import { Button } from "@/components/ui/button"

export default function Page() {
  
  // This is the React version of your HTML function
  const showAlert = () => {
    alert("This site is running on Vercel via GitHub!");
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Hello from Vercel!</h1>
      <p className="mb-6 text-muted-foreground">
        Your Next.js project is live.
      </p>
      
      {/* Using the pre-installed Button component */}
      <Button onClick={showAlert} size="lg">
        Click Me
      </Button>
    </div>
  )
}