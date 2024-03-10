import { getServerSession } from "next-auth";
import UserProfileContent from "./user-profile-content";
import SessionProvider from "@/lib/session-provider";

export default async function UserProfile() {
  // const { data: session } = useSession();
  const session = await getServerSession();
  return (
    <SessionProvider session={session}>
      <UserProfileContent />;
    </SessionProvider>
  );
}
