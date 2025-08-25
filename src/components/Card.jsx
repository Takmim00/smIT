import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {
  const [desert, setDesert] = useState([]);
  useEffect(() => {
    const fetchDesert = async () => {
      try {
        const res = await axios.get(
          "https://task-project-server-five.vercel.app/dessert"
        );
        setDesert(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDesert();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-7">
      <div className="card shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt=""
            className="w-28 rounded-full"
          />
        </figure>
        <div className="p-4">
          <p className="card-title">Dessert</p>
          <p>This is the best desert</p>
          <p>$35</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
