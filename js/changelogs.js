async function populateChangelog() {
    const changelog = document.getElementById('changelog');

    if (!changelog)
        return;
    
    const response = await fetch(`https://api.github.com/repos/StronzLabs/Stronzflix/releases`);
    if (!response.ok)
        return;
    const releases = await response.json();

    for (const release of releases) {
        const releaseSection = document.createElement('section');
        releaseSection.classList.add('release');
        releaseSection.innerHTML = `
            <a href=${release.html_url}><h2>${release.name}</h2></a>
            <p>${release.body.replaceAll("\n", "<br>")}</p>
        `;
        changelog.appendChild(releaseSection);
    }
}

populateChangelog();
