$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collpase');

    $toggleCollapse.click(function(){
        $nav.toggleClass('.collpase');
    })
})