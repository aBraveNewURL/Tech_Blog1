$(".search").click(function (event) {
    event.preventDefault();
    var element = event.target;
    if (element.matches("button")) {
        var userInput = $(this).children("input").val();
        console.log(userInput);
        location.replace(`/search/${userInput}`);    
    }
});

$(".home").click(event => location.replace("/"));

$(".login").click(event => location.replace("/login"));

$(".post").click(event => location.replace("/post"));

$(".dashboard").click(event => location.replace("/dashboard"));

$(".logout").click(async event => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        location.replace('/');
    } else {
        alert('Log out failed T_T');
    }
});

$('.cardBtn').click(event => {
    var element = event.target;
    var id = element.dataset.id;
    location.replace(`/blog/${id}`);
  });