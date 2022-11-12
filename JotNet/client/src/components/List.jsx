import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card.jsx';


const List = ({showPostOnClick})=>{
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState('');
  console.log(posts);


  const onClick = (propsId)=>{
    let prop = {id: propsId};
    return showPostOnClick(prop);
  };

  const post = () => {
    if (posts.length === 0) {
      return 'No posts yet. Try making a new one...?';
    }
  };


  const getPosts = () => {

    axios.get('/getPosts').then((response)=>{
      setPosts(response.data);
    }).catch((err)=>{
      console.log(err);
    });
  };

  useEffect(()=>{
    getPosts();
  }, []);


  return (
    <section>
      <header>
        <h2>📚 All Posts</h2>
      </header>
      <Card posts={posts} onClick={onClick} id ={id} setID={setId}/>
      <div
      >{post()} </div>
    </section>
  );

};

export default List;