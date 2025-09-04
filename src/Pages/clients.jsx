import CustomersTables from "../Components/Customers"

export const Customers = () => {
    return (
        <div className="text-white">
            <h1 className="text-4xl font-bold text-center py-5">Clients</h1>
            <CustomersTables />
        </div>
    )
}   
export default Customers