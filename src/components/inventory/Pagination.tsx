import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between p-2 text-lg rounded-lg">
      <h1>
        Showing <span className="font-bold">1</span> to{" "}
        <span className="font-bold">10</span> of{" "}
        <span className="font-bold">15</span> Results
      </h1>
      <div className="flex items-center space-x-2">
        <Button className="text-sm">
          <ArrowLeft />
          Previous
        </Button>
        <Button className="text-sm">
          Next <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
