import { Sidebar, Menu } from '@components'
import { SidebarProvider, ModalProvider } from '@context'

const Body = ({ children }) => {
  return (
    <ModalProvider>
      <SidebarProvider>
        <div className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-slate-300 dark:bg-neutral-800">
          <div className='fixed'>
            <Sidebar />
          </div>
          <Menu />
          <div className='w-full h-full flex justify-center pt-10'>
            <div className='w-5/6 text-emerald-500 dark:text-white'>
              { children }
            </div>
          </div>
        </div>
      </SidebarProvider>
    </ModalProvider>
  )
}

export default Body