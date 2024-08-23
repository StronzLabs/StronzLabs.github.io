function closeCollapsible(collapsible) {
    const div = document.getElementById(collapsible);
    const element = div.querySelector('.collapsible-content');
    const button = div.querySelector('.collapsible-button');

    element.style.maxHeight = null;
    button.classList.remove('active');
}

function openCollapsible(collapsible) {
    const div = document.getElementById(collapsible);
    const element = div.querySelector('.collapsible-content');
    const button = div.querySelector('.collapsible-button');

    element.style.maxHeight = `${element.scrollHeight}px`;
    button.classList.add('active');
    window.location = `${window.location.href.split('#')[0]}#${collapsible}`;
}

function toggleCollapsible(collapsible) {
    const div = document.getElementById(collapsible);
    const element = div.querySelector('.collapsible-content');

    if (element.style.maxHeight)
        closeCollapsible(collapsible);
    else
        openCollapsible(collapsible);
}

function closeAllCollapsibles() {
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(collapsible => closeCollapsible(collapsible.id));
}

function focusCollapsible(collapsible) {
    closeAllCollapsibles();
    openCollapsible(collapsible);
}

const collapsible = document.getElementById(window.location.hash.slice(1));
if (collapsible)
    focusCollapsible(collapsible.id);
