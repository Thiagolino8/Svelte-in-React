<script lang="ts">
	import { sharedCount } from '../store'
	import svelteLogo from '../assets/svelte.svg'
	export let title: string | undefined = undefined
	let count = 0
	const increment = () => (count += 1)
</script>

<a href="https://svelte.dev" target="_blank" rel="noreferrer">
	<img src={svelteLogo} class="logo" alt="Svelte Logo" />
</a>
{#if title}
	<h2>{title}</h2>
{/if}
<button on:click={increment}>
	Svelte Counter is {count}
</button>
<button on:click={() => $sharedCount++}>Shared Count is {$sharedCount}</button>

<style>
	.logo:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
</style>
