import { NextPage } from "next";
import { Todos } from "@/components/Todos/Todos";
import { SearchForm } from "@/components/Todos/SearchForm";

const Page: NextPage = () => {
  return (
    <div>
      <SearchForm defaultValues={} />
      <Todos todos={[]} />
    </div>
  );
};

export default Page;
