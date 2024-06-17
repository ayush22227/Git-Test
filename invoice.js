$(function () {
    function adjustContent() {
        let components = document.querySelectorAll('#ParentDIV .be-component');
        
        // Reset the initial top position for each component
        components.forEach((component, index) => {
            component.style.top = '0';  // Set top position to 0
        });
    }

    // Initial adjustment
    adjustContent();

    // Adjust on window resize (if needed)
    $(window).on('resize', adjustContent);
});
