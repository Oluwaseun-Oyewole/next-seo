export interface User {
  username: string;
  password: string;
  token: string;
  role: "Admin" | "Team";
}

function canSeeUsername(viewer: User) {
  return true;
}

function canSeePhoneNumber(viewer: User) {
  return viewer.role === "Admin" || viewer.role === "Team";
}

// export async function getProfileDTO() {

//   const currentUser = await getUser(user.id);

//   // Or return only what's specific to the query here
//   return {
//     username: canSeeUsername(currentUser) ? user.username : null,
//     phonenumber: canSeePhoneNumber(currentUser, user.team)
//       ? user.phonenumber
//       : null,
//   };
// }
