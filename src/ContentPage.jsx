import { useParams, Link, useNavigate } from "react-router-dom";
import data from "./data";

function ContentPage() {
  const { category, id } = useParams();
  const navigate = useNavigate();

  if (id) {
    const item = data.find(obj => obj.id === id);

    return (
      <div>
        <h1>{item.title}</h1>
        <p>{item.content}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  const filtered = data.filter(item => item.category === category);

  return (
    <div>
      <h1>{category}</h1>
      <ul>
        {filtered.map(item => (
          <li key={item.id}>
            <Link to={`/category/${category}/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default ContentPage;