export default function Table() {
    return (
        <div className="text-white flex justify-center">
            <table className="min-w-[700px] bg-neutral-700 opacity-90 rounded-2xl overflow-hidden w-300 h-250">
                <caption className="caption-top text-lg font-semibold mb-2">
                    Customers task
                </caption>
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-left">client</th>
                        <th className="px-4 py-2 text-left">email</th>
                        <th className="px-4 py-2 text-left">Plan</th>
                        <th className="px-4 py-2 text-left">Revenue mensuel récurent</th>
                        <th className="px-4 py-2 text-left">Statut</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2">2025-09-01</td>
                        <td className="px-4 py-2">001</td>
                        <td className="px-4 py-2">Chris</td>
                        <td className="px-4 py-2">120 €</td>
                        <td className="px-4 py-2">Payé</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">2025-09-02</td>
                        <td className="px-4 py-2">002</td>
                        <td className="px-4 py-2">Dennis</td>
                        <td className="px-4 py-2">75 €</td>
                        <td className="px-4 py-2">En attente</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">2025-09-03</td>
                        <td className="px-4 py-2">003</td>
                        <td className="px-4 py-2">Sarah</td>
                        <td className="px-4 py-2">200 €</td>
                        <td className="px-4 py-2">Payé</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2">2025-09-04</td>
                        <td className="px-4 py-2">004</td>
                        <td className="px-4 py-2">Karen</td>
                        <td className="px-4 py-2">50 €</td>
                        <td className="px-4 py-2">Annulé</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}