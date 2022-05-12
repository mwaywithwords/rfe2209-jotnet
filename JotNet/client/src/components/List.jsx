import React from "react";
import axios from "axios";


export default class List extends React.Component {
 
  render() {
    return (
      <section>
        <header>
          <h2>📚 All Posts</h2>
        </header>
        Render posts as Card components here...
        <div id="placeholder-div">No posts yet. Try making a new one...?</div>
      </section>
    );
  }
}
