"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "./_utils/auth-context";

export default function HomePage() {
  const { user, gitHubSignIn } = useUserAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      router.push("/week-9/shopping-list");
    }
  }, [user, router]);

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      await gitHubSignIn();
      router.push("/week-9/shopping-list"); // Redirect after login success
    } catch (err) {
      if (err.code !== "auth/cancelled-popup-request") {
        setError(err.message || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return <p>Redirecting...</p>;
  }

  return (
    <main className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>

      <p className="mb-4">You must be logged in to view this page.</p>

      <button
        onClick={handleLogin}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 disabled:opacity-50"
      >
        {loading ? "Logging in..." : "Login with GitHub"}
      </button>

      {error && (
        <p className="mt-4 text-red-600" role="alert">
          {error}
        </p>
      )}
    </main>
  );
}
