
import React from 'react';

const BASE_EMBED_URL = 'https://storage.cloud.google.com/pmock/';

export function Video(props) {
    if (!props.videoUrl) {
        return null;
    }
    const embedUrl = `${BASE_EMBED_URL}${props.videoUrl}?authuser=2&folder&organizationId`;
    return (
        <iframe width={'560'} height={'315'} src={embedUrl} frameBorder='0'
                allow='autoplay; encrypted-media' allowFullScreen />
    );
}
