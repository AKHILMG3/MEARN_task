import React from 'react'
import { FaEdit } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function View() {
  return (
    <div>
        <div className="row">
            <div className="row">
                <div className="col-6"> 
                    <h5>Project Name</h5>
                </div>
                <div className="col-6">
                <FaEdit />
                <FaExternalLinkAlt />
                <FaGithub />
                <MdDelete />


                </div>
            </div>
        </div>
    </div>
  )
}

export default View