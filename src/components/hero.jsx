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
    <section className=" p-5  lg:flex lg:items-center lg:justify-between ">
      <div>
        <Input
          placeholder=" Search for country..."
          className=" w-[400px]  p-5 m-4 mb-10 mx-auto  bg-gray-700 text-black font-semibold border-none hover:bg-gray-700"
          prefix={<SearchIcon className="text-black mx-2" />}
        />
      </div>
      <div className="mb-6">
        <Select className="">
          <SelectTrigger className="w-[300px] bg-gray-700 border-none ">
            <SelectValue placeholder="Filter by Region" />
          </SelectTrigger>
          <SelectContent className="bg-slate-700 border-none">
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
