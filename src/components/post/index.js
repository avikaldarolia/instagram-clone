import { useRef } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Image from "./image";
import Actions from "./actions";
import Footer from "./footer";
import Comments from "./comments";

export default function Post({ content }) {
  const commentInput = useRef(null);
  // console.log("userLikedPhoto", content.userLikedPhoto);
  const handleFocus = () => commentInput.current.focus();
  // components
  // => header, image, actions (like and comment icons), footer, comments
  //   console.log("content", content);
  return (
    <div className='rounded col-span-4 border bg-white border-gray-primary mb-12'>
      <Header username={content.username} />
      <Image src={content.imageSrc} caption={content.caption} />
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        userLikedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer username={content.username} caption={content.caption} />
      <Comments
        docId={content.docId}
        comments={content.comments}
        commentInput={commentInput}
        posted={content.dateCreated}
      />
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhotos: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
  }),
};
