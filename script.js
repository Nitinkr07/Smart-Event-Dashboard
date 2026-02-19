function addEvent() {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    if (title === "" || date === "") {
        alert("Please enter title and date");
        return;
    }

    const eventList = document.getElementById("eventList");


    createEventCard({ title, date, category, description });

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}

function createEventCard(event) {
    const eventList = document.getElementById("eventList");

    const div = document.createElement("div");
    div.className = "event";

    div.innerHTML = `
        <span class="close-btn" onclick="removeEvent(this)">❌</span>
        <h3>${event.title}</h3>
        <p><b>Date:</b> ${event.date}</p>
        <p><b>Category:</b> ${event.category}</p>
        <p><b>Description:</b> ${event.description || "No description"}</p>
    `;

    eventList.appendChild(div);
}

function removeEvent(el) {
    el.parentElement.remove();

    const eventList = document.getElementById("eventList");
    if (eventList.children.length === 0) {
        eventList.innerHTML =`<p class="empty">No events yet. Add your first event!</p>`;
    }
}

function addSampleEvents() {
    const samples = [
        { title: "Tech Conference", date: "2026-03-15", category: "Conference" },
        { title: "AI Workshop", date: "2026-04-10", category: "Workshop" }
    ];

    const eventList = document.getElementById("eventList");
    eventList.innerHTML = "";

    samples.forEach(e => createEventCard(e));
}
