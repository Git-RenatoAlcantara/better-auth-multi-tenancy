"use client";
import SignIn from "@/components/sign-in";
import { SignUp } from "@/components/sign-up";
import { getCallbackURL } from "@/lib/shared";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Page() {
    const router = useRouter();
    const params = useSearchParams();
    const [tab, setTab] = useState<'sign-in' | 'sign-up'>('sign-in');

    return (
        <div className="w-full">
            <div className="flex items-center flex-col justify-center w-full md:py-10">
                <div className="md:w-[400px]">
                    <div className="flex space-x-2 mb-4">
                        <button
                          type="button"
                          onClick={() => setTab('sign-in')}
                          className={`px-4 py-2 rounded ${tab === 'sign-in' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        >
                          Sign In
                        </button>
                        <button
                          type="button"
                          onClick={() => setTab('sign-up')}
                          className={`px-4 py-2 rounded ${tab === 'sign-up' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                        >
                          Sign Up
                        </button>
                    </div>
                    <div>
                      {tab === 'sign-in' ? <SignIn /> : <SignUp />}
                    </div>
                </div>
            </div>
        </div>
    );
}