import { getTasks } from "./api";
import Button from "./ui/button";
import Item from "./ui/item";
import Link from "next/link";
export default async function TodoList(){
  const tasks = await getTasks();

  return(
    <main className="mt-3">
      <Link href="todo/create">
        <Button>Nova Tarefa</Button>
      </Link>
      {tasks.length?
      tasks.map((props, index)=>
        <Item key={index} {...props} />
      ):
      <p>Sem registro</p> 
    }
    </main>
  )
}