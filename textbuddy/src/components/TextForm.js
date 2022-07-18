import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

const TextForm = () => {
    return (
        <div>
            <h1>Write Your Text Here</h1>
            <Container >
                <Form>
                    <Form.Group className="mb-3 ">
                        <Form.Label>Your Text Here</Form.Label>
                        <div className="form-control">
                        <Form.Control as="textarea" rows={3} />
                        </div>
                    </Form.Group>
                </Form>
            </Container>

        </div>
    )
}

export default TextForm
