  import React from 'react'
  import { FaEdit } from "react-icons/fa";
  import { FaExternalLinkAlt } from "react-icons/fa";
  import { FaGithub } from "react-icons/fa";
  import { MdDelete } from "react-icons/md";

  function View() {
    return (
      <div>
          <div className="row  ">
              <div className="col border shadow p-3">
                  <div className="row justify-content-between  ">
                  <div className="col-6">
                    <h5>Project Name</h5></div>

                  <div className="col-4  ">
                  <FaEdit className='fs-5  text-success fw-bolder me-2' />
                  <FaExternalLinkAlt className='fs-5 text-primary fw-bolder me-2' />
                  <FaGithub className='fs-5 text-white fw-bolder me-2' />
                  <MdDelete className='fs-5 text-danger fw-bolder me-2' />

                  </div>
              </div>
          </div>
          </div>
      </div>
    )
  }

  export default View