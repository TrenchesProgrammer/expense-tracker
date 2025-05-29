'use client';

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  ScriptableContext,
} from "chart.js";
import { Card, Text } from "@mantine/core";
import { useRef } from "react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function ExpenseChart() {
  const chartRef = useRef(null);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Expenses",
        data: [1200, 1500, 1100, 1800, 1400, 1900], // Values
        borderColor: "#b48a5e", // Line color
        backgroundColor: (context: ScriptableContext<"line">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          // Ensure chartArea is available
          if (!chartArea) {
            return "rgba(180, 138, 94, 0.4)"; // Fallback color
          }

          // Create a linear gradient
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, "rgba(180, 138, 94, 0.4)"); // Darker at top
          gradient.addColorStop(1, "rgba(180, 138, 94, 0)"); // Fade out at bottom

          return gradient;
        },
        fill: true, // Enables the gradient under the line
        tension: 0.4, // Makes the line smooth
        pointRadius: 0, // Small circles on data points
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Hide legend
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 12 } },
        border: { display: false },
      },
      y: {
        grid: { display: false },
        ticks: { display: false },
        border: { display: false },
      },
    },
  };

  return (
    <Card p="lg" radius="md">
      <Text size="lg">Monthly Expenses</Text>
      <Text color="dimmed">
        Jan - Jun <span style={{ color: "green" }}>+5%</span>
      </Text>

      <div style={{ width: "100%", height: "300px" }}>
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </Card>
  );
}

export default ExpenseChart;
