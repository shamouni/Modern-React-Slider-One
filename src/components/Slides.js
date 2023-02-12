import ScrollContainer from 'react-indiana-drag-scroll';
import Slide from './Slide';

const Slides = () => { 

    const txt = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, explicabo, laudantium illo eius sed, deleniti earum architecto reprehenderit';

    return (
        <>
            <div id="prev-slide" className="arrow-slide"></div>

            <div id="slides" className="slider-container">

                <ScrollContainer className="scroll-container">

                    <div className="col col-3 h-100">
                        
                        <Slide 
                            title = 'Beautiful landscape' 
                            text = '' 
                            src = 's-32.png' 
                            lbl = 'Sport' 
                            color = 'red' 
                            cls = 'h-3 brd-right brd-bottom'
                        />

                        <Slide 
                            title = 'Beautiful landscape' 
                            text = '' 
                            src = 's-18.jpeg' 
                            lbl = 'Sport' 
                            color = 'green'  
                            cls = 'h-3 brd-right brd-top brd-bottom'
                        />

                        <Slide 
                            title = 'Beautiful landscape' 
                            text = '' 
                            src = 'i9.jpg' 
                            lbl = 'Sport' 
                            color = 'green' 
                            cls = 'box h-3 brd-right brd-top'
                        />

                    </div>

                    <div className="col col-5 h-100">

                        <Slide 
                            title = 'Beautiful landscape' 
                            text = {txt}
                            src = 'big-1.jpg' 
                            lbl = 'Sport' 
                            color = 'blue' 
                            cls = 'box-large h-7 brd-left brd-right brd-bottom'
                        />

                        <div className="col-group h-3">

                            <div className="col">

                                <Slide 
                                    title = 'Beautiful landscape' 
                                    text = '' 
                                    src = 's-7.jpg' 
                                    lbl = 'Sport' 
                                    color = 'purple' 
                                    cls = 'brd-left brd-right brd-top'
                                />

                            </div>

                            <div className="col">
                                <Slide 
                                    title = 'Beautiful landscape' 
                                    text = '' 
                                    src = 's-59.png' 
                                    lbl = 'Sport' 
                                    color = 'red' 
                                    cls = 'brd-left brd-right brd-top'
                                />
                            </div>


                        </div>

                    </div>


                    <div className="col col-3 h-100">

                        <Slide 
                            title = 'Beautiful landscape' 
                            text = '' 
                            src = 's-30.jpg' 
                            lbl = 'Sport' 
                            color = 'sky' 
                            cls = 'h-3 brd-left brd-right brd-bottom'
                        />

                        <Slide 
                            title = 'Beautiful landscape' 
                            text = '' 
                            src = 's-20.jpeg' 
                            lbl = 'Sport' 
                            color = 'green' 
                            cls = 'h-3 brd-left brd-right brd-top brd-bottom'
                        />

                        <Slide 
                            title = 'Beautiful landscape' 
                            text = '' 
                            src = 's-9.jpg' 
                            lbl = 'Sport' 
                            color = 'sky' 
                            cls = 'h-3 brd-left brd-right brd-top'
                        />
                        
                    </div>

                    <div className="col col-4 h-100">

                        <Slide 
                            title = 'Beautiful landscape' 
                            text = '' 
                            src = 's-13.jpeg' 
                            lbl = 'Sport' 
                            color = 'blue' 
                            cls = 'h-5 brd-left brd-right brd-bottom'
                        />

                        <Slide 
                            title = 'Beautiful landscape' 
                            text = '' 
                            src = 'a-71.png' 
                            lbl = 'Sport' 
                            color = 'red' 
                            cls = 'h-5 brd-left brd-right brd-top'
                        />

                    </div>
                    
                    <div className="col col-6 h-100">

                        <div className="col-group h-3">

                            <div className="col">

                                <Slide 
                                    title = 'Beautiful landscape' 
                                    text = '' 
                                    src = 's-26.jpg' 
                                    lbl = 'Sport' 
                                    color = 'purple' 
                                    cls = 'box brd-left brd-right brd-bottom'
                                />

                            </div>

                            <div className="col">

                                <Slide 
                                    title = 'Beautiful landscape' 
                                    text = '' 
                                    src = 's-46.jpg' 
                                    lbl = 'Sport' 
                                    color = 'red' 
                                    cls = 'brd-left brd-right brd-bottom'
                                />
                                
                            </div>

                        </div>

                        <Slide 
                            title = 'Beautiful landscape' 
                            text = {txt} 
                            src = 'big-3.jpg' 
                            lbl = 'Sport' 
                            color = 'blue' 
                            cls = 'box-large h-7 brd-left brd-right brd-top'
                        />

                    </div>

                    <div className="col col-4 h-100">

                        <Slide 
                            title = 'Beautiful landscape' 
                            text = '' 
                            src = 's-45.jpg' 
                            lbl = 'Sport' 
                            color = 'green' 
                            cls = 'h-5 brd-left brd-right brd-bottom'
                        />

                        <Slide 
                            title = 'Beautiful landscape' 
                            text = '' 
                            src = 's-2.jpg' 
                            lbl = 'Sport' 
                            color = 'sky' 
                            cls = 'h-5 brd-left brd-right brd-top'
                        />

                    </div>

                    
                    <div className="col col-4 h-100">

                        <Slide 
                            title = 'Beautiful landscape' 
                            text = '' 
                            src = 's-64.jpg' 
                            lbl = 'Sport' 
                            color = 'pink' 
                            cls = 'h-5 brd-left brd-bottom'
                        />

                        <Slide 
                            title = 'Beautiful landscape' 
                            text = '' 
                            src = 's-60.jpg' 
                            lbl = 'Sport' 
                            color = 'red' 
                            cls = 'h-5 brd brd-left brd-top'
                        />
                        
                    </div>

                </ScrollContainer>
                
            </div>

            <div id="next-slide" className="arrow-slide"></div>
        </>
    )
}

export default Slides
