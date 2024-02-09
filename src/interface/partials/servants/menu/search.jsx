import { faBookmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useRef } from 'react'
import { useTable } from '@context'

export const Search = () => {
    const [ option, setOption ] = useState('')
    const [ column, setColumn ] = useState('')
    const [ value, setValue ] = useState('')
    const [ type, setType ] = useState('')

    const [ options, setOptions ] = useState(false)
    const inputRef = useRef(null)
    const { postApi } = useTable()

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.altKey && event.key === 'k') {
                inputRef.current.focus()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    const handleChange = (e) => {
        if (e.target.value) {
            setOptions(true)
        } else {
            setOptions(false)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (postApi('servants/search', option, column, value, type)) {
            inputRef.current.value = ''
            setOptions(false)
        }
    }

    const buttons = [
        { text: 'Matricula', option: 'users', column: 'matriculation', type: 0 },
        { text: 'Nome', option: 'users', column: 'name', type: 0 },
        { text: 'Data Nascimento', option: 'users', column: 'birth', type: 0 },
        { text: 'Email', option: 'users', column: 'email', type: 0 },
        { text: 'Gênero', option: 'users', column: 'gender', type: 0 },
        { text: 'Raça', option: 'users', column: 'race', type: 0 },
        { text: 'Telefone', option: 'users', column: 'phone', type: 0 },
        { text: 'Area-Meio', option: 'areas', column: 'name', type: 1 },
        { text: 'Area-Fim', option: 'areas', column: 'name', type: 2 },
        { text: 'Cargo', option: 'roles', column: 'name', type: 0 },
        { text: 'Departamento', option: 'departments', column: 'name', type: 0 },
        { text: 'Admissão', option: 'users', column: 'admission', type: 0 }
    ]
    
    return (
        <form className='flex flex-col relative' onSubmit={handleSubmit} onChange={handleChange}>
            <div 
                className='bg-gray-50 p-2 rounded-md
                mb-1 flex items-center gap-2 shadow
                dark:bg-neutral-800 dark:shadow-black
                w-60'
            >
                <input 
                    ref={inputRef}
                    type="text" 
                    placeholder='ALT + K'
                    onChange={(e) => setValue(e.target.value)}
                    className='bg-transparent placeholder:text-emerald-500
                    placeholder:dark:text-white outline-0 placeholder:text-sm'
                />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

            <div 
                className={`absolute top-11 bg-gray-50 shadow
                dark:bg-neutral-800 w-60 dark:shadow-black
                rounded-md opacity-1 p-1 py-3 flex-col gap-1
                ${ options ? 'flex' : 'hidden' }`}
            >
                { buttons.map((items, index) => (
                    <div 
                        key={index} 
                        className='mx-2 py-1 pl-2 rounded
                        hover:bg-emerald-500 hover:text-white transition-colors
                        active:bg-emerald-400 dark:hover:bg-neutral-700
                        dark:active:bg-neutral-600'
                    >
                        {/* <input onChange={(e) => setOption(e.target.value)} type="text" className='bg-transparent' value={items.option} /> */}
                        <button 
                            type='submit'
                            className='text-start'
                            onClick={() => { 
                                setOption(items.option);
                                setColumn(items.column);
                                setType(items.type)
                            }}
                        >
                            <FontAwesomeIcon icon={faBookmark} /> { items.text }
                        </button>
                    </div>   
                ))}
            </div>
        </form>
    )
}
