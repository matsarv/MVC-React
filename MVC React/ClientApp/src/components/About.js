import React, { Component } from "react";
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        let themeColor = "text-light";
        return (
            <div className={themeColor}>

                <h2>MVC React Bilhandel</h2>


                <Button style={{ float: 'right' }} label="Stäng"
                    icon="pi pi-table" onClick={() => { this.props.history.replace('/') }}>
                </Button>


                <p>I denna applikation kan man lista, lägga till, uppdatera och ta bort bilar.</p>
                <p>Man kan filtrera bilar på modellnamn, märke, produktionsår och färg. </p>
                <p>Man kan sortera en eller flera kolumner i listan.</p>

                <Link to="/">
                    <Button style={{ float: 'left' }} label="Till listan"
                        icon="pi pi-table">
                    </Button>
                </Link>

            </div>
        );
    }
}

export default About;