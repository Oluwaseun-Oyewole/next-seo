// "use client";
import { SubmitButton } from "../../button";

export function SignupForm() {
  //   const [state, action] = useFormState(signup, undefined);
  return (
    <form
      action={""}
      className="flex items-center justify-center flex-col h-[50vh]"
    >
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" />
        {/* {state?.errors?.name && <p>{state.errors.name}</p>} */}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
        {/* {state?.errors?.email && <p>{state.errors.email}</p>} */}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
        {/* {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
      <SubmitButton />
    </form>
  );
}
