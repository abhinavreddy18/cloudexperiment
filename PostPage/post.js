        let Posts = [];
        function passValues(ev) {
            if (localStorage.PostsRecord) {
                Posts = JSON.parse(localStorage.getItem("posts"));
            }
            ev.preventDefault();   // To stop the form from submitting.
            let post = {
                id: Date.now(),
                text: document.getElementById("post_content").value,
            }
            Posts.push(post);
            document.forms[0].reset();
            localStorage.setItem("posts", JSON.stringify(Posts));
            console.log(Posts);
        }