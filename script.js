window.addEventListener("load", function (){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let astronautCount = 0;
            for (let i = 0; i < json.length; i++){
                document.getElementById("container").innerHTML += `
                <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in Space: ${json[i].hoursInSpace}</li>
                                <li>Active: ${json[i].active}</li>
                                <li>Skills : ${json[i].skills.join(", ")}</li>
                            </ul>
                        </div>
                        <img class="avatar" src = "${json[i].picture}">
                    </div> 
                `;
                astronautCount ++;
            };
            
        document.getElementById("container").innerHTML += `Number of Astronauts: ${astronautCount}`
        }); 
    });
});