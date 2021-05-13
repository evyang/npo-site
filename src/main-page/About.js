import React from 'react';
import kidArt from './kidsArt.png';


const About = (props) => (
    <div id='about'>
        <div className='container'>
            <div className='row'>
                <div className='col-xs-12 col-md-6'>
                    {' '}
                    <img src={kidArt} className='img-responsive' alt='' />{' '}
                </div>
                <div className='col-xs-12 col-md-6'>
                    <div className='about-text'>
                        <h2>About The Cause</h2>
                        <h3>We're a group of three friends who just want to help make a difference in our communities. We know there's a lot of artwork from kids that go unnoticed or unappreciated - let's put a stop to that! There's tons of people out there who are willing to purchase and appreciate kids' art, but there was never a way to do so until now.</h3>
                        <span></span>
                        <h3>Using our service, Kid's Art for Good, you can list your kid's artwork for sale. You can work together to pick a nonprofit in your community and the proceeds will automatically be donated to them!</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default About;