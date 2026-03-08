document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('shareButton');
    const tooltip = document.getElementById('tooltip');
    const allShareButtons = document.querySelectorAll('.share__button');

    const toggleShare = (e) => {
        e.stopPropagation();

        const isActive = tooltip.classList.toggle('active');
        shareButton.classList.toggle('active');

        if (isActive) {
            document.addEventListener('click', closeTooltip);
        } else {
            document.removeEventListener('click', closeTooltip);
        }
    };

    const closeTooltip = (e) => {
        if (!tooltip.contains(e.target) && !shareButton.contains(e.target)) {
            tooltip.classList.remove('active');
            shareButton.classList.remove('active');
            document.removeEventListener('click', closeTooltip);
        }
    };

    allShareButtons.forEach(btn => {
        btn.addEventListener('click', toggleShare);
    });
});