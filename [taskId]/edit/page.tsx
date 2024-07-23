import { redirect } from "next/navigation";
import { getTask } from "../../api";
import UpdateTask from "../../ui/update-form";

export default async function Page({params}: {
  params: {
    taskId: string
  }
}){
  const task = await getTask(params.taskId);
  if(!task) return redirect('/todo');
  
  return(
    <main>
      <UpdateTask data={task.data} />
    </main>
  )
}