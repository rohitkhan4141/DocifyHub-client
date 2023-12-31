import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";

function CreateDocument() {
  const { user } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://peach-fishy-gallon.glitch.me/api/v1/docs/create-document",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ title: inputValue, ownerId: user._id }),
        }
      );

      if (response.ok) {
        toast.success("Document created successfully!");
      } else {
        toast.error("Failed to create document");
      }
    } catch (error) {
      toast.error("Failed to create document");
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/ddfwus0oi/image/upload/v1703063517/WhatsApp_Image_2023-12-18_at_10.39.43_PM_svflz5.jpg)",
      }}
    >
      <div className="hero min-h-screen pb-20 px-4 overflow-x-auto w-full">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={sendMessage}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Type your Title Name..."
                className="input input-bordered input-accent w-full max-w-xs"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent">
                Create Document
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateDocument;
