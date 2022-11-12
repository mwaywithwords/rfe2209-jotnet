import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';

export default function Card({id, setID, posts, onClick }) {



  return (<ul>
    {posts.map((post) =>(
      <aside onClick={(e)=>{
        onClick(post.ID);
      }} >
        <img
          src={`https://source.unsplash.com/${post.image}/384x192`}
          width="384"
          height="192"
          alt="header image"
        />
        <h2>{post.title} <sup>{post.status}</sup></h2>
        <small>{formatDistanceToNow(new Date(post.updated_at))}</small>
        <p>{post.summary}</p>
      </aside>
    ))}

  </ul>);

}
