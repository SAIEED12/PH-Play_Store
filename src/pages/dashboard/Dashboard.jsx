import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InstallAppsContext } from "../../context/InstallAppsContext";
import useApps from "../../hooks/useApps";

const Dashboard = () => {

    const { installedApps } = useContext(InstallAppsContext);
    const { apps } = useApps();
    const uninstalledApps = apps.length - installedApps.length;

    const data = [
  { name: 'Installed', value: installedApps.length, fill: '#0088FE' },
  { name: 'Uninstalled', value: uninstalledApps, fill: '#00C49F' }
];
  return (
    <div className="my-10 shadow p-10 rounded-md container mx-auto border border-slate-300 ">
        <h2 className="font-semibold text-3xl mb-16 text-center">Installed and Uninstalled apps</h2>
        <div className="flex justify-center">
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend></Legend>
        <Tooltip></Tooltip>
      </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
