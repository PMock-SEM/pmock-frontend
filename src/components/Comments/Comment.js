import React from "react";

export default function Comment(props) {
    const { coachId, videoId, content, createdAt } = props.feedback;

    return (
        <div className="media mb-3">
            <img
                className="mr-3 bg-light rounded"
                width="48"
                height="48"
                // src={`https://api.adorable.io/avatars/48/${name.toLowerCase()}@adorable.io.png`}
                src={`https://api.adorable.io/avatars/48/${coachId}@adorable.io.png`}
                alt={coachId}
            />

            <div className="media-body p-2 shadow-sm rounded bg-light border">
                <small className="float-right text-muted">{createdAt}</small>
                <h6 className="mt-0 mb-1 text-muted">{coachId}</h6>
                {content}
            </div>
        </div>
    );
}
