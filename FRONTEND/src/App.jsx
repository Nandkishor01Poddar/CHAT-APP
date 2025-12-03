import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {

  return (
    <>
      <h1>Welcome to web pages</h1>

      <SignedOut>
        <SignInButton mode='model'>
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </>
  )
}

export default App