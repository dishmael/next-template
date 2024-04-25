import { Session, getSession } from "@auth0/nextjs-auth0";

export const useSession = async (): Promise<Session | null | undefined> => {
  return await getSession()
}

export const isAdmin = (session: Session, namespace: string): boolean => {
  return session.user[namespace].includes("Admin");
};