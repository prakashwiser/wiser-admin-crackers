import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Link from 'next/link';
const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [piece, setPiece] = useState('');
    const [image, setImage] = useState('');
    const [imageData, setImageData] = useState('');
    const [listingType, setListingType] = useState('others');
    // Default to sale

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save the form data and image data to local storage
        const listingData =
        {
            name,
            price, piece,
            image, imageData,
            listingType
        };
        console.log(listingData);
        axios.post(`https://66ea644a55ad32cda4789858.mockapi.io/crackers`, {
            name, price, piece, image, listingType
        })
        // const listings =
        //     JSON.parse(
        //         localStorage.getItem('listings')
        //     ) || [];
        // listings.push(listingData);
        // localStorage.setItem('listings', JSON.stringify(listings));

        // Reset form fields after submission
        setName('');
        setPiece('');
        setPrice('');
        setImage('');
        setImageData('');
        setListingType('others');
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageData(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
            setImage(file.name);
        }
    };

    return (
        <div className="container w-50 m-auto vh-100 d-flex flex-column justify-content-center">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 className="mt-3 mb-4">Add New Products</h2>
                <h2>
                    <Link className="btn btn-success"
                        href="Products">
                        Products
                    </Link>
                </h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="image"
                        className="form-label">Image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                {imageData && (
                    <img src={imageData}
                        alt="Selected"
                        className="img-fluid mb-3"
                        style={{ maxWidth: '200px' }} />
                )}
                <div className="mb-3">
                    <label htmlFor="name"
                        className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={
                            (e) =>
                                setName(e.target.value)
                        }
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="price"
                        className="form-label">
                        Price
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="piece"
                        className="form-label">
                        Piece
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="piece"
                        value={piece}
                        onChange={(e) => setPiece(e.target.value)}
                        required />
                </div>
                <div className="mb-3">
                    <label htmlFor="category"
                        className="form-label">
                        Categories
                    </label>
                    <select
                        className="form-control"
                        id="category"
                        value={listingType}
                        onChange={(e) => setListingType(e.target.value)}
                        required>
                        <option value="bomb">Bomb</option>
                        <option value="chakkaram">Sangu chakkaram</option>
                        <option value="lakshmi">Lakshmi</option>
                        <option value="saram">Saram vedi</option>
                        <option value="solapori">Sola Pori</option>
                        <option value="others">Others</option>

                    </select>
                </div>

                <button type="submit"
                    className="btn btn-primary">
                    Add Listing
                </button>
            </form>

        </div>
    )
}

export default AddProduct