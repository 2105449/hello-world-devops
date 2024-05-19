import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello World!</title>
      </Head>
      <h1 style={{fontWeight: "bold"}}>Hello World!</h1>
      <p style={{fontStyle: "italic"}}>
        Deze webpagina is gereserveerd voor de huiswerkopdrachten van module B2C6 - DevOps van Zuyd Hogeschool.
      </p>
      <br/>
      <p>
        Gemaakt door: Dennis Bückers<br/>
        Casusgroep: 01, DevNex Solutions<br/>
        Studiejaar: 2023-2024<br/>
        Opleiding: HBO-ICT<br/>
        Leerjaar: 3 (2)<br/>
        Blokperiode: 4
      </p>
      <Image src="/images/DevNex Solutions.png" alt="DevNex Solutions Logo" width={200} height={200} />
    </div>
  );
}
