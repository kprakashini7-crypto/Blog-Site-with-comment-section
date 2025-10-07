
document.addEventListener("DOMContentLoaded", loadComments);

document.getElementById("comment-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const comment = document.getElementById("comment").value;

  await fetch("http://localhost:5000/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, comment }),
  });

  document.getElementById("comment-form").reset();
  loadComments();
});

async function loadComments() {
  const res = await fetch("http://localhost:5000/comments");
  const data = await res.json();
  const list = document.getElementById("comment-list");
  list.innerHTML = "";
  data.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = ${c.username}: ${c.comment};
    list.appendChild(li);
  });
}
