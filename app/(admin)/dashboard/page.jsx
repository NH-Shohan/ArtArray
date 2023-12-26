import DashboardCard from "@/app/components/DashboardCard";

function Dashboard() {
  return (
    <main className="grid grid-cols-3 grid-rows-2 h-full w-full gap-5">
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
      <DashboardCard />
    </main>
  );
}

export default Dashboard;
