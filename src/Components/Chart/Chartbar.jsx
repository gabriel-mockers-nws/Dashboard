
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'semaine 1 ', pv: 100 },
    { name: 'semaine 2 ', pv: 150 },
    { name: 'semaine 3 ', pv: 400 },
    { name: 'semaine 4 ', pv: 398 },
    { name: 'semaine 5 ', pv: 480 },
    { name: 'semaine 6 ', pv: 380 },
    { name: 'semaine 7 ', pv: 430 },
    { name: 'semaine 8 ', pv: 349 },

];

export default function ChartBar() {
    return (
    <ResponsiveContainer  width="100%" height={500}>
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
            }}
            barSize={20}
        >
            <XAxis 
                dataKey="name" 
                scale="point" 
                padding={{ left: 10, right: 10 }}
                axisLine={{ stroke: '#ffffff' }}
                tickLine={{ stroke: '#ffffff' }}
                tick={{ fill: '#ffffff' }}
            />
            <YAxis 
                axisLine={{ stroke: '#ffffff' }}
                tickLine={{ stroke: '#ffffff' }}
                tick={{ fill: '#ffffff' }}
            />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="pv" fill="#fbbf24" background={{ fill: '#eee' }} />
        </BarChart>
    </ResponsiveContainer>
    );
};