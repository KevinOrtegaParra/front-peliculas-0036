import React from "react"
import TrMedia from "./TrMedia"

export default function Table({ medias = [], borrarMedia, editarMedia }) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                medias.map((media, index) => {
                    return (
                        <TrMedia media={media} index={index} key={index + 1} borrarMedia={borrarMedia} editarMedia={editarMedia} />
                    )
                })
            }
        </div>
    )
}
