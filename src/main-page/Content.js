import React from 'react';

const Content = (props) => (
    <header id='header'>
        <div className='intro jumbotron'>
            <div className='overlay'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-8 col-md-offset-2 intro-text'>
                            <h1>
                                {props.title}
                                <span></span>
                            </h1>
                            <p>Help make a difference while making your child feel proud by listing their art for sale! The proceeds will go towards a non-profit of their choice.</p>
                            <a href='#features'
                                className='btn btn-custom btn-lg page-scroll'
                            >
                                Learn More
                            </a>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
)

export default Content;