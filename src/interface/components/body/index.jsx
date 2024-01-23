const Body = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-y-auto  bg-slate-200 dark:bg-neutral-800">
      { children }
    </div>
  )
}

export default Body