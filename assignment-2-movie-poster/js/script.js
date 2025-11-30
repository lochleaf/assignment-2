                    
                    //like button heartcounter
                    let heartCount = 0;

                    //When the heart button is clicked, increase counter
                    document.getElementById("likes").addEventListener("click", function () {
                        heartCount++;
                        document.getElementById("heartCount").textContent = heartCount;
                    });

                    //post message button and display message and alert
                    document.getElementById("postButton").addEventListener("click", function () {
                        
                        //Read text from textbox
                        let msg = document.getElementById("userMessage").value;

                        //Prevent empty message and send alert
                        if (msg.trim() === "") {
                            alert("Please write something first!");
                            return;
                        }

                        //Create new message element
                        let messageDiv = document.createElement("div");
                        messageDiv.className = "message-item";
                        messageDiv.textContent = msg;

                        //Add it to the message display area
                        document.getElementById("messageDisplay").appendChild(messageDiv);

                        //Clear input box
                        document.getElementById("userMessage").value = "";

                        //remove message after 30 seconds
                        setTimeout(() => {
                            messageDiv.remove();
                        }, 30000);  // 60000 ms = 1 minute 30000 ms = 30 seconds
                    });
            
                    //play button popup trailer
                const playBtn = document.getElementById("playButton");
                const playImg = document.getElementById("playImg");

                //Change img on button press
                playBtn.addEventListener("mousedown", () => {
                    playImg.src = "images/play-button2.webp";  // change to pressed frame
                });

                //back to img and open popup window
                playBtn.addEventListener("mouseup", () => {
                    playImg.src = "images/play-button.webp";   // return to normal frame

                    //Popup window opens trailer page
                    window.open(
                        "popup.html",             
                        "popupWindow",
                        "width=500,height=400"   
                    );
                });

                //Reset img if mouse leaves button
                playBtn.addEventListener("mouseleave", () => {
                    playImg.src = "images/play-button.webp";   // reset if mouse leaves
                });