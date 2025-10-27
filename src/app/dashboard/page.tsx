"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../../Database/firebase";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) router.push("/login");
      else setUserEmail(user.email);
    });
    return () => unsubscribe();
  }, [router]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome, {userEmail}</h1>
      <p>Your MoneyTree dashboard will appear here.</p>
    </div>
  );
}
