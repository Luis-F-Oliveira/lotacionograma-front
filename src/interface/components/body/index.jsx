import { Sidebar, Menu } from '@components'

const Body = ({ children }) => {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-slate-200 dark:bg-neutral-800">
      <div className='fixed'>
        <Sidebar />
      </div>
      <Menu />
      <div className='w-full h-full flex justify-center pt-10'>
        <div className='w-4/6'>
          { children }
        </div>
      </div>
    </div>
  )
}

export default Body