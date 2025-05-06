import { useEffect, RefObject } from 'react'

const useClickOutside = (refs: RefObject<HTMLElement> | RefObject<HTMLElement>[], callback: () => void) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			let isClickOutside: boolean | null = null
	
			if (Array.isArray(refs)) {
				isClickOutside = !refs.some((ref) => {
					if (ref.current && !ref.current.contains(event.target as Node)) {
						return false
					} else {
						return true   
					}
				})
			} else {
				isClickOutside = refs.current && !refs.current.contains(event.target as Node)
			}
			
		if (isClickOutside) {
			callback()
		}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
		document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [refs, callback])
}

export default useClickOutside
