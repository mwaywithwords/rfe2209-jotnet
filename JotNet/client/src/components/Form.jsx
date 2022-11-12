import React, {useState, useEffect} from 'react';
import axios from 'axios';
import parseContent from "../lib/parseContent.js"

const Form = ()=> {

  const [info, setInfo] = useState({
    title: '',
    image_id: '',
    status: 'public',
    content: "",
    summary: ""
  });
  const [checked, setChecked] = useState(false)


  const isChecked = () =>{
    if(checked === false){
      setChecked(true)
      setInfo({...info, status: 'draft'});
    } else {
      setChecked(false)
      setInfo({...info, status: 'public'});
    }
  }


  const sendPost = () =>{
    axios.post('/addPost',{info})
      .then((response) => {
        console.log(response);
      } )
      .catch((err)=> {
        console.log(err);
      });
  };


  return (
    <section>
      <header>
        <h2>✏️ New Post</h2>
      </header>
      <form>
        <label>
            Title:
          <input
            type="text"
            name="title"
            placeholder="My brand new post..."
            required
            autoComplete="off"
            value={info.title}
            onChange={(e)=>{
              setInfo({...info, title: e.target.value});
            }}
          />
        </label>

        <label>
            Image ID: <small> Psst! Grab one below... </small>
          <input
            type="text"
            name="image_id"
            placeholder="RSQadxSSW_Y"
            required
            autoComplete="off"
            value={info.image_id}
            onChange={(e)=>{
              setInfo({...info, image_id: e.target.value});
            }}
          />
        </label>

        <label>
            Post:
          <textarea
            cols="48"
            rows="8"
            name="content"
            placeholder="Lorem ipsum dolor sit amet..."
            required
            autoComplete="off"
            onChange={(e)=>{
              setInfo({...info, content: parseContent(e.target.value).content})
            }}
          />
        </label>
        <label>
            Summary:
          <textarea
            cols="24"
            rows="4"
            maxLength="256"
            name="summary"
            placeholder="put your summary here "
            required
            autoComplete="off"
            onChange={(e)=>{
              setInfo({...info, summary: parseContent(e.target.value).summary})
            }}

          />
        </label>

        <label>
          <input name="status" type="checkbox" onChange={isChecked}/>
            Draft?
        </label>

        <input type="submit" value="Save Post"  onClick={sendPost}/>



        <hr />

        <small>🐶 Some possible image IDs</small>
        <ul>
          <li>
            <code>RSQadxSSW_Y</code>
          </li>
          <li>
            <code>lJJlaUWYrPE</code>
          </li>
          <li>
            <code>8-sgismcDAQ</code>
          </li>
          <li>
            <code>2joVhR1OWSc</code>
          </li>
          <li>
            <code>wOHH-NUTvVc</code>
          </li>
        </ul>
        <small>
            Or copy an
          <a href="https://unsplash.com/s/photos/funny-dog">Unsplash</a> image's ID
            from its URL
        </small>
      </form>
    </section>
  );
};


export default Form;