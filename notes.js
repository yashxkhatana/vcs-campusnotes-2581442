const notes = [
  { subject: "VCS", title: "Branching and merging" },
  { subject: "DSA", title: "Linked lists" },
  { subject: "Maths", title: "Probability basics" },
];

function renderNotes(list) {
  const ul = document.getElementById("notes");
  ul.innerHTML = "";
  for (const note of list) {
    const li = document.createElement("li");
    li.textContent = `${note.subject}: ${note.title}`;
    ul.appendChild(li);
  }
}

renderNotes(notes);
