$(document).ready(function(){
    console.log("ready");
    $(".nav-link").click(function(){
        let class = this.attr('class');
        console.log(class);
    })
})
