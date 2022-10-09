<script>
	import { setTheme } from "../utils/setTheme";
	import newmoon from "../styles/new-moon.css";
	import lightMode from "../styles/style.css";
	import darkMode from "../styles/dark-mode.css";
	import faviconPath from "/favicon.svg";

	import Navigation from "./Navigation.svelte";
	import Footer from "./Footer.svelte";
</script>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href={faviconPath} />
		{#if $setTheme === "dark"}
			<link rel="stylesheet" href="src/styles/dark-mode.css" />
			<link rel="stylesheet" href="src/styles/new-moon.css" />
		{:else}
			<link rel="stylesheet" href="src/styles/style.css" />
			<link rel="stylesheet" href="src/styles/new-moon.css" />
		{/if}
		<slot name="title" />
	</head>

	<body>
		<div id="layout" class="layout">
			<Navigation client:load />
			<main>
				<slot />
			</main>
			<Footer />
		</div>
	</body>
</html>
