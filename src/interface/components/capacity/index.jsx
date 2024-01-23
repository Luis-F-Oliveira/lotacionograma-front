import { Button } from '@components'

const Capacity = () => {
  return (
    <div className='h-72 rounded-md p-4 bg-gray-50 shadow-md 
    dark:bg-zinc-900 dark:shadow-black'>
        <div className='bg-slate-200 dark:bg-neutral-800 rounded-lg p-2 h-36 overflow-y-auto'>
            <ul>
                <li>Listagem</li>
            </ul>
        </div>

        <form className='flex flex-col gap-3 mt-10'>
            <input className='bg-transparent outline-0 border-b pb-1 text-center border-emerald-500 dark:border-white' type="text" />
            <Button styled='outline'>
                salvar
            </Button>
        </form>
    </div>
  )
}

export default Capacity