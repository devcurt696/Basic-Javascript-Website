$(document).ready(function () {
        const nav = [

                ['index.html', 'Home'],
                ['aboutme.html', 'About Me'],
                ["gallery.html", "Gallery"],
                ["contactme.html", 'Contact Me'],
                ['mypage.html', 'Number Game']

        ];



        for (let link in nav) {


                $('ul').append(`<li><a href="${nav[link][0]}">${nav[link][1]}</a></li>`);

        }




});


