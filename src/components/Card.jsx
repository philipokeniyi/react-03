import PropTypes from "prop-types";

function Card({ username = "PO", post = "Not found" }) {
  return (
    <div className="flex flex-col items-center gap-6 p-3 md:flex-row md:gap-8 rounded-2xl bg-blue-200">
      <div>
        <img
          className="size-32 shadow-xl rounded-md"
          alt=""
          src="https://cdn.pixabay.com/photo/2022/04/24/02/30/kid-7152758_1280.jpg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-medium">{username}</span>
        <span className="font-medium text-sky-500">{post}</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  username: PropTypes.string,
  post: PropTypes.string,
};

export default Card;
