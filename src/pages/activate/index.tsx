// src/pages/activate/index.tsx
import { useRouter } from "next/router";
import { useEffect } from "react";

const Activate = () => {
  const router = useRouter();
  const { uid, token } = router.query;

  useEffect(() => {
    if (uid && token) {
      fetch("http://localhost:8000/auth/users/activation/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid, token }),
      })
        .then((res) => {
          if (res.ok) {
            router.push("/login");
          } else {
            alert("Aktivierung fehlgeschlagen.");
          }
        });
    }
  }, [uid, token]);

  return <p>Konto wird aktiviert...</p>;
};

export default Activate;
