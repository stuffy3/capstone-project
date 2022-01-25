import React, {useState} from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import './CreatePost.css'

function CreatePost() {
    const [selectedImage, setSelectedImage] = useState(null);
    
    
    const initialValues = {
        
        description: "",
        tickerSymbol: "",
        sellPrice: "",
        shares: "",
        price: "",
        riskAmount: "",
        
    }


    const onSubmit = (values) => {
      axios.post('http://localhost:4000/create', values)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err.response.data))
    }

    const validate = (values) => {
        const errors = {}
        if(!values.description) {
            errors.description = "Description Required"
        } 
        if(!values.tickerSymbol) {
            errors.tickerSymbol = "Ticker Symbol Required"
        }
        if(!values.shares) {
            errors.shares = "Number of Shares Required"
        }
        if(!values.riskAmount) {
            errors.riskAmount = "Risk Amount Required"
        } 
        if(!values.price) {
            errors.price = "Purchase Price Required"
        } 
        
        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    return (
        <div className='mainContentContainer__CreatePost'>
            <div className="mainContentContainer__CreatePost__Form">
                <h1>Create a Post</h1>
                <br />
                <fieldset>
                <form onSubmit={formik.handleSubmit}>
                    {/* <input
                        type="file"
                        name="myImages"
                        onChange={(event) => {
                            setSelectedImage(event.target.files[0])
                            console.log(initialValues.myImages[0])
                        }}
                        values={formik.values.myImages}
                        placeholder="Upload Image"
                    /> */}
                    <h3><span>Description</span></h3>
                    <br />
                    <textarea  className="descriptionInput"                        
                        type="text"
                        name="description"
                        onChange={formik.handleChange}
                        values={formik.values.description}
                        placeholder="Description"
                        />
                        <br />
                        <h3><span>Ticker Symbol</span></h3>
                        <br />
                    <input
                        type="text"
                        name="tickerSymbol"
                        onChange={formik.handleChange}
                        values={formik.values.tickerSymbol}
                        placeholder="Ticker Symbol"
                        />
                        <br />
                        <h3><span>Number of Shares</span></h3>
                        <br />
                    <input
                        type="number"
                        name="shares"
                        onChange={formik.handleChange}
                        values={formik.values.shares}
                        placeholder="Number of Shares"
                        />
                        <br />
                        <h3><span>Price Per Share</span></h3>
                        <br />
                    <input
                        type="number"
                        name="price"
                        onChange={formik.handleChange}
                        values={formik.values.price}
                        placeholder="Price of Purchase"
                        />
                        <br />
                        <h3><span>Sell Price Per Share</span></h3>
                        <br />
                    <input
                        type="number"
                        name="sellPrice"
                        onChange={formik.handleChange}
                        values={formik.values.sellPrice}
                        placeholder="Price of Sale"
                        />
                    <br />
                    <h3><span>Stop Price</span></h3>
                    <br />
                    <input
                    type="number"
                    name="riskAmount"
                    onChange={formik.handleChange}
                    values={formik.values.riskAmount}
                    placeholder="Amount of Risk"
                    />
                    <br />
                </form>
                <div className="createPostErrorMessage">
                    {formik.errors.description ? <div >{formik.errors.description}</div> : null}
                    {formik.errors.tickerSymbol ? <div>{formik.errors.tickerSymbol}</div> : null}
                    {formik.errors.shares ? <div>{formik.errors.shares}</div> : null}
                    {formik.errors.price ? <div>{formik.errors.price}</div> : null}
                    {formik.errors.riskAmount ? <div>{formik.errors.riskAmount}</div> : null}
                </div>
                <button className="createPostSubmitButton" type="submit" disabled={!formik.isValid}><span>Create Post</span></button> 
                </fieldset>
            </div>
        </div>
    )
}

export default CreatePost

// {selectedImage && (
//     <div className="imageFrame">
//     <img alt="not fount" width={"350px"} src={URL.createObjectURL(selectedImage)} />
//     <br />
//     {/* <button onClick={()=>setSelectedImage([])}>Remove</button> */}
//     </div>
// )}