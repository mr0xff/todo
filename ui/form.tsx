'use client';
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { addTask } from "../api";
import Button from "./button";
import { useRouter } from "next/navigation";

export default function TaskForm(){
  const [ state, action ] = useFormState(addTask, { message: ''});
  const router = useRouter();
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
      <textarea placeholder="Escreva alguma nota ..." className="shadow-md rounded-xl px-3 py-2 outline outline-gray-100 focus:outline focus:outline-indigo-500 focus:outline-2" name="content" rows={10}></textarea>
      <div className="space-x-3">
        <Button>Salvar</Button>
        <Button type="button" onClick={router.back}>Voltar</Button>
      </div>
    </form>
  )
}