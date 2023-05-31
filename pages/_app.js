import Link from "next/link";
import "../styles/globals.css";
import header from "../styles/globals.css";
import logo from './logo.png';
import Image from "next/image";

export default function MyApp({Component, pageProps}) {
    return (
        <div>
            <header style={header}>
                <div style={{
                    display: "inline-block",
                    marginLeft: '20%'
                }}><Image src={logo} alt={'Image'} width={20} height={20}/></div>

                <div style={{
                    display: "grid",
                    gridAutoFlow: 'column',
                    gridGap: 25,
                    width: "100%",
                    justifyContent: "end",
                    marginRight: '15%'
                }}>
                    <div><Link href="/">Characters</Link></div>
                    <div><Link href="/locations">Locations</Link></div>
                    <div><Link href="/episodes">Episodes</Link></div>
                </div>
            </header>
            <Component {...pageProps} />
        </div>
    );
}
