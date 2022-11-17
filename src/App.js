import axios from "axios";
import React from "react";

const baseURL = "https://express-taller-production.up.railway.app/api/products";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="container">
      <div className="row">
        {
          post.map((item) => {
            return (
              <div className="card" key={item._id}>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p> $ {item.price}</p>
                <p>Quantity: {item.stock}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}