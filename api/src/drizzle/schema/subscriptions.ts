import { timestamp } from 'drizzle-orm/pg-core'
import { text, uuid } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})
