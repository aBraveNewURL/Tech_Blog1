$('#commentSubmit').click(async event => {
    event.preventDefault();
    const comment = $('#addComment').val().trim();
    const user_id = event.target.dataset.userid;
    const blog_id = event.target.dataset.blog;
   
  
    if (comment && user_id && blog_id) {
      const response = await fetch('/api/comment/create', {
        method: 'POST',
        body: JSON.stringify({ comment, user_id, blog_id }),
        headers: { 'Content-Type': 'application/json' }
      });
    
      if (response.ok) {
        location.replace(`/blog/${blog_id}`);
      } else {
        alert('Add comment failed T_T');
      }
    } else {
      location.replace(`/login`);
    }
  });

  $('.commentDelete').click(async event => {
    event.preventDefault();
    
    const commentID = event.target.dataset.commentid
    if (commentID) {
      const response = fetch(`/api/comment/destroy/${commentID}`, {
        method: 'delete',
        body: JSON.stringify({commentID}),
        headers: { 'Content-Type': 'application/json' }
      });
        location.reload();
    } else {
      location.replace(`/login`);
    }
  })