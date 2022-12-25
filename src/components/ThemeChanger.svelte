<script>
	import { setTheme } from "../utils/setTheme";
	import moon from "../assets/moon.png";
	import { onMount } from "svelte";
	let theme;
	onMount(() => {
		theme = window.localStorage.getItem("theme") || "dark";
		window.localStorage.setItem("theme", theme);
		setTheme.set(theme);
	});

	const onUpdateTheme = () => {
		const savedTheme = window.localStorage.getItem("theme");
		console.log(`Saved theme is ${savedTheme}`);
		if (savedTheme) {
			const newTheme = theme === "dark" ? "light" : "dark";
			window.localStorage.setItem("theme", newTheme);
			theme = newTheme;
			setTheme.set(theme);
		}
	};
</script>

<div class="theme-toggle">
	<button id="theme-tog" on:click={onUpdateTheme}>
		<img src={moon} alt="Theme" />
		<span>{theme === "dark" ? "Dark" : "Light"}</span>
	</button>
</div>
