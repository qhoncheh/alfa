import Icon from "@/icons/rent-icon/rent-icon"
import { Input } from "../Input"
import Select from "../Select/select"
// import { MapPin } from 'lucide-react';

const RentFilters = () => {
  return (
    <div className="flex flex-col px-8 justify-center">
        <div className="flex flex-row gap-4">
              <Input className="rounded-full text-white w-72 h-11 border-1 border-gray-300"
                  placeholder="جستجو کنید . . . " label="جستجو " icon={<Icon />}
              />
              <div className="flex flex-row gap-4 pt-2">
                   <Select 
                label="شهر"
                options={['تهران', 'اصفهان', 'شیراز']}
                defaultText="انتخاب کنید"
              />
              <Select 
                label="شهر"
                options={['تهران', 'اصفهان', 'شیراز']}
                defaultText="انتخاب کنید"
              /><Select 
                label="شهر"
                options={['تهران', 'اصفهان', 'شیراز']}
                defaultText="انتخاب کنید"
              />
              <Select 
                label="شهر"
                options={['تهران', 'اصفهان', 'شیراز']}
                defaultText="انتخاب کنید"
              />
              </div>
           
          </div>
          <div className="flex flex-row gap-6 pr-4">
             <Input className="rounded-full text-white p-1 w-55 h-11 border-1 border-gray-300"
                  placeholder="جستجو کنید . . . " label="جستجو " 
              />
              <Input className="rounded-full text-white p-1 w-55 h-11 border-1 border-gray-300"
                  placeholder="جستجو کنید . . . " label="جستجو " 
              />
              <Input className="rounded-full text-white p-1 w-55 h-11 border-1 border-gray-300"
                  placeholder="جستجو کنید . . . " label="جستجو " 
              />
               <Input className="rounded-full text-white p-1 w-55 h-11 border-1 border-gray-300"
                  placeholder="جستجو کنید . . . " label="جستجو " 
              />
              <Input className="rounded-full text-white p-1 w-55 h-11 border-1 border-gray-300"
                  placeholder="جستجو کنید . . . " label="جستجو " 
              />
          </div>
    </div> 
  )
}

export default RentFilters
