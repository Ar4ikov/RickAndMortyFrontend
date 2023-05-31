import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import styles from "../../styles/Home.module.css";

export default function CharacterProfile() {
    const router = useRouter();
    const [data, setData] = useState({});

    useEffect(() => {
        router.query.pid &&
        fetch(`https://rickandmortyapi.com/api/character/${router.query.pid}`)
            .then((res) => res.json())
            // Логика, если эпизоды будут приходить массивом IRI
            .then(async (res) => {
                if (res.episode?.length) {
                    await fetch(
                        `https://rickandmortyapi.com/api/episode/${res.episode
                            .map((episode) => episode.split("/").pop())
                            .join(",")}`
                    )
                        .then((res) => res.json())
                        .then((episodes) => {
                            console.log(episodes)
                            res.episode = Array.isArray(episodes) ? episodes : [episodes]
                        });
                }

                return res;
            })
            .then((res) => setData(res));
    }, [router.query]);

    console.log(data.episode);

    return (
        <>
            <Head>
                <title>{data.name}</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <button className={styles.goBackButton} onClick={router.back}>GO BACK</button>

            <main style={{display: "flex", flexDirection: "column", gap: "10px"}}>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 20
                }}>
                    <Image
                        src={data.image}
                        width={250}
                        height={250}
                        style={{borderRadius: "9999px"}}
                        alt={''}/>
                </div>

                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 500,
                    fontSize: 40,
                    marginBottom: -10
                }}>{data.name}</h1>

                <h3 style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 400,
                    color: 'gray'
                }}>Episodes</h3>

                <div className={styles.gridSmall}>
                    {data?.episode?.map((episode) => (
                        <Link key={episode.id} href={`/episodes/${episode.id}`}>
                            <div className={styles.episodeElement}>
                                <span className={styles.episodeId}>{episode.name}</span>
                                <span className={styles.episodeId}>{episode.episode}</span>
                                <span className={styles.episodeId}>{episode.air_date}</span>
                            </div>
                        </Link>
                    ))}
                </div>

            </main>
        </>
    );
}
