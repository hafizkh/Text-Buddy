import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

const TextForm = () => {
    return (
        <div>
            <h1 style={{}} className='mt-5'>Write Your Text Here</h1>
            <Container >
                <Form>
                    <Form.Group className="mb-3 ">
                        <Form.Control as="textarea" rows={8} />
                    </Form.Group>
                </Form>
                <button className='btn btn-primary mx-1'>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1'>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1'>Clear All</button>
            </Container>

        </div>
    )
}

export default TextForm
