"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    useEffect(() => {
        // Redirigir al home - login deshabilitado temporalmente
        router.replace("/");
    }, [router]);

    return null;
}
