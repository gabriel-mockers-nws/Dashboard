export default function AccountZone() {
    return (
        <div className="text-white flex flex-col py-10 min-w-[700px] bg-neutral-700 opacity-90 rounded-2xl overflow-hidden w-200 h-150 px-2">
            <h2 className="text-2xl font-bold text-center">Détails du compte</h2>

            <div className="mt-4 flex flex-col gap-2 justify-center items-center">
                <div className="max-w-45">
                    <img src="./img/Legiolf-avatar.jpg" alt="Avatar de John Doe" />
                </div>
                <p><strong>Nom d&apos;utilisateur :</strong> John Doe</p>
                <p><strong>Email :</strong> john.doe@example.com</p>
            </div>

            <div className="flex flex-col-2 justify-center gap-25 mt-15">
                <div>
                    <p><strong>Plan ID client :</strong> #ZQ4857P8548U</p>
                    <p><strong>Pays :</strong> France</p>
                    <p><strong>Devise :</strong> Euro</p>
                </div>
                <div>
                    <p><strong>Plan :</strong> Basic</p>
                    <p><strong>Adresse :</strong> 123 Rue de Paris, 75001 Paris</p>
                    <p><strong>Moyen de paiement :</strong> Paypal</p>

                </div>
            </div>

        </div>
    )
}