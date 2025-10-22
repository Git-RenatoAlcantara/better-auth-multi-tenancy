import prisma from '@/db';
import { getActiveOrganization } from '@/server/organizations';
import {
    betterAuth
} from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { organization } from "better-auth/plugins"
import { admin, member, owner, ac } from './auth/permissions';


export const auth = betterAuth({
    appName: "better_auth_nextjs",
    database: prismaAdapter(prisma, {
        provider: "sqlite",
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: true,
        minPasswordLength: 8,
        maxPasswordLength: 20,
    },
    databaseHooks: {
    session: {
      create: {
        before: async (session) => {
          const organization = await getActiveOrganization(session.userId);
          return {
            data: {
              ...session,
              activeOrganizationId: organization?.id,
            },
          };
        },
      },
    },
  },
    plugins: [
        organization({
          ac,
          roles: {
            owner,
            admin,
            member
          }
        })
    ],
});