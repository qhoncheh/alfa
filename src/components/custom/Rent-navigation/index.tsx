// import Pagination from "../pagination"
import RentCard from "../Rent-Card/rent-card"
import RentNav from "./navbar"
import RentFilters from "./rent-filters"

const Rent = () => {
  return (
      <div className="flex flex-col gap-8">
        <RentNav />
        <RentFilters />
        <RentCard />
        {/* <Pagination currentPage={5} totalPages={10}  /> */}
        </div>
  )
}

export default Rent