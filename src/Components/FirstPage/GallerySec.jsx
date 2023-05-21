import React from "react";
import PhotoAlbum from "react-photo-album";
const photos = [
  {
    src: "https://images.unsplash.com/photo-1583907388371-7ca9b1bcfbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk3fHxjYXIlMjB0b3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1602912526679-59e34e95e3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
    width: 1600,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1594049533531-92b07509b035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRveSUyMGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    width: 1600,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1496031867413-058d7da89c63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1049&q=80",
    width: 1600,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1586333237928-8b46d9d784bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    width: 1600,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1568145400100-6f0cb5fbce57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    width: 1600,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1612455677448-57b4059c8e42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHRveSUyMGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    width: 1600,
    height: 900,
  },
];

const GallerySec = () => {
  return (
    <div className="my-20">
      <PhotoAlbum photos={photos} layout="rows" />
    </div>
  );
};

export default GallerySec;
