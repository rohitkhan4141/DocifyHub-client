/* eslint-disable react/prop-types */

import { useState } from "react";

const ShareModal = ({ shareItem, cancelShare, shareHandler,setShareItem }) => {
    const [email, setEmail] = useState("");

    const handleShare = () => {
        shareHandler(shareItem, email);
        setEmail("");
        setShareItem(null)
    };

    return (
        <div>
            <input type='checkbox' id='share-modal' className='modal-toggle' />
            <div className='modal'>
                <div className='modal-box'>
                    <h3 className='font-bold text-lg'>
                        {`Want to Share ${shareItem?.title} ?`}
                    </h3>
                    <div className='modal-action'>
                        <input
                            type="email"
                            placeholder="Enter shared email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='input input-bordered input-accent w-full max-w-xs'
                        />
                        <button onClick={handleShare} className='btn btn-accent'>
                            Share
                        </button>
                        <button onClick={cancelShare} className='btn btn-primary'>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;
