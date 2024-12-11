import React from "react";
import { SquareCheckBig, Clock, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
export default function ListTask({ task, index, updateStatus, deleteTask }) {
  return (
    // <Card className="w-[300px] transition ease-in-out duration-300 bg-transparent border border-white  text-white">
    //   <CardHeader>
    //     <div className="flex justify-between">
    //       <h6
    //         className={
    //           task.status === "Pending"
    //             ? "text-xs me-auto px-2 py-1 rounded-sm font-semibold bg-yellow-500"
    //             : "text-xs me-auto px-2 py-1 rounded-sm font-semibold bg-green-500"
    //         }
    //       >
    //         {task.status}
    //       </h6>
    //       <CardDescription>
    //         {new Intl.DateTimeFormat("en-GB", {
    //           day: "numeric",
    //           month: "numeric",
    //           year: "numeric",
    //         }).format(new Date(task.deadline), "d/m/Y")}
    //       </CardDescription>
    //     </div>
    //     <CardTitle className="text-lg font-semibold uppercase tracking-wide">
    //       {task.title}
    //     </CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="w-full border-[1px] border-white rounded">
    //       <p className="text-sm font-medium break-all">{task.description}</p>
    //     </div>
    //   </CardContent>
    //   <CardFooter className="flex flex-col gap-2">
    //     {task.status == "Done" ? (
    //       <Button
    //         className="w-full bg-yellow-500"
    //         onClick={() => updateStatus(index, "Pending")}
    //       >
    //         Mark as Pending
    //       </Button>
    //     ) : (
    //       <Button
    //         className="w-full bg-green-500"
    //         onClick={() => updateStatus(index, "Done")}
    //       >
    //         Mark as Done
    //       </Button>
    //     )}
    //     <AlertDialog>
    //       <AlertDialogTrigger className="w-full" asChild>
    //         <Button variant="destructive" className="w-full">
    //           Delete Task
    //         </Button>
    //       </AlertDialogTrigger>
    //       <AlertDialogContent className="bg-black text-white border-0">
    //         <AlertDialogHeader>
    //           <AlertDialogTitle>Are you sure?</AlertDialogTitle>
    //           <AlertDialogDescription>
    //             This will permanently delete the task.
    //           </AlertDialogDescription>
    //         </AlertDialogHeader>
    //         <AlertDialogFooter>
    //           <AlertDialogCancel className="text-black">
    //             Cancel
    //           </AlertDialogCancel>
    //           <AlertDialogAction
    //             onClick={() => deleteTask(index)}
    //             className="bg-red-500"
    //           >
    //             Delete
    //           </AlertDialogAction>
    //         </AlertDialogFooter>
    //       </AlertDialogContent>
    //     </AlertDialog>
    //   </CardFooter>
    // </Card>
    <Alert className="mx-2 min-w-full border-[1px] border-[#27272a] bg-transparent text-white">
      <div className="w-full flex justify-between">
        <AlertTitle className="text-start leading-relaxed font-bold text-xl">
          {task.title}
        </AlertTitle>
        <p className="text-muted text-xs mb-auto">
          {new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          }).format(new Date(task.deadline), "d/m/Y")}
        </p>
      </div>
      <div className="flex gap-1">
        <AlertDescription className="text-start md:max-w-[75%] me-auto">
          <p className="text-sm font-medium break-all my-2 tracking-wide breaks-all">
            {task.description}
          </p>
          <p
            className={
              task.status === "Done"
                ? "text-xs px-2 rounded-sm border-[1px] border-green-500 font-semibold  tracking-wide w-fit"
                : "text-xs px-2 rounded-sm border-[1px] border-yellow-500 font-semibold  tracking-wide w-fit"
            }
          >
            {task.status}
          </p>
        </AlertDescription>
        {task.status == "Done" ? (
          <Button
            size="sm"
            className=" bg-yellow-500 text-sm"
            onClick={() => updateStatus(index, "Pending")}
          >
            <Clock />
            <span className="hidden md:inline">Pending</span>
          </Button>
        ) : (
          <Button
            size="sm"
            className=" bg-green-500"
            onClick={() => updateStatus(index, "Done")}
          >
            <SquareCheckBig />
            <span className="hidden md:inline">Done</span>
          </Button>
        )}
        <AlertDialog>
          <AlertDialogTrigger className="w-10" asChild>
            <Button variant="destructive" size="sm">
              <Trash2 />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-black text-white border-0">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete the task.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-black">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => deleteTask(index)}
                className="bg-red-500"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </Alert>
  );
}
