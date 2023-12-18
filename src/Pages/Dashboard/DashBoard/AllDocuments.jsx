import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
// import toast from "react-hot-toast";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
import Loading from "../../../components/Loading/Loading";
import DeleteModal from "../../../components/Modal/DeleteModal";
import ShareModal from "../../../components/Modal/ShareModal";

const AllDocuments = () => {
    const [deleteItem, setDeleteItem] = useState(null);
    const [shareItem, setShareItem] = useState(null);
    const { user } = useContext(AuthContext);


    const {
        data: documents = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["documents", user?._id],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/api/v1/docs/documents/${user?._id}`,
                {
                    headers: {
                        "authorization": `bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            const data = await res.json();
            return data.result;
        },
    });

    const cancleDelete = () => {
        setDeleteItem(null);
    };
    const cancelShare = () => {
        setShareItem(null);
    };

    const deleteHandler = (doc) => {
        fetch(`http://localhost:5000/api/v1/docs/documents/${doc._id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                toast.success("Delete Successfully");
                refetch()
            })
            .catch((err) => {
                toast.error("Something Went Wrong");
                console.log(err)
            });
    };

    const shareHandler = (doc,email) => {
        fetch(`http://localhost:5000/api/v1/docs/documents/${doc?._id}/share`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({userEmail : email}),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.status == 400){
                    toast.error("Something Went Wrong");
                }else{
                    toast.success("Shared Successfully");
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something Went Wrong");
            });
    }

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className='overflow-x-auto w-full p-x-5 mx-10'>
            <h2 className='text-4xl font-bold my-10'>My Documents</h2>
            <table className='table w-full'>
                <thead>
                    <tr>
                        <th>Document Title</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map((doc) => (
                        <tr key={doc?._id}>
                            <td>{doc?.title}</td>
                            <td></td>
                            <td></td>
                            <th>
                                <Link
                                    to={`/dashboard/editDocument/${doc._id}`}
                                    className='btn btn-neutral btn-sm'
                                >
                                    Edit
                                </Link>
                            </th>
                            <th>
                                <label
                                    onClick={() => {setShareItem(doc)}}
                                    htmlFor="share-modal"
                                    className='btn btn-accent btn-sm'
                                >
                                    Share
                                </label>
                            </th>
                            <td>
                                <label
                                    onClick={() => setDeleteItem(doc)}
                                    htmlFor='delete-modal'
                                    className='btn btn-error btn-sm'
                                >
                                    Delete
                                </label>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {deleteItem && (
                <DeleteModal
                    deleteItem={deleteItem}
                    cancleDelete={cancleDelete}
                    deleteHandler={deleteHandler}
                />
            )}
            {
                shareItem &&(<ShareModal 
                    shareItem = {shareItem}
                    cancelShare = {cancelShare}
                    shareHandler = {shareHandler}
                    setShareItem={setShareItem}
                />)
            }
        </div>
    );
};

export default AllDocuments;