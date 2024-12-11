import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
import { DrawerTrigger } from "./ui/drawer";
import { Textarea } from "./ui/textarea";

export function FormTask({ setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !description || !deadline) {
      return alert("Please fill in all fields");
    }

    const task = {
      title,
      description,
      deadline,
      status: "Pending",
    };
    // Get the existing tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // Update localStorage
    const updatedTasks = [...tasks, task];
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
    // Update parent's state
    setTasks(updatedTasks);

    setTitle("");
    setDescription("");
    setDeadline("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-sm text-white"
    >
      <div className="mb-2">
        <Label htmlFor="title" className="text-white">
          Title
        </Label>
        <Input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Input title"
          className="bg-black border-0"
          autoComplete="off"
        />
      </div>
      <div className="my-2">
        <Label htmlFor="description" className="text-white">
          Description
        </Label>
        <Textarea
          type="text"
          maxLength={50}
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Input description"
          className="bg-black border-0"
          autoComplete="off"
        />
      </div>
      <div className="my-2">
        <Label htmlFor="deadline" className="text-white block mb-1">
          Deadline
        </Label>
        <Popover className="w-full">
          <PopoverTrigger asChild>
            <Button
              variant="deafult"
              className={cn(
                "w-full justify-start text-left font-normal bg-black text-white",
                !deadline && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {deadline ? (
                format(new Date(deadline), "PPP")
              ) : (
                <span>Pick a deadline</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 border-0">
            <Calendar
              name="deadline"
              className={cn("bg-black text-white")}
              mode="single"
              selected={deadline ? new Date(deadline) : undefined}
              onSelect={(value) => setDeadline(value?.toDateString())}
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>
      <DrawerTrigger asChild>
        <Button
          disabled={!title || !description || !deadline}
          variant="ghost"
          type="submit"
          className="w-full mt-4 bg-zinc-700"
        >
          Add Task
        </Button>
      </DrawerTrigger>
    </form>
  );
}
