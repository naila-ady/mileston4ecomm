export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-06'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
"skN7RRHaAy1dQ0T3iEJmOgesHK5kXBdi3UpS3Qy46c07V2yAp4dumTn3MIRQko0O888R22lqjnweSBVTS80T4TB17FMSIPUrSPN0xzXxssSa7Qg8S6wXVtGaA35JyF1A69vaM4KDxSokJ30aO6c9qSicL7VC4j7SZdJOb90jZn7TcKc2PVaA",
  'Missing environment variable: NEXT_PUBLIC_SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
