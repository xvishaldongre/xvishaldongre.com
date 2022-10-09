<script>
    import cube from "../assets/cube.svg";
    import blog from "../assets/nav-blog.png";
    import github from "../assets/nav-github.png";
    import projects from "../assets/nav-projects.png";
    import moon from "../assets/moon.png";
    import ExternalLinkIcon from "../assets/external-link-icon.svg";
    import { slugify } from "../utils/helper";
    import { setTheme } from "../utils/setTheme";

    const logoPath = "/favicon.svg";
    const name = "Vishal Dongre";

    const mainNavItems = [
        { url: "/me", icon: cube, label: "About me" },
        { url: "/blog", icon: blog, label: "Writing" },
        { url: "/projects", icon: projects, label: "Projects" },
    ];

    const socialNavItems = [
        {
            url: "https://github.com/xvishaldongre",
            icon: github,
            label: "GitHub",
        },
    ];
    let theme = "dark";
    const onUpdateTheme = () => {
        const savedTheme = window.localStorage.getItem("theme");
        console.log(`saved theme is ${savedTheme}`);
        if (savedTheme) {
            const newTheme = theme === "dark" ? "light" : "dark";
            window.localStorage.setItem("theme", newTheme);
            theme = newTheme;
            setTheme.set(theme);
        }
    };
</script>

<section class="navigation">
    <div class="container">
        <nav>
            <a href="/" class="item brand">
                <img src={logoPath} alt={name} class="logo" />
                <span>{name}</span>
            </a>
            {#each mainNavItems as item}
                <div class="nav-item-outer">
                    <img src={item.icon} alt={item.label} class="nav-image" />
                    <a
                        href={item.url}
                        id={item.label}
                        class={`item ${slugify(item.label)}`}
                    >
                        <span>{item.label}</span>
                    </a>
                </div>
            {/each}
            {#each socialNavItems as item}
                <div class="nav-item-outer">
                    <img src={item.icon} alt={item.label} class="nav-image" />
                    <a
                        href={item.url}
                        id={item.label}
                        class={`deskhrefp-only item ${slugify(item.label)}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>{item.label}</span>
                        <img
                            src={ExternalLinkIcon}
                            width="16px"
                            height="16px"
                            alt="Check out My Github"
                        />
                    </a>
                </div>
            {/each}
        </nav>
        <div class="theme-toggle">
            <button
                id="theme-tog"
                on:click={() => {
                    console.log("TESESTETSET");
                }}
            >
                <img src={moon} alt="Theme" />
                <span>{theme === "dark" ? "Dark" : "Light"}</span>
            </button>
        </div>
    </div>
</section>
