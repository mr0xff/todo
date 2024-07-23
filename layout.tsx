export default function Layout({
  children
}:{
  children: React.ReactNode;
}){
  return(
    <main className="md:px-32 lg:px-96 px-3">
      {children}
    </main>
  )
}