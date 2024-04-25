import { getSession } from "@auth0/nextjs-auth0";

const ProfilePage = async () => {
  const session = await getSession();

  return (
    <div className="p-4 text-sm">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Profile</h1>
      </div>

      <div className="my-4 p-6 text-xs rounded-lg border border-dashed border-slate-300 bg-yellow-50 dark:bg-slate-800">
        <pre>{JSON.stringify(session?.user, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ProfilePage;
