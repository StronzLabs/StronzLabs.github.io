async function fetchLatestReleaseAttachments() {
    try {
        const response = await fetch(`https://api.github.com/repos/StronzLabs/Stronzflix/releases/latest`);
        const release = await response.json();

        if (response.ok) {
            const attachments = release.assets.map(asset => ({
                name: asset.name,
                downloadUrl: asset.browser_download_url
            }));
            
            return attachments;
        } else {
            throw new Error(`Failed to fetch latest release: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching latest release:', error);
        return null;
    }
}

async function populateDownloadButtons() {
    const attachments = await fetchLatestReleaseAttachments();

    const buttons = document.querySelectorAll('.button');
    for (const button of buttons) {
        const platform = button.getAttribute('href');
        const attachment = attachments.find(attachment => attachment.name.includes(platform));
        button.href = attachment.downloadUrl;
        button.download = attachment.name;
    }
}

populateDownloadButtons();
