import { lazy, Suspense, useState } from "react";
import List from "./List.jsx";
const Detail = lazy(() => import("./Detail.jsx"));
const Form = lazy(() => import("./Form.jsx"));
const Admin = lazy(() => import("./Admin.jsx"));
const FourOhFour = lazy(() => import("./404.jsx"));

/**
 *
 *
 * ** NOTE: 🔀 The App Component **
 *
 * ⚠️ This component is solely designed to function as a router:
 * "navigating" the user by hiding and showing components.
 *
 * ❌ Do not edit this file except to un-comment the <li>s below. ❌
 *
 * The only state this component keeps track of is the current
 * view, and any optional props to be set when the view changes.
 *
 * ❌ Do NOT add any more properties to the state here! ❌
 *
 * The `changeView` method produces a function which, when called,
 * switches the view. This _produced_ function can be passed an
 * object which contains props for the _next_ view.
 *
 *
 */

export default function App() {
  const [view, setView] = useState({ name: "All Posts", viewProps: {} });

  const changeView = (name, someProps = {}) => {
    return (moreProps = {}) => {
      console.log("Changing view to: " + name);
      setView({ name, viewProps: { ...someProps, ...moreProps } });
    };
  };

  const renderView = () => {
    switch (view.name) {
      case "All Posts":
        return <List showPostOnClick={changeView("Post")} />;
      case "Post":
        return <Detail id={view.viewProps.id}  />;
      case "New Post":
        return <Form onSubmit={changeView("All Posts")} />;
      case "Admin":
        return <Admin />;
      default:
        return <FourOhFour />;
    }
  };

  return (
    <>
      <header>
        <nav>
          <h1 onClick={changeView("All Posts")}>✍️ JotNet</h1>
          <ul>
            <li onClick={changeView("All Posts")}>📚 All Posts</li>

            {/* TODO: Enable this when working on the form:*/}
            <li onClick={changeView("New Post")}>✏️ New Post</li>

            {/* TODO: Enable this when working on the Admin view:*/}
            <li onClick={changeView("Admin")}>⚙️ Admin</li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>{renderView()}</Suspense>
      </main>
    </>
  );
}
