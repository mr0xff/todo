import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  del?: boolean;
  ok?: boolean;
};

export default function Button({
  children,
  del,
  ok,
  ...rest
}: ButtonProps
){
  return <button 
    {...rest} 
    className={clsx("hover:bg-indigo-400 bg-indigo-500 text-white py-2 px-3 rounded-xl shadow-md text-sm font-medium", 
      {
        'bg-red-500 hover:bg-red-400': del,
        'bg-green-500 hover:bg-green-400': ok,
      })
    }>{children}</button>
}