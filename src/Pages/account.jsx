import AccountZone from "../Components/Account"

export const Account = () => {
    return (
        <>
            <h1 className=" text-white text-3xl font-bold text-center">Mon compte</h1>
            <div className="text-white flex justify-center items-center h-screen">
                <AccountZone /> 
            </div>

        </>
    )
}

export default Account