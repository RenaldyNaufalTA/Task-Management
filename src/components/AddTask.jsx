import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { FormTask } from "./FormTask";

export default function AddTask({ tasks, setTasks }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Add Task</Button>
      </DrawerTrigger>
      <DrawerContent className="bg-zinc-900 border-0">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="text-white">
            <DrawerTitle>Add Task</DrawerTitle>
            <DrawerDescription>Add your task.</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 py-0">
            <div className="flex items-center justify-center space-x-2">
              <FormTask tasks={tasks} setTasks={setTasks} />
            </div>
          </div>
          <DrawerFooter>
            {/* <Button
              variant="secondary"
              className="bg-zinc-800 text-white border-0"
            >
              Submit
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" className="bg-slate-600 border-0">
                Cancel
              </Button>
            </DrawerClose> */}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
