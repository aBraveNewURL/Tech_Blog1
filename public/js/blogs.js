$('#post-delete-click').click(async event => {
    event.preventDefault();
    const user_id = event.target.dataset.userid;
    const blog_creator = event.target.dataset.blogcreator
    const blog_id = event.target.dataset.blog
    console.log(blog_id)
    if(user_id===blog_creator){
        const response = await fetch('/api/blogs/destroy', {
            method: 'Delete',
            body: JSON.stringify({ blog_id }),
            headers: { 'Content-Type': 'application/json' }
          });
          console.log(response)
          if (response.ok) {
            location.replace(`/dashboard`);
          } else {
            alert('Delete post failed T_T');
          }

    }
    else{
        alert("Delete post failed T_T")
    }

})

$('#post-edit-click').click(async event => {
    event.preventDefault();
    const user_id = event.target.dataset.userid;
    const blog_creator = event.target.dataset.blogcreator
    const blog_id = event.target.dataset.blog

    if(user_id===blog_creator){
        location.replace(`/api/blogs/edit/${blog_id}`)
    }
    else{
        alert("Delete post failed T_T")
    }

})