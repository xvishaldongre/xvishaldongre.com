<script>
	import { setTheme } from "../utils/setTheme";
</script>

<svelte:head>
	<link rel="stylesheet" href="/src/styles/theme.css" />
	<link rel="stylesheet" href="/src/styles/new-moon.css" />
	<link rel="stylesheet" href="/src/styles/cube.css" />
	{#if $setTheme === "dark"}
		<link rel="stylesheet" href="/src/styles/dark-mode.css" />
	{:else}
		<link rel="stylesheet" href="/src/styles/style.css" />
	{/if}
</svelte:head>
