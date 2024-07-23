'use client';
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function Item({
  data,
  taskId,
  doned,
  createAt
}: {
  data: string;
  taskId: string; 
  doned: boolean;
  createAt: number;
}){
  const router = useRouter();

  return(
    <div 
      onClick={()=>router.push('todo/'+taskId)} 
      className="flex gap-3 justify-between hover:bg-indigo-500 bg-slate-700 text-white shadow shadow-indigo-500/25 cursor-pointer rounded-md mt-3 w-full px-3 py-3">
      <h2 className={clsx("max-w-sm line-clamp-1 flex-grow font-medium", { 'line-through': doned })}>{data}</h2>
      <span className="px-3 py-1 rounded-xl bg-white text-black  text-sm font-medium right-2 pr-3">{new Date(createAt).toLocaleString('pt', { dateStyle: 'medium'})}</span>
    </div>
  )
}