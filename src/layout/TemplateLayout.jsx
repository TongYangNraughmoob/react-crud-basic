import React, { Children } from 'react'
import { Container } from 'react-bootstrap'
import NavbarConmponents from '../components/NavbarConmponents'
const TemplateLayout = ({children}) => {
    return (
        <React.Fragment>
            <NavbarConmponents/>
            <Container>
                {children}
            </Container>
        </React.Fragment>
    )
}

export default TemplateLayout
