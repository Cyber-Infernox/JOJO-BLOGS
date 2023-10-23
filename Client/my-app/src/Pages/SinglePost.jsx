import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../Context/authContext";

const SinglePost = () => {
  const PF = process.env.REACT_APP_SERVER_END;
  const filePath = process.env.REACT_APP_PUBLIC_FOLDER;

  const [post, setPost] = useState({});

  const location = useLocation();
  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(`${PF}posts/${postId}`, { withCredentials: true });
      // setPost({});
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${PF}posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [PF, postId]);

  return (
    <>
      <Navbar />
      <div className="single">
        <div className="content">
          <img src={`${filePath}${post?.img}`} alt="" />
          <div className="user">
            {post.userImg && <img src={post.userImg} alt="" />}
            <div className="info">
              <span>{post.username}</span>
              <p>Posted {moment(post.date).fromNow()}</p>
            </div>
            {currentUser && currentUser.username === post.username && (
              <div className="edit">
                <Link to={`/write?edit=2`} state={post}>
                  <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
              </div>
            )}
          </div>
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
        </div>
        <Menu cat={post.cat} />
      </div>
      <Footer />
    </>
  );
};

export default SinglePost;
