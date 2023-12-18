
function Mid() {
    return (
        <div className='px-4 lg:px-10'>
            <h2 className='text-4xl text-center font-bold my-10'>
                Features
            </h2>
            <div className="flex flex-col items-center justify-center">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-5 pb-20'>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Real-time Collaboration!
                            <div className="badge badge-accent">NEW</div>
                            
                        </h2>
                        <p>Enable multiple users to work on a document simultaneously</p>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Group Chat!
                            <div className="badge badge-accent">NEW</div>
                        </h2>
                        <p>Incorporate a built-in chat feature within Group People</p>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://images.pexels.com/photos/1419924/pexels-photo-1419924.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Version History!
                            <div className="badge badge-accent">Upcoming</div>
                        </h2>
                        <p>Maintain a comprehensive history of document revisions</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Mid







