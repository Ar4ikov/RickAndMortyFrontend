import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

export const CharactersCard = ({name, species, image}) => {
    return (
        <div className={styles.characterCard}>
            <Image src={image} width={240} height={168} style={{
                objectFit: 'cover',
                borderRadius: '5px 5px 0 0'
            }}/>
            <span>{name}</span>
            <span>{species}</span>
        </div>
    );
};
