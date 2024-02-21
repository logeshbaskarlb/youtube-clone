import "./SearchPage.css";
import { TuneOutlined } from "@mui/icons-material";
import ChannelRow from "./ChannelRow"
import "./SearchPage.css"
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="serachPage_filter">
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image=""
        Channel="Clever Programmer"
        verified
        subs="659K"
        noOfVideos={321}
        description="Search for anything you want to know about the world of programming and technology."
      />
      <hr />

      <VideoRow 
      views="1.3M"
      subs="321k"
      description="kskohoihishaihsvldlh"
      timestamp="56 seconds ago"
      channel="React JS"
      title="React JS course"
      image=""/>

    </div>
  );
}

export default SearchPage;
