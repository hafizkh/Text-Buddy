import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

const TextForm = () => {

    const [text, setText] = useState('')

    const onChange = (e)=>{
        setText(e.target.value)
    }

    const handleUpperCase = ()=>{
        setText(text.toUpperCase())
    }
    const handleLowerCase = ()=>{
        setText(text.toLowerCase())
    }

    const clearAll = ()=>{
        setText('')

    }
    return (
        <div>
            <h1 className='mt-5'>Write Your Text Here</h1>
            <Container >
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Control value={text} onChange={onChange} as="textarea" rows={8} />
                    </Form.Group>
                </Form>
                <button className='btn btn-primary mx-1' onClick = {handleUpperCase}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick = {handleLowerCase}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1'onClick = {clearAll}>Clear All</button>
            </Container>

        </div>
    )
}

export default TextForm
