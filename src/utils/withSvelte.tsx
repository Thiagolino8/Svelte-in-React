import { useLayoutEffect, useRef } from 'react'
import {SvelteComponentTyped } from 'svelte'

type ExtractProps<Ctor> = Ctor extends new (arg: any) => SvelteComponentTyped<infer Props> ? Props : Record<string, any>

export const withSvelte =
	<T extends new (arg: any) => SvelteComponentTyped>(Component: T) =>
	(props: ExtractProps<T>) => {
		const svelteRef = useRef<HTMLDivElement>(null)
		useLayoutEffect(() => {
			new Component({
				target: svelteRef.current,
				props,
			})
			return () => {
				if (svelteRef.current) svelteRef.current.innerHTML = ''
			}
		}, [])
		return <div ref={svelteRef} />
	}
