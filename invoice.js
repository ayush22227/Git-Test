$(function () {
    function adjustContent() {
        let components = document.querySelectorAll('.be-component');
        let parentDiv = document.getElementById('ParentDIV');
        let pageHeight = parentDiv.clientHeight / Math.ceil(parentDiv.clientHeight / window.innerHeight);

        components.forEach((component, index) => {
            let rect = component.getBoundingClientRect();
            let parentRect = parentDiv.getBoundingClientRect();

            // Calculate the top offset relative to the ParentDIV
            let topOffset = rect.top - parentRect.top;

            // Adjust the component's position if it is creating extra white space
            if (topOffset > pageHeight) {
                let previousPageTopOffset = Math.floor(topOffset / pageHeight) * pageHeight;
                component.style.top = (parseFloat(component.style.top) - (topOffset - previousPageTopOffset)) + 'px';
            }
        });
    }

    // Adjust content initially and on window resize
    adjustContent();
    $(window).on('resize', adjustContent);
});
