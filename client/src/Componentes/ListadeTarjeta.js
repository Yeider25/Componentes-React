import React from "react";
import Tarjeta from "./Tarjeta";

const Lista=({exercises})=>(
    <div>
        {exercises.map((exercise) =>
            <Tarjeta
                key={exercise.id}
                {...exercise}
            />
        )}
    </div>
);

export default Lista