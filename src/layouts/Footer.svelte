<script>
    import cube from "../assets/cube.svg";
    import blog from "../assets/nav-blog.png";
    import github from "../assets/nav-github.png";
    import projects from "../assets/nav-projects.png";
    import astro from "../assets/astrolight.svg";

    const creator = "Vishal Dongre";
    const links = [
        {
            url: "https://www.linkedin.com/in/xvishaldongre/",
            label: "LinkedIn",
        },
        { url: "https://twitter.com/xvishaldongre", label: "Twitter" },
        { url: "https://www.instagram.com/xvishaldongre/", label: "Instagram" },
        { url: "https://www.xvishaldongre.com/rss.xml", label: "RSS" },
    ];
    const madeWithLinks = [
        { url: "https://astro.build/", label: "Astro", icon: astro },
        {
            url: "https://github.com/xvishaldongre",
            label: "GitHub",
            icon: github,
        },
    ];
</script>

<footer class="footer">
    <section>
        <nav>
            <span class="desktop-only">Made by {creator}</span>
            {#each links as link}
                <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={link.url}
                >
                    {link.label}
                </a>
            {/each}
        </nav>
        <nav>
            {#each madeWithLinks as link}
                <a
                    href={link.url}
                    title={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={link.url}
                >
                    <img src={link.icon} alt={link.label} />
                    <span>{link.label}</span>
                </a>
            {/each}
        </nav>
    </section>
</footer>
