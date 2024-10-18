import { Tooltip } from "bootstrap";

function initTooltips() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl =>
        new Tooltip(tooltipTriggerEl)
    );
    return () => {
        tooltipList.forEach(tooltip => tooltip.dispose());
    }
}

export {
    initTooltips
}
