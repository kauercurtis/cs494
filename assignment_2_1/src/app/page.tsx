import css from "./page.module.css"

export default function Home() {
  return (
    <main className= {css.mainClass}>
      <div className= {css.divClass}>
        <h1>Welcome!</h1>
        <p>Hello, my name is Curtis Kauer. I am a student at Oregon State University.</p>
      </div>
      <div className= {css.divClass}>
        <h3 className= {css.h3Class}>How to Get Out of Bed</h3>
        <ol>
          <li>Stare At Ceiling</li>
          <li>Snooze Alarm</li>
          <li>Attempt to get out of Bed</li>
          <li>Repeat Step 1</li>
          <li>Get up</li>
        </ol>
      </div>
      <div className= {css.divClass}>
        <h3 className= {css.h3Class}>Weekly Class Schedule</h3>
        <table className= {css.mytable}>
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>8:00 AM - 10:00 AM</td>
                <td>Intro to AI</td>
                <td></td>
                <td>Intro to AI</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>10:00 AM - 12:00 PM</td>
                <td>Operating Systems 2</td>
                <td></td>
                <td>Operating Systems 2</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>12:00 PM - 2:00 PM</td>
                <td></td>
                <td>Parallel Programming</td>
                <td></td>
                <td>Parallel Programming</td>
                <td></td>
              </tr>
              <tr>
                <td>2:00 PM - 4:00 PM</td>
                <td>Advanced Web Dev</td>
                <td></td>
                <td>Advanced Web Dev</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4:00 PM - 6:00 PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
          </tbody>
        </table>
      </div>
      <div>
        <img src="https://static01.nyt.com/images/2016/08/05/us/05onfire1_xp/05onfire1_xp-superJumbo-v2.jpg"></img>
      </div>
      <div className= {css.ball} ></div>
    </main>
  );
}
