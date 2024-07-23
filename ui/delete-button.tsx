'use client';

import Button from "./button";
import { deleteTask } from "../api";
import { useRouter } from "next/navigation";

export default function DeleteButton({taskId}:{
  taskId: string
}){
  const router = useRouter();

  const handlerDeleteTask = async ()=>{
    await deleteTask(taskId);
    router.back();
  }
  return(
    <Button del onClick={handlerDeleteTask}>Deletar</Button>
  )
}