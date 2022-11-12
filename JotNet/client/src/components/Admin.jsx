import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Admin = ()=> {
  const [posts, setPosts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [getId, setGetID] = useState('');
  const [status, setStatus] = useState('public');

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


  const deletePost = () => {

    if (getId) {
      axios.delete('/deletePost', {data: {id: `${getId}`}, headers: { 'Auth': process.env.AUTH_SECRET } })
        .then(() => {
          console.log('Delete successful');
        }).catch((err)=>{
          console.log(err);
        });
    }
  };


  const changeStatus = () => {
    axios.patch('newStatus/', { status: `${status}` })
      .then(() => {
        console.log('status changed');
      }).catch((err)=>{
        console.log(err);
      });
  };

  const post = () => {
    if (posts.length === 0) {
      return 'No posts yet. Try making a new one...?';
    }
  };



  const isChecked = () =>{
    if (checked === false) {
      setChecked(true);
      setInfo('draft');
    } else {
      setChecked(false);
      setInfo('public');
    }
  };



  return (
    <section>

      <header>
        <h2>⚙️ Admin</h2>
      </header>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Views</th>
            <th>Draft?</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {posts.map((post) =>(
            <tr><td>{post.title}</td>
              <td>{post.views}</td>
              <td>
                <input name="status" type="checkbox" onChange={isChecked} />
              </td>
              <td onClick={ ()=>{ setGetID(post.ID), setTimeout(() => deletePost(), 1000); }}>❌</td></tr>
          ))}

        </tbody>
      </table>
      <div>{post()}</div>
    </section>
  );

};
export default Admin;