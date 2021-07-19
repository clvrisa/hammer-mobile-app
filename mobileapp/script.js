'use strict';

// define react page component using pure js function
function ProjectList(props) {
  // inside the function code to do all sorts of logical steps

  // return output for the component 
  return <div className="holder">
    <h1>{props.message1}</h1>
    <h2>{props.message2}</h2>
    <ol>
      {
        // use map() method to loop array of data
        props.list.map(
          (item,index) => (
            <li key={index}>
              <strong>{item.title}</strong><br /> <em>{item.description}</em>
              <br />
              <img src={item.imagepath} alt={item.title} width="480" height="300" /><br /><br />
            </li>
          )
        )
      }
    </ol>
  </div>;
}

// load data from external json file using jQuery
jQuery.getJSON(
  'https://cs50c-week17-server-side-clarisaz.srjcethanwilde.repl.co/projects',
  function(jsonFromJquery){
  // render component to page
  ReactDOM.render(
    <ProjectList list={jsonFromJquery} message1="Clarisa's Mobile App" message2="Spring '21 Project List!" />,
    document.getElementById('myApp')
  );

  // use hammer.js to detect horix swipe gesture
  const mc = new Hammer( document.getElementById('myApp') );
    mc.get("swipe").set( { direction: Hammer.DIRECTION_HORIZONTAL } );
    mc.on(
      "swipe",
      function(ev) {
        console.log(ev.direction);
        if (ev.direction == 2) {
          jQuery('.holder ol').css('left','+=300px');
        } else if (ev.direction == 4) {
          jQuery('.holder ol').css('left','-=300px');
        }
      }

    );

  }
);