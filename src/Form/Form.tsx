import { FormEvent, useState } from "react";

interface Post {
    title: string,
    caption: string,
    img_url: string,
    user_id: string
}

const Form = () => {
  const [post, setPost] = useState<Post>({
    title: '',
    caption: '',
    img_url: '',
    user_id: ''
  })

  const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        createPost()
  }

  const createPost = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/create_post', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(post)
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <>
      <h1 className="text-center">Create a Post Page</h1>
      <form className="w-25 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            onChange={(event) => {setPost({...post, title: event.target.value})}}
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="caption" className="form-label">
            Caption
          </label>
          <input
            onChange={(event) => {setPost({...post, caption: event.target.value})}}
            type="text"
            className="form-control"
            id="caption"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img-url" className="form-label">
            Image URL:
          </label>
          <input
            onChange={(event) => {setPost({...post, img_url: event.target.value})}}
            type="text"
            className="form-control"
            id="img-url"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user-id" className="form-label">
            Current User ID
          </label>
          <input
            onChange={(event) => {setPost({...post, user_id: event.target.value})}}
            type="text"
            className="form-control"
            id="user-id"
          />
        </div>
        <button type="submit" className="btn btn-primary d-block mx-auto">
          Create Post
        </button>
      </form>
    </>
  );
};
export default Form;
