import { Icons } from '@/components/icons'
import { ClerkLoaded, ClerkLoading, SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="mt-8 flex items-center justify-center">
      <ClerkLoaded>
        <SignUp path="/sign-up" />
      </ClerkLoaded>
      <ClerkLoading>
        <Icons.loader className="animate-spin to-muted-foreground" />
      </ClerkLoading>
    </div>
  )
}
