import React from 'react';

export default function map(){
    return(
        <div className="google-map-code">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.8809654386814!2d86.21585601496315!3d22.76979838508158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e357cff14b47%3A0x6ceac6b8e465744c!2sInsurance%20Point%20Office!5e0!3m2!1sen!2sin!4v1624805048997!5m2!1sen!2sin" 
            width='100%' 
            height="800" 
            frameborder="0" 
            style={{border:0}} 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"></iframe>
        </div>
    );
}
