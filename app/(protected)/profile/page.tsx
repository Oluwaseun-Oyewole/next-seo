import { deleteSession } from "@/lib/cookies";
import { decrypt } from "@/lib/sessions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  "use server";
  deleteSession();
  redirect("/login");
}

const Profile = async () => {
  const token = cookies().get("session")?.value;
  const isTokenStillValid = await decrypt(token);
  console.log("token from cookies", isTokenStillValid);

  if (!isTokenStillValid) {
    return (
      <h1 className="flex items-center justify-center h-[60vh] text-center">
        Your token has expired
      </h1>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="h-screen flex items-center justify-center flex-col">
        <h1>Profile</h1>
        <form action={logout}>
          <button className="bg-red-500 py-3 w-[400px] text-white">
            Logout
          </button>
        </form>
      </div>
      <p
        id="Profile"
        className="h-screen w-full flex items-center justify-center bg-red-500"
      >
        Profile
      </p>
    </div>
  );
};

export default Profile;
