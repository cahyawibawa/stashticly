import { Icons } from '@/components/icons'
import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="mt-8 flex items-center justify-center">
      <ClerkLoaded>
        <SignIn path="/sign-in" />
      </ClerkLoaded>
      <ClerkLoading>
        <Icons.loader className="animate-spin to-muted-foreground" />
      </ClerkLoading>
    </div>
  )
}
