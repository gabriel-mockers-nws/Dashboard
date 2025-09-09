import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
{ name: '01/05/2025', ventes: 200 },
{ name: '02/05/2025', ventes: 100 },
{ name: '03/05/2025', ventes: 500 },
{ name: '04/05/2025', ventes: 0 },
{ name: '05/05/2025', ventes: 450 },
{ name: '06/05/2025', ventes: 300 },
{ name: '07/05/2025', ventes: 210 },
{ name: '08/05/2025', ventes: 156 },
{ name: '09/05/2025', ventes: 450 },
{ name: '10/05/2025', ventes: 700 },
{ name: '11/05/2025', ventes: 10 },
{ name: '12/05/2025', ventes: 320 },
{ name: '13/05/2025', ventes: 1200 },
{ name: '14/05/2025', ventes: 800 },
{ name: '15/05/2025', ventes: 350 },
{ name: '16/05/2025', ventes: 1450 },
{ name: '17/05/2025', ventes: 900 },
{ name: '18/05/2025', ventes: 1100 },
{ name: '19/05/2025', ventes: 600 },
{ name: '20/05/2025', ventes: 1300 },
{ name: '21/05/2025', ventes: 750 },
{ name: '22/05/2025', ventes: 400 },
{ name: '23/05/2025', ventes: 950 },
{ name: '24/05/2025', ventes: 300 },
{ name: '25/05/2025', ventes: 1400 },
{ name: '26/05/2025', ventes: 1250 },
{ name: '27/05/2025', ventes: 500 },
{ name: '28/05/2025', ventes: 1000 },
{ name: '29/05/2025', ventes: 200 },
{ name: '30/05/2025', ventes: 650 },

];

export default function ChartGraph() {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="name"
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
                <Line 
                    type="monotone" 
                    dataKey="ventes" 
                    stroke="#38bdf8"
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
