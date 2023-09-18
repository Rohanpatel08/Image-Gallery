import React from 'react';


const ImageCard = ({ img }) => {

    const tags = img.tags.split(',');
    return (
        <div className='mx-2 my-2'>
            <div className="card mx-3 shadow" style={{ width: "18rem" }}>
                <img src={img.webformatURL} className="card-img-top" alt="..." style={{ height: "18rem" }} />
                <div className="card-body">
                    <h5 className="card-title">Photo by {img.user}</h5>
                    <p className='mb-0'><strong>Views: </strong>{img.views}</p>
                    <p className='mb-0'><strong>Likes: </strong>{img.likes}</p>
                    <p><strong>Downloads: </strong>{img.downloads}</p>
                    <div className='row'>
                        {tags.map(tag =>(
                            <h5><span key={img.id} className='badge badge-pill badge-primary mx-1'>#{tag}</span></h5>
                        ))}
                        {/* <h5><span className='badge badge-pill badge-primary mx-2'>#tag1</span></h5> */}
                    </div>
                    <a href={img.previewURL} download={"image "+img.id} className='btn btn-outline-primary btn-sm '>Download</a>
                </div>
            </div>
        </div>
    )
}

export default ImageCard
