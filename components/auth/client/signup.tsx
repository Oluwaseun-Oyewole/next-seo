import { clientLogin } from "@/app/actions/client.actions";

const ClientSignUpForm = () => {
  //   const [value, setValues] = useState({
  //     name: "",
  //     password: "",
  //   });

  //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setValues((val) => {
  //       const { name, value } = e.target;
  //       return { ...val, [name]: value };
  //     });
  //   };

  //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     const data = new FormData(e.currentTarget);
  //     const name = data.get("name")!;
  //     await clientLogin(name);
  //   };

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");
    const test = name && (await clientLogin({ name }));
    console.log("log testing", test);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <form action={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            // value={value.name}
            // onChange={handleChange}
            required
            className="bg-gray-50 w-[400px] py-5 px-5 m-5"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="password"
            name="password"
            // value={value.password}
            // onChange={handleChange}
            required
            className="bg-gray-50 w-[400px] py-5 px-5 ml-5"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-[400px] ml-16 text-white m-5 p-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClientSignUpForm;
