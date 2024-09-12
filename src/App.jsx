import AboutUs from "./components/about/AboutUs";
import Registration from "./components/registration/Registration";
import OngoingTournaments from "./components/tournaments/ongoing/OngoingTournaments";
import PreviousTournaments from "./components/tournaments/previous/PreviousTournaments";
import UpcomingTournaments from "./components/tournaments/upcoming/UpcomingTournaments";

function App() {
  const tournaments = [
    {
      "_id": "642c155b2c4774f05c36eeaa01",
      "pastTourName": "Project India S1",
      "pastTourDiamond": "75,000",
      "pastTourMoney": "",
      "pastTourTeams": "64 Teams",
      "pastTourWinner1": "Abm",
      "pastTourWinner1Logo": "https://i.ibb.co/Dg7sXHJ/KUMS-ix-BEAST.png",
      "pastTourWinner2": "Team Xenocide",
      "pastTourWinner2Logo": "https://i.ibb.co/RvDZKGn/IMG-20240306-WA0062.jpg",
      "pastTourWinner3": "Akatsuki",
      "pastTourWinner3Logo": "https://i.ibb.co/yBYqh49/Fate-DK-Logo.jpg",
      "pastTourRegion": "India",
      "pastTourVenu": "Online",
      "pastTourStartDate": "07 April, 2022",
      "pastTourEndDate": "30 April, 2022",
      "pastTourbanner": "https://i.ibb.co/pQt3000/BTK-Project-India-Poster-1.jpg",
      "pastTourTrailer": "https://www.youtube.com/embed/4YigszzxyfE?si=fjhdW09azSDJiJdL",
      "categoryTour": "pastTour"
    },
    {
      "_id": "642c155b2c4774f05c36eeaa02",
      "pastTourName": "Clash of Titans s2",
      "pastTourDiamond": "1,00,000",
      "pastTourMoney": "1000$",
      "pastTourTeams": "124 Teams",
      "pastTourWinner1": "Team Eliminators",
      "pastTourWinner1Logo": "https://i.ibb.co/RvDZKGn/IMG-20240306-WA0062.jpg",
      "pastTourWinner2": "Kums X Beast",
      "pastTourWinner2Logo": "https://i.ibb.co/Dg7sXHJ/KUMS-ix-BEAST.png",
      "pastTourWinner3": "Devil Knight",
      "pastTourWinner3Logo": "https://i.ibb.co/yBYqh49/Fate-DK-Logo.jpg",
      "pastTourRegion": "India",
      "pastTourVenu": "Lan Event",
      "pastTourStartDate": "01 March, 2023",
      "pastTourEndDate": "28 March, 2023",
      "pastTourbanner": "https://i.ibb.co/mJpXc42/CTs3.jpg",
      "pastTourTrailer": "https://www.youtube.com/embed/4YigszzxyfE?si=fjhdW09azSDJiJdL",
      "categoryTour": "pastTour"
    },
    {
      "_id": "642c155b2c4774f05c36eeaa03",
      "pastTourName": "Kiwi Championship S1",
      "pastTourDiamond": "90,000",
      "pastTourMoney": "500$",
      "pastTourTeams": "90 Teams",
      "pastTourWinner1": "Crisis Requiem ",
      "pastTourWinner1Logo": "https://i.ibb.co/RvDZKGn/IMG-20240306-WA0062.jpg",
      "pastTourWinner2": "Ghost Recon",
      "pastTourWinner2Logo": "https://i.ibb.co/yBYqh49/Fate-DK-Logo.jpg",
      "pastTourWinner3": " ",
      "pastTourWinner3Logo": " ",
      "pastTourRegion": "Bangladesh",
      "pastTourVenu": "Lan Event",
      "pastTourStartDate": "15 July, 2023",
      "pastTourEndtDate": "10 August, 2023",
      "pastTourbanner": "https://i.ibb.co/RCrWHYy/Prizepool.jpg",
      "pastTourTrailer": "https://www.youtube.com/embed/4YigszzxyfE?si=fjhdW09azSDJiJdL",
      "categoryTour": "pastTour"
    },
    {
      "_id": "642c155b2c4774f05c36eeaa04",
      "pastTourName": "Battleknights championship s1",
      "pastTourDiamond": "1,30,000",
      "pastTourMoney": "",
      "pastTourTeams": "256 Teams",
      "pastTourWinner1": "Enforcers",
      "pastTourWinner1Logo": "https://i.ibb.co/yBYqh49/Fate-DK-Logo.jpg",
      "pastTourWinner2": "Mecha soldier",
      "pastTourWinner2Logo": "https://i.ibb.co/Dg7sXHJ/KUMS-ix-BEAST.png",
      "pastTourWinner3": "Fantasy Paladdin",
      "pastTourWinner3Logo": "https://i.ibb.co/RvDZKGn/IMG-20240306-WA0062.jpg",
      "pastTourRegion": "India",
      "pastTourVenu": "Online",
      "pastTourStartDate": "06 December, 2023",
      "pastTourEndDate": "24 December, 2023",
      "pastTourbanner": "https://i.ibb.co/pQt3000/BTK-Project-India-Poster-1.jpg",
      "pastTourTrailer": "https://www.youtube.com/embed/4YigszzxyfE?si=fjhdW09azSDJiJdL",
      "categoryTour": "pastTour"
    },
    {
      "_id": "642c155b2c4774f05c36ebbb01",
      "currentTourName": "Project India S2",
      "currentTourDiamond": "1,00,000",
      "currentTourMoney": "",
      "currentTourTeamSlot": "256+",
      "currentTourRegion": "Bangladesh",
      "currentTourVenu": "Online",
      "currentTourEndEstimation": "12 September, 2024",
      "currentTourDetails": "It's been decided to have 256 slot for this tournament but we are estimating it will cross 300+. We will increase the slot if this happens. Best of luck everyone :)",
      "currentTourbanner": "https://i.ibb.co/mJpXc42/CTs3.jpg",
      "currentTourTrailer": "https://www.youtube.com/embed/4YigszzxyfE?si=fjhdW09azSDJiJdL",
      "categoryTour": "ongoingTour"
    },
    {
      "_id": "642c155b2c4774f05c36eccb01",
      "upcomingTourName": "Clash Of Titan s3",
      "upcomingTourDiamond": "45,000",
      "upcomingTourMoney": "",
      "upcomingTourTeamSlot": "128",
      "upcomingTourRegion": "Bangladesh",
      "upcomingTourVenu": "Online",
      "upcomingTourStartEstimation": "01 October, 2024",
      "upcomingTourDetails": "In Upcoming October,2024 we are opning registration for Clash Of Titan s3. We have slot for more then 128+ teams. Registation from will open soon. So keep your eyes on our website and social platforms",
      "upcomingTourbanner": "https://i.ibb.co/mJpXc42/CTs3.jpg",
      "categoryTour": "upcomingTour"
    }
  ];

  return (
    <div>
      {/* <UpcomingTournaments tournaments={tournaments} /> */}
      {/* <PreviousTournaments tournaments={tournaments} /> */}
      {/* <OngoingTournaments tournaments={tournaments} /> */}
      {/* <AboutUs /> */}
      {/* <Registration /> */}
    </div>
  )
}

export default App
