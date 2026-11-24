// IMPORTANT: Replace this with your WhatsApp number, including country code.
// India example: "919876543210" (no +, spaces or hyphens).
const SNACKTALE_WHATSAPP_NUMBER = "91XXXXXXXXXX";

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("snackForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const occasion = document.getElementById("occasion").value;
  const snack = document.getElementById("snack").value;
  const quantity = document.getElementById("quantity").value;
  const budget = document.getElementById("budget").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !occasion || !snack || !quantity || Number(quantity) < 10) {
    document.getElementById("formStatus").textContent =
      "Please complete the required fields. Minimum enquiry quantity is 10 packs.";
    return;
  }

  if (SNACKTALE_WHATSAPP_NUMBER.includes("X")) {
    document.getElementById("formStatus").textContent =
      "The form is working! Add your WhatsApp number in script.js to enable order enquiries.";
    return;
  }

  const text = [
    "Hello Snacktale! I'd like to enquire about a custom order.",
    "",
    `Name: ${name}`,
    `Occasion: ${occasion}`,
    `Snack preference: ${snack}`,
    `Quantity: ${quantity} packs`,
    `Budget per pack: ${budget}`,
    `Personalisation: ${message || "I'd like to discuss ideas."}`,
    "",
    "Please share the next steps and estimated pricing."
  ].join("\n");

  const url = `https://wa.me/${SNACKTALE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
