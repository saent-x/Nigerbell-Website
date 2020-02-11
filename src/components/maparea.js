import React from "react";

class MapArea extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const coordinates = { lat: 6.62602, lng: 3.356451 };
    return (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029624.688151461!2d4.3266906416706234!3d6.507666895463641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae10abbe021d4b21!2sNigerbellhearing!5e0!3m2!1sen!2sng!4v1579205507925!5m2!1sen!2sng"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: "0" }}
          allowFullScreen=""
        ></iframe>
    );
  }
}

export default MapArea;
