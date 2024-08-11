"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  function signinUser() {
    try {
      setLoading(true);
      router.push(
        "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=" +
          window.location.origin
      );
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <Card className="bg-[#121213] w-96">
        <CardHeader>
          <CardTitle>Create a new account</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            className="bg-transparent flex gap-4 items-center border w-full font-light text-white border-gray-500 hover:text-black"
            onClick={signinUser}
            disabled={loading}
          >
            <Image
              src="/images/google.png"
              alt="google"
              width={24}
              height={24}
              className="w-4 h-5"
            />
            Sign Up with Google
          </Button>
          <div className="flex flex-col items-center justify-center mt-10">
            <Button className="mx-auto rounded-sm bg-blue-grad text-white">
              Create an Account
            </Button>
            <p className="text-xs mt-6 text-[#909296]">
              Already have an account?{" "}
              <strong className="text-white">Sign In</strong>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
