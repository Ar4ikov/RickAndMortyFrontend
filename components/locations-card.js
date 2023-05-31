import React from "react";
import styles from "../styles/Home.module.css";

export const LocationCard = ({name, type, dimension}) => {
    return (
        <div className={styles.episodeCard}>
            <span>{name}</span>
            <span>{type}</span>
            <span>{dimension}</span>
        </div>
    );
};
