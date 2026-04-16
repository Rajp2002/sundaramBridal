document.addEventListener('DOMContentLoaded', () => {

    // ── Package Category Tabs (Bridal / Engagement / Sider) ──────────────
    const pkgTabs = document.querySelectorAll('.pkg-tab');
    const pkgPanels = document.querySelectorAll('.pkg-panel');

    if (pkgTabs.length) {
        pkgTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.pkg;

                // Update tab active state
                pkgTabs.forEach(t => t.classList.remove('is-active'));
                tab.classList.add('is-active');

                // Show matching panel
                pkgPanels.forEach(panel => {
                    if (panel.id === `pkg-${target}`) {
                        panel.classList.add('is-active');
                    } else {
                        panel.classList.remove('is-active');
                    }
                });
            });
        });
    }
});

