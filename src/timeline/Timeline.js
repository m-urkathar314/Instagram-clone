import React from "react";
import { useState } from "react";
import Suggestions from "./suggestions";
import "./Timeline.css";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Babu_Bhaiyaa",
      postImage:
        "https://akm-img-a-in.tosshub.com/aajtak/images/story/202303/babu_bhaiya_hera_pheri-sixteen_nine.jpg",
      likes: 54,
      timestamp: "5min",
    },

    {
      user: "chote_pandit",
      postImage:
        "https://www.bbc.co.uk/staticarchive/b61a9e02712d2015e79017e21ae0b88d2b6a02a3.jpg",
      likes: 140,
      timestamp: "6hr",
    },
    {
      user: "mi_Dhananjay_mane",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzdzDvaUpgdFgOtxkJ1D6T8Mys5HqM9-p-g&usqp=CAU",
      likes: 114,
      timestamp: "1d",
    },
    {
      user: "Lokhandi_manus",
      postImage:
        "https://i.pinimg.com/originals/52/20/57/522057fb84e501ba13543fabab37d35c.jpg",
      likes: 354,
      timestamp: "30min",
    },
    {
      user: "itsMe_PK",
      postImage:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201501/pk-story_650_010515103938_010515072439.jpg?VersionId=YQqpCqWzGPTh0Ji2fx_U4w.IVGgC0EtF",
      likes: 233,
      timestamp: "2hr",
    },
    {
      user: "Ayeee_Raju",
      postImage:
        "https://images1.livehindustan.com/uploadimage/library/2022/12/05/16_9/16_9_1/3_1670233983.jpg",
      likes: 432,
      timestamp: "3d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline_left">
        <div className="timeline_posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline_right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
