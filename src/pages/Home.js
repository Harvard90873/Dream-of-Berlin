import React, { useState, useEffect } from "react";
import HighlightedNumber from "../components/HighlightedNumber";
import Nav from "../components/Nav";
import Berlin0 from "../images/berlin0.jpg";
import Battle from "../images/battle0.jpg";
import Communication from "../images/communication.jpg";
import Parties from "../images/parties.jpg";

const SCROLL_ANIMATION_DURATION = "700";

const AnimatedParagraph = ({ children, position }) => {
  return (
    <p
      className="info-paragraph"
      data-aos={position === "right" ? "fade-left" : "fade-right"}
      data-aos-once="true"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
    >
      {children}
    </p>
  );
};

const Image = ({ image, position }) => {
  return (
    <img
      src={image}
      alt="stuff"
      className={`info-image`}
      data-aos={
        position === "left"
          ? "fade-right"
          : position === "right"
          ? "fade-left"
          : ""
      }
      data-aos-once="true"
      data-aos-duration={SCROLL_ANIMATION_DURATION}
    />
  );
};

export default function Home() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const scrollCallback = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", scrollCallback);
  });

  return (
    <>
      <div className="page-header">
        <Nav transparent={scrollY <= 300} />
        <h1 className="page-heading" id="home-page-header">
          Berlin - the city in your dream.
        </h1>
      </div>

      <div id="home-page" className="page-content">
        <div className="content-wrapper">
          <div className="info-block">
            <h1 className="info-heading">Information und Fakten</h1>
            <div className="info-inner-container">
              <Image image={Berlin0} position="left" />
              <AnimatedParagraph position="right">
                Berlin, die Hauptstadt Deutschlands, ist eine Stadt mit etwa
                <HighlightedNumber text="3,567,000" /> Einwohnern und einer
                Fläche von <HighlightedNumber text="891,8 km²" />. Berlin ist
                die Großte Stadt von Deutschland, während neunmal größer als
                Paris ist, obwohl es nur <HighlightedNumber text="1 / 5" /> von
                die population von paris hat. Es gibt viel Monumente im Berlin,
                es gibt Museen historische, auch es gibt ikonische Gebäude. Die
                Stadt wird in <HighlightedNumber text="12" />
                Bezirken geteilt, die Mitte, Friedrichshain-Kreuzberg, Pankow,
                Charlottenburg-Wilmerdorf, Spandau, Steglitz-Zehlendorf,
                Tempelhof-Schöneberg, Neukölln, Treptow-Köpenick,
                Marzahn-Hellersdorf, Lichtenberg, und Reinickendorf
                einschließen.
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Die Geschichte Kurze</h1>
            <div className="info-inner-container-reversed">
              <Image image={Battle} position="right" />
              <AnimatedParagraph position="left">
                Berlin begann zunächst im 13 Jahrhundert und es steigt
                unaufhaltsam weiter. Nach 1900 Berlin ist eine Großstadt
                geworden aufgrund seiner Überlegenheit in Wissenschaft, Bildung,
                Militär und Kultur zu einer der wichtigsten Städte der Welt.
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Dialekt von das Gebiet</h1>
            <div className="info-inner-container">
              <Image image={Communication} position="left" />
              <AnimatedParagraph position="right">
                In Berlin es gibt einen speziellen Dialekt, bekannt als Berliner
                Dialekt (alias Berlinerisch). Es stammt ursprünglich aus ein
                Brandenburgisch Dialekt. Es hat etwa
                <HighlightedNumber text="5 Millionen" /> Sprecher obwohl die
                Bildungsschicht bemühte sich stets distanzierend um
                einwandfreies Hochdeutsch.
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Politische Parteien</h1>
            <div className="info-inner-container-reversed">
              <Image image={Parties} position="right" />
              <AnimatedParagraph position="left">TO-DO</AnimatedParagraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
