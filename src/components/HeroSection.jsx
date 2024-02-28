import axios from "axios";
import fileDownload from "js-file-download";

export default function HeroSection() {
  function handleDownload() {
    var url = "http://localhost:8080/documents/cv";
    var filename = "cv.pdf";
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  }
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Salut, Je suis Sondes</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developeuse Js/Java
          </h1>
          <p className="hero--section-description">
            Être un bon développeur ne signifie pas savoir faire tout
            parfaitement.
            <br /> Il s'agit de savoir comment chercher des réponses et
            apprendre de ses erreurs.
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleDownload();
          }}
        >
          Télechargez Mon CV
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
