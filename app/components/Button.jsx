const Button = ({ title }) => {
  return (
    <button className="bg-neutral-700 text-xl text-neutral-0 py-2 px-5 rounded-full hover:cursor-pointer hover:bg-neutral-600 border border-neutral-600">
      {title}
    </button>
  );
};
export default Button;
