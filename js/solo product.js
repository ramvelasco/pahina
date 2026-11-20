// ======================//
//PAH/NA solo product script
// ======================//

// store the email and get the number of amount and order in a variable //
const pahinamail = "orders@examplewebsite142.com";
const orderButton = document.querySelector(".order");
const count = document.querySelector("#count");

// function that changes the value of count // 
function change(amount) {
  let quantity = Number(count.textContent);

  quantity = quantity + amount;

// to prevent negative display // 
  if (quantity < 0) {
    quantity = 0;
  }

  count.textContent = quantity;
}

// connects the function to the amount buttons // 
document.querySelectorAll(".quantity button").forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.getAttribute("aria-label") === "Increase quantity") {
      change(1);
    } else {
      change(-1);
    }
  });
});

// function that opens the mail and has a letter storing the selected details // 
function buildMailto() {
  const color = document.querySelector('input[name="color"]:checked');
  const size = document.querySelector('input[name="size"]:checked');
  const quantity = Number(count.textContent);

  // prevents function from running when order details selected are incomplete // 
  if (!color || !size || quantity <= 0) {
    alert("To purchase," + "\r\nkindly select a color, size, and quantity.");
    return;
  }

  const product = document.querySelector("#product-name").textContent;
  const price = 499;
  const total = price * quantity;

  const subject = "Ordered a " + product;

  const body =
    "Good day!" + "\r\n" +
    "Thank you for choosing Pah/na and supporting our little brand! We're happy to be part of your story." + "\r\n\r\n" +
    "Here are your order details:" + "\r\n\r\n" +
    "ORDER DETAILS" + "\r\n" +
    "Product: " + product + "\r\n" +
    "Price: ₱" + price + "\r\n" +
    "Color: " + color.value + "\r\n" +
    "Size: " + size.value + "\r\n" +
    "Quantity: " + quantity + "\r\n" +
    "Total Price: ₱" + total + "\r\n\r\n" +
    "We hope you enjoy your purchase as much as we enjoyed creating it." + "\r\n" +
    "Every purchase helps keep women's stories going. Thank you for being part of that journey." + "\r\n\r\n" +
    "Until the next page" + "\r\n\r\n" +
    "With love," + "\r\n" +
    "Pah/na";

  // returns the email link so it can open with the email subject and content //
  return (
    "mailto:" + pahinamail +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body)
  );
}

// opens the email app when order button is clicked // 
orderButton.addEventListener("click", function () {
  const pahinamailLink = buildMailto();

  if (pahinamailLink) {
    window.location.href = pahinamailLink;
  }
});
