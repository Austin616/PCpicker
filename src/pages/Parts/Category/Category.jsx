import { useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const { category } = useParams();
  console.log(category);

  return (
    <div>
        <h1 className="text-2xl font-bold text-center mt-4">{category}</h1>
        <CategoryCard category={category} />
    </div>
  );
};

export default Category;
