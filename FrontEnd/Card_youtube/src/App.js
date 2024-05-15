import './App.css';
import{YoutubeCard} from "./components/YoutubeCard";
import moment from 'moment';


const videos = [
  {
    views: 124214421,
    date: moment().subtract(6, "month").add(2, "day"),
    title: "Leonidas fez o que???",
    thumbnail: "",
    duration: "23:21",
    href:"",
    user: {
      channelName: "Aprenda com o GatoLoko",
    }
  }
]

function App() {
  return (
    <div className="bg-[#210513]">
      <YoutubeCard>
    vImage={videos[0].thumbnail}
    uChannel={videos[0].user.channelName}
    uImage={videos[0].user.imageRef}


      </YoutubeCard>
    </div>
  );
}

export default App;
