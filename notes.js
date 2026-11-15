const notes = [
  { subject: "VCS", title: "Branching and merging" },
  { subject: "DSA", title: "Linked lists" },
  { subject: "Maths", title: "Probability basics" },
];

function renderNotes(list) {
  const ul = document.getElementById("notes");
  document.getElementById("note-count").textContent = `${list.length} notes shared`;
  ul.innerHTML = "";
  if (list.length === 0) {
    ul.innerHTML = "<li>No notes yet. Be the first to share!</li>";
    return;
  }
  for (const note of list) {
    ul.appendChild(createNoteItem(note));
  }
}

function createNoteItem(note) {
  const li = document.createElement("li");
  li.textContent = `${note.subject}: ${note.title}`;
  return li;
}

renderNotes(notes);
