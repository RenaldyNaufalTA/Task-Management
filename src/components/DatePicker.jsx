import { useState } from "react";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DatePicker(props) {
  const [deadline, setDeadline] = useState();

  const handleDateChange = (selectedDate) => {
    setDeadline(selectedDate);
  };

  return (
    <Popover className="w-full">
      <PopoverTrigger asChild>
        <Button
          className={cn(
            "w-full justify-start text-left font-normal bg-black text-white",
            !deadline && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {deadline ? format(deadline, "PPP") : <span>Pick a deadline</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-0">
        <Calendar
          className={cn("bg-black text-white")}
          mode="single"
          selected={deadline}
          onSelect={handleDateChange}
          disabled={(date) => date < new Date()}
        />
      </PopoverContent>
    </Popover>
  );
}
