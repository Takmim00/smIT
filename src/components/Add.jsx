import axios from "axios";
import { CiBoxList } from "react-icons/ci";
import { MdOutlineBallot } from "react-icons/md";
import Card from "./Card";

const Add = () => {
  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const subTitle = form.subTitle.value;
    const price = form.price.value;

    console.log(title, subTitle, price);
    const addData = {
        title,
        subTitle,
        price
    };
    try{
        const {data} = await axios.post("http://localhost:5000/add-dessert",addData)
        console.log(data);
    }catch(err){
        console.log(err);
    }
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between  my-4">
        <div>
          <h3 className="font-semibold text-xl">Manage Dishes</h3>
        </div>
        <div className="flex  gap-4">
          <input
            type="search"
            name=""
            id=""
            placeholder="search"
            className="input "
          />
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            + Add Dishes
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <h4>Desserts(0)</h4>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <button className="btn">
              <MdOutlineBallot />
            </button>
            <button className="btn">
              <CiBoxList />
            </button>
          </div>
          <div>
            <button className="btn ">Filter</button>
          </div>
        </div>
      </div>
      <Card/>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form onSubmit={handleSubmit} className="modal-box space-y-2">
          <div className="flex items-center gap-2">
            <p>Dishes Name :</p>
            <input type="text" name="title" id="" className="input" />
          </div>
          <div className="flex items-center gap-2">
            <p>Dishes Title :</p>
            <input type="text" name="subTitle" id="" className="input" />
          </div>
          <div className="flex items-center gap-2">
            <p>Dishes Price :</p>
            <input type="number" name="price" id="" className="input" />
          </div>
         

          
          <button className="btn">ADD Dishes</button>
        </form>
      </dialog>
    </div>
  );
};

export default Add;
