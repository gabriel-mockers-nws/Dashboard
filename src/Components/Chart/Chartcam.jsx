import { Pie, PieChart, Tooltip } from 'recharts';

export default function TextDecoderStream() {
    return (
        <>
            <div>
                <PieChart width={600} height={400}>
                <Pie
                    activeShape={{
                    fill: 'red',
                    stroke: 'blue',
                    r: 100,
                    }}
                data={[
                { name: 'Janvier', uv: 590 },
                { name: 'Février', uv: 590 },
                { name: 'Mars', uv: 868 },
                { name: 'Avril', uv: 1397 },
                { name: 'Mai', uv: 1480 },
                { name: 'Juin', uv: 1520 },
                ]}
                dataKey="uv"
                />
                <Tooltip defaultIndex={2} />
                </PieChart>
            </div>
    </>
    )
}   