import { getTask } from "../api";
import DeleteButton from "../ui/delete-button";
import Button from "../ui/button";
import DoneButton from "../ui/done-button";
import Link from "next/link";

export default async function Page({
  params
}: {
  params: {
    taskId: string;
  }
}){
  const task = await getTask(params.taskId);

  return(
    <main className="mt-3">
      <p className="text-lg">
        {task?.data}
      </p>

      <div className="space-x-1">
        <Link href={params.taskId+'/edit'}>
          <Button>Editar</Button>
        </Link>
        <DeleteButton taskId={params.taskId} />
        {!task?.doned && <DoneButton taskId={params.taskId} />}
      </div>
    </main>
  )
}