$(function () {
    function adjustContent() {
        let components = document.querySelectorAll('#ParentDIV .be-component');
        
        // Add a debug message into each component
        components.forEach((component, index) => {
            let debugMessage = document.createElement('div');
            debugMessage.textContent = `Component ${index + 1} adjusted by JavaScript`;
            component.appendChild(debugMessage);
        });
    }

    // Initial adjustment
    adjustContent();

    // Adjust on window resize (if needed)
    $(window).on('resize', adjustContent);
});
