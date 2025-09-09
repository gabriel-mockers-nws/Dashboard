import { Cell, Pie, PieChart, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Basic', value: 400 },
    { name: 'Pro', value: 700 },
    { name: 'Entreprises', value: 300 },
];

const RADIAN = Math.PI / 180;
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
    );
};

export default function ChartCam() {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                fill="#8884d8"
                dataKey="value"
                innerRadius={52}
                outerRadius={115}
            >
                {data.map((entry, index) => (
                <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
    );
}
