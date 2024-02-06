import { faBookmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useRef } from 'react'

export const Search = () => {
    const [ options, setOptions ] = useState(false)
    const inputRef = useRef(null)

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

    const buttons = [
        { text: 'Matricula', value: 1 },
        { text: 'Nome', value: 2 },
        { text: 'Data Nascimento', value: 3 },
        { text: 'Email', value: 4 },
        { text: 'Genero', value: 5 },
        { text: 'Raça', value: 6 },
        { text: 'Telefone', value: 7 },
        { text: 'Area-Meio', value: 8 },
        { text: 'Area-Fim', value: 9 },
        { text: 'Cargo', value: 10 },
        { text: 'Departamento', value: 11 },
        { text: 'Admissão', value: 12 }
    ]
    
    return (
        <form className='flex flex-col relative'>
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
                    onChange={handleChange}
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
                { buttons.map((button, index) => (
                    <button 
                        key={index}
                        className='text-start mx-2 py-1 pl-2 rounded
                        hover:bg-emerald-500 hover:text-white transition-colors
                        active:bg-emerald-400 dark:hover:bg-neutral-700
                        dark:active:bg-neutral-600'
                    >
                        <FontAwesomeIcon icon={faBookmark} /> { button.text }
                    </button>
                ))}
            </div>
        </form>
    )
}
