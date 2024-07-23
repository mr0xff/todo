'use client';

import Button from "./button";
import { markAsDone } from "../api";
import { useRouter } from "next/navigation";

export default function DoneButton({taskId}:{
  taskId: string
}){
  const router = useRouter();

  const handlerDeleteTask = async()=>{
    await markAsDone(taskId);
    router.back();
  }
  return(
    <Button onClick={handlerDeleteTask}>Concluir</Button>
  )
}