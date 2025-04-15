import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = () => {
 const handleSubmit = (e) => {
e.preventDefault();
const form = e.target;
const topic = form.elements.query.value.trim();
if (topic === "") {
  toast("Please enter a search query.");
    return;}
// onSubmit(topic); 
form.reset();
 }
  return (
    <div className={css.div}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.input} name="query"
          type="text"
          autoComplete="off"
          autoFocus
        //   placeholder="Search movie title"
        />
        <button className={css.button} type="submit">Search</button>
      </form>
      <Toaster  position="top-right" />
    </div>
   
  );
};
export default SearchBar;