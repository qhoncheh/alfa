import RentNav from "./navbar"
import RentFilters from "./rent-filters"

const Rent = () => {
  return (
      <div className="flex flex-col gap-8">
        <RentNav />
        <RentFilters />
        </div>
  )
}

export default Rent