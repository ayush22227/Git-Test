$(function () {
    function applyStylesForPage2() {
        let components = document.querySelectorAll('#ParentDIV .be-component-table');
        let pageHeight = window.innerHeight;
        let parentRect = document.getElementById('ParentDIV').getBoundingClientRect();

        components.forEach((component, index) => {
            let rect = component.getBoundingClientRect();
            let topOffset = rect.top - parentRect.top;

            // Calculate the page number
            let pageIndex = Math.floor((topOffset + window.scrollY) / pageHeight);

            // Apply styles if the component is on page 2 or beyond
            if (pageIndex >= 1) {  // Page index is 0-based; Page 2 is index 1
                component.style.position = 'relative';
                component.style.fontWeight = 'normal';
                component.style.textAlign = 'left';

                // Add a specific class if needed
                component.classList.add('page-2-and-beyond');
            }
        });
    }

    // Initial application
    applyStylesForPage2();

    // Reapply styles on window resize if needed
    $(window).on('resize', applyStylesForPage2);
});
