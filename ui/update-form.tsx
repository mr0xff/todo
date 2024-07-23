'use client';
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { updateTask } from "../api";
import Button from "./button";
import { useRouter, useParams } from "next/navigation";

export default function UpdateTask({
  data
}:{
  data: string
}){
  const [ state, action ] = useFormState(updateTask, { message: ''});
  const router = useRouter();
  const params = useParams();
  
  useEffect(()=>{
    if(state.message)
      setTimeout(() => {
        router.back();
      }, 1000);
  })
  return(
    <form {...{action}} className="gap-3 flex flex-col mt-3">
      <h2 className="text-xl text-center my-8">Bloco de notas</h2>
      <label className="font-medium text-sm text-gray-500">Escreva a sua nota...</label>
      <input type="hidden" name="taskId" value={params.taskId} />
      <textarea defaultValue={data} placeholder="Escreva alguma nota ..." className="shadow-md rounded-xl px-3 py-2 outline outline-gray-100 focus:outline focus:outline-indigo-500 focus:outline-2" name="content" rows={10}></textarea>
      <div className="space-x-3">
        <Button>Actualizar</Button>
        <Button type="button" onClick={router.back}>Cancelar</Button>
      </div>
    </form>
  )
}