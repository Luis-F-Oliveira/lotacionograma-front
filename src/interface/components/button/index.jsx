import React from 'react'

const Button = ({ type, styled, size, children }) => {
  let style = ''
  switch (styled) {
    case 'solid':
      style = `
        text-white bg-emerald-500
        w-full py-1 text-${ size ? size : 'md' }
        hover:bg-emerald-600 transition-colors
        duration-500 active:bg-emerald-400
        rounded-md dark:bg-neutral-500
        dark:hover:bg-neutral-600
        dark:active:bg-neutral-400
      `
      break
    case 'outline':
      style = `
        text-emerald-500 border-emerald-500
        border-2 w-full rounded-md transition-colors
        duration-500 hover:bg-emerald-500 hover:text-white
        active:border-emerald-400 active:bg-emerald-400
        dark:border-neutral-500 dark:text-white
        dark:hover:bg-neutral-600 dark:hover:border-neutral-600
        dark:active:bg-neutral-400 dark:active:border-neutral-400
      `
      break
  }
  return (
    <button type={`${type}`} className={`${style}`}>
        { children }
    </button>
  )
}

export default Button