function loadNavbar() {
    document.getElementById("rwNavbar").innerHTML = `
<style>
    .navbar-brand {
        color: #ffffff;
    }

    .navbar {
        border-radius: 0px;
    }

    html {
        position: relative;
        min-height: 100%;
    }
</style>
<header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top greyeyBlack">
        <a class="navbar-brand" href="https://duckbiscuitdevs.github.io">DuckBiscuitDevs</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="https://duckbiscuitdevs.github.io/novobot">NovoBot</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://duckbiscuitdevs.github.io/devsapp">DevsApp</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://duckbiscuitdevs.github.io/botbiscuit">BotBiscuit</a>
                </li>
            </ul>
        </div>
    </nav>
</header>
    `
}

function loadFooter() {
    document.getElementById("rwFooter").style.width = "100%"
    document.getElementById("rwFooter").style.textAlign = "center"
    document.getElementById("rwFooter").style.position = "absolute"
    document.getElementById("rwFooter").style.bottom = "10px"
    document.getElementById("rwFooter").innerHTML = `
Page &copy; <a href="https://dev801.github.io" style="color: var(--nv-white)">George-801/dev801</a> 2020 <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0; height: 20px;" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br /><small>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a></small>
`
}