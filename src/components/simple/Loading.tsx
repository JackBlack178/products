import './loading.css'
import clsx from "clsx";

const Loading = ({className} : {className?:string}) => {
  return <div className={clsx('loader', className)}></div>
};

export { Loading };