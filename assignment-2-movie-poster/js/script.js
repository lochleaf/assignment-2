                    let heartCount = 0;

                    document.getElementById("likes").addEventListener("click", function () {
                        heartCount++;
                        document.getElementById("heartCount").textContent = heartCount;
                    });

                    document.getElementById("postButton").addEventListener("click", function () {
                        let msg = document.getElementById("userMessage").value;

                        if (msg.trim() === "") {
                            alert("Please write something first!");
                            return;
                        }

                        let messageDiv = document.createElement("div");
                        messageDiv.className = "message-item";
                        messageDiv.textContent = msg;

                        document.getElementById("messageDisplay").appendChild(messageDiv);

                        document.getElementById("userMessage").value = "";

                        setTimeout(() => {
                            messageDiv.remove();
                        }, 30000);  // 60000 ms = 1 minute 30000 ms = 30 seconds
                    });
            
                const playBtn = document.getElementById("playButton");
                const playImg = document.getElementById("playImg");

                playBtn.addEventListener("mousedown", () => {
                    playImg.src = "images/play-button2.webp";  // change to pressed frame
                });

                playBtn.addEventListener("mouseup", () => {
                    playImg.src = "images/play-button.webp";   // return to normal frame

                    // OPEN POPUP WINDOW
                    window.open(
                        "popup.html",             // your popup page
                        "popupWindow",
                        "width=500,height=400"    // popup size
                    );
                });

                playBtn.addEventListener("mouseleave", () => {
                    playImg.src = "images/play-button.webp";   // reset if mouse leaves
                });