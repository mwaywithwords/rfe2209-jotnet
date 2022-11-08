import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { formatDistanceToNow, parseISO } from 'date-fns';

const Detail = ({id})=>{
  const [singlePost, setSinglePost] = useState([]);


  const getPostsById = () => {

    axios.get(`/getPosts/${id}`).then((response)=>{
      setSinglePost(response.data);
      console.log(response.data);
    }).catch((err)=>{
      console.log(err);
    });
  };

  useEffect(()=>{
    getPostsById();
  }, []);


  // See examples/Detail.html for what this component should render.
  return (
    <ul>
      {singlePost.map((onePost) =>(<article>
        <h2>{onePost.title} <sup>{onePost.draft}</sup></h2>
        <img
          src={`https://source.unsplash.com/${onePost.image}/768x384`}
          width="768"
          height="384"
          alt="header image"
        />
        <small>{formatDistanceToNow(new Date(onePost.updated_at))}</small>
        <p>{onePost.summary}</p>

      </article>
      ))}
    </ul>

  );

};
export default Detail;