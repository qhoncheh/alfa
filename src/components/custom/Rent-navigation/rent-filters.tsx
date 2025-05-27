import Icon from "@/icons/rent-icon/rent-icon"
import { Input } from "../Input"

const RentFilters = () => {
  return (
    <div className="flex flex-col px-6">
        <div className="flex flex-row gap-4">
              <Input className="rounded-full w-96 h-11 border-1 border-gray-300" placeholder="جستجو کنید . . . " label="جستجو " icon={<Icon />}
              />
        </div>
    </div> 
  )
}

export default RentFilters
