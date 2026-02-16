"use client";

import { ProtectedRoute } from "@/components/Auth/ProtectedRoute";
import { useAuth } from "@/lib/hooks/useAuth";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { useRouter } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function DashboardContent() {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {t("dashboard.title")}
          </h1>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              {t("auth.logout")}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* User Info Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {t("dashboard.userInfo")}
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">{t("dashboard.name")}</p>
              <p className="text-lg font-medium text-gray-900">{user?.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">{t("dashboard.email")}</p>
              <p className="text-lg font-medium text-gray-900">{user?.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">{t("dashboard.id")}</p>
              <p className="text-lg font-medium text-gray-900">{user?.id}</p>
            </div>
          </div>
        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("dashboard.orders")}
              </h3>
              <span className="text-3xl font-bold text-blue-600">12</span>
            </div>
            <p className="text-gray-600">{t("dashboard.ordersDescription")}</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("dashboard.customers")}
              </h3>
              <span className="text-3xl font-bold text-green-600">45</span>
            </div>
            <p className="text-gray-600">{t("dashboard.customersDescription")}</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("dashboard.revenue")}
              </h3>
              <span className="text-3xl font-bold text-purple-600">$28K</span>
            </div>
            <p className="text-gray-600">{t("dashboard.revenueDescription")}</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow mt-6 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {t("dashboard.recentActivity")}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center py-4 border-b">
              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  {t("dashboard.orderCreated")} #2024-001
                </p>
                <p className="text-sm text-gray-600">{t("dashboard.hoursAgo").replace("{hours}", "2")}</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                {t("dashboard.completed")}
              </span>
            </div>
            <div className="flex items-center py-4 border-b">
              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  {t("dashboard.newCustomer")}
                </p>
                <p className="text-sm text-gray-600">{t("dashboard.hoursAgo").replace("{hours}", "4")}</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {t("dashboard.new")}
              </span>
            </div>
            <div className="flex items-center py-4">
              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  {t("dashboard.inventoryUpdate")}
                </p>
                <p className="text-sm text-gray-600">{t("dashboard.hoursAgo").replace("{hours}", "6")}</p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                {t("dashboard.inProgress")}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
