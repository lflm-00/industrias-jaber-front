"use client";

import { Footer, Header, Login } from "@/components";


export default function LoginPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1">
                <Login />
            </main>
            <Footer />
        </div>
    );
}
