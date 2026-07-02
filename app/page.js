export default function Home() {

  return (

    <main style={{ fontFamily: "Arial", textAlign: "center" }}>

      <div style={{ background: "#0B1F3A", color: "white", padding: 40 }}>

        <h1>Fortune Ice</h1>

        <p>Keeping KwaZulu-Natal Cool</p>

        <a

          href="https://wa.me/27640834939"

          style={{

            background: "#25D366",

            padding: "12px 20px",

            borderRadius: 8,

            color: "white",

            textDecoration: "none",

            display: "inline-block",

            marginTop: 10

          }}

        >

          Order on WhatsApp

        </a>

      </div>

      <h2 style={{ marginTop: 30 }}>Products</h2>

      <p>Ice Tube 2kg - R15</p>

      <p>Ice Tube 3kg - R20</p>

      <p>Ice Block 3kg - R25</p>

      <h2 style={{ marginTop: 30 }}>Delivery Areas</h2>

      <p>Mtwalume, Hibberdene, Scottburgh, Umzinto, Port Shepstone, Margate</p>

      <h2 style={{ marginTop: 30 }}>Contact</h2>

      <p>📞 064 083 4939</p>

      <p>📍 293 Beach Road, Mtwalume</p>

    </main>

  );

}
