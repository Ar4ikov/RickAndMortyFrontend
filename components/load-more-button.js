import {useContext} from "react";
import {LocationsContext} from "../store";
import styles from "../styles/Home.module.css";

export const LoadMoreButton = () => {
    const {info, setPage} = useContext(LocationsContext);

    if (!info?.next) {
        return null
    }

    return (
        <button
            className={styles.loadMoreButton}
            onClick={() => setPage(prev => ++prev)}
        >
            <span>LOAD MORE</span>
        </button>
    );
};
