"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPasword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<boolean>(false);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const body = {
    username,
    password,
    email,
  };

  const emailError = async () => {
    if (email === "") {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }

    if (password === "") {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
    const jsonData = await fetch(
      "https://instagram-backend-1-lqdd.onrender.com/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await jsonData.json();

    const token = data.token;
    localStorage.setItem("accessToken", token);
  };
  // const passowordError = () => {
  //   if (password === "") {
  //     setErrorPassword(true);
  //   } else {
  //     setErrorPassword(true);
  //   }
  // };
  const router = useRouter();

  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <Card className="bg-black flex flex-col justify-center align-center">
        <CardHeader>
          <CardTitle className="text-white flex justify-center text-2xl">
            Instagram
          </CardTitle>
          <CardDescription className="font-bold flex justify-center items-center ">
            Sign up to see photos and videos
            <br />
            from your friends.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center gap-2">
          <Input
            className="w-[250px]  bg-neutral-900 border border-neutral-700  rounded-1 text-white"
            placeholder="Firstname"
          />
          <Input
            className="w-[250px] bg-neutral-900  border-neutral-700  rounded-1 text-white"
            placeholder="Lastname"
          />
          <Input
            className="w-[250px]  bg-neutral-900  border-neutral-700 roundes-1 text-white"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            className="w-[250px]  bg-neutral-900  border-neutral-700  rounded-1 text-white"
            placeholder="Email"
            onChange={handleEmail}
            value={email}
          />
          {errorEmail && (
            <div className="text-red-600">email zaaval bichnu</div>
          )}
          <Input
            className="w-[250px]  bg-neutral-900  border-neutral-700  rounded-1 text-white"
            placeholder="Password"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />
          {errorPassword && (
            <div className="text-red-600">password zaaval bichnu</div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-center text-white text-sm gap-3">
          <Button className="w-[250px] bg-blue-800  " onClick={emailError}>
            Sign up
          </Button>
          <div className="flex">
            <div>Have an account?</div>
            <div
              className="text-blue-800"
              onClick={() => router.push("/login")}
            >
              {" "}
              Login
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
