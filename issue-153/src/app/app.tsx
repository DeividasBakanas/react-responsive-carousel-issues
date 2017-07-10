import * as React from "react";
import * as ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.css!";
import "./carousel-test.css!";

class CarouselTest extends React.Component {
    render() {
        return <Carousel
            className="carousel-test"
            showThumbs={false}
            emulateTouch={true}
        >
            <div className="slide slide-1">
                Slide 1
            </div>
            <div className="slide slide-2">
                Slide 2
            </div>
            <div className="slide slide-3">
                Slide 3
            </div>
        </Carousel>;
    }
}

class App {
    constructor() {
        this.startApp();
    }

    private startApp() {
        let appRoot = document.getElementById("app-root");
        if (appRoot != null) {
            ReactDOM.render(<CarouselTest />, appRoot);
        } else {
            this.generateAppRootElement();
        }
    }

    private generateAppRootElement() {
        let newRoot = document.createElement("div");
        newRoot.id = "app-root";
        document.body.appendChild(newRoot);
        this.startApp();
    }
}

new App();
