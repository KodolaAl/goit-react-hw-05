import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({onSubmit}) => {
 const handleSubmit = (e) => {
e.preventDefault();
const form = e.target;
const query = form.elements.query.value.trim().toLowerCase();
if (query === "") {
  toast("Please enter a search query.");
    return;}
onSubmit(query); 
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