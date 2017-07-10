import * as React from "react";
import * as ReactDOM from "react-dom";
import { Carousel, CarouselCallback } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.css!";
import "./carousel-test.css!";

interface State {
    SelectedItem: number;
}

const CAROUSEL_ITEMS_COUNT = 3;

class CarouselTest extends React.Component<{}, State> {

    state = {
        SelectedItem: 0
    };

    private onChange: CarouselCallback = (index) => {
        console.log("onChange", index);
    }

    private onSelectedItemChange: React.MouseEventHandler<HTMLButtonElement> = () => {
        this.setState(state => {
            if (state.SelectedItem < CAROUSEL_ITEMS_COUNT - 1) {
                state.SelectedItem += 1;
            }
            return state;
        });
    }

    render() {
        return <div>
            <button onClick={this.onSelectedItemChange}>Change selectedItem</button>
            <Carousel
                className="carousel-test"
                showThumbs={false}
                onChange={this.onChange}
                selectedItem={this.state.SelectedItem}
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
            </Carousel>
        </div>;
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
