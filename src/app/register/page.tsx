"use client";
import { useState } from "react";
import { register } from "../../services/authService";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(email, password);
      router.push("/dashboard"); // redirect after register
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded border dark:bg-gray-700 dark:text-gray-100"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 rounded border dark:bg-gray-700 dark:text-gray-100"
        />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">
          Register
        </button>
      </form>
    </div>
  );
}
