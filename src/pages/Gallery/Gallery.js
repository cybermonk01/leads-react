import React from "react";

const Gallery = () => {
  return (
    <div>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fjamesonsinfosolutions%2F%3Fviewas%3D100000686899395%26show_switched_toast%3D0%26show_invite_to_follow%3D0%26show_switched_tooltip%3D0%26show_podcast_settings%3D0%26show_community_transition%3D0%26show_community_review_changes%3D0%26show_community_rollback%3D0%26show_follower_visibility_disclosure%3D0&tabs=timeline&width=400&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        style={{
          border: "none",
          overflow: "hidden",
          width: "1300vw",
          height: "600vh",
        }}
        scrolling="no"
        frameBorder="0"
        // allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Gallery;
