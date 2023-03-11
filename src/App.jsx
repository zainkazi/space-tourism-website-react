import { Route, Routes, Navigate } from "react-router-dom";
import DestinationNavbar from "./components/Destinations/DestinationNavbar";
import Header from "./components/Header";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology from "./pages/Technology";

//Destination
import moonImage from "./assets/destination/image-moon.webp";
import marsImage from "./assets/destination/image-mars.webp";
import europaImage from "./assets/destination/image-europa.webp";
import titanImage from "./assets/destination/image-titan.webp";

// Crew
import crew4 from "./assets/crew/image-anousheh-ansari.webp";
import crew1 from "./assets/crew/image-douglas-hurley.webp";
import crew2 from "./assets/crew/image-mark-shuttleworth.webp";
import crew3 from "./assets/crew/image-victor-glover.webp";

//Technology
import tech1Mobile from "./assets/technology/image-launch-vehicle-landscape.jpg";
import tech1Desktop from "./assets/technology/image-launch-vehicle-portrait.jpg";
import tech2Mobile from "./assets/technology/image-spaceport-landscape.jpg";
import tech2Desktop from "./assets/technology/image-spaceport-portrait.jpg";
import tech3Mobile from "./assets/technology/image-space-capsule-landscape.jpg";
import tech3Desktop from "./assets/technology/image-space-capsule-portrait.jpg";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination">
          <Route index element={<Navigate to="moon" />} />
          <Route
            path="moon"
            element={
              <Destination
                image={moonImage}
                name="MOON"
                details="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
                stats={{ distance: "384,400", time: "3 DAYS" }}
              />
            }
          />
          <Route
            path="mars"
            element={
              <Destination
                image={marsImage}
                name="MARS"
                details="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
                stats={{ distance: "225 MIL.", time: "9 MONTHS" }}
              />
            }
          />
          <Route
            path="europa"
            element={
              <Destination
                image={europaImage}
                name="EUROPA"
                details="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
                stats={{ distance: "628 MIL.", time: "3 YEARS" }}
              />
            }
          />
          <Route
            path="titan"
            element={
              <Destination
                image={titanImage}
                name="TITAN"
                details="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
                stats={{ distance: "1.6 BIL.", time: "7 YEARS" }}
              />
            }
          />
        </Route>

        <Route path="/crew">
          <Route index element={<Navigate to="DouglasHurley" />} />
          <Route
            path="DouglasHurley"
            element={
              <Crew
                image={crew1}
                role="COMMANDER"
                name="DOUGLAS HURLEY"
                bio="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
              />
            }
          />
          <Route
            path="MarkShuttleworth"
            element={
              <Crew
                image={crew2}
                role="MISSION SPECIALIST"
                name="MARK SHUTTLEWORTH"
                bio="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
              />
            }
          />
          <Route
            path="VictorGlover"
            element={
              <Crew
                image={crew3}
                role="PILOT"
                name="VICTOR GLOVER"
                bio="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
              />
            }
          />
          <Route
            path="AnoushehAnsari"
            element={
              <Crew
                image={crew4}
                role="FLIGHT ENGINEER"
                name="ANOUSHEH ANSARI"
                bio="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
              />
            }
          />
        </Route>

        <Route path="/technology">
          <Route index element={<Navigate to="LaunchVehicle" />} />
          <Route
            path="LaunchVehicle"
            element={
              <Technology
                mobileImage={tech1Mobile}
                desktopImage={tech1Desktop}
                name="LAUNCH VEHICLE"
                desc="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
              />
            }
          />
          <Route
            path="Spaceport"
            element={
              <Technology
                mobileImage={tech2Mobile}
                desktopImage={tech2Desktop}
                name="SPACEPORT"
                desc="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
              />
            }
          />
          <Route
            path="SpaceCapsule"
            element={
              <Technology
                mobileImage={tech3Mobile}
                desktopImage={tech3Desktop}
                name="SPACE CAPSULE"
                desc="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
