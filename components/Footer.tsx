function Footer() {
  return (
    <footer style={{padding: "30px  30px", marginTop:"30px"}}>
    <div
    style={{
      maxWidth: "700px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    }}
    >
     <div>
    <h5
      style={{
        color: "#8f8e8e",
        fontSize: "14px",
        margin: 0,
        lineHeight: 1,
      }}
    >
      Built by Javen Goh :)
    </h5>
    &ensp;&ensp;&ensp;
    <h5
      style={{
        color: "#8f8e8e",
        fontSize: "14px",
        margin: 0,
        lineHeight: 1,
      }}
    >
    Last Updated on 15 May 2025
    </h5>
  </div>
  <div
    style={{
      gap: "15px",
      display:"flex",
      justifyContent:"space-evenly"
    }}
  >
        <a
                  href="https://www.linkedin.com/in/javengoh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <i className="fa fa-linkedin fa-lg"></i>
                </a>
                <a
                  href="https://github.com/Javen-Code"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <i className="fa fa-github fa-lg"></i>
                </a>
                <a
                  href="mailto:javen.goh73@gmail.com"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <i className="fa fa-envelope fa-lg"></i>
                </a>
      </div>
    </div>
    </footer>
  )
}
export default Footer;
