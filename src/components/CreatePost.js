import React, {useState} from 'react'
import {useFormik} from 'formik'
import axios from 'axios'


function CreatePost() {
    const [selectedImage, setSelectedImage] = useState(null);
    
    
    const initialValues = {
        
        description: "",
        tickerSymbol: "",
        win: false,
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
        <div>
            <h2>Create a Post</h2>
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
                <input
                    type="text"
                    name="description"
                    onChange={formik.handleChange}
                    values={formik.values.description}
                    placeholder="Description"
                    />
                <input
                    type="text"
                    name="tickerSymbol"
                    onChange={formik.handleChange}
                    values={formik.values.tickerSymbol}
                    placeholder="Ticker Symbol"
                    />
                <label>Profitable</label>
                 <input
                    type="checkbox"
                    name="win"
                    onChange={formik.handleChange}
                    values={formik.values.win}
                    placeholder="Win?"
                    />
                <label></label>
                <input
                    type="number"
                    name="shares"
                    onChange={formik.handleChange}
                    values={formik.values.shares}
                    placeholder="Number of Shares"
                    />
                <input
                    type="number"
                    name="price"
                    onChange={formik.handleChange}
                    values={formik.values.price}
                    placeholder="Price of Purchase"
                    />
                <input
                   type="number"
                   name="riskAmount"
                   onChange={formik.handleChange}
                   values={formik.values.riskAmount}
                   placeholder="Amount of Risk"
                   />
                    <button type="submit" disabled={!formik.isValid}>Submit</button> 
            </form>
            <div>
                {formik.errors.description ? <div>{formik.errors.description}</div> : null}
                {formik.errors.tickerSymbol ? <div>{formik.errors.tickerSymbol}</div> : null}
                {formik.errors.shares ? <div>{formik.errors.shares}</div> : null}
                {formik.errors.price ? <div>{formik.errors.price}</div> : null}
                {formik.errors.riskAmount ? <div>{formik.errors.riskAmount}</div> : null}
                
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