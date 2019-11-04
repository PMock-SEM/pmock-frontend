
import React from 'react';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export function Video(props) {
    if (!props.id) {
        return null;
    }
    const embedUrl = `${BASE_EMBED_URL}${props.id}`;
    return (
        <iframe width={'560'} height={'315'} src={embedUrl} frameBorder='0'
                allow='autoplay; encrypted-media' allowFullScreen />
    );
}