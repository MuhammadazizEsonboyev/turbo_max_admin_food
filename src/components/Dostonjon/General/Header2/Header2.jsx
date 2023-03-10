import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Box.css";
import Images from "./Images";

function Header2() {
    const cardinfo = [
        {
            imgage: 'Vector1',
        },
        {
            imgage: 'Vector2',
        },
        {
            imgage: 'Vector3',
        },
        {
            imgage: 'Vector4',

        },
        {
            imgage: 'Vector5',
        },
        {
            imgage: 'Vector6',
        }
        // },
        // {
        //     imgage: 'Vector7',
        // },
        // {
        //     imgage: 'Vector8',

        // },
        // {
        //     imgage: 'Vector9',
        // },
        // {
        //     imgage: 'Vector10',
        // },
        // {
        //     imgage: 'Vector11',
        // },
        // {
        //     imgage: 'Vector12',

        // },
    ];
    const renderCard = (card, id) => {
        return (
            <Container>
                <Carousel>
                    {/* <Carousel.Item> */}
                        <div className="navoi" key={id}>
                            <Images url={card.imgage} width={'150px'} />
                        </div>
                    {/* </Carousel.Item> */}
                </Carousel>
                <Carousel>
                    {/* <Carousel.Item> */}
                        <div className="navoi" key={id}>
                            <Images url={card.imgage} width={'150px'} />
                        </div>
                    {/* </Carousel.Item> */}
                </Carousel>
            </Container>
        );
    };
    return <div className="grid">{cardinfo.map(renderCard)}</div>
};

export default Header2;




