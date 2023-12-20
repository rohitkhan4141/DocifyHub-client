/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
// import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";
import useAuthToken from "../../../Hooks/useAuthToken";
import Loading from "../../../components/Loading/Loading";


const SharedDocuments = () => {
    const { user } = useContext(AuthContext);
    const [token] = useAuthToken();

    const {
        data: documents = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["documents", user?._id],
        queryFn: async () => {
            const res = await fetch(
                `https://peach-fishy-gallon.glitch.me/api/v1/docs/documents/share/${user?._id}`,
                {
                    headers: {
                        authorization: `bearer ${localStorage.getItem("token")}`,
                      },
                }
            );
            const data = await res.json();
            return data.result;
        },
    });


    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className='overflow-x-auto w-full p-x-5 mx-10'>
            <h2 className='text-4xl font-bold my-10'>Shared Document</h2>
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
                            </th>
                            <th>
                            </th>
                            <td>
                                <Link
                                    to={`/dashboard/editDocument/${doc._id}`}
                                    className='btn btn-neutral btn-sm'
                                >
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SharedDocuments;