import "./YouTube.css";

function YouTube(): JSX.Element {
    return (
        <div className="YouTube">
            <p>סרטון</p>
			{/* <video controls  width="600px" height="200"> */}
                <embed src="https://www.youtube.com/watch?v=sHq8OhiIUXk" type="video/mp4" ></embed>
    {/* <source src="https://www.youtube.com/watch?v=sHq8OhiIUXk" type="video/mp4" /> */}
    {/* <img alt="Big Buck Bunny" src="http://sandbox.thewikies.com/vfe-generator/images/big-buck-bunny_poster.jpg"  */}
    {/* //    <object type="application/x-shockwave-flash" data="http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf"  */}

   הדפדפן שלך לא תומך ב-HTML 5. אנו מצטערים.
{/* //    </object> */}

{/* </video> */}
        </div>
    );
}

export default YouTube;
