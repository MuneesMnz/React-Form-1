import { useState } from "react";
import "./App.css";
import FormInput from "./Components/FormInput";

function App() {
  const [value, setValue] = useState({
    uname: "",
    email: "",
    fname: "",
    bday: "",
    pass:"",
    cpass:""
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    // const data=new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()));
  };
  return (
    <div className="App flex h-screen justify-center items-center" >
      <form
        className=" w-[450px] px-16 py-5 bg-white  rounded-xl shadow"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-purple-800 text-2xl text-center font-bold ">Register Form</h1>
        <FormInput
          placeholder="Enter User Name"
          name="uname"
          value={value.uname}
          handleChange={handleChange}
          type="text"
          label="User Name"
          errorMessage="UserName Should Be 3-20 Characters and Shouldn't Include Any Special Characters !"
          required={true}
          pattern="^[A-Za-z0-9]{3,16}$"
        />
        <FormInput
          placeholder="Enter Email"
          name="email"
          value={value.email}
          handleChange={handleChange}
          type="email"
          label="Email"
          errorMessage="Email Should Be Valid Email Address !"
          required={true}
        />
        <FormInput
          placeholder="Enter Full Name"
          name="fname"
          value={value.fname}
          handleChange={handleChange}
          type="text"
          label="Full Name"
          errorMessage="Require Name !"
          required={true}
        />
        <FormInput
          placeholder="Enter ..."
          name="bday"
          value={value.bday}
          handleChange={handleChange}
          type="date"
          label="Birthday"
          errorMessage="Require Birthday !"
        />
         <FormInput
          placeholder="Enter ..."
          name="pass"
          value={value.pass}
          handleChange={handleChange}
          type="password"
          label="Password"
          errorMessage="Password Must Be 8-15 Characters And Include at least 1 letter , 1 number and 1 special Characters!"
          pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$"
          required={true}
        />
         <FormInput
          placeholder="Enter ..."
          name="cpass"
          value={value.cpass}
          handleChange={handleChange}
          type="password"
          label="Conform Password"
          errorMessage="Password Didn't Match !"
          pattern={value.pass}
          required={true}
        />
        <button className="w-full py-2 bg-slate-900 text-white text-xl rounded" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
