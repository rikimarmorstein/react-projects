import { SyntheticEvent } from "react";
import notificationService from "../../../Services/NotificationService";
import "./Recommendation.css";

function Recommendation(): JSX.Element {
  function recommend(e: SyntheticEvent) {
    // alert("Irish Cream");
    console.log(e);
    notificationService.success("Irish Cream");
  }

  return (
    <div className="Recommendation Box">
      {/*event binding*/}
      <button onClick={recommend}>Recommend</button>
    </div>
  );
}

export default Recommendation;
