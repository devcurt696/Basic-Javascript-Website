if (localStorage) {
    $(document).ready(function () {
        //onclick triggers saving to local storage
        $(".save").click(function () {
            // Get name from user input
            var userName = $("#name").val();

            // Stores var firstName to local storage
            localStorage.setItem("user_name", userName);
            alert("Your first name is saved to local storage.");
        });
        // Retrieves firstName from local storage and alerts with a concatenated message on click
        $(".get").click(function () {
            document.getElementById('printname').innerHTML = "Hi, " + localStorage.getItem("user_name") + " , welcome to my website!";
        });

        $(function () {
            var loaded = parseInt(localStorage.getItem('loaded'), 10), loadedNum = loaded ? loaded + 1 : 1;
            localStorage.setItem('loaded', loadedNum);
            $('#printname').prepend(' This page was loaded by you ' + loadedNum + ' times!');
        })
    });
} else {
    alert("Your browser does not support saving data to local storage. Please download a compatible browser");
}
