import React from "react"

export default function Toggle({ cambiarEstado }) {
    return (
        <div className="form-check form-switch">
            <input onClick={cambiarEstado} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Activo/Inactivo</label>
        </div>
    )
}