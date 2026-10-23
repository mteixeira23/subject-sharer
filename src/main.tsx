import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import "./index.css";

// Force reload when a new Service Worker activates or chunks change
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    window.location.reload();
  });
}
window.addEventListener("vite:preloadError", () => {
  window.location.reload();
});
import { AuthProvider } from "@/contexts/AuthContext";
import { SubscriptionProvider } from "@/contexts/SubscriptionContext";
import { StudyProvider } from "@/contexts/StudyContext";
import { FinanceProvider } from "@/contexts/FinanceContext";
import { HealthProvider } from "@/contexts/HealthContext";
import { TaskProvider } from "@/contexts/TaskContext";
import { GoalsProvider } from "@/contexts/GoalsContext";
import { WorkoutProvider } from "@/contexts/WorkoutContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <SubscriptionProvider>
        <StudyProvider>
          <FinanceProvider>
            <HealthProvider>
              <WorkoutProvider>
                <TaskProvider>
                  <GoalsProvider>
                    <App />
                  </GoalsProvider>
                </TaskProvider>
              </WorkoutProvider>
            </HealthProvider>
          </FinanceProvider>
        </StudyProvider>
      </SubscriptionProvider>
    </AuthProvider>
  </QueryClientProvider>
);
