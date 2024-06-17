$(function () {
    function adjustContent() {
        let components = document.querySelectorAll('.be-component');
        let firstPageHeight = window.innerHeight;

        components.forEach((component, index) => {
            // Only adjust components on the second page and onwards
            if (index > 0) {
                let rect = component.getBoundingClientRect();
                let parentRect = document.getElementById('ParentDIV').getBoundingClientRect();

                // Calculate the top offset relative to the ParentDIV
                let topOffset = rect.top - parentRect.top;

                // Adjust the component's position if it is creating extra white space
                if (topOffset > firstPageHeight) {
                    component.style.top = (parseFloat(component.style.top) - (topOffset - firstPageHeight)) + 'px';
                }
            }
        });
    }

    // Adjust content initially and on window resize
    adjustContent();
    $(window).on('resize', adjustContent);
});
