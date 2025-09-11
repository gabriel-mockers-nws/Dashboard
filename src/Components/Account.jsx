export default function AccountZone() {
    return (
        <div className="text-white flex flex-col py-10 min-w-[700px] bg-neutral-700 opacity-90 rounded-2xl overflow-hidden w-300 h-200 px-2">
            <h2 className="text-2xl font-bold text-center">Détails du compte</h2>

            <div className="mt-4 flex flex-col gap-2">
                <div className="max-w-45">
                    <img src="./img/Legiolf-avatar.jpg" alt="Avatar de John Doe" />
                </div>
                <p><strong>Nom d&apos;utilisateur :</strong> John Doe</p>
                <p><strong>Email :</strong> john.doe@example.com</p>
            </div>

        </div>
    )
}