import { redis } from '../redis/client'

interface accessInviteLinkParams {
  subscriberId: string
}

export async function getSubscriberInviteClicks({
  subscriberId,
}: accessInviteLinkParams) {
  const count = await redis.hget('referral:access-count', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
