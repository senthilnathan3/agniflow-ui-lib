// import NextLink from 'next/link'
// import { Box, Center, Divider, HStack, Stack } from 'styled-system/jsx'
// import { EmailSignInForm } from '~/components/auth/email-signin-form'
// import { GitHubSignInButton } from '~/components/auth/github-signin-button'
// import { GoogleSignInButton } from '~/components/auth/google-signin-button'
// import { Logo } from '~/components/logo'
// import { Card } from '~/components/ui/card'
// import { Text } from '~/components/ui/text'

// interface Props {
//   redirectTo: string
// }

// export const AuthenticationCard = (props: Props) => {
//   const { redirectTo } = props
//   return (
//     <Card.Root>
//       <Card.Header>
//         <Stack gap="6">
//           <Center>
//             <NextLink href="/" aria-label="Back home">
//               <Logo />
//             </NextLink>
//           </Center>
//           <Box>
//             <Card.Title>Sign In</Card.Title>
//             <Card.Description>
//               Use your email address or social account to sign in.
//             </Card.Description>
//           </Box>
//         </Stack>
//       </Card.Header>
//       <Card.Body>
//         <Stack gap="6">
//           <EmailSignInForm redirectTo={redirectTo} />
//           <HStack>
//             <Divider />
//             <Text textStyle="sm" color="fg.muted">
//               OR
//             </Text>
//             <Divider />
//           </HStack>
//           <Stack gap="3">
//             <GoogleSignInButton redirectTo={redirectTo} />
//             <GitHubSignInButton redirectTo={redirectTo} />
//           </Stack>
//         </Stack>
//       </Card.Body>
//     </Card.Root>
//   )
// }
