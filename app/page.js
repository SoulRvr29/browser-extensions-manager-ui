import Image from "next/image";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-between mt-10">
        <h1 className="text-4xl font-semibold">Extensions List</h1>
        <div className="flex items-center gap-4">
          <Button title="All" />
          <Button title="Active" />
          <Button title="Inactive" />
        </div>
      </div>
    </div>
  );
}
