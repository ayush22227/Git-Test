$(function () {
    if ($('.be-component-table').length) {
        $('.be-component-table').each(function () {
            var $this = $(this);
            $this.css('color', 'blue');
        });
    }
});
