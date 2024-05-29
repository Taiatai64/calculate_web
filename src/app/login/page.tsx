"use client";

import React, { ChangeEvent } from "react";
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
type Props = {};

const LoginPage = (props: Props) => {
  const [username, setUsername] = React.useState("");
  const [password, setPasswotd] = React.useState("");

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log("hello");
    if (username === "admin123" && password === "123456") {
      router.push("/");
    }
  };

  return (
    <section className="flex h-screen w-screen  items-center justify-center">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <h1>Sign In </h1>
        <Input
          type="username"
          label="Username"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPasswotd(e.target.value)
          }
        />
        <Button color="primary" type="submit">
          Sign In
        </Button>
        <Link href="/signup">Sign up here</Link>
      </form>
    </section>
  );
};

export default LoginPage;
