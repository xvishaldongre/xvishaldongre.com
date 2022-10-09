<script>
    import { setTheme } from "../utils/setTheme";
</script>

{#if $setTheme === "dark"}
    <link rel="stylesheet" href="src/styles/dark-mode.css" />
    <link rel="stylesheet" href="src/styles/new-moon.css" />
{:else}
    <link rel="stylesheet" href="src/styles/style.css" />
    <link rel="stylesheet" href="src/styles/new-moon.css" />
{/if}
