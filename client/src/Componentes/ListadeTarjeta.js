import React from "react";
import Tarjeta from "./Tarjeta";

const Lista=({exercises})=>{
    if (!Array.isArray(exercises)) {
        return <div>No hay nada mi pez</div>;
    }

    return (
        <div>
            {exercises.map((exercise) =>
                <Tarjeta
                    key={exercise.id}
                    {...exercise}
                />
            )}
        </div>
    );
};

export default Lista