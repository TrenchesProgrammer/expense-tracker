import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from "recharts";
import { Card, Text } from "@mantine/core";

const data = [
  { month: "Jan", value: 1200 },
  { month: "Feb", value: 1500 },
  { month: "Mar", value: 1100 },
  { month: "Apr", value: 1800 },
  { month: "May", value: 1400 },
  { month: "Jun", value: 1900 },
];

function ExpenseChart() {
  return (
    <Card p="lg" radius="md" >
      <Text size="lg">Monthly Expenses</Text>
      <Text color="dimmed">Jan - Jun <span style={{ color: "green" }}>+5%</span></Text>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          {/* Define Gradient */}
          {/* <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b48a5e" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#b48a5e" stopOpacity={0} />
            </linearGradient>
          </defs> */}

          {/* Apply Gradient to the Area */}
          {/* <Area type="monotone" dataKey="value" fill="url(#colorGradient)" stroke="none" /> */}

          {/* Line Chart */}
          <XAxis dataKey="month" stroke="#a3a3a3" axisLine={false} tickLine={false} interval={0} />
          <YAxis hide />
          {/* <Tooltip />    */}
          <Line type="monotone" dataKey="value" stroke="#b48a5e" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default ExpenseChart;
