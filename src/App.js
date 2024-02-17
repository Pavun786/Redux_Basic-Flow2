import logo from './logo.svg';
import './App.css';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <div>
      <AddPostForm/>
      <PostsList/>
    </div>
  );
}

export default App;
