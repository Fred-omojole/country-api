import { Input } from "antd";
import SearchIcon from "@mui/icons-material/Search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Field = () => {
  return (
    <section className=" p-5 lg:flex lg:items-center lg:justify-between bg-slate-200 dark:bg-slate-700">
      <div> 
        <Input
          placeholder=" Search for country..."
          className=" w-[400px]  p-5 m-4 mb-10 mx-auto bg-[#d1d5db] dark:bg-slate-600 dark:text-white  text-black font-semibold border-none hover:bg-gray-700"
          prefix={<SearchIcon className="text-black dark:text-white mx-2" />}
        />
      </div>
      <div className="mb-6 dark:text-[#d1d5db]">
        <Select className="">
          <SelectTrigger className="w-[300px] bg-[#d1d5db] dark:bg-slate-600  border-none ">
            <SelectValue className="dark:text-white" placeholder="Filter by Region" />
          </SelectTrigger>
          <SelectContent className="bg-slate-200 dark:bg-slate-600 border-none">
            <SelectItem value="africa">Africa</SelectItem>
            <SelectItem value="america">America</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="oceania">Oceania</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};

export default Field;
