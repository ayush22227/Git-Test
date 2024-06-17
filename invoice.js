$(function () {
    function adjustContent() {
        let components = document.querySelectorAll('#ParentDIV .be-component');
        let parentRect = document.getElementById('ParentDIV').getBoundingClientRect();

        components.forEach((component, index) => {
            let rect = component.getBoundingClientRect();
            let topOffset = rect.top - parentRect.top;

            // Calculate new top offset to ensure content starts from the top of the page
            let newTopOffset = topOffset - rect.top;

            // Adjust the top position of the component
            component.style.top = newTopOffset + 'px';

            // Log the adjustment to the console
            console.log(`Adjusted component at index ${index}: new top offset = ${newTopOffset}px`);
        });
    }

    // Initial adjustment
    adjustContent();

    // Adjust on window resize
    $(window).on('resize', adjustContent);
});
