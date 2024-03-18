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
    <section className=" w-full overflow-hidden py-4 lg:flex lg:items-center lg:justify-between bg-slate-200 dark:bg-slate-700">
      <div className=" px-4 md:px-0 ">
        <Input
          placeholder=" Search for country..."
          className=" text-start w-[350px] md:w-[400px] p-5 m-4 mb-10 mx-auto bg-[#d1d5db] dark:bg-slate-600 overflow-hidden dark:text-white  text-black font-semibold border-none hover:bg-gray-700"
          prefix={<SearchIcon className="text-black dark:text-white mx-2" />}
        />
      </div>
      <div className="mb-6 dark:text-[#d1d5db] px-8 ">
        <Select className=" ">
          <SelectTrigger className="w-[300px] bg-white dark:bg-slate-600 border-none ">
            <SelectValue
              className="dark:text-white  "
              placeholder="Filter by Region"
            />
          </SelectTrigger>
          <SelectContent className="bg-slate-200 dark:bg-slate-700 border-none">
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
