import React from 'react';

export default function Picture({
  url,
  alt,
  tags,
  favorites,
  likes,
  saveImage,
  isSaved
}) {
  return (
    <div className="ui raised card">
      <div className="ui image">
        <img src={url} alt={alt} style={{ height: '173px' }} />
        {!isSaved ? (
          <div
            className="ui bottom attached button"
            onClick={() => saveImage(url)}
          >
            <i className="add icon" />
            Save
          </div>
        ) : (
          <div className="ui bottom attached button">Saved</div>
        )}
      </div>

      <div className="content">
        <div className="description">
          <span className="ui blue tag label">{tags}</span>
        </div>
      </div>

      <div className="extra content">
        <span className="right floated meta">
          <i className="favorite icon" />
          {favorites}
        </span>
        <span>
          <i className="like icon" />
          {likes}
        </span>
      </div>
    </div>
  );
}
