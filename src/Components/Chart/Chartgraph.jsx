import {
Area,
AreaChart,
CartesianGrid,
ResponsiveContainer,
XAxis,
YAxis,
} from 'recharts';

const data = [
{
    name: 'Janvier',
    uv: 590,
    pv: 590,
    amt: 5900,
},
{
    name: 'Février',
    uv: 590,
    pv: 590,
    amt: 590,
},
{
    name: 'Mars',
    uv: 868,
    pv: 868,
    amt: 2290,
},
{
    name: 'Avril',
    uv: 1397,
    pv: 1397,
    amt: 2000,
},
{
    name: 'Mai',
    uv: 1480,
    pv: 1480,
    amt: 2181,
},
{
    name: 'Juin',
    uv: 1520,
    pv: 1520,
    amt: 2500,
},
];

export default function ChartGraph() {
    return (
        <div style={{ width: '100%' }} className='text-white '>
            <ResponsiveContainer width="100%" height={300}>
                    <AreaChart
                    width={500}
                    height={300}
                    data={data}
                    syncId="anyId"
                    text-color="white"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 12,
                        bottom: 0,
                    }}
                    >
                    <CartesianGrid/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Area dataKey="pv" stroke="#fffff" fill="#FF0000" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
    }
