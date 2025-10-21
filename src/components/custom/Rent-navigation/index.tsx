import RentCard from "../Rent-Card/rent-card"
import RentNav from "./navbar"
import RentFilters from "./rent-filters"

const Rent = () => {
  return (
      <div className="flex flex-col gap-8">
        <RentNav />
        <RentFilters />
        <RentCard />
        </div>
  )
}

export default Rent