"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      // Rediriger sans le token dans l’URL
      router.replace("/dashboard");
    } else {
      // Si pas de token, vérifier localStorage
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        // Rediriger vers le login du frontend public
        window.location.href = "http://localhost:3000/admin";
      } else {
        router.push("/dashboard");
      }
    }
  }, [searchParams, router]);

  return <div>Vérification...</div>;
}