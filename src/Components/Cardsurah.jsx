import React from "react";

const Cardsurah = (props) => {
    return (
        <div className="p-2 bd-highlight bg-dark text-white mb-3 rounded-pill p-5 px-5" style={{ width: "20rem" }}>
        <div class="fs-1 p-2 bd-highlight">{props.data.nomor}</div>
        <div class="p-2 bd-highlight">
          <h5 class="fs-2 p-2 p-2 bd-highlight">{props.data.nama}</h5>
          <p class="fs-4 pt-2 p-2 bd-highlight">{props.data.arti}</p> 
          <button type="submit" className="btn btn-info px-4" onClick={() => props.Detail(props.data.nomor)}>
            Ayat
          </button>
        </div>
      </div>
  );
};

export default Cardsurah